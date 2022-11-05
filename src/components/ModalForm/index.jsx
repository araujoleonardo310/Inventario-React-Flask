import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { Button, Modal, Form } from "react-bootstrap";
import "./index.css";
import ModalServices from "./services";
import { toast } from "react-toastify";

const ModalForm = ({ ListProdutos }) => {
  const [produto, setProduto] = useState({
    dataDeCriacao: new Date().toLocaleDateString(),
    nome: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSaveProduto = async (e) => {
    e.preventDefault();
    const payload = {
      nome: produto.nome,
      dataDeCriacao: produto.dataDeCriacao,
    };
    try {
      await ModalServices.AddProduto(payload);
      toast.sucess("Adicionado com sucesso.");
      ListProdutos();
    } catch (error) {
      toast.error("Error ao adicionar produto...");
      console.log(error);
    }
  };

  return (
    <>
      <div className="container__btn text-end">
        <Button className="btn bton__addItem" onClick={handleShow}>
          <BsPlusLg /> Novo item
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Form className="container__form" onSubmit={handleSaveProduto}>
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Produto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              placeholder="Digite nome do produto"
              type="text"
              value={produto.nome}
              onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="btn__save"
              onClick={handleSaveProduto}
            >
              Salvar
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalForm;
