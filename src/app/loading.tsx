import Window from '@/components/Window';

export default function Loading() {
  return (
    <div className='flex flex-row flex-wrap gap-2 pt-2'>
      <Window English='' Japanese='' width='w-60' height='h-60'>
        Loading...
      </Window>
      <Window English="Today's Studies" Japanese='今日の勉強' width='w-96' height='h-72'>
        Loading...
      </Window>
      <Window English='' Japanese='' width='w-[50rem]' height='h-[25rem]'>
        Loading...
      </Window>
    </div>
  );
}
