import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Alert,
  Snackbar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Header from "./components/Header";
import UploadArea from "./components/UploadArea";
import ImageList from "./components/ImageList";
import PdfSettings from "./components/PdfSettings";
import ConvertButton from "./components/ConvertButton";
import { generatePdf } from "./utils/generatePdf";

const App = () => {
  const [images, setImages] = useState([]);

  const [settings, setSettings] = useState({
    pageSize: "a4",
    orientation: "portrait",
    margin: 10,
  });

  const [loading, setLoading] = useState(false);

  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const showNotification = (message, severity = "success") => {
    setNotification({
      open: true,
      message,
      severity,
    });
  };

  const handleFilesSelected = (files) => {
    const newImages = files.map((file) => ({
      id: `${file.name}-${file.lastModified}-${Math.random()}`,
      file,
      name: file.name,
      size: file.size,
      preview: URL.createObjectURL(file),
    }));

    setImages((previous) => [...previous, ...newImages]);
  };

  const handleRemove = (id) => {
    setImages((previous) => {
      const imageToRemove = previous.find(
        (image) => image.id === id
      );

      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.preview);
      }

      return previous.filter((image) => image.id !== id);
    });
  };

  const handleReorder = (newImages) => {
    setImages(newImages);
  };

  const handleClear = () => {
    images.forEach((image) => {
      URL.revokeObjectURL(image.preview);
    });

    setImages([]);
  };

  const handleConvert = async () => {
    if (!images.length) return;

    try {
      setLoading(true);

      await generatePdf(images, settings);

      showNotification(
        "Your PDF has been created successfully!"
      );
    } catch (error) {
      console.error(error);

      showNotification(
        "Something went wrong while creating the PDF.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      images.forEach((image) => {
        URL.revokeObjectURL(image.preview);
      });
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f8faff 0%, #ffffff 45%)",
      }}
    >
      <Header />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 } }}>
        <Stack
          alignItems="center"
          textAlign="center"
          spacing={1.5}
          sx={{ mb: 5 }}
        >
          <Chip
            icon={<LockOutlinedIcon />}
            label="100% private • Files stay on your device"
            size="small"
            sx={{
              fontWeight: 600,
              borderRadius: 2,
            }}
          />

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.7rem",
                md: "3.4rem",
              },
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
            }}
          >
            Convert images into
            <Box
              component="span"
              sx={{ color: "primary.main", ml: 1 }}
            >
              PDF
            </Box>
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 650,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            Combine multiple images into a high-quality PDF.
            Simple, fast and completely client-side.
          </Typography>
        </Stack>

        <UploadArea
          onFilesSelected={handleFilesSelected}
        />

        {images.length > 0 && (
          <>
            <ImageList
              images={images}
              onRemove={handleRemove}
              onReorder={handleReorder}
            />

            <PdfSettings
              settings={settings}
              onChange={setSettings}
            />

            <ConvertButton
              imageCount={images.length}
              onConvert={handleConvert}
              onClear={handleClear}
              loading={loading}
            />
          </>
        )}

        <Box
          sx={{
            mt: 7,
            textAlign: "center",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Your images are processed locally in your browser.
            Nothing is uploaded to a server.
          </Typography>
        </Box>
      </Container>

      <Snackbar
        open={notification.open}
        autoHideDuration={3500}
        onClose={() =>
          setNotification((prev) => ({
            ...prev,
            open: false,
          }))
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity={notification.severity}
          variant="filled"
          onClose={() =>
            setNotification((prev) => ({
              ...prev,
              open: false,
            }))
          }
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;