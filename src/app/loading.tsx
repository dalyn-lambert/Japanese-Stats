import Window from '@/components/Window';

export default function Loading() {
  return (
    <div className='flex flex-row flex-wrap gap-2 p-2'>
      <div className='grid grid-cols-2 gap-2'>
        <Window English='' Japanese='' width='w-64' height='h-64'>
          Loading...
        </Window>
        <Window English='' Japanese='' width='w-64' height='h-64'>
          Loading...
        </Window>
        <Window English='' Japanese='' width='w-64' height='h-64'>
          Loading...
        </Window>
        <Window English='' Japanese='' width='w-64' height='h-64'>
          Loading...
        </Window>
      </div>
      <Window English='' Japanese='' width='w-96' height='h-72'>
        Loading...
      </Window>
      <Window English='' Japanese='' width='w-[50rem]' height='h-[25rem]'>
        Loading...
      </Window>
    </div>
  );
}
