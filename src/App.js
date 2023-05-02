import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Main from './Components/Main';
import './App.css';

function App() {
  // mui components
  const font = "'Libre Franklin', sans-serif"
  const fontTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: font,
    },
  })

  return (
    <ThemeProvider theme={fontTheme}>
      <CssBaseline enableColorScheme />
      <Main />
    </ThemeProvider>
  );
}

export default App;
