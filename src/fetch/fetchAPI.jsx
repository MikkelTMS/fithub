import { useEffect } from 'react';

export function FetchAPI() {
  useEffect(() => {
    fetch('http://localhost:3000/api/bookings')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched products:', data);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
  }, []);

  return <div>Det bar' lækkert!</div>;
}