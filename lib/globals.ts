import { format, subDays } from 'date-fns';
import { ja } from 'date-fns/locale';

const date = new Date();
// year, month index, day
// const date = new Date(2023, 2, 6);

export const TODAY = format(date, 'yyyy-MM-dd');
export const TODAY_JAPANESE = format(date, 'EE do', { locale: ja });
export const LAST_YEAR = format(subDays(date, 365), 'yyyy-MM-dd');
