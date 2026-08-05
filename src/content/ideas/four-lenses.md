---
title: "The Four Lenses"
description: "A responsible AI assessment built around the people using the tools, run repeatedly on tools a team has already adopted, with a Measuring Success layer that asks whether the work itself held up."
order: 7
---

---

## What it means

Tools are only as responsible as the teams behind them, so the assessment asks
about the team.

**Lens 1: Developer Experience & Growth.** _Does this AI tool make developers
better at their jobs, or just faster?_ Explainable suggestions or silent
auto-fix. Room left for craftsmanship. Cognitive load reduced in useful ways.
Whether a developer can opt out or turn the assistance down. Red flags include
pressure to accept suggestions without understanding them, and growing
dependency on AI for basic tasks.

**Lens 2: Responsibility & Equity.** _Does everyone benefit equally, or are
some people left behind?_ Bias toward certain styles, patterns, or contributors.
Whether all roles and experience levels gain. Accessibility and different working
styles. Who is accountable when an AI suggestion introduces a bug or a security
hole. Red flags include juniors disadvantaged by tools tuned for senior
workflows, and no clear owner when generated code causes a problem.

**Lens 3: Culture & Collaboration.** _Is AI strengthening how your team works
together, or quietly eroding it?_ Whether discussion is enhanced or replaced.
Speed against depth. Psychological safety. Space for mentorship and pairing. Red
flags include code review becoming an automated checklist, and team members
who stop asking questions because AI already answered.

**Lens 4: Transparency & Trust.** _Can your team see, understand, and challenge
what the AI is doing?_ Labeling and explainability. Whether a developer can
override or contextualize easily. Visibility into how the tool decides.
Limitations stated out loud. Red flags include not being able to tell what was
generated, and hidden AI assistance feeding performance evaluations.

Twenty questions, sixteen red flags.

**Measuring Success, alongside the four.** Every lens above asks about the
people. None of them asks whether the work is any good. That question already
had an answer in my own 2025 material, and the answer sits beside the lenses as
its own layer. This is why there is no fifth lens and why the name does not
change.

_Whether the work holds up._ Three questions about the output, and the ones a
team is most likely to skip.

- Does testing keep pace with output volume?
- Is the context an agent references still true?
- Do retros surface AI-related failures?

_What a healthy tool shows._ An accountable AI tool should demonstrate:

- Improved developer satisfaction, measured through surveys and feedback
- Maintained or improved code quality: bugs, security issues, maintainability
- Preserved collaboration: pull request discussion, pair programming, mentorship
- Equitable benefits, where every skill level and role gains
- A clear value proposition developers can articulate in their own words
- No hidden costs: no burnout, no dependency, no skill atrophy

_When to pause or remove a tool._ The sharpest part of the layer, because it is
the only place the framework says to take something away. Consider pausing or
removing an AI tool if:

- Developers report decreased job satisfaction or autonomy
- Code quality or security incidents increase
- Collaboration or mentorship decreases significantly
- Equity issues emerge, where some developers benefit and others do not
- Trust erodes, and developers do not understand or trust AI suggestions
- Dependency becomes concerning, and developers cannot work without it

**"Lenses" is literal.** They are things a team looks through, repeatedly. This
is refinement of how a team lives with tools it has already adopted. It is
neither a procurement gate nor a red-teaming checklist, and the red flags prove
it: "team members stop asking questions because AI already answered" is a signal
that can only appear months after adoption.

## Why it matters now

Every organization measures throughput after adoption. Almost nobody asks
whether their juniors stopped asking questions.

Of the three checks that decide whether AI-assisted work is any good, this is
the differentiated one. What goes in, meaning documentation structured
deliberately, decides whether the output is good. What comes out, meaning
pressure testing and review, decides whether you can trust it. How the people
are doing decides whether it was worth doing at all. Only the third one has no
standard instrument. The Measuring Success layer reaches back into the second,
because a team cannot judge whether the work was worth doing without knowing
whether the work held up.

It is also the only one that has to repeat. Teams change and tools change. What
was fine in March is eroding something by September.

The label undersells it. "Responsible AI framework" reads as compliance. The
same document, described as how to tell whether AI adoption is actually working
for your people six months in, is something an engineering leader would pay for.

## What it looks like in practice

**Run the Lenses as iterative refinement inside team sprints.** This is my own
sharpening of the idea, and it is the strongest version.

It changes what the Lenses are. A one-time adoption gate produces a decision and
then a document nobody reopens. A standing cadence produces a practice, and the
signals these lenses look for are slow ones that only a practice can catch. Team
members going quiet in review, mentorship thinning out, a junior who has stopped
guessing before checking: none of that is visible on the day a tool is approved.

