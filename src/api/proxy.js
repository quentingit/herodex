import axios from 'axios';

export default async function handler(req, res) {
  const { path } = req.query;
  const apiKey = process.env.VITE_SUPERHERO_API_KEY;

  try {
    const response = await axios.get(
      `https://superheroapi.com/api/${apiKey}/${path}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      message: error.message || 'Error occurred while proxying the request',
    });
  }
}
