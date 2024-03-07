import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './Components/AppBar';
import Banner from './Components/Banner';
import Model from './Components/Model';
import MustTry from './Components/MustTry';
import Comments from './Components/Comments';

function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Model />
      <MustTry />
      <Comments />
      <div className='text-danger text-center my-3'>
        Copyright 2020-2024
      </div>
    </>

  );
}


export default App;
