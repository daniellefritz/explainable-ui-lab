export type Contribution = { feature: string; weight: number };
export type Explanation = {
  id: string;
  method: 'shap' | 'lime';
  baseValue: number;
  prediction: number;
  input: Record<string, number>;
  contributions: Contribution[];
};
