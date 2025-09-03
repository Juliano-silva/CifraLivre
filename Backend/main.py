from flask import Flask, jsonify,render_template
from flask_cors import CORS
import os,subprocess

Path_comando = r"C:\Users\sustu\OneDrive\Pictures\Programação\Projetos Principais\CifraLivre\Frontend"

app = Flask(__name__)
CORS(app)  # Permite que o React acesse o Flask

# Rotas

@app.route("/")
def Home():
    return render_template("Home.html")

@app.route("/Home")
def Index():
    return render_template("index.html")

@app.route("/add")
def add():
    return render_template("add_urls.html")

@app.route("/settings")
def settings():
    return render_template("settings.html")

# Comandos
@app.route("/api/hello")
def hello():
    return jsonify(message="Olá do Flask!")

# Abrir o React Js e Flask Juntos 

subprocess.Popen(
    "npm run dev",
    cwd=Path_comando,
    shell=True,
    stdout=subprocess.DEVNULL, # Vai Ignorar a Saída
    stderr=subprocess.DEVNULL, # Vai Ignorar os erros
    creationflags=subprocess.CREATE_NO_WINDOW # Não Abre a Janela
)

if __name__ == "__main__":
    print("Abrir o React JS http://localhost:5174")
    app.run(debug=True, port=5000)
