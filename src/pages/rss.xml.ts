import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const writing = await getCollection('writing', ({ data }) => !data.draft);
  const sorted = writing.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );

  return rss({
    title: 'codewizwit',
    description:
      'Dispatches, Field Notes, and reflections on responsible AI, developer experience, and human-centered technology. By Alexandra Kelstrom.',
    site: context.site!,
    items: sorted.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishDate,
      link: `/writing/${article.id}/`,
      categories: article.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
