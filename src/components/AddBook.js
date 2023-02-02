import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function AddBook() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const addBook = (e) => {
        e.preventDefault()
        console.log(title, author)
    }
    return (
        <div>
            <Form onSubmit={addBook}>
                <FormGroup>
                    <Label for="title">
                        Title
                    </Label>
                    <Input
                        id="title"
                        name="title"
                        placeholder="enter book title here"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="author">
                        Author
                    </Label>
                    <Input
                        id="author"
                        name="author"
                        placeholder="enter author name here"
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </FormGroup>
                <Button>
                    Add Book
                </Button>
            </Form>
        </div>
    )
}

export default AddBook