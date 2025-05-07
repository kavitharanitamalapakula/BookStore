

import React, { useEffect, useState } from "react";
import { getBooksData } from "../../Services/Data";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        getBooksData().then(data => setBooks(data))
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
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setSelectedBook(book)} >
                                        View Book
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">{selectedBook.bookname}</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img src={selectedBook.image} alt="..." width={"100%"} height={"100%"} />
                                </div>
                                <div className="card-body ms-3">
                                    <h5 className="card-title"><em>Author : </em>{selectedBook.author}</h5>
                                    <p className="card-text">{selectedBook.description}</p>
                                    <p className="card-text"><small>{selectedBook.price} </small></p>
                                    <p className="card-text"><small>{selectedBook.rating}</small></p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => navigate(`/home/${selectedBook.id}`)}>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
