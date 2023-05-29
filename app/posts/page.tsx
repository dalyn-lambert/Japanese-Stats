import Window from '@/components/Window';
import { getProgressReports } from '@/lib/notion';

const getData = async () => {
  const data = await getProgressReports();
  return data;
};

export default async function Posts() {
  const posts = await getData();
  return (
    <div className='flex flex-row gap-2'>
      {posts.map((post) => (
        <div key={post.id}>
          <Window English='Blog' Japanese='ブログ' width='w-72' height='h-36'>
            {post.name}
          </Window>
        </div>
      ))}
    </div>
  );
}
