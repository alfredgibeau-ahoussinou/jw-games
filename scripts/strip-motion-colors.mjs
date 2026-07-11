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

const MOTION_TAGS = [
  "div",
  "button",
  "span",
  "li",
  "ul",
  "aside",
  "section",
  "p",
  "a",
  "article",
  "header",
  "footer",
  "nav",
  "main",
  "form",
  "label",
  "h1",
  "h2",
  "h3",
];

function stripMotion(source) {
  for (const tag of MOTION_TAGS) {
    source = source.replaceAll(`motion.${tag}`, tag);
  }
  source = source.replace(/<AnimatePresence[^>]*>/g, "<>");
  source = source.replace(/<\/AnimatePresence>/g, "</>");
  source = source.replace(
    /import \{([^}]+)\} from "framer-motion";/g,
    (match, imports) => {
      const kept = imports
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s && s !== "motion" && s !== "AnimatePresence" && !s.startsWith("motion "));
      if (kept.length === 0) return "";
      return `import { ${kept.join(", ")} } from "framer-motion";`;
    }
  );
  source = source.replace(/\nimport \{ \} from "framer-motion";\n/g, "\n");
  return source;
}

function stripSvgColors(source) {
  source = source.replace(/\sstroke="var\([^"]+\)"/g, "");
  source = source.replace(/\sfill="var\([^"]+\)"/g, "");
  source = source.replace(/\sstroke=\{[^}]+\}/g, "");
  source = source.replace(/\sfill="#[^"]+"/g, "");
  source = source.replace(/\sopacity="[^"]+"/g, "");
  return source;
}

function stripGradients(source) {
  source = source.replace(/^const [A-Z_]+MASK[\s\S]*?;\n\n/gm, "");
  source = source.replace(/gradient: "[^"]+",?\n/g, "");
  source = source.replace(/const accents = \{[\s\S]*?\};\n\n/g, "");
  return source;
}

for (const file of walk(ROOT)) {
  let source = fs.readFileSync(file, "utf8");
  source = stripMotion(source);
  source = stripSvgColors(source);
  if (file.includes("QuickAction") || file.includes("IosInstallSheet")) {
    source = stripGradients(source);
  }
  fs.writeFileSync(file, source);
}

console.log("Motion and color cleanup done");
