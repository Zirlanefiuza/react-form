import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from "./components/navigationBar/NavigationBar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
