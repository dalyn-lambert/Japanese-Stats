import { ReactNode } from 'react';

export type StudyCategory = '話す' | '聴く' | '読書' | 'ゲーム' | '観る';

export type StudyActivity = {
  id: string;
  title: string;
  media: string;
  category: StudyCategory;
  time: number;
  date: string;
};

export type StudyStat = { category: StudyCategory; time: number };

export type MonthlyStats = {
  id: string;
  month: string;
  stats: StudyStat[];
};

export type MonthIncludes = {
  start: string;
  end: string;
  time_zone?: null;
};

export type Win = { id: string };

export type ProgressReport = {
  id: string;
  title: string;
  date: MonthIncludes;
  wins: Win[] | string;
  summary: string;
};

export type WindowTitleProps = { English: string; Japanese: string };

export type WindowProps = { children?: ReactNode; width: string; height: string } & WindowTitleProps;

export type GameBubbleProps = StudyActivity;

export type CalendarColumnProps = { dateEng: string; dateJP: string };

export type CalendarBubbleProps = { date: string; category: StudyCategory };

export type DonutChartProps = { width: number; height: number; donutThickness: number; data: StudyStat[] };

export type BarStackProps = { width: number; height: number };
