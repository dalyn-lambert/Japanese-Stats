export type StudyCategory = '話す' | '聴く' | '読書' | 'ゲーム' | '観る';

export type StudyActivity = {
  id: string;
  title: string;
  media: string;
  category: StudyCategory;
  time: number;
  date: string;
};
