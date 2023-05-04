import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID as string;

const today = '2023-05-03';
type StudyCategory = '話す' | '聴く' | '読書' | 'ゲーム' | '観る';

type StudyActivity = { id: string; title: string; media: string; category: StudyCategory; time: number };

export const getTodaysStudies = async () => {
  // get pages
  const pages = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Date',
          date: {
            equals: today,
          },
        },
        { property: 'Time (mins)', number: { does_not_equal: 0 } },
      ],
    },
  });
  const allPages = pages.results;
  console.log(allPages);
  // return study details
  const activities: StudyActivity[] = allPages.map((page) => {
    // @ts-ignore
    return {
      id: page.id,
      // @ts-ignore
      title: page.properties.Details.title[0].plain_text,
      // @ts-ignore
      category: page.properties.Category.select.name,
      // @ts-ignore
      time: page.properties['Time (mins)'].number,
      // @ts-ignore
      media: page.properties.Rollup.rollup.array[0].title[0].plain_text,
    };
  });
  return activities;
};
