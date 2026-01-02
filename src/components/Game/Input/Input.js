import React from 'react';


function Inputguess() {
    const [guessTerm, setGuessTerm] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log({"You guessed": guessTerm});
        setGuessTerm('');
    }
  return (
<form  className="guess-input-wrapper" onSubmit={handleSubmit}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input"
  value={guessTerm}
  onChange={(event) => {    
    setGuessTerm(event.target.value.toLocaleUpperCase());
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
export default Inputguess;