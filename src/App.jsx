import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [error, setError] = useState(true);
  const [formattedText, setFormattedText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    setError(event.target.value.trim().length === 0);
  }

  const formatText = () => {
    const formatted = text.toLowerCase();
    setFormattedText(formatted);
    setText('');
  }

  return (
    <main className='main'>
      <textarea name="textarea" id="textarea" cols="30" rows="5" onChange={handleChange} value={text} style={{
        border: error && '1px solid red'
      }} />
      <button className='main__button' disabled={error} onClick={formatText}>public</button>
      <p>{formattedText}</p>
    </main>
  );
}

export default App;
