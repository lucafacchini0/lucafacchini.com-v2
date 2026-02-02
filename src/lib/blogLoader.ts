import type { BlogPost, BlogMetadata } from '../types/blog';

// Use Vite's glob import to load all markdown files
const markdownFiles = import.meta.glob<string>('/public/blog/**/*.md', {
  query: '?raw',
  import: 'default',
});

// Extract metadata from markdown frontmatter
function parseMarkdownMetadata(content: string): BlogMetadata {
  const metadataRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(metadataRegex);

  if (!match) {
    throw new Error('No metadata found in markdown file');
  }

  const metadataString = match[1];
  const metadata: Partial<BlogMetadata> = {};

  metadataString.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim();

    if (key && value) {
      const trimmedKey = key.trim() as keyof BlogMetadata;
      if (trimmedKey === 'tags') {
        metadata[trimmedKey] = value.split(',').map(tag => tag.trim());
      } else {
        metadata[trimmedKey] = value as any;
      }
    }
  });

  return metadata as BlogMetadata;
}

// Extract content without frontmatter
function extractContent(markdown: string): string {
  const metadataRegex = /^---\n[\s\S]*?\n---\n*/;
  return markdown.replace(metadataRegex, '');
}

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  for (const path in markdownFiles) {
    const loader = markdownFiles[path];
    const content = await loader();

    // Extract slug from path: /public/blog/my-post/my-post.md -> my-post
    const pathParts = path.split('/');
    const slug = pathParts[pathParts.length - 2];

    try {
      const metadata = parseMarkdownMetadata(content);
      const postContent = extractContent(content);

      posts.push({
        slug,
        title: metadata.title,
        description: metadata.description,
        tags: metadata.tags,
        date: metadata.date,
        author: metadata.author,
        content: postContent,
        thumbnail: `/blog/${slug}/thumb.png`,
      });
    } catch (error) {
      console.error(`Error parsing blog post ${slug}:`, error);
    }
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}
