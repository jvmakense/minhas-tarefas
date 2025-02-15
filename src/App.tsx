import EstiloGlobal, { Container } from './styles'
import BarraLateral from './styles/containers/BarraLateral'
import ListaDeTarefas from './styles/containers/ListaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
