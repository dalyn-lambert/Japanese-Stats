import Window from './Window';

const MonthlySummary = ({ summary }: { summary: string }) => {
  return (
    <Window English='Summary' Japanese='' width='w-96' height='h-72'>
      {summary}
    </Window>
  );
};

export default MonthlySummary;
