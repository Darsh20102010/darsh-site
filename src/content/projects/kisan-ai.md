---
title: Kisan AI
subtitle: Building AI for real-world agricultural problems.
role: Founder / Builder
status: Self-built · Live
statusKind: project
order: 1
featured: true
description: Kisan AI is a self-built AI assistant designed to support farmers by combining crop price prediction, weather forecasting, crop suggestion, computer vision, and language translation into a single accessible tool.
image: /images/kisan-ai/banner.jpg
portrait: /images/kisan-ai/today.jpg
demo: https://kisaan-ai-farm.netlify.app/
location: Live web app for farmers across the districts of Andhra Pradesh and Telangana
features:
  - name: Crop Price Prediction
    text: Tracks prices for the crop a farmer is growing, alongside MSP figures, so selling decisions are less of a guess.
  - name: Weather Forecasting
    text: A local forecast with 3-day weather warnings, plus season forecasts for drought from an XGBoost model.
  - name: Crop Suggestion
    text: Ranks crops for a district, soil and sowing date by the chance of bad weather at flowering and harvest.
  - name: Computer Vision
    text: Suggests the likely disease from a photo of a cotton, maize, paddy or tomato leaf. The photo stays on the phone.
  - name: Language Translation
    text: Works in six languages (English, Telugu, Kannada, Hindi, Tamil and Malayalam) with voice input.
tech:
  - Machine Learning
  - XGBoost
  - Computer Vision
  - Multilingual (6 languages)
  - Open-Meteo weather data
pipeline:
  - k: Problem
    v: Farmers make high-stakes decisions with scattered information.
  - k: Research
    v: District-level agro-climatic zones, decades of weather data.
  - k: AI Models
    v: Season forecasting, crop ranking, leaf disease detection.
  - k: Integration
    v: Weather, prices, planning, vision and Q&A in one app.
  - k: User Accessibility
    v: Six languages, voice input, plain words, no account needed.
  - k: Real-World Application
    v: Live for farmers in Andhra Pradesh and Telangana.
gallery:
  - label: Six languages, no account needed
    src: /images/kisan-ai/languages.jpg
  - label: Today — weather and warnings
    src: /images/kisan-ai/today.jpg
  - label: Plan a crop
    src: /images/kisan-ai/plan.jpg
  - label: Check a sick leaf
    src: /images/kisan-ai/leaf-check.jpg
  - label: Ask a question
    src: /images/kisan-ai/ask.jpg
---

## 01 — The Problem

Farming is a chain of decisions made under uncertainty: what to plant, when the weather will turn, whether a leaf is diseased, and when prices make it worth selling. The information that could help is spread across different places, often written in technical language, and often not in the farmer's own language.

<span class="todo">Edit: describe the specific problem you saw, and what made you want to work on it.</span>

## 02 — The Idea

Instead of building one more single-purpose tool, I wanted to put **five capabilities behind one simple assistant**. A farmer should not have to know which model answers which question. They pick their district once, and every forecast, warning and suggestion follows from there.

## 03 — The Technology

I designed and built Kisan AI end to end.

- **Season forecasting.** An XGBoost model learned from daily rainfall and soil moisture from 1981 onwards, cyclone tracks, and El Niño and Indian Ocean conditions. It is only used where it beat past averages in two earlier periods, and it was then tested on 2019–2025, years it never saw. For drought it is 6% better than past averages. For heavy rain and cyclones it didn't beat them, so the app honestly shows the historical chance instead.
- **Crop suggestion and planning.** Crops are ranked for a district, soil and sowing date by the chance of bad weather at flowering and harvest. Every district in Andhra Pradesh and Telangana is mapped to its agro-climatic zone.
- **Leaf disease detection.** A computer vision model for cotton, maize, paddy and tomato leaves runs on the phone, so the photo never leaves it.
- **Language.** Six languages and voice input.
- **Ask.** Answers come from the app's own data and a checked list of answers, not from the open internet.

## 04 — Building the Product

The hardest part was not any single model. It was making separate systems work together as one product: the district a farmer picks drives the weather, the warnings, the crop plan and the season forecast, and the farmer sees one clear screen called **Today**.

## 05 — Designing for Users

The people Kisan AI is built for are experts in farming, not in technology. So it works without an account, keeps data on the phone (nothing is uploaded), speaks six languages, and uses plain words like *"Check a sick leaf"*. It is also honest about its limits: it shows how accurate each model is, and reminds farmers to confirm with their agriculture officer before spending money or spraying.

## 06 — What I Learned

Kisan AI taught me how to **integrate multiple AI systems** into a single working product, and that designing technology for **real-world users** is as hard and as important as building the models themselves.

It also taught me how big the gap between the lab and the field is. On clear photos of single leaves, the leaf model is right 99% of the time. On real-world photos, its first answer is right 59% of the time, and the right answer is in its top three 90% of the time. That gap, between controlled conditions and messy real ones, is exactly what my robot navigation research is about.

## 07 — What's Next?

The next step is taking Kisan AI off the screen and into the field. My [ongoing research on vision-based robot navigation](/research/robot-navigation) explores how Kisan AI's computer-vision module could be extended into a physically navigating field robot.

<span class="todo">Edit: add your other future plans (for example expert review of the advice, more crops, or price forecasts).</span>

**Related writing:** [Why rural AI can't wait for the cloud](/blog/07-why-rural-ai-cant-wait-for-the-cloud) · [Why federated learning is the future of rural privacy](/blog/10-why-federated-learning-is-the-future-of-rural-privacy)
