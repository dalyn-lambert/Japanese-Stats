import { StudyCategory } from '@/lib/types';
import { Bookmark, Headphones, MessageCircle, Play, Tv } from 'react-feather';

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
    default:
      return '•';
  }
}

export function toHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours} hours and ${minutes} minutes`;
}
