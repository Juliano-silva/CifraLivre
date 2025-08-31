from flask import Flask, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)  # Permite que o React acesse o Flask

@app.route("/api/hello")
def hello():
    return jsonify(message="Olá do Flask!")

if __name__ == "__main__":
    subprocess.run(r"start cmd cd c:\Users\sustu\OneDrive\Pictures\Programação\Projetos Principais\CifraLivre\Frontend",shell=True)
    app.run(debug=True, port=5000)
