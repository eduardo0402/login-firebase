import './App.css';
import { Routes ,Route } from 'react-router-dom';
import { Home, Login, Register } from './components';
import { AuthProvider } from './context/aunthContext';
import {ProtectedRouter} from "./components/ProtectedRouter";

function App() {
  return (
    <div className='bg-slate-300 h-screen text-black flex'>
      <AuthProvider>
       <Routes>
          <Route path='/' element={
              <ProtectedRouter>
              <Home/>
              </ProtectedRouter>
          }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
       </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
