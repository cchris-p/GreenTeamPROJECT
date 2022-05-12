import { createTheme } from "@mui/material/styles";

const themeUserList = createTheme({
  palette: {
    primary: { main: "#a9cbd6" },
    secondary: { main: "#a9cbd6" },
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        markLabel: {
          color: "#ffffff",
        },
      },
    },
  },
});

export default themeUserList;
