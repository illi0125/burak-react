import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Stack>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Material UI Vite.js example
          </Typography>
        </Box>
        <Button variant="contained">Contained</Button>
      </Stack>
    </Container>
  );
}

export default App;
