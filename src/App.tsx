import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RootNavigator from './routes/RootNavigator'

const App: React.FC = () => {

  return (
    <>
    <BrowserRouter>
      <RootNavigator />
    </BrowserRouter>
    </>
  )
}

export default App
