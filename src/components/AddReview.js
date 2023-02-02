import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function AddReview({ reviewBody, setReviewBody, handleAddReview }) {


    return (
        <>
            <br />
            <Form onSubmit={handleAddReview}>
                <FormGroup>
                    <Input
                        id="reviewBody"
                        name="reviewBody"
                        placeholder="enter your review here"
                        type="textarea"
                        value={reviewBody}
                        onChange={(e) => setReviewBody(e.target.value)}
                    />
                </FormGroup>
                <Button color="primary">
                    add review
                </Button>
            </Form>
        </>
    )
}

export default AddReview