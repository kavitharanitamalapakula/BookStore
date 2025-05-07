import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBooksData } from '../Services/Data'

const ViewBooks = () => {
    const [book,setBook] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        getBooksData().then(data => {
            const matchedBook = data.find(book => book.id == id)
            setBook(matchedBook)
        })
    }, [id])
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem", padding: "2rem" }}>
            {
                book ? (
                    <>
                        <div style={{ flex: 1 }}>
                            <img src={book.image} alt={book.bookname} style={{ width: "100%", height: "auto", maxHeight: "70vh", objectFit: "contain" }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h2>{book.bookname}</h2>
                            <h4>Author: {book.author}</h4>
                            <p>{book.description}</p>
                            <p><strong>Price:</strong> ${book.price}</p>
                            <p><strong>Rating:</strong> {book.rating}</p>
                        </div>
                    </>
                ) : (
                    <p>Loading book details...</p>
                )
            }
        </div>
    )
}

export default ViewBooks
