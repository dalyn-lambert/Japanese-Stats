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

export type MonthlyStats = {
  id: string;
  month: string;
  listening: number;
  reading: number;
  speaking: number;
  games: number;
  watching: number;
};

export type WindowTitleProps = { English: string; Japanese: string };

export type WindowProps = { children: ReactNode; width: string; height: string } & WindowTitleProps;
