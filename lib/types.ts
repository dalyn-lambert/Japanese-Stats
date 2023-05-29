import { ReactNode } from 'react';

export type StudyCategory = '話す' | '聴く' | '読書' | 'ゲーム' | '観る' | '書く';

export type StudyActivity = {
  id: string;
  title: string;
  media: string;
  category: StudyCategory;
  time: number;
  date: string;
};

export type MonthlyStats = {
  id: string;
  month: string;
  listening: number;
  reading: number;
  speaking: number;
  games: number;
  watching: number;
};

export type ProgressReport = {
  id: string;
  name: string;
  type: string;
  month: string;
  status: string;
};

export type WindowTitleProps = { English: string; Japanese: string };

export type WindowProps = { children?: ReactNode; width: string; height: string } & WindowTitleProps;

export type GameBubbleProps = StudyActivity;

export type CalendarColumnProps = { dateEng: string; dateJP: string };

export type CalendarBubbleProps = { date: string; category: StudyCategory };
