import axios from 'axios';

export default async function handler(req, res) {
  console.log('Proxy function called with:', req.query.path);

  const { path } = req.query;

  try {
    console.log('Request received for path:', path);
    const targetUrl = `https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${path}`;
    console.log('Target URL:', targetUrl);

    const response = await axios({
      method: req.method,
      url: targetUrl,
      headers: {
        'Content-Type': 'application/json',
        Origin: undefined,
        Referer: undefined,
      },
      data: req.body,
    });

    console.log('API response status:', response.status);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Proxy Error:', error.message);
    res
      .status(error.response?.status || 500)
      .json({ error: 'Proxy request failed', details: error.message });
  }
}
