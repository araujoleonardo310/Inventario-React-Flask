import api from "../../services";

class TableServices {
  static listProduto() {
    return api.get("/produtos");
  }
}

export default TableServices;