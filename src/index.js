import React, {Fragment} from 'react'
import ReactDom from 'react-dom'



function Books() {
  return(
    <>
      <div>
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
    <article>
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

const Title = () => <h1>The Wonkey Donky</h1>
const Author = () => <p>by Craing Smith</p>

ReactDom.render(<Books/>,document.getElementById('root'));