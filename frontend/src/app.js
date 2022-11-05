import { Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import TableComp from "./components/TableComp";

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Container fluid="md" className="mt-3">
      <ToastContainer />
      <Row>
        <Header title="Itens do inventário"/>
        <TableComp />
      </Row>
    </Container>
  );
};

export default App;
