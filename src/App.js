import Navbar from "./components/Navbar";
import CharactersListContainer from './components/CharactersListContainer.js'
import { Routes, Route} from 'react-router-dom';
import UserListContainer from './components/UserListContainer'
import Form from './components/Form';

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        
          <Route
            path="/"
            element={<CharactersListContainer />}
          />
          <Route
            path="/characters"
            element={<CharactersListContainer />}
          />
          <Route
            path="/characters/:id"
            element={<CharactersListContainer />}
          />
          <Route
            path="/users"
            element={<UserListContainer />}
          />
          <Route 
            path="/form"
            element={<Form />} 
          />
      </Routes>

    </div>
  );
}

export default App;
