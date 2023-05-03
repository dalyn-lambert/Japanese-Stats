import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;

export default async function Home() {
  const date = '2023-05-01';

  const database = await notion.databases.retrieve({ database_id: databaseId });

  // retrieves pages from database for a specific date
  const pages = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Date',
          date: {
            equals: date,
          },
        },
        { property: 'Time (mins)', number: { does_not_equal: 0 } },
      ],
    },
  });

  // build array of pageIds
  const pageIds = pages.results.map((page) => page.id);

  pageIds.forEach(getStudyDetails);

  return (
    <div className=''>
      <div>Today is {date}</div>
    </div>
  );
}

async function getStudyDetails(pageId: string) {
  const categoryPropId = 'jcJI';
  const timePropId = 'apeq';
  const mediaPropId = '%3AWl%3D';

  const page = await notion.pages.retrieve({ page_id: pageId });
  const title = page.properties.Details.title[0].plain_text;

  const category = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: categoryPropId,
  });

  const relation = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: mediaPropId,
  });

  const relationId = relation.results[0].relation.id;

  const mediaPage = await notion.pages.retrieve({ page_id: relationId });
  const mediaTitle = mediaPage.properties.Name.title[0].plain_text;

  const time = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: timePropId,
  });
  console.log('title:');
  console.log(title);
  console.log('media:');
  console.log(mediaTitle);
  console.log('category:');
  console.log(category.select.name);
  console.log('time:');
  console.log(time.number);
}
