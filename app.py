from flask import Flask, render_template, redirect, request
import pickle
import numpy as np
from sklearn.linear_model import LinearRegression


# Create an instance of Flask
app = Flask(__name__)

@app.route("/")
def home():
    # Return template and data
    return render_template("index.html")
    

@app.route("/jockey")
def jockeyanalysis():

    return render_template("j&t.html")

@app.route("/track")
def track():

    return render_template("track.html")

@app.route("/strategies")
def strategies():


    return render_template("strategies.html")
    
@app.route("/predict")
def predict():
    formData = {
    "in1":4.45,
    "in2":1000
    }
    return render_template("predict.html", formData=formData)

@app.route("/predict", methods=['POST'])
def predictInput():
    model = pickle.load(open("Resources/final_odds_analysis_model.sav",'rb'))
    in1 = float(request.form['odds'])
    in2 = float(request.form['bankroll'])
    prediction = round(float(model.predict(np.array([[in1,in2]]))),2)

    formData = {
    "odds":request.form['odds'],
    "bankroll":request.form['bankroll'],
    "output":prediction
    }
    return render_template("predict.html", formData=formData)


@app.route("/home")
def mainpage():
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
