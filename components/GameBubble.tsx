import { GameBubbleProps } from '@/lib/types';
import { format, parseISO } from 'date-fns';
import ja from 'date-fns/locale/ja';

function GameBubble(props: GameBubbleProps) {
  return (
    <div className='bg-slate-100 rounded-md w-[212px] h-24 text-sm p-2 text-start flex flex-col gap-2'>
      <span className='text-sm'>{props.title}</span>
      <span className='text-xs'>
        - {props.media} on {format(parseISO(props.date), 'MMM do', { locale: ja })}
      </span>
    </div>
  );
}

export default GameBubble;
