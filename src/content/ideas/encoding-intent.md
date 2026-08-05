---
title: "Encoding Intent"
description: "Plan first and prompt second, which means judgment goes into the work as structure, standards, and voice before the model writes anything."
order: 6
---

## What it means

Encoding Intent is the discipline underneath every other framework here. It is
how a person stays in control of AI work.

Before AI writes a single line of code, it needs to understand who you are, how
you work, what quality looks like, the patterns you trust, and the standards you
will not compromise. That understanding has to exist somewhere the model can
read. In practice that means skill files, instruction files, rules, and
configuration that carry a team's voice, standards, and decision-making patterns.

The knowledge that lives in people's heads gets written down, shared, and made
available to AI as context. The encoding itself becomes a collaborative act:
teams articulate what they know, together, and discover in the process how much
of it was never actually agreed on.

Encoding Intent is phase five of The Lift, the point where a team's judgment
becomes the environment AI works inside.

## Why it matters now

Most conversations about AI and code are about speed. How fast can you build. How
many lines per hour. The better question is how much of your judgment survives
the process.

Prompt without intent and you get generic output that kind of works and does not
feel like yours. Encode your standards, your voice, and your values into the
environment first, and AI becomes an extension of your craft. Constraints are
what make AI useful instead of generic.

The economics are simple. More time in planning and encoding means less time
debugging and fixing. And the amplifier logic makes the front-loading urgent:
AI does not quietly absorb a vague instruction, it compounds it, at speed, across
everything it touches. Vagueness is expensive and you pay for it in revisions.

## What it looks like in practice

Five steps, in order. The order is the method.

1. **Define the structure.** Architecture, patterns, boundaries.
2. **Set the standards.** Quality bar, testing requirements, style.
3. **Build the infrastructure.** CI/CD, validation, governance.
4. **Encode the intent.** Skill files, instruction files, configs, guardrails,
   planning prompts.
5. **Then let AI build.** Inside the structure, following the intent.

codewizwit.com is the worked example. Fifteen skill files existed before a single
component did, across three categories: voice and brand (brand voice with writing
samples in it, the visual style system, professional positioning), engineering
standards (TypeScript, engineering practices, testing automation, CI/CD,
accessibility as the non-negotiable), and domain expertise (responsible AI
governance, developer experience, the architecture patterns from my
professional work). That is the environment. That is what the AI knows before it
starts.

The loop that follows is the same every time. Encode what you know. Let AI build
inside the structure. Review what it produces against the standards you set.
Repeat.

The most useful reframe for a team learning this: treat Claude's output as a
probe that reveals gaps in the blueprint. When the output is wrong, the blueprint
was thin. Correct the blueprint and regenerate.

## The objection, and the answer

**"I don't want to fix AI-generated code."**

That instinct is correct. Fixing AI output by hand is the wrong layer, commodity
execution stacked on top of commodity execution. Teams that say this have
accurately identified work they should refuse.

What they have not built yet is the muscle for the right work. Engineers carry
twenty years of muscle memory for executing one broken-down task at a time and
almost none for shaping a problem at the plan level. That is the natural product
of how the job was structured, and it only changes through reps: write the
blueprint, generate, spot the gap, correct the blueprint, regenerate.

So the answer to "I don't want to fix AI-generated code" is agreement, followed by
a different target. Correct the plan and the rules. The code is what tells you
whether the plan was any good.

## Where it came from

| Date       | Artifact                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2025-11-19 | `human-in-the-loop` v2.0.0 adds a Skills architecture. The mechanism before the name.                                                                                                                                                       |
| 2026-02-07 | codewizwit.com commit adding skill files to The Lift                                                                                                                                                                                        |
| 2026-02-14 | **"Plan First, Prompt Second. No Vibes Required."** Dispatch 4. Fifteen skill files, a brand voice guide, and a visual style system before AI wrote a line of the site. The dispatch itself was written using the skill files it describes. |
| 2026-07-31 | wizwit lab page, Framework 03                                                                                                                                                                                                               |

Named as a framework it became the direct ancestor of both the enterprise context
initiative and `das`.

## Related

- [Capturing What Worked](/ideas/capturing-what-worked), the same discipline pointed
  at the other end of the work. Together they close a loop.
- [Shift Left](/ideas/shift-left). Encoding Intent is planning left, in depth.
- [DaaS: Documentation as a System](/ideas/documentation-as-a-system),
  sections 3 and 6. DaaS is the architecture that carries encoded intent to every
  surface that needs it.
- [Diligence as a Team](/ideas/diligence-as-a-team), which is what feeds corrections
  back into the encoding.
