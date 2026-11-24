---
title: Vision-Based Robot Navigation
status: Ongoing Research
statusKind: ongoing
role: Independent Researcher
order: 2
description: A comparative review of classical geometric SLAM and deep-learning-based approaches to vision-based robot navigation, across structured indoor and urban settings and unstructured outdoor and agricultural ones.
themes:
  - Computer Vision
  - Robotics
  - SLAM
  - Deep Learning
  - Agricultural Technology
image: ""
---

## What I'm Comparing

A robot that navigates with a camera has to answer two questions at the same time: *where am I*, and *what does the world around me look like?* This is the problem of **SLAM** (Simultaneous Localisation and Mapping).

This review surveys two families of approaches side by side:

- **Classical geometric SLAM**: hand-designed methods built on geometry, tracking visual features across frames.
- **Deep-learning-based approaches**: methods that learn parts of the problem directly from data.

## How They're Evaluated

Using a structured literature-review methodology, with shared benchmarks and evaluation criteria applied to each approach, the comparison looks at:

- **Accuracy**: how well the robot knows where it is.
- **Computational cost**: how much processing it needs, which matters for small robots with limited hardware.
- **Robustness**: how well it holds up when conditions are messy or change.

## Where It Matters

Most navigation systems are tested in **structured** environments: corridors, roads, buildings with straight edges. **Unstructured outdoor and agricultural** environments are much harder. Rows of crops look alike, lighting changes through the day, and the ground is uneven. Comparing how each approach behaves across these settings is the core of this work.

## Why This Connects to Kisan AI

Kisan AI already uses computer vision to check crop leaves for disease. This research proposes how its findings could extend that **computer-vision module into a physically navigating field robot**, one that would need to find its way through exactly the kind of environment where navigation is hardest.

> This research is **ongoing** and has not been published.

<span class="todo">Edit: add your current progress and any early observations.</span>
