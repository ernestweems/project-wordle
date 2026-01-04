import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log({"You guessed": guess});
        setGuess('');
    }
  return (
<form  className="guess-input-wrapper" onSubmit={handleSubmit}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input"
  value={guess}
  onChange={(event) => {    
    setGuess(event.target.value.toLocaleUpperCase());
  }}
   type="text"
   maxLength={5}
   minLength={5}
   pattern='[a-zA-Z]{5}'
   title="5 letter word"   
    />
</form>
  );

}

export default GuessInput;
