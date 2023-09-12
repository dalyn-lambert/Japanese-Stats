import { StudyActivity, StudyCategory } from '@/lib/types';
import { format, formatDistance, intervalToDuration, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';
import { bookmarkIcon, gameIcon, headphonesIcon, speechIcon, watchIcon } from './icons';

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

export function getColorForChart(category: StudyCategory) {
  switch (category) {
    case '話す':
      return 'rgb(36, 123, 160)';
    case '聴く':
      return 'rgb(82, 72, 156)';
    case 'ゲーム':
      return 'rgb(117, 142, 79)';
    case '観る':
      return 'rgb(241, 154, 62)';
    case '読書':
      return 'rgb(206, 109, 139)';
    default:
      return 'red-500';
  }
}

export function getClassForLastStudied(date: string) {
  // edited type for Duration from intervalToDuration function
  // to say that all values will be defined
  const elapsedTime = intervalToDuration({ start: parseISO(date), end: new Date() });
  if (elapsedTime.months !== 0) {
    return 'border';
  }
  // Type error: 'elapsedTime.days' is possibly 'undefined' during Vercel build
  else if (elapsedTime?.days > 7) {
    return 'border';
  } else return 'bg';
}

export function getBorderForActivity(date: string, category: StudyCategory) {
  const elapsedTime = intervalToDuration({ start: parseISO(date), end: new Date() });
  if (elapsedTime.months > 0) {
    return `border-4 border-${getColorForCategory(category)}`;
  } else if (elapsedTime.days >= 21) {
    return `border-8 border-${getColorForCategory(category)}`;
  } else if (elapsedTime.days >= 14) {
    return `border-[12px] border-${getColorForCategory(category)}`;
  } else if (elapsedTime.days >= 7) {
    return `border-[16px] border-${getColorForCategory(category)}`;
  }
  return 'border-0';
}

export function getBackgroundForActivity(category: StudyCategory) {
  return `bg-${getColorForCategory(category)}`;
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
    if (minutes > 0) {
      return `${hours} ${hours === 1 ? 'hr' : 'hrs'} ${minutes} mins`;
    } else return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
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

export function getTimeForCategory(category: StudyCategory, logs: StudyActivity[]) {
  if (!logs) {
    return 0;
  } else {
    const filteredArray = logs.filter((log) => log.category === category);
    const time = sumArray(filteredArray.map((activity) => activity.time));
    return time;
  }
}
