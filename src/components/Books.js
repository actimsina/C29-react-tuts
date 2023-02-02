import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Badge, ListGroup, ListGroupItem } from "reactstrap"
import bookService from "../services/bookService"
import AddBook from "./AddBook"

function Books(props) {
    const { books, setBooks } = props

    useEffect(() => {
        bookService.getAll()
            .then(response => {
                setBooks(response.data)
            }).catch(err => console.log(err.response.data))
    }, [])
    return (
        <div>
            <h2>List of Books</h2>

            <ListGroup>
                {books.map(b =>
                    <ListGroupItem key={b._id}>
                        <b>{b.title}</b>
                        {' '} by {b.author}
                        {' '}
                        <Badge pill color="warning">
                            <Link to={`/books/${b._id}`}>
                                {b.reviews.length} reviews
                            </Link>
                        </Badge>
                    </ListGroupItem>
                )}

            </ListGroup>
            <AddBook />
        </div>
    )
}

export default Books