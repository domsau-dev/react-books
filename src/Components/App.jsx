import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Book from './Book';

function App() {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        console.log('Start');
        axios.get('https://in3.dev/knygos/')
        .then(function (response) {
            console.log(response.data);
            setBooks(response.data.sort((a, b) => a.id - b.id));
        })
    }, []);

    return (<div className="book-container">
        {books.map((book)=>(<Book key={book.id} data={book}></Book>))}
    </div>);
    }
    
export default App;