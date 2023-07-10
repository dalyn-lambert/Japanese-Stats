import { StudyCategory } from '@/lib/types';
import { getColorForCategory, getIconForCategory } from '@/lib/utils';

const MonthlyCalendarIcon = ({
  category,
  categoriesForDay,
}: {
  category: StudyCategory;
  categoriesForDay: StudyCategory[];
}) => {
  let iconFill = 'fill-mid-gray';
  if (categoriesForDay.includes(category)) {
    iconFill = `fill-${getColorForCategory(category)}`;
  }
  return <div className={iconFill}>{getIconForCategory(category)}</div>;
};

export default MonthlyCalendarIcon;
