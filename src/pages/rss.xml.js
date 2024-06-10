import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Nikita Enduraev | Blog",
    description:
      "I write about IT, finance, sports and everything that interests me",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>ru-ru</language>`,
  });
}
