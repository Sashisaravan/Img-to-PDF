import React from "react";
import {
  Button,
  Stack,
  Typography,
  Box,
  alpha,
  useTheme,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";

const ConvertButton = ({
  imageCount,
  onConvert,
  onClear,
  loading,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 4 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", sm: "center" }}
        sx={{
          p: 2,
          borderRadius: 3,
          background: alpha(theme.palette.primary.main, 0.04),
          border: `1px solid ${alpha(
            theme.palette.primary.main,
            0.12
          )}`,
        }}
      >
        <Box>
          <Typography fontWeight={700}>
            Ready to create your PDF?
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {imageCount} {imageCount === 1 ? "image" : "images"} will be
            combined into one PDF
          </Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<DeleteSweepOutlinedIcon />}
            onClick={onClear}
            disabled={loading}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              fontWeight: 600,
            }}
          >
            Clear
          </Button>

          <Button
            variant="contained"
            startIcon={<PictureAsPdfIcon />}
            onClick={onConvert}
            disabled={loading || imageCount === 0}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              px: 2.5,
              fontWeight: 700,
              boxShadow: "none",
            }}
          >
            {loading ? "Creating..." : "Convert to PDF"}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ConvertButton;