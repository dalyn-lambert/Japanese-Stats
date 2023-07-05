import PostHeader from '@/components/PostHeader';
import Window from '@/components/Window';
import { getAllProgressReports } from '@/lib/notion';
import Link from 'next/link';

const getData = async () => {
  const data = await getAllProgressReports();
  return data;
};

export default async function Posts() {
  const posts = await getData();
  return (
    <div className='flex flex-row flex-wrap gap-4 pt-2 justify-center'>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div>
            <Window English='Blog' Japanese='ブログ' width='w-96' height='h-52'>
              {/* @ts-expect-error Server Component */}
              <PostHeader key={post.id} {...post} />
            </Window>
          </div>
        </Link>
      ))}
    </div>
  );
}
