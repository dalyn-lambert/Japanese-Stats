import { Client } from '@notionhq/client';
import { TODAY_DB } from './globals';
import { MonthlyStats, StudyActivity, StudyCategory } from './types';

const notion = new Client({ auth: process.env.NOTION_KEY });

const studyTrackerDB = process.env.NOTION_STUDY_TRACKER_DATABASE_ID as string;
const studyPostsDB = process.env.NOTION_STUDY_POSTS_DATABASE_ID as string;
const habitsDB = process.env.NOTION_HABITS_DATABASE_ID as string;

function getActivityDetails(pages: any) {
  const activities: StudyActivity[] = pages.map((page: any) => {
    return {
      id: page.id,
      // @ts-ignore
      title: page.properties.Details.title[0].plain_text,
      // @ts-ignore
      category: page.properties.Category.select.name,
      // @ts-ignore
      time: page.properties['Time (mins)'].number,
      // @ts-ignore
      media: page.properties.Rollup.rollup.array[0]?.title[0].plain_text,
      // @ts-ignore
      date: page.properties.Date.date.start,
    };
  });
  return activities;
}

export const getTodaysStudies = async () => {
  const pages = await notion.databases.query({
    database_id: studyTrackerDB,
    filter: {
      and: [
        {
          property: 'Date',
          date: {
            equals: TODAY_DB,
          },
        },
        { property: 'Time (mins)', number: { does_not_equal: 0 } },
      ],
    },
  });
  return getActivityDetails(pages.results);
};

export const getActivityForDate = async (date: string, category: StudyCategory) => {
  const pages = await notion.databases.query({
    database_id: studyTrackerDB,
    filter: {
      and: [
        {
          property: 'Date',
          date: {
            equals: date,
          },
        },
        {
          property: 'Category',
          select: {
            equals: category,
          },
        },
      ],
    },
  });
  return getActivityDetails(pages.results);
};

export const getLastListen = async () => {
  const page = await notion.databases.query({
    database_id: studyTrackerDB,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      property: 'Category',
      select: {
        equals: '聴く',
      },
    },
    page_size: 1,
  });
  return getActivityDetails(page.results);
};

export const getLastRead = async () => {
  const page = await notion.databases.query({
    database_id: studyTrackerDB,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      property: 'Category',
      select: {
        equals: '読書',
      },
    },
    page_size: 1,
  });
  return getActivityDetails(page.results);
};

export const getLastWatch = async () => {
  const page = await notion.databases.query({
    database_id: studyTrackerDB,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      property: 'Category',
      select: {
        equals: '観る',
      },
    },
    page_size: 1,
  });
  return getActivityDetails(page.results);
};

export const getLastGame = async () => {
  const page = await notion.databases.query({
    database_id: studyTrackerDB,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      property: 'Category',
      select: {
        equals: 'ゲーム',
      },
    },
    page_size: 1,
  });
  return getActivityDetails(page.results);
};

export const getRecentGameLogs = async () => {
  const pages = await notion.databases.query({
    database_id: studyTrackerDB,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      property: 'Category',
      select: {
        equals: 'ゲーム',
      },
    },
    page_size: 10,
  });
  return getActivityDetails(pages.results);
};

export const getLastSpeaking = async () => {
  const page = await notion.databases.query({
    database_id: studyTrackerDB,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      property: 'Category',
      select: {
        equals: '話す',
      },
    },
    page_size: 1,
  });
  return getActivityDetails(page.results);
};

// probably don't need this and will get this info by summing Study Log Pages instead
export const getMonthlyStats = async () => {
  const pages = await notion.databases.query({
    database_id: studyPostsDB,
    filter: {
      and: [
        {
          property: 'Type',
          select: {
            equals: '2023 Progress Report',
          },
        },
        {
          property: 'Status',
          // @ts-ignore
          status: {
            equals: 'Done',
          },
        },
      ],
    },
  });
  const allPages = pages.results;

  const stats: MonthlyStats[] = allPages.map((page) => {
    return {
      id: page.id,
      // @ts-ignore
      month: page.properties.Month.select.name,
      // @ts-ignore
      reading: page.properties['Reading (minutes)'].number,
      // @ts-ignore
      listening: page.properties['Listening (minutes)'].number,
      // @ts-ignore
      watching: page.properties['Watching (minutes)'].number,
      // @ts-ignore
      speaking: page.properties['Speaking (minutes)'].number,
      // @ts-ignore
      games: page.properties['Games (minutes)'].number,
    };
  });
  return stats;
};

// something is still wrong here
export const getWritingDaysForMonth = async () => {
  const pageId = 'ee6f34d870254f5a99fc945bbb41b958';
  const response = await notion.pages.retrieve({ page_id: pageId });
  // @ts-ignore
  const days = response.properties['Current Month'].formula.number;
  return days;
};
