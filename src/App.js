import React from 'react'
import DateToday from './components/Date';
import Quote from './components/Quote';
import TimeKey from './components/Time';
import Time from './components/Time';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Weather />
      <TimeKey />
      <DateToday />
      <Quote />
      
    </div>
  );
}

export default App;
