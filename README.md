# 🧠 Explainable UI Lab

**Goal:** Explore hands-on techniques for visualizing and understanding machine learning model explanations — bridging *backend explainability* (e.g., SHAP) and *frontend storytelling* (React + ECharts).

This project grew from my curiosity about how to make AI systems more **transparent, trustworthy, and human-understandable** through effective UI design.

---

## 💡 What’s Inside

### `/notebooks`

Jupyter notebooks for experimentation and data exploration.
`01_shap_intro.ipynb` — trains a simple gradient-boosting model on the Breast Cancer dataset and generates SHAP explanations exported as JSON.

### `/artifacts`

Stores exported explanation data (e.g., `explanations.json`) for use in frontend visualizations.

### `/ui` *(planned)*

React + TypeScript prototypes for rendering explainability charts using Mantine and ECharts.

---

## ⚙️ Getting Started

### Setup

```bash
git clone https://github.com/<your-username>/explainable-ui-lab.git
cd explainable-ui-lab
python -m venv .venv
source .venv/bin/activate   # or .venv\Scripts\Activate.ps1 on Windows
pip install -r requirements.txt
```

### Run the notebook

```bash
jupyter notebook notebooks/01_shap_intro.ipynb
```

The notebook trains a simple model, computes SHAP values, and exports JSON explanations.

---

## 🧩 Why this matters

Explainability isn’t just math — it’s *design*.
This repo is about experimenting with how **UI and visualization** can make a model’s reasoning visible, intuitive, and ethically grounded.
Current experiments focus on:

* SHAP and LIME explanation data
* Waterfall and bar-based feature impact charts
* Monotonicity and business-logic consistency visual cues

---

## 🔮 Next Steps

* Add a React/ECharts visualization that reads the SHAP JSON and renders feature-impact charts.
* Experiment with counterfactual “what-if” sliders for interactive exploration.
* Document design patterns for trustworthy explainability dashboards.

---

## 🪶 Credits & Inspiration

Built while learning about Explainable AI (XAI) through courses and hands-on exploration.
Dataset: [UCI Wisconsin Diagnostic Breast Cancer](https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+%28Diagnostic%29)
Libraries: `scikit-learn`, `shap`, `matplotlib`, `pandas`, `numpy`

Perfect. Here’s a closing section that sounds like you — thoughtful, grounded, and curious without slipping into corporate-speak:

---

## 🌙 Personal Note

This project started as a spark — a mix of curiosity and frustration. I wanted to *see* what AI models were doing, not just trust their math.
My background is in frontend development and design thinking, so I’m exploring how explainability can live at the intersection of **data, empathy, and UI**.

The dream is to make machine learning systems feel less like mysterious oracles and more like collaborators we can understand, question, and improve.

Every experiment here is a step toward that — turning complex algorithms into conversations we can actually have with the machines we build.

---

site is live at: https://daniellefritz.github.io/explainable-ui-lab/
