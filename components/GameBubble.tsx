import { GameBubbleProps } from '@/lib/types';
import { formatJapaneseDate } from '@/lib/utils';

function GameBubble(props: GameBubbleProps) {
  return (
    <div className='bg-slate-100 rounded-md w-fit h-24 text-sm p-2 text-start flex flex-col gap-2'>
      <span className='text-sm'>{props.title}</span>
      <span className='text-xs'>
        - {props.media} on {formatJapaneseDate(props.date)}
      </span>
    </div>
  );
}

export default GameBubble;
