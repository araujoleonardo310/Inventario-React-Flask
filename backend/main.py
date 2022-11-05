from flask import Flask, make_response, jsonify, request
from flask_cors import CORS
from bd import Inventario

app = Flask(__name__)
CORS(app)


@app.route('/produtos', methods=["GET"])
def get_db():
    return make_response(
        jsonify(Inventario)
    )


@app.route('/produto-add', methods=["POST"])
def create_produto():
    produto = request.json
    indice = len(Inventario) + 1
    produto['id'] = indice
    Inventario.append(produto)
    return produto


app.run()
