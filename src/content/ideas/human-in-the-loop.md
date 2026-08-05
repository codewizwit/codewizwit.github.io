---
title: "Keep Human Judgment Inside the Loop"
description: "The points where a human must still decide have to be designed into the system before the first feature, rather than left to whoever remembers."
order: 15
---

---

## What it means

AI can write the code. It does not get to skip the judgment.

The word "loop" is doing real work. A loop is a structure, so the decision
points inside it are placed on purpose, at a known moment, by someone who
decided they belonged there. Judgment that depends on a person happening to
look carefully on a Thursday is not in the loop. It is adjacent to the loop, and
it disappears under load.

The `human-in-the-loop` README states the standard for a tool: "Every skill
enhances your judgment, not replaces it." The workflow states it for a task:
define clear requirements, generate an initial solution, human review for
correctness, security, and maintainability, test thoroughly, iterate on results,
document the decision and the rationale. Five of those six steps are human.

The name was meant literally. On that project I made every design decision,
every tradeoff, and every merge.

## Why it matters now

The failure mode has a shape and I named it: the human quietly becoming a
rubber stamp somewhere around week two.

It happens through volume. AI-assisted development produces more output, faster,
with far less human reading time per unit. Scrutiny per unit falls even when
nobody decides to be less careful. A review step that survived on diligence
alone will not survive that arithmetic.

My own red flags describe the erosion before it finishes: developers accepting
suggestions without understanding them, tools making decisions that bypass
learning, increasing dependency on AI for basic tasks, loss of creative autonomy
or flow state. The corresponding list of what to refuse is blunt. Do not blindly
accept suggestions. Do not use AI as a substitute for understanding the code. Do
not skip testing because AI wrote it. Do not let AI make critical architectural
decisions alone. Do not remove human review processes.

## What it looks like in practice

The proof case is the `human-in-the-loop` repo itself, built to test whether a
real, published, maintained tool could be produced this way without the human
degrading into a rubber stamp.

**The order was inverted on purpose.** Quality gates, tests, and human review
were designed in before a single feature existed. Everything downstream had to
pass through constraints agreed on first: nine CI validation checks, TypeScript
strict mode, TypeDoc on every export, a security scan, and an 85 percent
coverage minimum.

**The work was scoped from an existing competency set.** Rather than inventing a
feature list, I treated the skills on my own resume as the definition of
done. Each area was tracked as covered or missing with a written rationale for
why it belonged. Completeness became a number, overall resume alignment, which
moved from 25 percent to 75 percent. The gap between the two was a specific list
of thirty-seven things that did not exist yet, exported as structured data with
acceptance criteria on every item, then scaffolded into branches, stub files,
commits, and draft pull requests. Planning generated the work instead of
describing it, and the standard for finished was written before anyone started.

**The corrections fed back into the instructions.** The self-correction protocol
in that repo says that when a human corrects the output, the correction goes
into `CLAUDE.md` so the same issue cannot recur: a new validation rule if a
pattern caused errors, a refined code pattern if a style was rejected, better
documentation if the output was unclear. The loop closes by changing what the
model reads next time.

**Context is disclosed progressively.** The skills load only what a task needs,
so the model stays focused and the human keeps enough working memory to actually
judge what comes back.

## The objection, and the answer

**"A human in the loop is a bottleneck, and eventually a rubber stamp anyway."**

Both halves of that are true when the loop is one careful person. One engineer
reviewing everything is a bottleneck and eventually a burnout, and burnout is
how a real review becomes a nod.

The answer is that the loop belongs to the team. A team that has agreed on what
it checks, has documentation to check against, and closes the loop in retro is a
system. That is the difference between a practice and a person. The retro carries
the standing question, asked with evidence rather than vibes: pull request data
alongside the narrative of what actually happened, and the same question every
time, which is how do we prevent this rather than who did it.

## Where it came from

| Date           | Artifact                                                                                                                                                                      |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2025-10-11     | First commit of the repo. CI fixed five days before publish. Test discipline from day one.                                                                                    |
| **2025-10-16** | **`@human-in-the-loop/cli` first published to npm. The earliest artifact in the entire record.**                                                                              |
| 2025           | AI Summit NY: "Human-in-the-Loop: Responsible AI Engineering in Practice." Selected for the Future AI Leaders cohort. Deck live at `codewizwit.github.io/human-in-the-loop/`. |
| 2025-11-19     | v2.0.0 adds a Skills architecture, nine months before `das-cli`.                                                                                                              |
| 2026-08-01     | wizwit lab case study page. Frames it as Shift Left before Shift Left had a name: planning, rules, and testing all moved left at once, on something real.                     |

Now v3.0.3 with 303 commits, the most of anything I own.

## Related

- [No Human Left Behind](/ideas/no-human-left-behind), which this serves
- [The Four Lenses](/ideas/four-lenses), which began life inside this same repo
- [DaaS: Documentation as a System](/ideas/documentation-as-a-system), sections 8 and 9, on verification and the team-level loop
- [Don't standardize the human out](/ideas/three-layers)
