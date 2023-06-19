import Window from '@/components/Window';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex flex-row flex-wrap gap-2 p-2 justify-center'>
      <Window English='Date' Japanese='日付' width={'w-[32rem]'} height='h-72'></Window>
      <Window English="Today's Studies" Japanese='今日の勉強' width='w-96' height='h-72'></Window>
      <Window English='Study Time by Month' Japanese='月の勉強' width='w-[32rem]' height='h-52'></Window>
      <Window English='Study Time by Year' Japanese='年の勉強' width='w-96' height='h-96'></Window>
      <Window English='Last Studied' Japanese='前回の学習' width='w-[45rem]' height='h-[25rem]'></Window>
      <Window English='Game Log' Japanese='ゲームログ' width='w-72' height='h-96'></Window>
    </div>
  );
}
