import React, { useState } from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import ImagePreview from "./ImagePreview";

const ImageList = ({ images, onRemove, onReorder }) => {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDrop = (targetIndex) => {
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      return;
    }

    const newImages = [...images];
    const [draggedImage] = newImages.splice(draggedIndex, 1);

    newImages.splice(targetIndex, 0, draggedImage);

    onReorder(newImages);
    setDraggedIndex(null);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={1}
        sx={{ mb: 2 }}
      >
        <Box>
          <Typography variant="h6" fontWeight={800}>
            Your Images
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Drag images to change their PDF order
          </Typography>
        </Box>

        <Typography
          variant="body2"
          fontWeight={700}
          color="primary.main"
        >
          {images.length} {images.length === 1 ? "image" : "images"}
        </Typography>
      </Stack>

      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={image.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => handleDrop(index)}
            sx={{
              opacity:
                draggedIndex === index ? 0.5 : 1,
              transition: "opacity 0.2s ease",
              cursor: "grab",
            }}
          >
            <ImagePreview
              image={image}
              index={index}
              onRemove={onRemove}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageList;