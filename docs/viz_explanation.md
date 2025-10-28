## 🩺 How These Features Appear in the SHAP Waterfall

In the SHAP waterfall visualizations, each bar corresponds to one of these measured features.
Features that push the model’s prediction **toward malignant** (higher probability) extend to the **right**, while those pushing **toward benign** extend to the **left**.
The **“worst”** features — like *worst concave points*, *worst radius*, or *worst perimeter* — often dominate these charts because they capture the most extreme abnormalities in the sample.

When you read the waterfall, you’re essentially watching the model reason through the evidence:

> “These cell shapes look irregular (concavity high) and large (radius high), so I’m leaning malignant.”

This section explains what each of those features actually represents and why they matter in the model’s decision process.

---

