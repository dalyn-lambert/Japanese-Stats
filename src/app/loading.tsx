import Window from '@/components/Window';

export default function Loading() {
  return (
    <div className='flex flex-cols-2 gap-2 p-2'>
      <div className='grid grid-cols-2 gap-2 content-center'>
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
      <div className='grid grid-cols-1 gap-2 justify-items-center content-center'>
        <Window English='' Japanese='' width='w-96' height='h-72'>
          Loading...
        </Window>
        <Window English='' Japanese='' width='w-[50rem]' height='h-[25rem]'>
          Loading...
        </Window>
      </div>
    </div>
  );
}
