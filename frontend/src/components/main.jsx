import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import "css/main.css";

export default function Main() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [imageClassified, setImageClassified] = useState(null);

  const handleFileUpload = (e) => {
    setImageClassified(false);
    setImage(e.target.files[0]);
  };

  const classifyImage = () => {
    const formData = new FormData();
    formData.append("image", image, image.name);

    axios.post("/api/classify_photo", formData).then((resp) => {
      if (resp.data.error) {
        alert(resp.data.error);
      } else {
        setImageClassified(true);
        setPrediction(resp.data.sign_prediction);
      }
    });
  };

  return (
    <div>
      <Typography variant="h2" sx={{ padding: "30px" }}>
        Upload a Traffic Sign
      </Typography>
      <input
        className="img"
        type="file"
        name="myImage"
        onChange={(e) => handleFileUpload(e)}
        accept="image/png, image/jpg"
      />
      {image && (
        <div className="content">
          <img
            src={URL.createObjectURL(image)}
            alt="Error"
            className="imagePreview"
          />
          <div className="classifyDiv">
            <Button
              variant="contained"
              onClick={() => classifyImage()}
              disabled={imageClassified}
            >
              Classify Image
            </Button>
          </div>
        </div>
      )}
      {prediction && (
        <div>
          <Typography variant="h5">Prediction:</Typography>
          <Typography variant="h5">{prediction}</Typography>
        </div>
      )}
    </div>
  );
}
