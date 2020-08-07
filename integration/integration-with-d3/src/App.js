import React, { useState } from 'react';
import Test from './Test';

function App() {
  const [personClicks, setPersonClicks] = useState(0);

  const personClicked = () => {
    setPersonClicks(personClicks + 1);
  };

  return (
    <div className="App">
      <Test person="Tony" personClicked={personClicked} />
      <Test person="Mary" personClicked={personClicked} />
      <Test person="Susan" personClicked={personClicked} />
      Person Clicks: {personClicks}
    </div>
  );
}

export default App;
