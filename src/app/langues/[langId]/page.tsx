import { notFound } from "next/navigation";
import { LanguageDetailContent } from "@/components/language/LanguageDetailContent";
import { getLanguage, PREACH_LANGUAGES } from "@/data/languages";

export function generateStaticParams() {
  return PREACH_LANGUAGES.map((l) => ({ langId: l.id }));
}

export default async function LangueDetailPage({
  params,
}: {
  params: Promise<{ langId: string }>;
}) {
  const { langId } = await params;
  const language = getLanguage(langId);

  if (!language) notFound();

  return <LanguageDetailContent language={language} />;
}
