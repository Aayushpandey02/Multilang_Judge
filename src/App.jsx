import { Box, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import CompetitiveMode from "./components/CompetitiveMode";

function App() {
  const [mode, setMode] = useState("editor"); // or 'competitive'

  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <HStack mb={4}>
        <Button onClick={() => setMode("editor")} colorScheme={mode === "editor" ? "blue" : "gray"}>Code Editor</Button>
        <Button onClick={() => setMode("competitive")} colorScheme={mode === "competitive" ? "blue" : "gray"}>Competitive Mode</Button>
      </HStack>
      {mode === "editor" ? <CodeEditor /> : <CompetitiveMode />}
    </Box>
  );
}

export default App;
