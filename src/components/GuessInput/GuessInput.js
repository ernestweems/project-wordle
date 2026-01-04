import React from 'react';

function GuessInput( {handleSubmitGuess} ) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        handleSubmitGuess(tentativeGuess);
        setTentativeGuess('');
    }
  return (
<form  className="guess-input-wrapper" onSubmit={handleSubmit}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input"
  value={tentativeGuess}
  onChange={(event) => {    
    setTentativeGuess(event.target.value.toLocaleUpperCase());
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
