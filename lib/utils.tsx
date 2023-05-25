import { StudyCategory } from '@/lib/types';
import { format, formatDistance, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';
import { bookmarkIcon, gameIcon, headphonesIcon, pencilIcon, speechIcon, watchIcon } from './icons';

export function getIconForCategory(category: StudyCategory) {
  switch (category) {
    case '話す':
      return speechIcon;
    case '聴く':
      return headphonesIcon;
    case 'ゲーム':
      return gameIcon;
    case '観る':
      return watchIcon;
    case '読書':
      return bookmarkIcon;
    case '書く':
      return pencilIcon;
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
    case '書く':
      return 'listen-yellow';
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

export function getBarWidth(date: string) {
  const elapsedTime = formatDistance(parseISO(date), new Date());
  const splitTime = elapsedTime.split(' ');
  const days = Number(splitTime[0]);
  // studied in the last week = solid bar
  // > 7 days
  // > 14
  // > 21
  // > 28

  if (days >= 28) {
    return '[4px]';
  } else if (days >= 21) {
    return '[8px]';
  } else if (days >= 14) {
    return '[12px]';
  } else if (days >= 7) {
    return '[16px]';
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
  if (hours > 0) {
    return `${hours} hrs ${minutes} mins`;
  }
  return `${minutes} mins`;
}

export function formatJapaneseDate(date: string) {
  return format(parseISO(date), 'MMM do', { locale: ja });
}

export function sumArray(array: number[]) {
  let sum = array.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
  }, 0);
  return sum;
}
