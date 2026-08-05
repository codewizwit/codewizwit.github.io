---
title: "Documentation as a System"
description: "Good documentation is a gold copy that serves humans and AI at the same time, and AI amplifies from both sides."
order: 11
---

## The claim

Good requirements. Story writing. Understanding the problem. Context. Opinionated
teams with documented standards.

**Those are the things that really win.** None of them are new. None of them are
about AI.

Good documentation is a gold copy that serves humans and AI at the same time, and
amplifies from both sides. AI-assisted development calls for exactly what
engineering excellence expected in the first place. The stakes just got higher,
and the teams that already did these things are the ones pulling ahead.

Everything below follows from that.

---

## 1. This is human and developer experience work first

All of it is centered on improving the experience of the people doing the work.
The AI part is downstream of that, not the point of it.

The documentation initiative was built so that **teams made their own decisions
about their standards**, collaborated more while doing it, and kept the
flexibility to automate the painful parts out of their own workflow. It was not a
standard handed down and enforced. The value came from teams doing the deciding.

### Different people want different amounts of it

**Not everyone wants the same relationship with AI, and the system has to work
across all of it.** There are three types: the planner, who thinks before anything
gets typed and finds the typing draining. The hands on, who thinks **through** the
work, so handing the typing away removes the medium they think in. And people who
are genuinely both.

The same infrastructure serves all three without asking anyone to move. It starts
in the personal layer, where each person sets standards around how they like to
work, and a skill graduates to the shared pool once it has proven it works with
little human intervention on the output.

**That is why this has to be infrastructure rather than a mandate.** A rollout
measured by how much AI everyone uses will push out the people who think through
their hands, and those are often the most careful engineers on the team.

Full argument: [Three types of workers](/ideas/three-types-of-workers).

---

## 2. What good documentation was always for

None of these are AI reasons. They are the reasons documentation mattered before
any of this:

- **Onboarding.** A new person becomes useful without a human bottleneck.
- **Consistency across the estate.** The same problem gets solved the same way in
  different corners of the org.
- **Little confusion on requirements.** Less rework caused by two people holding
  different pictures.
- **Cross-team transparency.** Teams can see how other teams work and why.

**This part belongs to the teams.** It is collaborative, it is worth spending real
time on, and the process is worth getting right. No tool produces it for you. A
tool applied to bad documentation produces bad results faster.

---

## 3. The sequence

Order matters. Skipping a stage is where this goes wrong.

1. **Teams build the documentation.** Structured to fit their actual needs and
   workflows, not a template imposed on them. Human work, collaborative,
   deliberately slow.
2. **Give it a gold-copy face.** A framework like Docusaurus turns it into a real
   documentation surface for humans. Changes are version controlled and
   **treated as code**: reviewed, diffed, owned.
3. **Turn the gold copy into skills.** `das` takes that same documentation and
   slices it into token-bounded, progressively disclosed skills so Claude has the
   context it needs. The docs site stays the human-facing source of truth. No
   duplication, no second copy to drift.

One source. Two audiences. The humans get a site. The agent gets a navigable
index. Neither is a translation of the other.

---

## 4. Structure matters at org scale

How this is laid out is a real architectural decision once you are past one team.
A monorepo, or eventually symlinks, is likely the right shape: one place the
documentation lives, referenced from everywhere it is needed.

Get that right and it is **basically Claude's brain** for the estate.

---

## 5. AI is an amplifier, and that cuts both ways

This is the load-bearing risk and the reason the sequence cannot be skipped.

**AI makes good work great, great work outstanding, and bad work awful.** The
amplification is not selective. Whatever a team already is, it becomes more of,
faster.

The asymmetry is the part worth sitting with. The upside is a multiple. The
downside is a multiple too, and it arrives sooner, because nobody schedules time
to check work that came back quickly.

If the context being referenced during development is stale or wrong, AI does not
quietly absorb the error. It **compounds it**, at speed, across everything it
touches. That is disastrous in a way that a stale wiki page never was, because a
stale wiki page was passive and this is not.

The claim is not that good context makes AI correct. It does not. **It gets you
much closer, with far less output to correct.** That difference is the entire
economic argument, and it is honest about its own ceiling.

---

## 6. Shift left, as far as it will go

**Requirements. Architecture. Standards. The test plan.** All of it moves as far
left as it will go, and the point of moving it is not the artifact. The point is
that a team arrives at a **shared understanding of the details** before anyone
builds against them.

