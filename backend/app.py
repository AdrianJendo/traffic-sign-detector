from flask import Flask, request
import numpy as np
from tensorflow.keras.models import load_model

model = load_model("traffic_sign_classifier.h5")

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World"


@app.route("/classify_photo", methods=["POST"])
def classify_photo():
    print(request, request.method, request.data)
    # request.form
    # request.files
    return "Hello World"
