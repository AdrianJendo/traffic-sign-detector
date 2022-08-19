import pandas as pd
import numpy as np
from PIL import Image
from sklearn.metrics import accuracy_score
from tensorflow.keras.models import load_model

# accuracy on test dataset
model = load_model("traffic_sign_classifier.h5")

y_test = pd.read_csv("./data/Test.csv")
labels = y_test["ClassId"].values
imgs = y_test["Path"].values

data = []

print(imgs)

for img in imgs:
    image = Image.open("./data/{}".format(img))
    image = image.resize((30, 30))
    data.append(np.array(image))

x_test = np.array(data)
pred = np.argmax(model.predict(x_test), axis=-1)

print(labels)
print(pred)

print(accuracy_score(labels, pred))
