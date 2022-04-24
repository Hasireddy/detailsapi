import React from 'react';
import { useState, useEffect } from 'react';
import "./App.css";
const article = (data) => {
  const result = data.results;
  // alert(data.results);
  return result.map((iteration) => {
    return <article>
      <div>
        <p>Name : {iteration.name.title}</p>
        <p>Firstname : {iteration.name.first}</p>
        <p>Lastname : {iteration.name.last}</p>
        <img src={iteration.picture.medium} alt="Employee" />
      </div>
    </article>
  }
  )
}
function App() {
  const url = "https://randomuser.me/api/?results=15&&gender=";
  const [input, setInput] = useState();
  const [searchurl, setSearchurl] = useState();
  const [fetchdata, setFetchdata] = useState();
  const handleChange = (item) => setInput(item.target.value);
  const handleSubmit = (click) => {
    click.preventDefault();
    setSearchurl(url + input)
  };
  useEffect(() => {
    fetch(searchurl)
      .then(response => response.json())
      .then(jsonobj => setFetchdata(article(jsonobj)))
  },
    [searchurl])
  return (
    <>
      <div className="App">
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <main>{fetchdata}</main>
      </div>
    </>
  );
}

export default App;
