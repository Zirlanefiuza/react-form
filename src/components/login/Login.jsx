import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import './Login.css';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <span>Email é obrigatorio</span>}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <span>Senha é obrigatorio</span>}
        </Form.Group>
        <Button type="submit" className='mt-3'>Login</Button>
      </Form>
    </div>
  );
}

export default Login;
