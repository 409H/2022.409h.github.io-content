import fetch from 'node-fetch';

// API endpoint for the website
const NETLIFY_URL = 'https://api.netlify.com/build_hooks/';

async function postData(url = '') {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return response;
}

const token = process.env.NETLIFY_DEPLOY_WEBHOOK_KEY;
if (!token) {
  throw new Error('NETLIFY_DEPLOY_WEBHOOK_KEY is not set');
}

postData(`${NETLIFY_URL}${token}`)
  .then(data => {
    console.log(`Netlify responsed with HTTP ${data.status} - deployment success!`);
});