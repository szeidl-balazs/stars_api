import './home.css';
import React, { useState, useEffect } from 'react';

function Home() {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [inputDate, setInputDate] = useState("https://api.nasa.gov/planetary/apod?api_key=OWN7eFiECp6rBfvTqLLzCRaMmatwj1uWPhI59fmK");

  
  useEffect(() => {
    fetch(inputDate)
      .then(response => response.json()) 
      .then(
        (result) => {
          setIsLoaded(true); /*true értéket az isLoaded változónak*/
          setItems(result); /*beállítja az items értékét */
        },
        (error) => {                  
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


const datePicker = (e) => {
  setInputDate(`https://apod.nasa.gov/apod/ap${e.target.value.replace(/-/g,'').slice(2)}.html`); /*g az összes előfordulást, i case insensitive*/
}

  
  if (error) {
    return <div>Error: {error.message}</div>; /*ha error van visszatér error üzenettel*/
  } else if (!isLoaded) {
    return <div>Loading...</div>; /*vagy visszatér loading üzenettel*/
  } else {
    return (
      <div className='home-wrapper'>
        <h1>{items.title}</h1>
        <input type="date" onInput={datePicker}></input>
        <div className='image-text-wrapper'>
          <img src={items.url} alt={items.title}></img>
          <p>{items.explanation}</p>
        </div>
      </div>
    );
  }

}

export default Home;
