import Home from './Home/Home';
import Movies from './Movies/Movies';
import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
