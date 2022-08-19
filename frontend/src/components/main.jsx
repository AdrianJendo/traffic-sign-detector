import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import "css/main.css";

export default function Main() {
  const [image, setImage] = useState(null);

  const handleFileUpload = (e) => {
    console.log(e);
    setImage(true);
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
          <div>Image preview</div>
          <Button variant="contained">Classify Image</Button>
        </div>
      )}
    </div>
  );
}
