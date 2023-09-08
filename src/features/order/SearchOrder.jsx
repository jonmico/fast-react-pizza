import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder={'Search order #'}
        value={query}
        onChange={(evt) => setQuery(evt.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
