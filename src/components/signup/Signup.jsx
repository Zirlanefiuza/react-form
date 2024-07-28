import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import './Signup.css';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="signup-container">
      <h1>Cadastro</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name && <span>Nome é obrigatorio</span>}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <span>Email é obrigatorio</span>}
        </Form.Group>
        <Form.Group controlId="birthdate">
          <Form.Label>data de nascimento</Form.Label>
          <Form.Control
            type="date"
            {...register('birthdate', { required: true })}
          />
          {errors.birthdate && <span>Data de nascimento é obrigatória</span>}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <span>Senha é obrigatorio</span>}
        </Form.Group>
        <Button type="submit" className='mt-3'>Inscrever-se</Button>
      </Form>
    </div>
  );
}

export default Signup;
