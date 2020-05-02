from flask import Flask, render_template

# Set up Flask
app = Flask(__name__)

# Set up app routes
@app.route("/")
def index():
    return render_template("index.html")
    #return "Hello flask"

# Tell Flask to run
if __name__ == "__main__":
    app.run()