export async function getAboutPageData() {
  const query = `
   query GetAboutPageData {
      page(id: "about", idType: URI) {
        aboutPage {
          banner {
            title
            image {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
    `;

  const response = await fetch(
    'https://dev-shahzaman.pantheonsite.io/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    }
  );

  const json = await response.json();
  return {
    title: json?.data?.page?.aboutPage?.banner?.title || 'Default Title',
    imageUrl: json?.data?.page?.aboutPage?.banner?.image?.node?.sourceUrl
  };
}
