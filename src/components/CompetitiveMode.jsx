// src/components/CompetitiveMode.jsx
import { useState } from "react";
import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import CodeEditor from "./CodeEditor";
import problems from "../data/problems";

const difficultyColors = {
  Easy: "green.300",
  Intermediate: "yellow.300",
  Hard: "red.300",
};

function CompetitiveMode() {
  const [selectedProblem, setSelectedProblem] = useState(problems[0]);
  const [code, setCode] = useState(`${selectedProblem.functionSignature}\n  // your code\n}`);
  const [score, setScore] = useState(null);
  const [passedCount, setPassedCount] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleProblemChange = (id) => {
    const prob = problems.find((p) => p.id === parseInt(id));
    setSelectedProblem(prob);
    setCode(`${prob.functionSignature}\n  // your code\n}`);
    setScore(null);
    setPassedCount(null);
    setErrorMessage(null);
  };

  const runTests = () => {
    setErrorMessage(null); // reset error message on every run

    const funcNameMatch = selectedProblem.functionSignature.match(/function\s+([^(]*)\(/);
    if (!funcNameMatch) {
      setScore(0);
      setPassedCount(0);
      setErrorMessage("Function signature is invalid.");
      return;
    }
    const funcName = funcNameMatch[1];

    const wrappedCode = `
      ${code}
      return ${funcName};
    `;

    let passed = 0;
    try {
      // eslint-disable-next-line no-new-func
      const userFunc = new Function(wrappedCode)();

      if (typeof userFunc !== "function") {
        setErrorMessage("Submitted code does not define a valid function.");
        setScore(0);
        setPassedCount(0);
        return;
      }

      let anyFail = false;

      selectedProblem.testCases.forEach(({ input, expected }) => {
        try {
          const output = userFunc(...input);
          if (JSON.stringify(output) === JSON.stringify(expected)) {
            passed += 1;
          } else {
            anyFail = true;
          }
        } catch {
          anyFail = true;
        }
      });

      setScore(Math.round((passed / selectedProblem.testCases.length) * 100));
      setPassedCount(passed);

      if (anyFail) {
        setErrorMessage("Some test cases failed. Please check your code.");
      } else {
        setErrorMessage(null);
      }
    } catch (err) {
      setErrorMessage("Error during code execution: " + err.message);
      setScore(0);
      setPassedCount(0);
    }
  };

  return (
    <Box display="flex" height="calc(100vh - 64px)" bg="#0f0a19" color="gray.200" overflow="hidden">
      {/* Sidebar for problem selection */}
      <Box w="250px" bg="#1a1a2e" p={3} overflowY="auto">
        <Text fontSize="xl" mb={3} fontWeight="bold">Problems</Text>
        {problems.map((prob) => (
          <Box
            key={prob.id}
            p={2}
            mb={2}
            cursor="pointer"
            bg={selectedProblem.id === prob.id ? "#2d2d44" : "transparent"}
            borderRadius="md"
            onClick={() => handleProblemChange(prob.id)}
            _hover={{ bg: "#2d2d44" }}
          >
            <Text fontWeight="semibold">{prob.title}</Text>
            <Text fontSize="sm" color={difficultyColors[prob.difficulty]}>
              {prob.difficulty}
            </Text>
          </Box>
        ))}
      </Box>

      {/* Main panel */}
      <Box flex="1" p={4} display="flex" flexDirection="column" overflow="hidden">
        <VStack align="start" spacing={2} maxH="30%" overflowY="auto">
          <Text fontSize="2xl" fontWeight="bold">{selectedProblem.title}</Text>
          <Text>{selectedProblem.description}</Text>
          <Text color={difficultyColors[selectedProblem.difficulty]} fontWeight="medium">
            Difficulty: {selectedProblem.difficulty}
          </Text>
        </VStack>

        <Box flex="1" overflow="hidden" mt={4}>
          <CodeEditor code={code} onChange={setCode} />
        </Box>

        <HStack mt={4}>
          <Button colorScheme="teal" onClick={runTests}>Run Code</Button>
          {score !== null && (
            <Text
              ml={4}
              fontWeight="semibold"
              color={score === 100 ? "green.400" : "yellow.300"}
            >
              Score: {score}%
            </Text>
          )}
        </HStack>

        {/* Error message when test cases fail */}
        {errorMessage && (
          <Box mt={2} p={2} bg="#8B0000" borderRadius="md">
            <Text color="white" fontWeight="bold">{errorMessage}</Text>
          </Box>
        )}

        <Divider my={3} borderColor="gray.600" />

        {/* Passed Test Cases Summary */}
        {passedCount !== null && (
          <Box mt={2} p={2} bg="#1e1e2f" borderRadius="md">
            {passedCount === selectedProblem.testCases.length ? (
              <Text color="green.400" fontWeight="bold" fontSize="md">
                🎉 All test cases passed! ({passedCount} / {selectedProblem.testCases.length})
              </Text>
            ) : (
              <Text color="blue.200">
                Test Cases Passed: {passedCount} / {selectedProblem.testCases.length}
              </Text>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default CompetitiveMode;
