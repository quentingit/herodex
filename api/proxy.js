import axios from 'axios';

export default async function handler(req, res) {
  const { path } = req.query;

  try {
    const targetUrl = `https://superheroapi.com/api/${process.env.VITE_SUPERHERO_API_KEY}/${path}`;
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

    res.status(response.status).json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json({ error: 'Proxy request failed', details: error.message });
  }
}