Details, specifically. Agreement at the level of "we are building a checkout
flow" is not agreement. The disagreements that cost money live two levels below
that, and they stay invisible until someone has already built on top of them.

**Nail the plan and the execution has a much better chance of being right.** That
is the entire wager, and it was always a good one.

**Interaction with clients and domain experts up front, early, pays off more than
anything downstream of it.** A firm shared understanding of requirements is the
cheapest defect prevention there is, because the work you never do costs nothing.
Every hour of rework later traces back to two people holding different pictures
at the start.

Three things do the work here, and all three are human:

- **Understanding the problem.** Not the requested solution. The problem behind it.
- **Story writing.** A story that carries the intent, the constraints, and what
  done looks like is the first piece of context an agent or a developer receives.
  A vague story produces vague output, and now it produces a lot of it.
- **Opinionated teams with documented standards.** A team that has decided how it
  works, and written it down, gives both people and agents something to build
  against. Opinions that live in one senior engineer's head do not survive
  contact with AI-assisted development at volume.

**Then AI enters, and it enters second.** Form your own view of what you are
building and how you intend to build it. Bring AI in after that, as a thought
partner: to surface the approach you had not considered, to argue with the one
you picked, to expand your thinking into something better than what you walked in
with. What it should never do is replace walking in with a view at all. Offload
the judgment and there is nothing left to expand.

AI makes this more important, not less. The amplifier logic applies here first:
if the requirement is wrong, AI executes the wrong thing faster and more
thoroughly than a person would have. **Building the wrong thing quickly is worse
than building it slowly**, because speed buys less time to notice.

This is what the Engineering, Product, and UX collaboration model was for.
AI-assisted prototyping so there is something real to react to early, and live
testing with the domain experts in the room rather than a feedback round trip
weeks later. Get the disagreement to happen in the room, at the prototype, before
it is expensive.

That is the same story the Hallway Story short tells: the old path put client
feedback after the build and paid for it in rework, and the new path moves
discovery in front of the build.

---

## 7. Writing code was never the constraint

Start with what nobody argues about.

Ask any engineer, at any company, in any decade, what makes software development
run well, and you get some version of the same list:

- Good documentation
- Shared understanding of the standards and preferences a team writes by, meaning
  code style, norms, conventions
- Shared understanding of the problem and the requirements
- Transparency across cross-functional teams
- A test plan that verifies the quality bar before production
- A quality bar
- A definition of done

None of that is controversial and none of it mentions AI. Every item has been on
a best practices list for thirty years. A team that genuinely has all of them runs
like a well oiled machine, and always did.

**Building software and writing code was never the real bottleneck. Getting those
things right is the bottleneck, and it always was.**

**And it shows up differently for every team.** One has excellent tests and no
shared definition of done. Another has crisp requirements and documentation nobody
has opened in a year. A third agrees on everything and writes none of it down, so
it holds exactly as long as the same five people stay. The bottleneck is
universal. Its shape is local, which is why this cannot be a mandate handed down
from anywhere.

**And it was never only a quality argument.** How organized a team was with its
process and its documentation always showed up in its velocity. The teams that
knew what they had agreed on moved faster, and they moved faster because they
spent less time rediscovering decisions, re-litigating standards, and repairing
work built on a wrong assumption. Those were the real constraints the whole time.
They were just survivable when everything moved slowly.

**AI is an amplifier, and that is exactly why these bottlenecks are surfacing
everywhere at once.** They were always there. They were survivable at the speed
things used to move.

Amplify a team that never agreed on its standards and it disagrees at volume.
Amplify a wrong assumption and it propagates through everything built on top of it
before anyone thinks to check. Amplify an unwritten definition of done and you get
more work finished that nobody agrees is finished. The penalty for being
disorganized used to accrue slowly enough to absorb. It does not anymore.

**AI surfaced a problem that existed all along, and now is the best time to
correct it.** The tax was invisible while it accrued slowly. It is visible now,
there is attention and budget pointed at it, and the defaults a team sets right
now will hold for a decade. That combination does not come around often.

All of it matters more than ever, and it is what we should have been doing all
along.

**So what does getting it right actually look like?**

Write it down once, in a form that serves the people and the agents at the same
time, and build the mechanism that keeps it true.

