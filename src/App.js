import "./styles.css";
import { Box, Button, Input } from "@mui/material";

export default function App() {
  return (
    <div className="App">
      <Box>
        <Input placeholder="Enter Something" color="grey" />
        <Button> Click Me</Button>
      </Box>
    </div>
  );
}
