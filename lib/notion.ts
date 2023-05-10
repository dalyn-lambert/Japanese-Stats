import { Client } from '@notionhq/client';
import { LAST_YEAR, TODAY } from './globals';
import { StudyActivity } from './types';

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID as string;

export const getTodaysStudies = async () => {
  // get pages
  const pages = await notion.databases.query({
    database_id: databaseId,
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

export const getThrowbackStudies = async () => {
  // get pages
  const pages = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Date',
          date: {
            equals: LAST_YEAR,
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

export const getLastRead = async () => {
  // get page
  const page = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      and: [
        {
          property: 'Category',
          select: {
            equals: '読書',
          },
        },
      ],
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
    database_id: databaseId,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      and: [
        {
          property: 'Category',
          select: {
            equals: 'ゲーム',
          },
        },
      ],
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
    database_id: databaseId,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      and: [
        {
          property: 'Category',
          select: {
            equals: '話す',
          },
        },
      ],
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
    database_id: databaseId,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      and: [
        {
          property: 'Category',
          select: {
            equals: '観る',
          },
        },
      ],
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
    database_id: databaseId,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      and: [
        {
          property: 'Category',
          select: {
            equals: '聴く',
          },
        },
      ],
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
