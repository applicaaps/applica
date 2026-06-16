const { createStrapi } = require('@strapi/strapi');

async function main() {
  console.log('Bootstrapping Strapi for DB inspection...');
  const app = createStrapi({ distDir: './dist' });
  await app.load();
  console.log('Strapi loaded successfully.');

  try {
    // 1. Fetch all API tokens from the database directly (raw or query)
    const tokens = await app.db.query('admin::api-token').findMany({
      populate: ['adminUserOwner']
    });

    console.log('--- API TOKENS IN DATABASE ---');
    console.dir(tokens, { depth: null });
    console.log('-----------------------------');

  } catch (e) {
    console.error('Error during DB inspection:', e);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

main();
