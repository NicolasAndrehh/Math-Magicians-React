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
      <section className="quote-section">
        <h2>Random Quote</h2>
        <p className="error-message">* Sorry, we have an error loading the quote, please reload the page to try again *</p>
      </section>
    );
  }

  // Render if the the API is fetching
  if (loading) {
    return (
      <section className="quote-section">
        <h2>Random Quote</h2>
        <p className="loading">Loading...</p>
      </section>
    );
  }

  // Render when the API was fetched correctly
  return (
    <section className="quote-section">
      <h2>Random Quote</h2>
      <p className="quote">
        <span className="quotes">&quot;</span>
        {data[0].quote}
        <span className="quotes">&quot;</span>
      </p>
      <p className="author">
        <span className="dash">-</span>
        {' '}
        {data[0].author}
      </p>
    </section>
  );
};

export default Quote;