That is the proposal, and it is smaller than it sounds. The team writes the
documentation and owns the shape of it, because they are the ones who know how
they work. That documentation becomes the thing humans read, versioned and
reviewed and treated as code rather than left in a wiki nobody opens. The same
source, with no second copy, becomes the context an agent loads before it does
anything. And the part that decides whether any of it survives contact with a
real quarter: something has to keep it current automatically, because a document
that depends on somebody remembering to update it is already out of date.

One source. Two audiences. A mechanism that keeps it true. Everything else in
this document is a consequence of those three things.

**The Lift is how a team actually gets there, and its phases produce the list at
the top of this section.** It is not a new thing to adopt. It is the ordered path
to the things nobody argues with.

| Phase | What it produces |
| --- | --- |
| Trust | the willingness for any of this to stick |
| Discovery | shared understanding of the problem and the requirements |
| Standards | shared understanding of code style and norms, the quality bar, the definition of done |
| Infrastructure | the guardrails, and the mechanism that keeps it all true |
| The Table | transparency across cross-functional teams |
| Encoding Intent | the documentation becoming context an agent can actually use |
| Scale | it holding beyond the team that built it |

**And every one of those outputs lives in the same system.** Requirements,
standards, guardrails, the quality bar, the definition of done. Each one is a
document, and each one belongs in the source that humans read and agents load.
They stop being scattered across a ticket tracker, a wiki nobody opens, a chat
thread from March, and one senior engineer's memory.

That is what makes the transparency on the list real instead of aspirational. A
cross-functional team cannot see how another team works when the answer lives in a
meeting that was never written down. It can when the answer is a file.

**The order is the framework.** Each phase fails without the one before it. A team
that jumps to infrastructure before agreeing on its standards builds a very
efficient way to distribute something nobody follows. A team that writes standards
before anyone trusts the effort produces a document that is technically correct and
universally ignored.

See [The Lift](/ideas/the-lift).

**This is an opportunity, not only a correction.** The list at the top of this
section is not new work. It is the work, and every generation of engineers has
tried to get it right with whatever tools it had. Doing it with AI is the first
version of that attempt where the effort scales.

**Once a team has that down, the opportunities to raise the quality bar start
coming forward.** Not the same bar met more cheaply. A higher one, because the
things that were always too expensive to do consistently stop being expensive.
Documentation that stays current. Tests that cover the cases nobody had time for.
Standards that hold across an estate instead of within one team. Those were never
impossible, they were unaffordable.

That is a shift-left argument, and it is the same one that was always true. The
difference is that ignoring it used to be slow and expensive, and now it is fast
and expensive.

Three things carry the weight:

- **Documentation** structured so humans and AI can both use it (sections 2 and 3).
- **Testing practices** that actually catch what AI-assisted development gets
  wrong.
- **Auditing**, so failures are visible rather than absorbed.

Strengthening those is the job. Not prompting better.

---

## 8. Testing and verification are part of the same discipline

Documentation and testing are not separate initiatives that happen to both be
good hygiene. They are the same move: putting the truth somewhere durable and
checkable, upstream of the work, instead of holding it in someone's head and
hoping.

Good documentation tells the agent and the human what is supposed to happen. Good
tests prove whether it did. One without the other leaves you with confident
output and no way to know.

The stakes are the amplifier problem again. If the tests are thin, AI-assisted
development produces more code, faster, with the same proportion of defects and
far less human reading time per line. Volume goes up, scrutiny per unit goes down.
Test coverage and verification have to absorb that, or the defect rate compounds
the same way stale context does.

---

## 9. The loop has to close

This is continuous, not a program with an end date.

**Every retro should consider AI-related failures explicitly.** Not as a separate
AI retro, and not as blame. As a standing question in the retro a team already
runs.

**Use the evidence, not the vibes.** GitHub CLI data from PR reviews, alongside
the narrative of what actually happened, gives a team something real to reason
about: what got caught in review, what got through, what kept coming back, where
the agent was confidently wrong.

**The question is always the same one:** how do we prevent this? Not who did it.
That question is what turns a failure into a rule, a test, a piece of
documentation, or a change to the process. It is the same capture-and-improve loop
described in my working method, run at the team level instead of the individual
one.

**Watch the wins too, and encode those.** Most retro practice only harvests
failure, which means a team gets steadily better at avoiding its own mistakes and
never gets better at repeating its own successes. When something goes unusually
well, that is a pattern worth naming while anyone still remembers why it worked.
Prevention and capture feed the same memory from opposite directions. A team
running only the first one is doing half the loop.

