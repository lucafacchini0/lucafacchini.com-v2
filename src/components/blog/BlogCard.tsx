import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  author: string;
  thumbnail?: string;
}

export default function BlogCard({
  slug,
  title,
  description,
  tags,
  date,
  author,
  thumbnail,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link to={`/blog/${slug}`}>
      <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Thumbnail */}
        {thumbnail ? (
          <div className="h-48 bg-gray-100">
            <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            <p className="text-blue-600 font-semibold text-lg px-4 text-center line-clamp-2">
              {title}
            </p>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{author}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
