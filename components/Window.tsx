import { WindowProps } from '@/lib/types';
import WindowTitle from './WindowTitle';

function Window(props: WindowProps) {
  return (
    <div
      className={`${props.width} ${props.height} group drop-shadow-lg bg-base-gray border-2 border-dark-gray shadow-dark-gray p-2 rounded-sm flex flex-col gap-2`}
    >
      <WindowTitle English={props.English} Japanese={props.Japanese} />

      {props.children}
    </div>
  );
}

export default Window;
