import { StudyCategory } from '@/lib/types';
import { format, formatDistance, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';
import { Bookmark, Edit2, Headphones, MessageCircle, Play, Tv } from 'react-feather';

export function getIconForCategory(category: StudyCategory) {
  switch (category) {
    case '話す':
      return <MessageCircle width={18} height={18} />;
    case '聴く':
      return <Headphones width={18} height={18} />;
    case 'ゲーム':
      return <Play width={18} height={18} />;
    case '観る':
      return <Tv width={18} height={18} />;
    case '読書':
      return <Bookmark width={18} height={18} />;
    case '書く':
      return <Edit2 width={18} height={18} />;
    default:
      return '•';
  }
}

export function getColorForCategory(category: StudyCategory) {
  switch (category) {
    case '話す':
      return 'speak-blue';
    case '聴く':
      return 'listen-purple';
    case 'ゲーム':
      return 'game-green';
    case '観る':
      return 'watch-orange';
    case '読書':
      return 'read-pink';
    default:
      return 'red-500';
  }
}

export function getBarTypeForLastStudied(date: string) {
  const elapsedTime = formatDistance(parseISO(date), new Date());
  const splitTime = elapsedTime.split(' ');
  const days = Number(splitTime[0]);
  if (days > 7) {
    return 'border';
  } else {
    return 'bg';
  }
}

export function getTimeSinceStudied(date: string) {
  const time = formatDistance(parseISO(date), new Date(), { addSuffix: true });
  if (time.includes('hours')) {
    return 'Today';
  } else return time;
}

export function toHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours} hours and ${minutes} minutes`;
}

export function formatJapaneseDate(date: string) {
  return format(parseISO(date), 'MMM do', { locale: ja });
}
