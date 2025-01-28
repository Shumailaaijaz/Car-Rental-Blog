import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface BlogPost {
  title: string;
  content: string;
}

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      fetch(`/api/blog/${slug}`)
        .then((response) => response.json())
        .then((data: BlogPost) => setPost(data))
        .catch((error) => console.error('Error fetching blog post:', error));
    }
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;