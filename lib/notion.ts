import { Client } from '@notionhq/client';

type StudyCategory = '話す' | '聴く' | '読書' | 'ゲーム' | '観る';

type StudyActivity = { id: string; title: string; mediaTitle: string; category: StudyCategory; time: number };

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID as string;

const today = '2023-05-03';

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
  // return study details
  return allPages.map((page) => {
    return getStudyDetails(page);
  });
};

async function getStudyDetails(page: any) {
  const relationId = page.properties.Media.relation[0].id;
  const mediaPage = await notion.pages.retrieve({ page_id: relationId });
  return {
    id: page.id,
    title: page.properties.Details.title[0].plain_text,
    category: page.properties.Category.select.name,
    time: page.properties['Time (mins)'].number,
    media: mediaPage.properties.Name.title[0].plain_text,
  };
}
