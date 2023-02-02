import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import userService from "../services/userService"

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault()
        userService.login({ username, password })
            .then(response => {
                window.alert(response.data.status)
                props.setUser({ username, ...response.data })
                window.localStorage.setItem('loggedInUser', response.data.token)
                navigate('/books')
            }).catch(err => {
                window.alert(err.response.data.msg)
            })
    }

    return (
        <div>
            <h2> Login Component </h2>

            <Form>
                <FormGroup>
                    <Label for="username">
                        Username
                    </Label>
                    <Input
                        id="username"
                        name="username"
                        placeholder="enter username here"
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
                        placeholder="enter password here"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <Button color="primary" onClick={(e) => handleLogin(e)}>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login