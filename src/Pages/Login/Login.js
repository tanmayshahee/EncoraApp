import React,{useState} from 'react';
import './login.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Login = (props) => {

    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginClick = (e) => {
      event.preventDefault();
      event.stopPropagation();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        console.log('validation failed');
        setValidated(true);
      }else{
        console.log('validation success');
        setValidated(false);
        props.history.push('/add-edit-notes');
      }
    }

    const onValueChange = (e) => {
        if(e.target.name === 'email'){
            setEmail(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }

    return (
        <div className={'login-main'}>
            <Form noValidate validated={validated} onSubmit={onLoginClick}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={onValueChange} value={email} name='email' required/>
                    <Form.Control.Feedback type="invalid">
                       Please enter valid Email Id.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onValueChange} value={password} name='password' required/>
                    <Form.Control.Feedback type="invalid">
                       Please enter Password.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="primary" size="lg" block>
                    Log In
                </Button>
            </Form>
        </div>
    )
}

export default Login;