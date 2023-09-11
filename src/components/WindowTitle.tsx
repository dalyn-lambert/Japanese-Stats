import { WindowTitleProps } from '@/lib/types';

function WindowTitle(props: WindowTitleProps) {
  return (
    <div className='h-7 flex flex-row justify-between shrink-0 rounded-sm px-2  text-white bg-gradient-to-r from-gradient-1 to-gradient-2 border-2 border-dark-gray shadow-inner shadow-white'>
      <div>
        <span className='group-hover:opacity-0 absolute'>{props.Japanese}</span>
        <span className='opacity-0 group-hover:opacity-100 absolute'>{props.English}</span>
      </div>
      <div className='flex flex-row gap-1 pt-[6px]'>
        <div className='w-3.5 h-3.5 bg-base-gray rounded-sm border-2 border-dark-gray shadow-inner shadow-white'></div>
        <div className='w-3.5 h-3.5 bg-base-gray rounded-sm border-2 border-dark-gray shadow-inner shadow-white'></div>
        <div className='w-3.5 h-3.5 bg-base-gray rounded-sm border-2 border-dark-gray shadow-inner shadow-white'></div>
      </div>
    </div>
  );
}

export default WindowTitle;
