import Window from './Window';

const ListeningTime = async () => {
  return (
    <Window English='Listening' Japanese='聴く' width='w-72' height='h-96'>
      <div className=' bg-opacity-70 overflow-y-scroll flex flex-col gap-2 p-2 border-2 shadow-inner shadow-white border-dark-gray'>
        Listening Time
      </div>
    </Window>
  );
};

export default ListeningTime;
