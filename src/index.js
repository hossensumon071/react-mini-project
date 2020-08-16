import React, {Fragment} from 'react'
import ReactDom from 'react-dom'



function Books() {
  return(
    <>
      <div>
        <Book/>
        <Book/>
      </div>
    </>
  );
}
const Book = () => {
  return <h1>this is a book</h1>;
};

ReactDom.render(<Books/>,document.getElementById('root'));