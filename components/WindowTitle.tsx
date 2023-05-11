import { WindowTitleProps } from '@/lib/types';

function WindowTitle(props: WindowTitleProps) {
  return (
    <div className='h-[25px] bg-dk rounded-sm px-2 flex flex-row justify-between'>
      <div>
        <span className='group-hover:opacity-0 absolute'>{props.Japanese}</span>
        <span className='opacity-0 group-hover:opacity-100 absolute'>{props.English}</span>
      </div>
      <div className='pt-[5px] flex flex-row gap-1'>
        <div className='w-[15px] h-[15px] bg-windows-gray rounded-sm border-[1px] border-slate-600'></div>
        <div className='w-[15px] h-[15px] bg-windows-gray rounded-sm border-[1px] border-slate-600'></div>
        <div className='w-[15px] h-[15px] bg-windows-gray rounded-sm border-[1px] border-slate-600'></div>
      </div>
    </div>
  );
}

export default WindowTitle;
