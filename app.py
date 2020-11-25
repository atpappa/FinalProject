from flask import Flask, render_template, redirect, request
# import predict_model
import time

# Create an instance of Flask
app = Flask(__name__)

@app.route("/")
def home():
    # Return template and data
    return render_template("index.html")
    

@app.route("/jockey")
def misery():

    return render_template("j&t.html")

@app.route("/track")
def track():

    return render_template("track.html")

@app.route("/strategies")
def track():

    return render_template("strategies.html")
    

# @app.route("/predict")
# def stocks():
#     return render_template("stockSearch.html")

# @app.route("/predict", methods=['POST'])
# def predict_input():
#     in1 = request.form['odds']
#     in2 = request.form['bankroll']

@app.route("/home")
def mainpage():
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
