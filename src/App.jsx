import { Nav } from './components/blocks/nav/nav.jsx';
import { Router } from './router/router.jsx';
import { FetchAPI } from './fetch/fetchAPI.jsx'

function App() {
return (
    <>
      <FetchAPI/>
      <Nav/>
      <Router/>
    </>
  )
}

export default App
