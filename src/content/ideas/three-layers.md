---
title: "Don't Standardize the Human Out (The Three Layers)"
description: "Encoded intent lives at three layers, and only the bottom one belongs in a central registry."
order: 13
---

---

## What it means

The tools already hold encoded intent at three different altitudes. Each one has
to be governed differently, and the failure mode is treating them as one thing.

**The enterprise layer is the floor.** Deploy pipelines, security gates,
compliance hooks, environment setup. Centralize this. Make it boring and
identical everywhere. Nobody needs to get fancy with the test pass. Govern that
the standards exist and that the tooling is safe to use on production code, and
then move on.

**The team layer is shared craft.** PR templates, test patterns, review
checklists, the conventions a group writes by. Share it, do not force it. Teams
and product families own these. A team deep in legacy Angular does not work the
same way as a team building something brand new, and when you flatten that
context, teams ignore the tool and do their own thing anyway. This is where
decentralized distribution starts to matter, something closer in shape to
Homebrew or npm than to a central registry: discovery and distribution handled
by infrastructure, with the patterns themselves living where they were made.

**The personal layer is where the craft lives.** How someone prompts. The skills
they build for themselves. The way they think through problems with AI.
Reinforce good practice here, and then let developers figure it out.
**Standardize this layer and the human touch leaves the work.**

## Why it matters now

AI made automation cheap, and that changed who gets to do it.

Writing a small piece of automation used to take hours. You scoped it, built it,
debugged it, maintained it, and most of the time the cost outweighed the time
saved, so most of it never got built at all. Now it takes minutes. Skills,
agents, and rules were designed for exactly this: cheap, iterable, disposable,
written in natural language inside plain markdown files. The tools are meant to
be in everyone's hands.

So developers started doing what developers do with a tool that makes the job
easier. They noticed patterns in their own work and automated their own flows.
The job stopped being task-by-task ticket pulling and started being something
closer to designing how the work gets done.

**Here is where it gets serious.** The new shape of the work asks developers to
think differently: spot patterns in their own flows, design their own
automations, exercise judgment about what is worth encoding at all. That muscle
memory only forms through reps. Engineers have roughly twenty years of muscle
memory for executing one broken-down task at a time and almost none for shaping
work at the plan level. If an organization reacts to this moment by automating
everything from the top down, developers never build the muscle the new era is
asking for. They fall behind expectations AI created, because the org never gave
them the chance to keep up.

What happens by default is the risk. When something new and powerful shows up in
an org, the reflex is to funnel it through one central team. A few months later
everyone looks up and the most democratic shift in how engineering works has
been quietly turned into another permission slip. Nobody intends that. It just
happens unless someone names it and decides otherwise.

**The defaults being set right now will hold for a decade.**

## What it looks like in practice

The test for which layer something belongs to is what governance it needs.

- If it must be identical everywhere for the estate to be safe, it is
  enterprise. Govern that it exists. Then stop.
- If a team would reasonably do it differently and still be right, it is team
  craft. Publish it, make it findable, let teams adopt it. Enforcement here buys
  compliance theater and costs adoption.
- If it is how one person thinks, it is personal. Reinforce, teach, never
  mandate.

The biggest return comes from letting people build their own tools, develop
their own style, make their own mistakes, and learn from them. That compounds in
a way a curated library of approved skills never will. **The job is teaching
people to fish.**

The reps that build the new muscle are a loop: write the blueprint, generate,
spot the gap, correct the blueprint, generate again. Treat what the model
produces as a probe that reveals holes in the blueprint. There is no shortcut
that skips the throwaway output, which is why an org that automates
blueprint-writing away from its developers has taken away the exercise itself.

## The objection, and the answer

**"If context is handled at an org level, what is left for developers to
solve?"**

This is the strongest challenge I get, and it deserves a serious answer
rather than reassurance.

Only the floor gets centralized. What is left is most of it. Two of the three
layers stay with the people doing the work, and the layer that gets centralized
is the one nobody wanted to own anyway.

What changes is where the work sits. It moves upstream: writing the blueprints,
shaping the process, deciding what should be automated at all. The whole
industry is past "what should we automate." The new question is judgment: **when
to automate, what to automate, and how to manage tooling without losing the
autonomy that made AI useful in the first place.**

There is a second version of the objection, which is that leaving the team and
personal layers alone produces sprawl and inconsistency. The answer already sits
in the model. Flattening team context produces teams that ignore the tool and do
their own thing off the books. Consistency where it matters is the enterprise
layer's job, and that layer is governed tightly on purpose.

## Where it came from

| Date           | Artifact                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| **2026-04-26** | **"Don't Standardize the Human Out of the Work," Dispatch 5.** The full argument, three named layers, first public. |
| 2026-04-26     | Opening line: "Strip the personal layer, and the work stops being human."                                           |
| 2026-08-04     | Restated as section 11 of the DaaS gold copy, where it functions as the answer to the central objection.            |

The muscle-memory and authorship observations come from my coaching notes on
team resistance, which are undated and unpublished.

## Related

- [No Human Left Behind](/ideas/no-human-left-behind), which this serves
- [DaaS: Documentation as a System](/ideas/documentation-as-a-system), section 11, where this is the closing argument
- [The Four Lenses](/ideas/four-lenses), which is how you find out whether the personal layer is actually surviving
- [Keep human judgment inside the loop](/ideas/human-in-the-loop)
