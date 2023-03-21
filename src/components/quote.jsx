import { useEffect, useState } from 'react';
import './quote.scss';

const Quote = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const URL = 'https://api.api-ninjas.com/v1/quotes';

  // Fetching data from the URL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'ZPnIx2WPaSzz/gQH9Oq35A==EWxbv806FXZdzsPY',
          },
        });

        const jsonData = await response.json();
        setData(await jsonData);
        setLoading(false);
      } catch (error) {
        setError(true);
        throw new Error(`Error trying to fetch the URL: ${error}`);
      }
    };
    fetchData();
  }, [setData]);

  // Render if there's an error
  if (error) {
    return (
      <div className="quote-container">
        <h3>Random Quote</h3>
        <p className="error-message">* Sorry, we have an error loading the quote, please reload the page to try again *</p>
      </div>
    );
  }

  // Render if the the API is fetching
  if (loading) {
    return (
      <div className="quote-container">
        <h3>Random Quote</h3>
        <p className="loading">Loading...</p>
      </div>
    );
  }

  // Render when the API was fetched correctly
  return (
    <div className="quote-container">
      <h3>Random Quote</h3>
      <p className="quote">
        &quot;
        {data[0].quote}
        &quot;
      </p>
      <p className="author">
        -
        {' '}
        {data[0].author}
      </p>
    </div>
  );
};

export default Quote;
