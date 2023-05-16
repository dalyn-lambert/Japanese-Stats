import { WindowTitleProps } from '@/lib/types';

function WindowTitle(props: WindowTitleProps) {
  return (
    <div className='h-[25px] text-white bg-gradient-to-r from-gradient-1 to-gradient-2 shrink-0 rounded-sm px-2 flex flex-row justify-between '>
      <div>
        <span className='group-hover:opacity-0 absolute'>{props.Japanese}</span>
        <span className='opacity-0 group-hover:opacity-100 absolute'>{props.English}</span>
      </div>
      <div className='flex flex-row gap-1 pt-[5px]'>
        <div className='w-[15px] h-[15px] bg-base-gray rounded-sm border-[1px] border-dark-gray shadow-inner shadow-white'></div>
        <div className='w-[15px] h-[15px] bg-base-gray rounded-sm border-[1px] border-dark-gray shadow-inner shadow-white'></div>
        <div className='w-[15px] h-[15px] bg-base-gray rounded-sm border-[1px] border-dark-gray shadow-inner shadow-white'></div>
      </div>
    </div>
  );
}

export default WindowTitle;
