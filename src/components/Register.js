import { useEffect, useState } from "react"
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap"

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [feedback, setFeedback] = useState('')
    const [message, setMessage] = useState('')


    const handleRegister = (event) => {
        event.preventDefault()
        console.log(password, confirmPassword)

    }

    useEffect(() => {
        if (password !== confirmPassword) {
            setFeedback('is-invalid')
            setMessage('Confirm password does not match!')
            return
        }
        setFeedback('is-valid')
    }, [confirmPassword, password])

    return (
        <div>
            <Form onSubmit={handleRegister}>
                <FormGroup>
                    <Label for="username">
                        Username
                    </Label>
                    <Input
                        id="username"
                        name="username"
                        placeholder="enter username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="enter password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="confirmPassword">
                        Confirm Password
                    </Label>
                    <Input className={feedback}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="enter password for confirmation"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}

                    />
                    <FormFeedback>
                        {message}
                    </FormFeedback>
                </FormGroup>
                <Button color="primary">
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default Register