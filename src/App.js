import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://assets.alippo.com/catalog/static/data.json');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Alippo Dashboard</h1>
      <Table data={data} setData={setData} />
    </div>
  );
}

export default App;
