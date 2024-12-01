export async function getHomePageData() {
  const query = `
     query GetHomePageData {
        page(id: "home", idType: URI) {
            homePage {
            banner {
                title
                image {
                node {
                    id
                    sourceUrl
                }
                }
            }
            aboutSection {
                title
                description
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
    title: json?.data?.page?.homePage?.banner?.title || 'Default Title',
    imageUrl: json?.data?.page?.homePage?.banner?.image?.node?.sourceUrl,
    aboutTitle: json?.data?.page?.homePage?.aboutSection?.title,
    aboutDescription: json?.data?.page?.homePage?.aboutSection?.description
  };
}
