import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar></NavBar>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add></Add>
      </Box>
    </ThemeProvider>
  );
}

export default App;
