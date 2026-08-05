---
title: "Diligence as a Team"
description: "Verification has to be something a team has agreed on and runs on a schedule, because one careful engineer reviewing everything is a bottleneck and eventually a burnout."
order: 9
---

## What it means

Diligence at the individual scale is already well understood. Verify, attribute,
own it. You are accountable for whatever goes out under your name. Test the code.
Read the cited source. Run the migration on a copy. The AI did not make the
decision, you did. The question that closes it: _would I stake my reputation on
this exact output, exactly as it stands?_

That question works. It does not scale. One person can hold it for their own
work, and a team can quietly arrange itself so that one person holds it for
everybody's work, which is where it breaks.

Diligence as a team is that same question converted into a standing practice with
three parts:

- **Every retro considers AI-related failures explicitly.** Inside the retro the
  team already runs, as a standing agenda item.
- **The evidence is real data.** GitHub CLI output from PR reviews, alongside the
  narrative of what actually happened.
- **The question is always the same one.** How do we prevent this. The question
  is aimed at the process, and never at the person.

## Why it matters now

The volume argument is the whole reason. AI-assisted development produces more
code, faster, with the same proportion of defects and far less human reading time
per line. Scrutiny per unit of output falls even when everyone is trying hard.

A team's response to that is usually a person. Someone senior, careful, and
generous, who ends up reading everything. It works for a while. It is a
bottleneck for the team and a slow-motion burnout for the person, and it produces
no artifact, so the day they leave the team's verification capability leaves with
them.

A team that has agreed on what it checks, has the documentation to check against,
and closes the loop in retro is a system. That is the difference between a
practice and a person.

## What it looks like in practice

**Use the evidence, not the vibes.** `gh` data from PR reviews gives a team
something real to reason about: what got caught in review, what got through, what
kept coming back, where the agent was confidently wrong. A retro running on
memory over-weights whichever incident somebody felt strongly about, which is
rarely the most expensive one.

**The output is an artifact.** Asking how do we prevent this turns a failure into
a rule, a test, a piece of documentation, or a change to the process. If the
retro ends without one of those four, the retro produced nothing. That handoff is
the point where this idea feeds directly into rules left.

**Design the adversary in.** `das-cli` was built under strict TDD, 426 tests,
with each phase reviewed by an agent that did not write it. The thing that
produces work and the thing that checks it were separated in advance rather than
assigned to whoever had time.

**The role changes with it.** Test practitioners, quality engineers, and
governance people move from checkers at the end to architects of quality. They
encode what gets checked into the environment, which is the same move as encoding
intent, aimed at verification.

## The objection, and the answer

**"We already do retros."**

Most retros run on memory and goodwill, and AI-related failure does not show up
in either. It shows up as a PR that looked fine, passed review, and was subtly
wrong in a way nobody had a category for. Nobody brings that to a retro because
nobody experienced it as an incident.

Two things change a retro into this. The first is a standing agenda item, so the
subject arrives without anyone having to volunteer it. The second is the PR data
in front of the room, so the conversation starts from what happened rather than
from what anyone remembers.

The related worry is that this becomes blame in a nicer outfit. The protection is
built into the question. How do we prevent this has exactly one kind of correct
answer, and none of them are a name.

## Where it came from

| Date       | Artifact                                                                                                                                                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-04-30 | **The Four Ds of AI Fluency**, wizshort. The Diligence D: _verify, attribute, own it._ The four-D framework is from Anthropic Academy's AI Fluency course, and I published my reading of it in the spirit Anthropic encourages. |
| 2026-07    | `das-cli` built under strict TDD, 426 tests, each phase reviewed by an agent that did not write it.                                                                                                                                |
| 2026-08-04 | Extended to the team level in [DaaS section 9](/ideas/documentation-as-a-system), which is currently the only written statement of it.                                                                                         |

The individual-scale precursor is my own working loop, which has run for far
longer: after any correction, capture the lesson, write the rule that prevents
recurrence, iterate until the mistake rate drops. Diligence as a team is that
loop run at the team level instead of the individual one.

**This is the newest and least written of the four ideas.** The ledger says so
directly. Treat this file as a first full statement rather than a consolidation
of existing material.

## Related

- [Shift Left](/ideas/shift-left), rules left. This idea produces the lessons that
  rules left encodes. They are two halves of one motion.
- [Capturing What Worked](/ideas/capturing-what-worked). The same capture instinct,
  aimed at failures and run by a group.
- [Encoding Intent](/ideas/encoding-intent). What the retro's output gets encoded
  into.
- [DaaS: Documentation as a System](/ideas/documentation-as-a-system),
  sections 8, 9, and 10.
