import React from "react";
import {
  Paper,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Box,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const PdfSettings = ({ settings, onChange }) => {
  const handleChange = (field) => (event) => {
    onChange({
      ...settings,
      [field]: event.target.value,
    });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 4,
        p: { xs: 2.5, md: 3 },
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
            borderRadius: 2,
            backgroundColor: "action.hover",
            color: "primary.main",
          }}
        >
          <SettingsOutlinedIcon />
        </Box>

        <Box>
          <Typography fontWeight={800}>
            PDF Settings
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Customize your generated document
          </Typography>
        </Box>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Page Size</InputLabel>

            <Select
              value={settings.pageSize}
              label="Page Size"
              onChange={handleChange("pageSize")}
            >
              <MenuItem value="a4">A4</MenuItem>
              <MenuItem value="letter">Letter</MenuItem>
              <MenuItem value="a3">A3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Orientation</InputLabel>

            <Select
              value={settings.orientation}
              label="Orientation"
              onChange={handleChange("orientation")}
            >
              <MenuItem value="portrait">Portrait</MenuItem>
              <MenuItem value="landscape">Landscape</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Margin</InputLabel>

            <Select
              value={settings.margin}
              label="Margin"
              onChange={handleChange("margin")}
            >
              <MenuItem value={5}>Small</MenuItem>
              <MenuItem value={10}>Medium</MenuItem>
              <MenuItem value={20}>Large</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PdfSettings;