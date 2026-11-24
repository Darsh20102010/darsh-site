import { getCollection } from 'astro:content';

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  // newest first: by date when set, otherwise by blog number
  const key = (p: (typeof posts)[number]) => p.data.date ? p.data.date.valueOf() : (p.data.number ?? 0);
  return posts.sort((a, b) => key(b) - key(a));
}
export async function getProjects() {
  return (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
}
export async function getResearch() {
  return (await getCollection('research')).sort((a, b) => a.data.order - b.data.order);
}
