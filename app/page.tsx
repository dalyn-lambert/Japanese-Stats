import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;

export default async function Home() {
  const date = '2023-05-02';

  const propertyIdTime = 'apeq';

  if (databaseId) {
    // retrieves pages from database for a specific date
    const pages = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Date',
        date: {
          equals: date,
        },
      },
    });
    // console.log(pages.results);

    const pageArray = pages.results;

    // get all pages ids
    const pageIds = pageArray.map((page) => page.id);
    console.log({ pageIds });

    pageIds.forEach(getCategory);
    console.log({ pageIds });
  }
  return (
    <div className=''>
      <div>Today is {date}</div>
    </div>
  );
}

async function getCategory(pageId: string) {
  const propertyIdCategory = 'jcJI';
  const response = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: propertyIdCategory,
  });
  console.log(response.select.name);
  return response.select.name;
}
