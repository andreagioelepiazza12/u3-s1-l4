
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import MyNav from './components/MyNav';
import MyFoot from './components/MyFoot';
import Welcome from './components/Welcome';
import BookList from './components/BookList';

import fantasy from './data/fantasy.json'

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books = {fantasy} />
      <MyFoot />
    </>
  );
}

export default App
