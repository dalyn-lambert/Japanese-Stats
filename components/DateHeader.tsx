import { format } from "date-fns";

const DateHeader = async () => {
  const today = format(new Date(), 'MM/dd/yyyy');
  return (
    <div className='group drop-shadow-lg shadow-cyan-200'>
      <div className='bg-dk w-[200px] h-[25px] rounded-t-sm pl-2'>
        <span className='group-hover:opacity-0 absolute'>今日</span>
        <span className='opacity-0 group-hover:opacity-100 absolute'>Today</span>
      </div>
      <div className='bg-lt w-[200px] h-[75px] rounded-b-sm text-4xl'>
        <div className='text-center pt-2'>木 3月4日</div>
      </div>
    </div>
  );
};

export default DateHeader;
