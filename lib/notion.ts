import { Client } from '@notionhq/client';
import { TODAY } from './globals';
import { MonthlyStats, StudyActivity } from './types';

const notion = new Client({ auth: process.env.NOTION_KEY });

const studyTrackerDB = process.env.NOTION_STUDY_TRACKER_DATABASE_ID as string;
const studyPostsDB = process.env.NOTION_STUDY_POSTS_DATABASE_ID as string;
const habitsDB = process.env.NOTION_HABITS_DATABASE_ID as string;

export const getTodaysStudies = async () => {
  // get pages
  const pages = await notion.databases.query({
    database_id: studyTrackerDB,
    filter: {
      and: [
        {
          property: 'Date',
          date: {
            equals: TODAY,
          },
        },
        { property: 'Time (mins)', number: { does_not_equal: 0 } },
      ],
    },
  });
  const allPages = pages.results;

  // return study details
  const activities: StudyActivity[] = allPages.map((page) => {
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
};

export const getMonthlyStats = async () => {
  // get pages
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

  // return study details
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

export const getLastRead = async () => {
  // get page
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
  const pageResults = page.results;

  // return study details
  const activity: StudyActivity[] = pageResults.map((page) => {
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
  return activity;
};

export const getLastGame = async () => {
  // get page
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
  const pageResults = page.results;

  // return study details
  const activity: StudyActivity[] = pageResults.map((page) => {
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
  return activity;
};

export const getLastSpeaking = async () => {
  // get page
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
  const pageResults = page.results;

  // return study details
  const activity: StudyActivity[] = pageResults.map((page) => {
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
  return activity;
};

export const getLastWatch = async () => {
  // get page
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
  const pageResults = page.results;

  // return study details
  const activity: StudyActivity[] = pageResults.map((page) => {
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
  return activity;
};

export const getLastListen = async () => {
  // get page
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
  const pageResults = page.results;

  // return study details
  const activity: StudyActivity[] = pageResults.map((page) => {
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
  return activity;
};

export const getWritingDaysForMonth = async () => {
  const pageId = 'ee6f34d870254f5a99fc945bbb41b958';
  const response = await notion.pages.retrieve({ page_id: pageId });
  // @ts-ignore
  const days = response.properties['Current Month'].formula.number;
  // console.log(days);
  return days;
};
