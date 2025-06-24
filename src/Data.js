import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './features/dataSlice';
import { Link } from 'react-router-dom';

function Data() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.value);
  const status = useSelector((state) => state.data.status);

  return (
    <div>
      <h2>Data Page</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <button onClick={() => dispatch(fetchData())} disabled={status === 'loading'}>
        {status === 'loading' ? 'Loading...' : 'Fetch Data'}
      </button>
      {data && (
        <pre style={{ textAlign: 'left', margin: '1em auto', maxWidth: 600 }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default Data;
