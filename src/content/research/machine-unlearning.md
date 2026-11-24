---
title: Machine Unlearning
status: Published Research
statusKind: published
role: Independent Researcher
order: 1
description: An independently authored research paper studying techniques that allow trained AI models to selectively "forget" the influence of specific data points. Published in the peer-reviewed IOSR Journal of Computer Engineering in Grade 11.
venue: "IOSR Journal of Computer Engineering (IOSR-JCE) · Vol. 27, Issue 6, Ser. 1 · pp. 102–110 · Nov–Dec 2025 · DOI 10.9790/0661-270601102110"
paperTitle: "Machine Unlearning: A Qualitative Review of Theoretical, Regulatory, and Ethical Dimensions"
themes:
  - Machine Learning
  - AI
  - Data Privacy
  - Model Accountability
  - Responsible AI
paperUrl: https://www.iosrjournals.org/iosr-jce/papers/Vol27-issue6/Ser-1/M270601102110.pdf
image: ""
---

## Research Question

Once a model has learned from a piece of data, can that influence be removed, without throwing the model away and training it again from scratch?

Laws such as the EU's **GDPR**, California's **CCPA** and Singapore's **PDPA** increasingly expect personal data to be erasable, and that now includes data inside trained AI systems. Deleting a row from a database is easy. Deleting what a model *learned* from that row is not.

The paper sets out to build a **conceptual map of machine unlearning**: the state of the art, the open problems, and where unlearning fits in privacy-preserving AI.

## Literature Review

I drew on peer-reviewed work from 2015 onwards (via Google Scholar, arXiv and SSRN), alongside regulatory documents and legal scholarship. The review maps three families of methods:

- **Exact unlearning**: full retraining, **SISA** (sharding, isolation, slicing, aggregation), and differential privacy applied at training time.
- **Approximate unlearning**: influence functions, gradient ascent, Fisher Information methods, knowledge distillation, "Bad Teacher" unlearning, and model editing such as ROME.
- **Federated unlearning**: removing a client's contribution from a model trained across many devices, such as FedEraser.

It also covers how unlearning is evaluated: membership inference attacks, utility metrics, and benchmarks such as TOFU and MUSE.

## Technical Exploration

The core difficulty is that a neural network spreads each training example's influence across *all* of its parameters, so there is no single place to delete it from. That is why exact methods are costly and approximate ones are popular.

Reported SISA results make the trade-off concrete. On simpler datasets (Purchase, SVHN), unlearning was 2–5× faster with under two points of accuracy lost. On complex image datasets (ImageNet, Mini-ImageNet), accuracy fell by around 16 points. Gradient ascent is fragile and can trigger catastrophic forgetting, and influence functions become unreliable on large, non-convex networks.

## Findings

- **A technical–regulatory mismatch.** The methods with the strongest guarantees are often too costly for complex tasks, while cheaper approximate methods are hard to verify.
- **Fairness.** Naive unlearning, especially gradient ascent, can make outcomes worse for underrepresented groups.
- **Accountability.** Erasing data may also erase evidence needed for audits or legal claims, a tension regulation hasn't resolved.
- **Misuse.** Unlearning could be used to suppress safety-relevant training data, so it should be treated as a security-relevant capability.
- **Open problems.** Verification, scaling to foundation models, adversarial robustness, and the lack of standard benchmarks.

The paper concludes that unlearning is a foundational capability for trustworthy AI. The most promising near-term path for large models is parameter-efficient fine-tuning, guided by mechanistic interpretability. Getting it right needs machine learning, law and ethics working together.

## Reflection

Studying unlearning changed how I think about AI. A model is not just software; it is a record of the data it was trained on. That raises real questions about **privacy, accountability and responsibility**, the same questions I later found myself debating at Model UN.

**Related writing:** [The Right to Be Forgotten: Teaching AI to Unlearn](/blog/09-the-right-to-be-forgotten-teaching-ai-to-unlearn) · [The Ghost in the Machine: Why "Deleted" Data Still Haunts Your AI](/blog/08-why-deleted-data-still-haunts-your-ai)
