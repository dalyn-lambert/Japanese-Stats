import { format, subDays } from 'date-fns';
import { ja } from 'date-fns/locale';

const date = new Date();
// year, month index, day
// const date = new Date(2023, 2, 6);

// for database queries
export const TODAY_DB = format(date, 'yyyy-MM-dd');

// for rendering dates
export const TODAY_JP = format(date, 'EE MMM do', { locale: ja });
export const YESTERDAY_JP = format(subDays(date, 1), 'EE MMM do', { locale: ja });
export const DAY_BEFORE_YESTERDAY_JP = format(subDays(date, 2), 'EE MMM do', { locale: ja });
