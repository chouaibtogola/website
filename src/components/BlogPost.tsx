interface BlogPostProps {
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
}

export default function BlogPost({ title, description, content, author, date, tags }: BlogPostProps) {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{title}</h1>
      <div className="text-gray-600">
        <time>{date}</time> • <span>{author}</span>
      </div>
      <p className="lead">{description}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div className="flex gap-2 mt-4">
        {tags.map(tag => (
          <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
} 