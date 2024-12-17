import websiteScraper from 'website-scraper';

const scrapeWebsite = async (url, directoryName) => {
  const options = {
    urls: [url],
    directory: `./shop/${directoryName}`, // Save scraped content in the Next.js public folder
    subdirectories: [
      { directory: 'img', extensions: ['.jpg', '.png', '.svg', '.gif'] },
      { directory: 'js', extensions: ['.js'] },
      { directory: 'css', extensions: ['.css'] },
      { directory: 'fonts', extensions: ['.ttf', '.eot', 'woff', 'woff2'] },
    ],
  };

  try {
    await websiteScraper(options);
    console.log(`Successfully scraped ${url} to ./public/scraped/${directoryName}`);
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
  }
};

const urlsToScrape = [
  { url: 'https://www.thezebra.com/', directory: 'home' },
  { url: 'https://www.thezebra.com/auto-insurance/', directory: 'auto-insurance' },
  { url: 'https://www.thezebra.com/home-insurance/', directory: 'home-insurance' },
  { url: 'https://www.thezebra.com/renters-insurance/', directory: 'renters-insurance' },
  { url: 'https://www.thezebra.com/life-insurance/', directory: 'life-insurance' },
  { url: 'https://www.thezebra.com/pet-insurance/', directory: 'pet-insurance' },

  { url: 'https://www.thezebra.com/other-insurance-types/', directory: 'other-insurance-types' },
];


const scrapeAll = async () => {
  for (const { url, directory } of urlsToScrape) {
    console.log(`Scraping: ${url}`);
    await scrapeWebsite(url, directory);
  }
  console.log('Finished scraping all pages!');
};

scrapeAll();
