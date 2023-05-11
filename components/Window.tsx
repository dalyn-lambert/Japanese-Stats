import { WindowProps } from '@/lib/types';
import WindowTitle from './WindowTitle';

function Window(props: WindowProps) {
  return (
    <div className='group drop-shadow-lg shadow-cyan-200 bg-windows-gray p-2 rounded-sm flex flex-col gap-2'>
      <WindowTitle English={props.English} Japanese={props.Japanese} />
      <div className='bg-slate-100 border-[1px] border-slate-600 rounded-sm p-4 overflow-y-scroll'>
        {props.children}
      </div>
    </div>
  );
}

export default Window;
