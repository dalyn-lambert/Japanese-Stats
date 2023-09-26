import Window from '@/components/Window';

export default function Loading() {
  return (
    <div className='flex flex-row flex-wrap gap-2 p-2'>
      <Window English='' Japanese='' width='w-[32rem]' height='h-[20.25rem]'>
        Loading...
      </Window>
      <Window English='' Japanese='' width='w-60' height='h-60'>
        Loading...
      </Window>
      <Window English='' Japanese='' width='w-96' height='h-72'>
        Loading...
      </Window>
      <Window English='' Japanese='' width='w-[50rem]' height='h-[25rem]'>
        Loading...
      </Window>
      <Window English='' Japanese='' width='w-64' height='h-64'>
        Loading...
      </Window>
      <Window English='' Japanese='' width='w-64' height='h-64'>
        Loading...
      </Window>
    </div>
  );
}
