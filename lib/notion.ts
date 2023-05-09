import { Client } from '@notionhq/client';
import { format } from 'date-fns';
import { StudyActivity } from './types';
import { LAST_YEAR, TODAY } from './globals';

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
    };
  });
  return activities;
};
