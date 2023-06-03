import useFetch from './hooks/useFetch';
import Card from './components/Card';
import Navbar from './components/Navbar';
import './index.css'

function App() {
  const url = 'https://rickandmortyapi.com/api/character';
  const { data, error, loading } = useFetch(url);

  if (error) return <h1>Error!!!</h1>
  if (loading) return <h1>Cargando.....</h1>
  if (data) {
    return (
      <div>
        <Navbar />
        <Card characters={data}/>
      </div>
    )
  }
}

export default App;
