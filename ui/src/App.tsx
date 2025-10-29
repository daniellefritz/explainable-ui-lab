import { MantineProvider, Container, Title, Text } from "@mantine/core";
import  ExplanationViewer  from "./components/ExplanationViewer";

export default function App() {
  return (
    <MantineProvider>
      <Container size="lg" py="xl">
        <Title order={2} mb="sm">
          Explainable UI Lab
        </Title>
        <Text mb="xl" c="dimmed">
          Visualizing SHAP explanations for model predictions
        </Text>

        <ExplanationViewer />

        <Text mt="lg" size="sm" c="dimmed">
          Built with React, TypeScript, ECharts, and Mantine.
        </Text>
      </Container>
    </MantineProvider>
  );
}
