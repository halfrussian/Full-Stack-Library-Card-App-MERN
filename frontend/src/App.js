import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

const [fetchedAuthor, setFetchAuthor] = useState('');
const [fetchedTitle, setFetchedTitle] = useState('');
const [fetchedPageNumber, setFetchedPageNumber] = useState('');
const [fetchedReadStatus, setFetchedReadStatus] = useState('');
const[fetchData, setFetchedData] = useState([]);
const [searchedTitle, setSearchedTitle] = useState(null)

const [finalData, setFinalData] = useState([])

const [postData, setPostData] = useState({
  title: "",
  author: "",
  pages: "",
  readStatus: "",
})

useEffect(() => {
  fetch('http://localhost:5000/books')
  .then(res => res.json())
  .then(data => {
    setFetchedData(data)
  })
}, []) 

   const fetchingFunction = () => {
         for(let i = 0; i < finalData.length; i++){
          if(searchedTitle === finalData[i].title){
            setFetchAuthor(finalData[i].author)
            setFetchedPageNumber(finalData[i].pages)
            setFetchedTitle(finalData[i].title)
            setFetchedReadStatus(finalData[i].readStatus)
            setFetchedReadStatus(finalData[i].readStatus)
         }
      }
  }
  
 const handle = (e) => {
   const newData={...postData}
   newData[e.target.id] = e.target.value
   setPostData(newData)
 }
 


const submit = (e) => {
  e.preventDefault();
fetch('http://localhost:5000/' , {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: postData.title,
    author: postData.author,
    pages:postData.pages,
    readStatus: postData.readStatus
  })
}).then(
  fetch('http://localhost:5000/books')
  .then(res => res.json())
  .then(data => {
    setFinalData(data)
    
  })
)
return fetcher();
}

const fetcher = () => {
  fetch('http://localhost:5000/books')
  .then(res => res.json())
  .then(data => {
    setFinalData(data)
  })
}

return (

<>

<section>
<div className="container-fluid">
  <div className="row text-white text-center">
    <div className="col m-4">
      <h1 className="display-3 mb-3 mt-3">Welcome to Our Library</h1>
      
      <div className="row  d-flex justify-content-center">
          <div className="underline mb-5 "></div> 
      </div>
    </div>     
  </div>
</div>
</section>



<section>
<div className="container-fluid">
 <div className="row align-items-center">
   <div className="col-lg-4 my-4">
     <div className="card mx-auto library-card text-center p-4">
        <div className="card-body">
          <p className="small card-text">Copyrighted Material</p>
          <h3 className="card-title text-uppercase display-6">Library Card</h3>
          
           <div className="row  d-flex justify-content-center">
              <div className="card-underline mb-5"></div> 
            </div>

          <div className="underline-space mb-3"></div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item mb-3" id="Author">Author
            <p>{fetchedAuthor}</p>
            </li>
            <li className="list-group-item mb-3" id="Title">Title
            <p>{fetchedTitle}</p>
            </li>
            <li className="list-group-item mb-3">Number of Pages
            <p>{fetchedPageNumber}</p>
            </li>
            <li className="list-group-item mb-3 readStatus">Read Status
            <p>{fetchedReadStatus}</p></li>
          </ul> 
        </div>
     </div>
   </div>

   
     <div className="col-lg-4">
        <form className="text-center bg-light p-5 rounded my-4 mx-auto addAuthor" id="findAuthor" >
          <div className="form-group mx-auto">
            <h3 className="card-title text-uppercase display-6">Find a Book</h3>
  
            <div className="row  d-flex justify-content-center">
              <div className="card-underline mb-5 "></div> 
            </div>
            <input
             className="form-control mb-4 bookTitle" 
             type="text" 
             placeholder="Title" 
             value={searchedTitle} 
             onInput={e => setSearchedTitle(e.target.value)} 
             id="bookInput"
              />

            <br />
          </div>
          <button 
          type="button" 
          className="btn btn-primary btn-lg rounded-pill px-5" 
          id="findButton"
          onClick={fetchingFunction}>Submit</button>
        </form>
     </div>
 
 
    <div className="col-lg-4">
        <form className="text-center bg-light p-5 rounded my-4 mx-auto" onSubmit={(e) => submit(e)}>
          <div className="form-group mx-auto">
            <h3 className="card-title text-uppercase display-6">Add an author</h3>
          
            <div className="row  d-flex justify-content-center">
              <div className="card-underline mb-5 "></div> 
            </div>
            <input 
            className="form-control mb-4 author" 
            type="text" 
            placeholder="Title" 
            onChange={(e) => handle(e)} 
            id="title"  
            value={postData.title}
             />
            <input 
            className="form-control mb-4 author" 
            type="text" 
            placeholder="Author" 
            onChange={(e) => handle(e)} 
            id="author"  
            value={postData.author}
            />
            
            <input 
            className="form-control mb-4 author" 
            type="number" 
            placeholder="Number of Pages" 
            onChange={(e) => handle(e)} 
            id="pages"  
            value={postData.pages}
            />
            <input 
            className="form-control mb-4 author" 
            type="boolean" 
            placeholder="Read or Unread?" 
            onChange={(e) => handle(e)} 
            id="readStatus"  
            value={postData.readStatus}
            />
            <br />
          </div>
          <button type="button" className="btn btn-primary btn-lg rounded-pill px-5" id="addButton" onClick={submit}>Submit</button>
        </form>
     </div>  
 </div>
</div>
</section>
</>
  );
}

export default App;
