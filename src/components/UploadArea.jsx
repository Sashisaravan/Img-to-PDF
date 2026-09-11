import React from "react";
import { useDropzone } from "react-dropzone";
import {
    Box,
    Typography,
    Button,
    Stack,
    Paper,
    alpha,
    useTheme,
} from "@mui/material";
import { FiUploadCloud, FiImage } from "react-icons/fi";

const UploadArea = ({ onFilesSelected }) => {
    const theme = useTheme();

    const onDrop = (acceptedFiles) => {
        onFilesSelected(acceptedFiles);
    };

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
            "image/webp": [".webp"],
        },
        multiple: true,
        noClick: true,
    });

    return (
        <Paper
            {...getRootProps()}
            elevation={0}
            sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                border: "2px dashed",
                borderColor: isDragActive
                    ? "primary.main"
                    : alpha(theme.palette.primary.main, 0.25),
                background: isDragActive
                    ? alpha(theme.palette.primary.main, 0.06)
                    : alpha(theme.palette.primary.main, 0.015),
                textAlign: "center",
                transition: "all 0.2s ease",
                cursor: "pointer",
                "&:hover": {
                    borderColor: "primary.main",
                    background: alpha(theme.palette.primary.main, 0.04),
                },
            }}
        >
            <input {...getInputProps()} />

            <Stack spacing={2} alignItems="center">
                <Box
                    sx={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: alpha(theme.palette.primary.main, 0.1),
                        color: "primary.main",
                    }}
                >
                    {isDragActive ? (
                        <FiUploadCloud size={34} />
                    ) : (
                        <FiImage size={34} />
                    )}
                </Box>

                <Box>
                    <Typography variant="h6" fontWeight={700}>
                        {isDragActive
                            ? "Drop your images here"
                            : "Upload images to convert"}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.7 }}
                    >
                        Drag & drop your images here, or browse from your device
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    size="large"
                    startIcon={<FiUploadCloud size={34} />}
                    onClick={open}
                    sx={{
                        borderRadius: 2.5,
                        px: 3,
                        py: 1.2,
                        textTransform: "none",
                        fontWeight: 700,
                        boxShadow: "none",
                    }}
                >
                    Browse Images
                </Button>

                <Typography variant="caption" color="text.secondary">
                    JPG, JPEG, PNG or WEBP
                </Typography>
            </Stack>
        </Paper>
    );
};

export default UploadArea;