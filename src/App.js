import { useState } from "react";
import Login from "./components/Login";
import Books from "./components/Books"
import Register from "./components/Register"
import { BrowserRouter as Router, Link, Route, Routes, useMatch, useNavigate, useParams } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import { Button } from "reactstrap";

function App() {
  const [user, setUser] = useState(null)
  const [books, setBooks] = useState([])

  const navigate = useNavigate()

  const padding = {
    padding: 5
  }

  const match = useMatch('/books/:id')
  const book = match
    ? books.find(b => b._id === match.params.id)
    : null

  const handleLogout = () => {
    window.localStorage.clear()
    setUser(null)
    setBooks([])
    navigate('/login')
  }

  return (
    <div className="container">
      <h1>Book Review App</h1>
      <div>
        <Link style={padding} to='/books'>books</Link>
        <Link style={padding} to='/register'>register</Link>
        <Link style={padding} to='/login'>login</Link>
        <Button color="link" onClick={handleLogout}>logout</Button>
      </div>
      <Routes>
        <Route path="/books/:id" element={<BookDetails book={book} />} />
        <Route path="/books" element={user ? <Books books={books} setBooks={setBooks} /> : null} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>

    </div>
  );
}

export default App;
