import { useState } from "react"
import { Button, Card, CardBody, CardText, CardTitle, ListGroup, ListGroupItem } from "reactstrap"
import reviewService from "../services/reviewService"
import AddReview from "./AddReview"

function BookDetails(props) {
    const { book } = props
    const [reviews, setReviews] = useState(book.reviews)
    const [reviewBody, setReviewBody] = useState('')
    const handleAddReview = (e) => {
        e.preventDefault()
        reviewService.create(book._id, { body: reviewBody })
            .then(res => {
                const lastOne = res.data.pop()
                setReviews(reviews.concat(lastOne))
                setReviewBody('')
            }).catch(err => console.log(err.response))
    }

    const handleReviewDelete = (reviewId) => {
        if (window.confirm(`Do you really want to delete review with id ${reviewId}?`)) {
            reviewService.remove(book._id, reviewId)
                .then(res => {
                    console.log(res.data)
                    setReviews(reviews.filter(r => r._id !== reviewId))
                }).catch(err => console.log(err.response))
        }
    }
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        {book.title}
                    </CardTitle>
                    <CardText>
                        by {book.author}
                    </CardText>

                </CardBody>

                <ListGroup flush>
                    {
                        reviews.map(review =>
                            <ListGroupItem key={review._id}>
                                {review.body}
                                {' '}
                                <Button color="warning" size="sm" onClick={() => handleReviewDelete(review._id)}>
                                    delete
                                </Button>
                            </ListGroupItem>
                        )
                    }
                </ListGroup>

            </Card>

            <AddReview
                reviewBody={reviewBody}
                setReviewBody={setReviewBody}
                handleAddReview={handleAddReview}
            />

        </div>
    )
}

export default BookDetails