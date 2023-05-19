import { WindowProps } from '@/lib/types';
import WindowTitle from './WindowTitle';

function Window(props: WindowProps) {
  return (
    <div
      className={`${props.width} ${props.height} group drop-shadow-lg bg-base-gray p-2 rounded-sm flex flex-col gap-2 border-2 border-dark-gray shadow-inner shadow-white`}
    >
      <WindowTitle English={props.English} Japanese={props.Japanese} />

      {props.children}
    </div>
  );
}

export default Window;
