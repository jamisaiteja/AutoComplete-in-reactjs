import {React} from 'react';
import './App.css';
import AutoComplete from './Components/AutoComplete';

function App() {
  const cityNames = [
        "Amsterdam",
        "Berlin",
        "London",
        "New York",
        "Paris",
        "Rome",
        "San Francisco",
        "Tokyo",
        "Washington DC",
        "Zurich",
        "Copenhagen",
        "Helsinki",
        "Madrid",
        "Reykjavik",
        "Stockholm",
        "Vancouver",
        "Vienna",
        "Zagreb",
        "Budapest",
        "Dublin",
        "Hamburg",
        "Krakow",
        "Lisbon",
        "Ljubljana",
      ];
  return (
    <div className="container">
     <AutoComplete options={cityNames}/>
    </div>
  );
}

export default App;
