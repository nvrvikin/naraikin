import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/*' element={ <Index /> } />
      </Routes>
    </div>
  )
}

export default App
