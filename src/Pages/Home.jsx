import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBooksData } from '../Services/Data'

const Home = () => {
  const [booksData, setBooksData] = useState([])
  const [selectedBook, setSelectedBook] = useState({})
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem("loggedIn"))
  useEffect(() => {
    if (data) {
      getBooksData().then(data => setBooksData(data))
    } else {
      navigate("/login")
    }
  }, [])
  return (
    <div>
      <div>
        <div><button className='btn' onClick={() => navigate("/")}>Back</button></div>
        <div><button className='btn' onClick={() => {
          localStorage.removeItem("loggedIn");
          navigate("/login");
        }}>Logout</button></div>
      </div>
      {
        data ? (
          <>
            {
              booksData.length > 0 ? (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", gap: "2rem", marginTop: "30px" }}>
                    {
                      booksData.map((book, index) => {
                        return (
                          <div key={book.id} className="card" style={{ width: "18rem", display: "flex" }}>
                            <img src={book.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title">{book.bookname}</h5>
                              <p className="card-text">{book.description}</p>
                              <button type="button" className="btn btn-primary" onClick={() => navigate(`/home/${book.id}`)}>
                                View Book
                              </button>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </>) : (<>
                </>)
            }
          </>
        ) : (<>
          <p style={{ margin: "0 auto", color: "red" }}>please login to view the books</p>
        </>)
      }
    </div>
  )
}

export default Home
