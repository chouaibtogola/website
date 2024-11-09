import { motion } from 'framer-motion';
import BlogPost from '../components/BlogPost';

export default function Blog() {
  const blogPosts = [
    {
      title: "Common Web Application Vulnerabilities",
      description: "An in-depth look at OWASP Top 10 and how to prevent security breaches",
      content: "...",
      author: "Chouaib Youssouf Togola",
      date: "2024-03-20",
      tags: ["OWASP", "Web Security", "Penetration Testing"]
    },
    {
      title: "Social Engineering: The Human Element of Cybersecurity",
      description: "Understanding and preventing social engineering attacks",
      content: "...",
      author: "Chouaib Youssouf Togola",
      date: "2024-03-18",
      tags: ["Social Engineering", "Security Awareness", "Phishing"]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Security Insights</h1>
        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
} 