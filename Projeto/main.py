from flask import render_template,Flask

app = Flask(__name__)

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

if __name__ == "__main__":
    app.run(port=5173,debug=True)