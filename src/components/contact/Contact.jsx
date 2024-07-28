import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import "./Contact.css";


function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
      <div className="contact-container">
        <h1>Contato</h1>
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
            {errors.email && <span>E-mail é obrigatório</span>}
          </Form.Group>
          <Form.Group controlId="feedback">
            <Form.Label>Feedback</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register('feedback', { required: true })}
            />
            {errors.feedback && <span>Feedback é necessário</span>}
          </Form.Group>
          <Button type="submit" className="mt-3">Enviar</Button>
        </Form>
      </div>
    );
  }
  
  export default Contact;