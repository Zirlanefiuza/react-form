import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className="notfound-container">
      <h1>404 - Não encontrado</h1>
      <p>A página que você procura não existe.</p>
      <Button onClick={() => navigate('/')} className='btn-not'>Voltar para casa</Button>
    </div>
  );
}

export default NotFound;
