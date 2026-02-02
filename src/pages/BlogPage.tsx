import { useEffect, useState } from 'react';
import Container from '../components/layout/Container';
import BlogCard from '../components/blog/BlogCard';
import { getAllBlogPosts } from '../lib/blogLoader';
import type { BlogPost } from '../types/blog';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await getAllBlogPosts();
        setPosts(allPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Container>
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-700">
            Thoughts, tutorials, and insights about web development and technology.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                tags={post.tags}
                date={post.date}
                author={post.author}
                thumbnail={post.thumbnail}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
