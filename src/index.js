import React, {Fragment} from 'react'
import ReactDom from 'react-dom'
import './index.css'



function Books() {
  return(
    <>
      <div className="books">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
      </div>
    </>
  );
}
const Book = () => {
  return (
    <article className="book">
      <CoverImage/>
      <Title/>
      <Author/>
    </article>
  )
};

const CoverImage = () =>
 <img 
 width="200"
 src="https://images-na.ssl-images-amazon.com/images/I/41aIidpbKwL._AC_SX184_.jpg"
  alt="wonky donky"
  />

const Title = () => <h1 style={{ fontSize: "2rem", color: "red"}}>The Wonkey Donky</h1>

const authorStyle = {
  letterSpacing: "10px",
  color: "green"
};


const Author = () => <p style={authorStyle}>by Craing Smith</p>

ReactDom.render(<Books/>,document.getElementById('root'));