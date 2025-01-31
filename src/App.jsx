
import {Routes,Route, Navigate} from 'react-router'
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (<>
    <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/*' element={<Navigate to={'/'}/>}/>
     </Routes> 
  </>);
}

export default App
