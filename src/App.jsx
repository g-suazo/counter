import Counter from './components/Counter';

export default function App() {
  return (
    <main style={{padding:20}}>
      <h1 className='title'>React + Vite — Counter </h1>
      <Counter initial={0} />
    </main>
  );
}

