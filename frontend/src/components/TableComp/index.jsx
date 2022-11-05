import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import TableServices from "./services";

import "./index.css";
import ModalForm from "../ModalForm";

const TableComp = () => {
  const [produtos, setProdutos] = useState([]);

  const ListProdutos = async () => {
    try {
      const { data } = await TableServices.listProduto();
      setProdutos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ListProdutos();
  }, []);

  return (
    <>
    <ModalForm ListProdutos={ListProdutos}/>
      <Table className="container__table">
        <thead>
          <tr>
            <th className="th">ID</th>
            <th className="th">Nome do item</th>
            <th className="th">Data de criação</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {produtos.map(({ id, nome, dataDeCriacao }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{nome}</td>
              <td>{dataDeCriacao}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableComp;
