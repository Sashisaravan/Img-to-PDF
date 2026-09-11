import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Stack,
    useTheme,
} from "@mui/material";
import { FiFileText } from "react-icons/fi";

const Header = () => {
    const theme = useTheme();

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                background: "transparent",
                color: theme.palette.text.primary,
                borderBottom: `1px solid ${theme.palette.divider}`,
            }}
        >
            <Toolbar
                sx={{
                    maxWidth: 1200,
                    width: "100%",
                    mx: "auto",
                    px: { xs: 2, md: 0 },
                }}
            >
                <Stack direction="row" spacing={1.2} alignItems="center">
                    <Box
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: theme.palette.primary.main,
                            color: "#fff",
                        }}
                    >
                        <FiFileText size={22} />
                    </Box>

                    <Box>
                        <Typography
                            variant="h6"
                            fontWeight={800}
                            sx={{ lineHeight: 1.1 }}
                        >
                            Img2PDF
                        </Typography>

                        <Typography variant="caption" color="text.secondary">
                            Simple image to PDF converter
                        </Typography>
                    </Box>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;