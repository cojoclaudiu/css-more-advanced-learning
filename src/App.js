import React from 'react';
import Button from './components/Button/Button';
import  './styles/app.css';

const App = () => {
  return (
    <div className="container">
      <Button move="ease" title="ease" />
      <Button move="linear" title="linear" />
      <Button move="ease-in" title="ease-in" />
      <Button move="ease-out" title="ease-out" />
      <Button move="ease-in-out" title="ease-in-out" />
    </div>
  );
};

export default App;
