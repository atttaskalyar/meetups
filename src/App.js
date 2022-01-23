import {Route,Routes} from 'react-router-dom';
import FavouritesPage from "./pages/Favourites";
import NewMeetupsPage from './pages/NewMeetups';
import AllMeetupsPage from './pages/AllMeetups';
import MainNavigation from './components/layout/MainNavigation'

function App() {

  //localhost:3000/
  return <div>
    
    <MainNavigation/>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} exact />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    
    
  </div>
}

export default App;
