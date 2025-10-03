from flask import Flask, jsonify,render_template,request,send_from_directory
from flask_cors import CORS
import os,subprocess
from Global import GlobalImportes
from youtubeDownloader import DownloadMusic
from dbService import DROP_ALL,Create_All,SelectItem,Clear_Table


app = Flask(__name__)
CORS(app)  # Permite que o React acesse o Flask

# Comandos
@app.route("/api/Select",methods=["GET"])
def Select():
    return jsonify(SelectItem("Musicas"))

@app.route("/musicPlay/<path:filename>")
def musicFolder(filename):
    return send_from_directory(os.path.join(GlobalImportes.Path_Download),filename)

@app.route("/api/SelectGenero",methods=["GET"])
def SelectGenero():
    return jsonify(SelectItem("Generos"))
 
@app.route("/api/Download",methods=["GET","POST"])
def Download():
    dados = request.get_json()
    DownloadMusic(str(dados["url"]))
    return jsonify({"message": f"Recebi a URL: {dados['url']}"}), 200

@app.route("/api/ClearCache",methods=["POST"])
def ClearCache():
    dados = request.get_json()
    Clear_Table(dados["table"])
    return jsonify({"message": f"Tabela {dados['table']} limpa com sucesso!"}), 200

# Abrir o React Js e Flask Juntos 

subprocess.Popen(
    "npm run dev",
    shell=True,
    stdout=subprocess.DEVNULL, # Vai Ignorar a Saída
    stderr=subprocess.DEVNULL, # Vai Ignorar os erros
    creationflags=subprocess.CREATE_NO_WINDOW # Não Abre a Janela
)

if __name__ == "__main__":
    print("Abrir o React JS http://localhost:5173")
    app.run(debug=True, port=5000)
 