// src/pages/404.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push('/');
    }, 5000);

    // 清除定时器以防止内存泄漏
    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-lg mb-2">Sorry, the page you are looking for does not exist.</p>
        <p className="text-sm">Redirecting to the home page in 5 seconds...</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
