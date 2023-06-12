import PostHeader from '@/components/PostHeader';
import Window from '@/components/Window';
import { getProgressReports } from '@/lib/notion';
import Link from 'next/link';

const getData = async () => {
  const data = await getProgressReports();
  return data;
};

export default async function Posts() {
  const posts = await getData();
  return (
    <div className='flex flex-row gap-2'>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div>
            <Window English='Blog' Japanese='ブログ' width='w-72' height='h-72'>
              {/* @ts-expect-error Server Component */}
              <PostHeader key={post.id} {...post} />
            </Window>
          </div>
        </Link>
      ))}
    </div>
  );
}
