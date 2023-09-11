import Window from './Window';

const MonthlyHeader = ({ title }: { title: string }) => {
  return (
    <Window English='Title' Japanese='' width='w-96' height='h-52'>
      <span className='text-2xl'>{title}</span>
    </Window>
  );
};

export default MonthlyHeader;
