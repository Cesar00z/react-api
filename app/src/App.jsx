import useFetch from './hooks/useFetch';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Buttons from './components/Buttons';

function App() {
  
  const { data, error, loading, info, prevPage, nextPage} = useFetch();


  if (error) return <h1>Error!!!</h1>
  if (loading) return <h1>Cargando...</h1>
  if (data) {
    return (
      <div>
        <Navbar />
        <Buttons nextPage={nextPage} prevPage={prevPage} info={info}/>
        <Card characters={data}/>
      </div>
    )
  }
}

export default App;
