import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import "css/main.css";

export default function Main() {
  const [image, setImage] = useState(null);

  const handleFileUpload = (e) => {
    const image = e.target.files[0];
    setImage(URL.createObjectURL(image));
  };

  const classifyImage = () => {
    axios.post("/api/classify_photo").then((resp) => {
      console.log(resp.data);
    });
  };

  return (
    <div>
      <Typography variant="h2">Upload an image</Typography>
      <input
        className="img"
        type="file"
        name="myImage"
        onChange={(e) => handleFileUpload(e)}
        accept="image/png, image/jpg"
      />
      {image && (
        <div className="content">
          <img src={image} alt="Error" className="imagePreview" />
          <div className="classifyDiv">
            <Button variant="contained" onClick={() => classifyImage()}>
              Classify Image
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
