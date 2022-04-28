import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import ToggleButton from './components/ToggleButton';
import { useState, useEffect } from 'react';

let Checked = () => <>🌙</>;
let Unchecked = () => <>🔆</>;

function App() {
  const storedDarkMode = JSON.parse(localStorage.getItem("dbc-dark-mode"));
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const cards = data.map(item => {
    return <Card
      key={item.id}
      item={item}
    />
  })

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark) {
      setDarkMode(true);
      Checked = () => <>🔆</>;
      Unchecked = () => <>🌙</>;
    } else {
      setDarkMode(false);
    }
  }, []);

  // useEffect(() => {
  //   console.log(`Is in dark mode? ${darkMode}`);
  //   localStorage.setItem("dbc-dark-mode", darkMode);
  // }, [darkMode]);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Navbar />
      <ToggleButton
        onChange={toggleDarkMode}
        icons={{ checked: <Checked />, unchecked: <Unchecked /> }}
        aria-label="Dark mode"
      />
      <section>
        {cards}
      </section>
    </div>
  );
}

export default App;
