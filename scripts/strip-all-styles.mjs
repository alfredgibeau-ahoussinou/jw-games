import fs from "fs";
import path from "path";

const ROOT = path.resolve("src");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".tsx")) files.push(full);
  }
  return files;
}

function stripJsxProp(source, propName) {
  let out = "";
  let i = 0;
  const needle = propName + "=";

  while (i < source.length) {
    const idx = source.indexOf(needle, i);
    if (idx === -1) {
      out += source.slice(i);
      break;
    }

    let start = idx;
    while (start > i && /\s/.test(source[start - 1])) start--;

    out += source.slice(i, start);
    let j = idx + needle.length;

    if (source[j] === '"') {
      j = source.indexOf('"', j + 1);
      if (j === -1) break;
      j += 1;
    } else if (source[j] === "'") {
      j = source.indexOf("'", j + 1);
      if (j === -1) break;
      j += 1;
    } else if (source[j] === "{") {
      let depth = 1;
      j += 1;
      while (j < source.length && depth > 0) {
        const ch = source[j];
        if (ch === "{") depth += 1;
        else if (ch === "}") depth -= 1;
        j += 1;
      }
    } else {
      out += source.slice(start, j);
      i = j;
      continue;
    }

    i = j;
  }

  return out;
}

const MOTION_PROPS = [
  "initial",
  "animate",
  "exit",
  "transition",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileInView",
  "variants",
  "layoutId",
  "layout",
  "drag",
  "dragConstraints",
];

function cleanupImports(source) {
  source = source.replace(/\nimport \{ cn \} from "@\/lib\/cn";\n/g, "\n");
  source = source.replace(/,\s*cn\s*(?=,|\})/g, "");
  source = source.replace(/\{\s*cn\s*,/g, "{");
  source = source.replace(/import \{ cn \} from '@\/lib\/cn';\n/g, "\n");
  return source;
}

function stripFile(filePath) {
  let source = fs.readFileSync(filePath, "utf8");
  source = stripJsxProp(source, "className");
  source = stripJsxProp(source, "style");
  for (const prop of MOTION_PROPS) {
    source = stripJsxProp(source, prop);
  }
  source = cleanupImports(source);
  fs.writeFileSync(filePath, source);
}

for (const file of walk(ROOT)) {
  stripFile(file);
}

fs.writeFileSync(path.resolve("src/app/globals.css"), "/* styles removed */\n");
console.log("Stripped styling from", walk(ROOT).length, "TSX files");
