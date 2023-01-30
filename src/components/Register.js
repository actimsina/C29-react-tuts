import { useEffect, useState } from "react"
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap"
import userService from "../services/userService"

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [feedback, setFeedback] = useState('')
    const [status, setStatus] = useState(false)

    const handleRegister = (event) => {
        event.preventDefault()
        console.log(password, confirmPassword)
        if (password.length < 6 && password !== confirmPassword) {
            setFeedback('password should be longer than 6 characters!')
            setStatus(true)
            return
        }

        userService.register({ username, password })
            .then((res) => {
                console.log(res.data)
                window.alert(`User ${username} registration success!`)

            }).catch(err => {
                console.log(err.response)
                window.alert(err.response.data.msg)
            })
    }

    useEffect(() => {
        if (password !== confirmPassword) {
            setFeedback('password and confirm password does not match!')
            setStatus(true)
            return
        }
        setStatus(false)

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
                    <Input invalid={status}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="enter password for confirmation"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <FormFeedback >
                        {feedback}
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