It fits the machinery a team already has. Every retro should already consider
AI-related failures explicitly, as a standing question inside the retro a team
already runs, and never as blame. Adding a lens to that rotation costs a team almost
nothing. Use the evidence rather than the vibes: pull request data alongside the
narrative of what actually happened.

And it costs no rename. The name survives the change, which matters, because the
name is doing brand work.

**What to do with a result.** Collect the feedback. Adjust the configuration.
Protect the human processes the tool is pressing on. Run the lenses again next
sprint. When the signals keep pointing the same way, the Measuring Success layer
says what to do about it, up to and including taking the tool away. The humans
come first.

**The gate framing is retired.** The older published guidance treated a failed
lens as a verdict on whether the tool could be used at all, and that reading has
to go. It was written for a decision made once, and it cannot survive contact
with the questions themselves.
Nobody can answer whether AI is eroding a team's collaboration before that team
has collaborated with it. The purpose of running the lenses on a cadence is that
a team keeps its critical thinking on instead of drifting into autopilot.

## The objection, and the answer

**"This is a survey. It measures feelings."**

The red flags are behaviors, and behaviors can be observed. Pair programming
frequency, questions asked in review, whether review comments are conversations
or checkmarks, whether a junior can explain the code they merged. A team that
watches those is measuring something real about itself.

The stronger form of the objection is the one I raised myself: all four
lenses ask about people, and none of them asks whether the work is any good. I
ruled on it on 2026-08-04. The answer is the Measuring Success layer above,
which covers code quality, verification, and the point at which a tool has
earned its way back out. The objection was correct, and it is now answered
inside the framework.

## Where it came from

**The published date is wrong, and the real one is much better.** The idea
ledger records first public as 2026-07-31, the wizwit lab page. The four lenses
exist in full, with all twenty questions and all sixteen red flags, on
**2025-10-11**, in the first commit of the `human-in-the-loop` repo.

| Date           | Artifact                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **2025-10-11** | **`ACCOUNTABILITY.md`, "Developer-First AI Accountability Framework."** All four lenses, named, with the same questions and red flags published nine and a half months later. Also carries three worked examples (augmented code review, AI-assisted test generation, context-aware completion), implementation guidance for tool creators, evaluators, and adopting teams, a Measuring Success section, and a "when to pause or remove a tool" section. |
| 2025-11-19     | Renamed to `RESPONSIBLE-AI-PLAYBOOK.md`, to be more actionable and less corporate.                                                                                                                                                                                                                                                                                                                                                          |
| 2026-03-06     | **Deleted** from the repo in commit `961c203`, a skill-audit refactor. Recoverable from git history only.                                                                                                                                                                                                                                                                                                                                                |
| 2026-07-31     | wizwit lab page, Framework 05. The Measuring Success layer is absent, and the page carries the gate framing.                                                                                                                                                                                                                                                                                                                                             |
| 2026-08-04     | I flag the missing dimension and propose the sprint cadence.                                                                                                                                                                                                                                                                                                                                                                                         |
| 2026-08-04     | **My rulings.** No fifth lens. The name stays. Measuring Success is restored alongside the four. The gate framing is dropped, and the Lenses are a recurring practice run as iterative refinement in team sprints.                                                                                                                                                                                                                                      |

**The recovery, precisely.** The Measuring Success layer and the "when to pause
or remove a tool" list were recovered on 2026-08-04 from
`git show 961c203^:RESPONSIBLE-AI-PLAYBOOK.md` in the `human-in-the-loop` repo,
which is the last live version of the document before the delete. Searched and
found empty: the `codewizwit.com`, `wizwit-lab`, `claude-code-playbook`, and
`das-cli` repos carry no trace of this material. That one commit parent is the
only surviving copy.

**Two things that are similar in theory and must not be conflated.**
Separately from the Four Lenses, I built an AI governance registry at a large
financial services firm that runs an automated responsible-AI evaluation on
submission and returns structured feedback to the submitter. The Four Lenses
never ran inside that pipeline.

## Related

- [No Human Left Behind](/ideas/no-human-left-behind), which this answers to
- [Keep human judgment inside the loop](/ideas/human-in-the-loop), the repo this was born inside
- [Don't standardize the human out](/ideas/three-layers), because Lens 1 is where you find out whether the personal layer survived
- [DaaS: Documentation as a System](/ideas/documentation-as-a-system), sections 8 and 9
