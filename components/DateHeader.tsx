const DateHeader = async () => {
  // {format(new Date(), 'MM/dd/yyyy')}
  const today = '2023-05-03';
  return (
    <div className=''>
      <div className='bg-green-400 w-[200px] h-[25px] rounded-t-md pl-4'>Today</div>
      <div className='bg-green-200 w-[200px] h-[75px] rounded-b-md text-4xl'>
        <div className='text-center pt-2'>木 3月4日</div>
      </div>
    </div>
  );
};

export default DateHeader;
