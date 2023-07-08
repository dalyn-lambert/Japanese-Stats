import Window from './Window';

const MonthlySummary = async ({ summary }: { summary: string }) => {
  return (
    <Window English='Wins' Japanese='' width='w-96' height='h-72'>
      {summary}
    </Window>
  );
};

export default MonthlySummary;
