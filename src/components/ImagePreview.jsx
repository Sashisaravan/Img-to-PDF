import React from "react";
import {
    Card,
    CardMedia,
    Box,
    IconButton,
    Typography,
    Stack,
    alpha,
    useTheme,
} from "@mui/material";
import { FiTrash2, FiMove } from "react-icons/fi";

const ImagePreview = ({
    image,
    index,
    onRemove,
    dragHandleProps,
}) => {
    const theme = useTheme();

    return (
        <Card
            elevation={0}
            sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                border: `1px solid ${theme.palette.divider}`,
                background: theme.palette.background.paper,
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    zIndex: 2,
                    minWidth: 28,
                    height: 28,
                    px: 0.8,
                    borderRadius: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: alpha("#000", 0.65),
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 13,
                }}
            >
                {index + 1}
            </Box>

            <IconButton
                {...dragHandleProps}
                size="small"
                sx={{
                    position: "absolute",
                    top: 7,
                    right: 44,
                    zIndex: 2,
                    color: "#fff",
                    background: alpha("#000", 0.55),
                    "&:hover": {
                        background: alpha("#000", 0.75),
                    },
                }}
            >
                <FiMove size={17} />
            </IconButton>

            <IconButton
                size="small"
                onClick={() => onRemove(image.id)}
                sx={{
                    position: "absolute",
                    top: 7,
                    right: 7,
                    zIndex: 2,
                    color: "#fff",
                    background: alpha(theme.palette.error.main, 0.85),
                    "&:hover": {
                        background: theme.palette.error.main,
                    },
                }}
            >
                <FiTrash2 size={17} />
            </IconButton>

            <CardMedia
                component="img"
                image={image.preview}
                alt={image.name}
                sx={{
                    width: "100%",
                    height: 190,
                    objectFit: "cover",
                    background: theme.palette.action.hover,
                }}
            />

            <Box sx={{ p: 1.5 }}>
                <Typography
                    variant="body2"
                    fontWeight={600}
                    noWrap
                    title={image.name}
                >
                    {image.name}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                    {(image.size / 1024 / 1024).toFixed(2)} MB
                </Typography>
            </Box>
        </Card>
    );
};

export default ImagePreview;