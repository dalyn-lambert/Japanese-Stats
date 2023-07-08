import Window from './Window';

const MonthlyHeader = ({ title }: { title: string }) => {
  return (
    <Window English='Title' Japanese='' width='w-96' height='h-72'>
      {title}
    </Window>
  );
};

export default MonthlyHeader;
