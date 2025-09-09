from flask import Flask, jsonify,render_template,request
from flask_cors import CORS
import os,subprocess
from Global import GlobalImportes
from youtubeDownloader import DownloadMusic
from dbService import DROP_ALL,Create_All


app = Flask(__name__)
CORS(app)  # Permite que o React acesse o Flask

# Comandos
@app.route("/api/hello")
def hello():
    return jsonify(message="Olá do Flask!")

@app.route("/api/Download",methods=["GET","POST"])
def Download():
    dados = request.get_json()
    DownloadMusic(str(dados["url"]))
    return jsonify({"message": f"Recebi a URL: {dados['url']}"}), 200

# Abrir o React Js e Flask Juntos 

subprocess.Popen(
    "npm run dev",
    cwd=GlobalImportes.Path_comando,
    shell=True,
    stdout=subprocess.DEVNULL, # Vai Ignorar a Saída
    stderr=subprocess.DEVNULL, # Vai Ignorar os erros
    creationflags=subprocess.CREATE_NO_WINDOW # Não Abre a Janela
)

if __name__ == "__main__":
    print("Abrir o React JS http://localhost:5174")
    app.run(debug=True, port=5000)
