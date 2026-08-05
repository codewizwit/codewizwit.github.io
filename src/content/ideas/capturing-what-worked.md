---
title: "Capturing What Worked"
description: "You already did the hard thinking, so write down what made it work before the session ends and the judgment evaporates."
order: 8
---

## What it means

Something goes well. A prompt lands exactly right. A review catches what three
previous reviews missed. A set of agents you wired together on a hunch produces
work you would have been proud to do by hand.

Then the session ends, and all of it dissolves. Next month the same problem
arrives and the thinking starts over from nothing. The expensive part was never
the typing. It was the judgment, and the judgment is what got thrown away.

The practice is four moves and it runs continuously. Experiment. Review the
options that came back. Document which ones to keep and why. Iterate from there.
The documentation is the durable part. Everything else about that session is
gone by Thursday.

[Encoding Intent](/ideas/encoding-intent) puts judgment in before the model writes
anything. This is the same discipline pointed the other direction: judgment that
proved itself during the work, written down before it fades. Each capture becomes
the encoded intent the next run starts from. Together they are a loop rather than
two techniques.

## Why it matters now

The cost structure of experimenting collapsed. Trying five approaches used to
mean five builds, so teams argued about which one to attempt. Now the five
approaches arrive in a few minutes and the argument is over which to keep.

That relocates the scarce resource. Generating options is cheap and choosing
between them is the work, which means the choice is the thing worth preserving.
A team that generates constantly and captures nothing is paying full price for the
same decision over and over.

The habit is old and it predates the tooling. My own working rule: after any
correction, capture the lesson in two places, the project's `lessons.md` for the
visible git-trackable record and auto-memory for cross-session persistence. Write
rules that prevent the same mistake from recurring. Ruthlessly iterate, so the
mistake rate drops over time. I enforce that on myself in writing, which is
the smallest possible version of this idea.

## What it looks like in practice

Three kinds of capture, three homes:

| What worked                              | Where it goes                     |
| ---------------------------------------- | --------------------------------- |
| A prompt pattern that landed             | a skill                           |
| A piece of work you did really well once | a skill with its supporting files |
| A team of agents that worked             | a saved workflow                  |

The distinction that matters is what each one makes repeatable. A skill makes the
instructions repeatable. A workflow makes the orchestration repeatable, the whole
shape of who runs when and what gets checked against what.

Then the capture has to travel. `das-cli` builds the assistant's view of a
captured source and keeps it current. `cpm` keeps captured artifacts identical
across projects and catches them when they drift apart. Both exist because a
capture nobody else can reach is a note.

## The objection, and the answer

**"Why name a practice the tooling is about to absorb?"**

Because the tooling already did, and that is the argument rather than the
counterargument.

This was worth naming before any tool supported it. Claude Code now has a save
step for exactly this move: run `/workflows`, select the run that did what you
wanted, press `s`, and the orchestration becomes a command you can run again. The
documentation's own example is a review you run on every branch, and its
comparison table lands on the same split as the three captures above. Skills make
the instructions repeatable. Workflows make the orchestration itself repeatable.

When a practice you named turns into a button, the practice was real. The shape
of the work is legible before the tooling catches up, and the people who noticed
it first are the ones who already know what to do with the button when it
arrives. The people who did not notice get a feature they have no use for.

## Where it came from

| Date       | Artifact                                                                                                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2025-10-13 | `curiousity-documentation` created. README: _"documentation is how I think and remember."_ Declares five years of the same instinct, back to handwritten bootcamp notebooks. |
| ongoing    | My own CLAUDE.md self-improvement loop: capture every correction in `lessons.md` and in auto-memory, write the rule that prevents recurrence.                               |
| 2026-08-01 | wizwit lab page, Framework 04, "the other half of Encoding Intent"                                                                                                           |

Section 0 of the idea ledger names documentation as one of my two lifelong
instincts, alongside test automation. This idea is that instinct stated as a
method.

## Related

- [Encoding Intent](/ideas/encoding-intent). The before, to this after. One loop.
- [Shift Left](/ideas/shift-left), specifically rules left. Capturing What Worked
  points at successes, rules left points at recurring failures, and both move the
  lesson upstream of the next run.
- [Diligence as a Team](/ideas/diligence-as-a-team). The team-scale version of the
  same capture, run in retro instead of at the end of a session.
- [DaaS: Documentation as a System](/ideas/documentation-as-a-system),
  section 10. The freshness mechanism is what keeps a capture true after it is
  written.
