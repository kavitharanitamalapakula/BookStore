import React, { useEffect, useState } from "react";
import { getBooksData } from "../../Services/Data";
const Main = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        getBooksData().then(data => setBooks(data.books))
    }, [])
    return (
        <>
            {books.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem", marginTop: "30px" }}>
                    {books.map((book, index) => {
                        return (
                            <div key={book.id} className="card" style={{ width: "18rem", display: "flex" }}>
                                <img src={book.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{book.bookname}</h5>
                                    <p className="card-text">{book.description}</p>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setSelectedBook(book)}>
                                        View Book
                                    </button>

                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <>
                    <p>No Book Found</p>
                </>
            )}
        </>
    )

}
export default Main;
