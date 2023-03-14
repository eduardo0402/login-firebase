import './App.css';
import { Routes ,Route } from 'react-router-dom';
import { Home, Login, Register } from './components';
import { AuthProvider } from './context/aunthContext';

function App() {
  return (
    <div className='bg-slate-300 h-screen text-white flex'>
      <AuthProvider>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
       </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