**Diligence as a team.** This is the part that does not work as individual
heroics. One careful engineer reviewing everything is a bottleneck and eventually
a burnout. A team that has agreed on what it checks, has the documentation to
check against, and closes the loop in retro, is a system. That is the difference
between a practice and a person.

---

## 10. So what is the actual engineering work

Pulling sections 5 through 9 together, because this is the answer to "what should
engineers be doing now."

**Self-correction loops, good process, testing and audit, and the automation that
keeps all of it current, is the engineering work that will matter** for software
teams, and for any team of knowledge workers.

Not writing the docs once. Not writing the tests once. Keeping them true. The
freshness mechanism is the product. Everything else decays around it.

Concretely: hashing sources and regenerating on change, pinning external
references to an exact commit so nothing shifts underneath you, scanning content
you did not write before an agent reads it, treating generated context as an
artifact with an owner and a version, and putting AI-related failure on the
standing retro agenda with real data behind it.

---

## 11. What it makes room for

Everything above is discipline, and discipline reads like cost. The return is the
whole point, so it is worth being explicit about it.

The tax being removed is real, and most teams have stopped noticing they pay it.
Rediscovering decisions that were already made. Re-litigating standards nobody
wrote down. Repairing work built on an assumption that was wrong three weeks ago.
Running the same regression by hand. Walking every new person through the same
explanation.

What comes back is time and attention. What that buys:

- **More time with the client, up front.** Discovery, prototyping, and live
  testing with the domain experts in the room. The cheapest defect prevention
  there is, and the first thing cut when a team is busy repairing itself.
- **More time collaborating, and pushing things to the limit.** The interesting
  arguments happen when nobody is occupied with something avoidable.
- **Engineers being creative about the system itself.** Improving how the team
  works becomes something people have room to do, rather than something that only
  happens after an incident forces it.

**And because the pattern gets captured, the improvements compound.** A team that
writes down what worked does not solve the same problem twice. Each round starts
higher than the last one ended, which is the difference between a team that is
busy and a team that is getting better.

**That is what raises the ceiling.** The floor is that nobody gets left behind.
The ceiling is how far a team can go once it stops paying for its own
disorganization.

---

## 12. The objection, and the answer

**"If context is handled at an org level, what is left for developers to solve?"**

This is the challenge worth taking seriously, and the answer is that only the
floor gets centralized. There are three layers and they are governed differently.
The full argument is in my Dispatch **"Don't Standardize the Human Out of the
Work"** (2026-04-26).

- **The enterprise layer is the floor.** Deploy pipelines, security gates,
  compliance hooks, environment setup. Centralize this. Make it boring and
  identical everywhere. Govern that the standards exist and that the tooling is
  safe to use on production code, then move on.
- **The team layer is shared craft.** PR templates, test patterns, review
  checklists, the conventions a group writes by. **Share it, do not force it.**
  Teams and product families own these. A team deep in legacy Angular does not
  work the same way as a team building something brand new, and flattening that
  context means teams ignore the tool and do their own thing anyway.
- **The personal layer is where the craft lives.** How someone prompts, the
  skills they build for themselves, the way they think through problems with AI.
  Reinforce good practice, then let developers work it out. **Standardize this
  layer and the human touch leaves the work.**

So what is left is most of it. The shift is that the work moves upstream: writing
the blueprints, shaping the process, deciding what should be automated at all.
The industry is past "what should we automate," and the new question
is judgment: **when to automate, what to automate, and how to manage tooling
without losing the autonomy that made AI useful in the first place.**

The defaults being set right now will hold for a decade. Build them so developers
can grow into what AI is asking of them.

---

## 13. Why this is a system and not a tool

**`das` is the product.** Documentation as Skills. The CLI that turns a
documentation source into skills an agent can navigate.

**`DaaS` is the system.** Documentation as a System. A way of working that a team
adopts and commits to. The tool is worthless without it, which is why the
sequence in section 3 starts with people.

---

## Where this shows up

- The enterprise initiative: teams publishing their own standards, style guides,
  code standards, and rules, as context designed to produce better output.
- The supporting infrastructure built afterward so teams could use it.
- `das-cli`, the same system rebuilt from scratch, open source, better.
- The consulting work, where the practice is the actual deliverable.
