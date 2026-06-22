---
section: solution-design
purpose: Design and evaluate the IFF solution -- technology stack, architecture, constraints
stage_relevance:
  - Validation
  - Design
default_methodologies:
  - structure-argument
  - think-hats
  - challenge-assumptions
---

The solution sits at the intersection of sensor fusion (teammate's expertise), computer vision, and operational constraints (founder's combat experience). The core design tension: any IFF system must work when GPS is denied, comms are jammed, batteries are dead, and the soldier is under fire. Electronics that require infrastructure to function are not solutions -- they are liabilities.

Starter questions:
1. What is the solution idea you haven't been able to pressure-test yet? Describe it at the level of: what does the soldier do differently, and what does the system do that wasn't possible before?
2. What are the three conditions under which your proposed solution would fail? Be specific -- not "if the battery dies" but "if X happens in Y scenario, the system does Z incorrectly."
3. Sensor fusion for autonomous vehicles operates in a relatively structured environment. What changes when the sensing problem moves to a human combatant in unstructured terrain?
