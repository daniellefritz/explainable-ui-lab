import { useMemo, useState } from 'react';
import { Card, Group, Select, Text, Badge } from '@mantine/core';
import { useExplanations } from '../hooks/useExplanations';
import FeatureImpactChart from './FeatureImpactChart';
import type { Explanation } from '../types';

export default function ExplanationViewer() {
  const { data, loading, error } = useExplanations('/explainable-ui-lab/explanations.json');
  const [id, setId] = useState<string | null>(null);

  const exp: Explanation | undefined = useMemo(() => {
    if (!data.length) return undefined;
    const chosen = data.find(e => e.id === id) ?? data[0];
    if (!id && data[0]) setId(data[0].id);
    return chosen;
  }, [data, id]);

  if (loading) return <Text>Loading explanations…</Text>;
  if (error) return <Text c="red">Failed to load explanations.</Text>;
  if (!exp) return <Text>No explanations available.</Text>;

  return (
    <Card radius="lg" withBorder>
      <Group justify="space-between" mb="sm">
        <Group gap="xs">
          <Text fw={700}>Explanation</Text>
          <Badge variant="light">{exp.method.toUpperCase()}</Badge>
        </Group>
        <Select
          value={id}
          onChange={setId}
          data={data.map(e => ({ value: e.id, label: e.id }))}
          allowDeselect={false}
          w={220}
        />
      </Group>

      <Group gap="lg" mb="sm">
        <Badge color="gray" variant="outline">Base: {exp.baseValue.toFixed(3)}</Badge>
        <Badge color="teal" variant="filled">Prediction: {exp.prediction.toFixed(3)}</Badge>
      </Group>

      <FeatureImpactChart exp={exp} topK={12} />

      <Text size="sm" c="dimmed" mt="sm">
        Right = increases predicted risk; Left = decreases. Bars show additive impact relative to base.
      </Text>
    </Card>
  );
}
