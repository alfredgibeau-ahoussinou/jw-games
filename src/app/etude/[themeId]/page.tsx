import { notFound } from "next/navigation";
import { StudyThemeContent } from "@/components/study/StudyThemeContent";
import { getStudyTheme, getStudyThemeIds } from "@/data/study-themes";

export function generateStaticParams() {
  return getStudyThemeIds().map((themeId) => ({ themeId }));
}

export default async function StudyThemePage({
  params,
}: {
  params: Promise<{ themeId: string }>;
}) {
  const { themeId } = await params;
  const theme = getStudyTheme(themeId);
  if (!theme) notFound();

  return <StudyThemeContent theme={theme} />;
}
