import React from 'react';
import './login.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Login = (props) => {

    const onLoginClick = () => {
      console.log('login click');
      console.log(props);
      props.history.push('/add-edit-notes');
    }

    return (
        <div className={'login-main'}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={onLoginClick} size="lg" block>
                    Log In
                </Button>
            </Form>
        </div>
    )
}

export default Login;