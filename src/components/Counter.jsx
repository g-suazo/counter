import { useState, useEffect } from 'react';

export default function Counter({ initial = 0 }) {
  const [count, setCount] = useState(() => {
    const raw = localStorage.getItem('contador_vite');
    return raw ? Number(raw) : initial;
  });

  useEffect(() => {
    localStorage.setItem('contador_vite', String(count));
  }, [count]);

  return (
    <div className='box'>
      <h2 style={{padding:20}}>Contador: {count}</h2>
      <div style={{display:'flex', gap:8, justifyContent:'center'}}>
        <button className='btn' onClick={() => setCount(c => c - 1)}>-</button>
        <button className='btn' onClick={() => setCount(c => c + 1)}>+</button>
        <button style={{backgroundColor:'#136d79', color:'white', padding:5, borderRadius:15, border:'none'}} onClick={() => setCount(initial)}>Reset</button>
      </div>
    </div>
  );
}
