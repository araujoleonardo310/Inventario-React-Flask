import api from "../../services";

class ModalServices {
  static AddProduto(data) {
    return api.post("/produto-add", data);
  }
}

export default ModalServices;