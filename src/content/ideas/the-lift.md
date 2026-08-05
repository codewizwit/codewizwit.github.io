---
title: "The Lift"
description: "AI-assisted work that elevates everyone, run as seven phases in a fixed order that begins with trust, because a team rises by sequence and stalls wherever the sequence was skipped."
order: 2
---

## What it means

No Human Left Behind is the north star. The Lift is how a team gets there.

The promise alone does not tell anyone what to do on Monday. The Lift is the part
that does: seven phases, four roles, and nine changes in how the work gets done.
It is the only framework here that operates on people rather than artifacts,
which is why it is the one that gets hired.

Elevation runs in two directions at once, and both are load-bearing.

**The floor is that nobody gets left behind.** That list is specific. The cynics,
the scared, the junior devs, the senior engineers who feel threatened, and the
people who have been told they are not technical. A rollout that works for the
early adopters and stops there is a rollout that failed.

**The ceiling is how far a team can go** once it stops paying for its own
disorganization. Rediscovering decisions already made. Re-litigating standards
nobody wrote down. Running the same regression by hand. Walking every new person
through the same explanation. Most teams have stopped noticing they pay that tax.

One mechanism produces both. Trust and shared standards are what bring the slower
adopters along, and they are also what removes the tax.

## Why it matters now

Most AI rollouts are aimed at the floor and stop there. Everyone gets a license,
everyone sits through a training session, and success is reported as how many
people logged in. That reaches a baseline, and a baseline is not a capability.

The discipline The Lift asks for is front-loaded, so it reads like cost. Trust
conversations before tools. Standards written down before anyone generates
anything. Infrastructure before speed. A team that only hears the cost will not
agree to pay it, so the return has to be said out loud.

What comes back is time and attention: more time with the people who understand
the problem while the work is still cheap to change, room to argue about the
interesting things, and engineers with space to be creative about the system
itself. And because the team captures what worked, the improvements compound.
Each round starts higher than the last one ended, which is the difference between
a team that is busy and a team that is getting better.

Elevation is the return on the discipline, and naming it is what makes the
discipline survive a busy quarter.

## What it looks like in practice

Seven phases. The order is the method.

0. **Trust.** Honest conversations about what AI means for the team, before any
   tool arrives. Listen to the fear and the excitement. Builds permission to try.
1. **Discovery.** Sit with teams and learn how the work actually happens today.
   The skeptics are usually right about what is broken. Builds understanding and
   buy-in.
2. **Standards.** Teams define their own rules, and the rules get encoded so AI
   follows them by default. Builds shared ownership of quality.
3. **Infrastructure.** Static analysis, coverage gates, validation pipelines,
   architecture patterns, governance. Builds the safety net that makes creative
   risk affordable.
4. **The Table.** Engineers, product, design, and domain experts building side by
   side, so the people who understand the problem are the ones solving it. Builds
   a new way of working together.
5. **Encoding Intent.** Judgment goes in as rules, skills, configs, and planning
   prompts before the model writes anything. Builds the environment for AI to
   succeed.
6. **Scale.** Teams teach teams, champions emerge, and the model becomes the
   culture because it made the work better for the humans doing it. Builds
   something that holds without the person who ran it.

Four roles, so nobody sits it out. **Enablers** build the environment and move
from gatekeeper to enabler. **Builders** build inside it and move from requester
to creator. **Advocates** make sure what gets built is trustworthy and move from
checkers at the end to architects of quality. **Facilitators** run The Table and
move from project manager to collaboration architect. Each role keeps something a
model does not do: mentorship, domain expertise, critical thinking, reading a
room.

The nine shifts are the before-and-after of the whole model. Three of them:
engineers write code becomes engineers build blueprints, quality is tested after
becomes quality is encoded before and validated throughout, and trust is assumed
becomes trust is built through transparency.

The sequence is also the shape of the consulting practice, and the three
engagements are cuts of it. A one-week **Readiness Audit** at $3,500 covers
phases 0 and 1 and returns a scored current state, a 90-day roadmap, and a
configured starter repo. A six-week **Enablement Sprint** at $16,000 to $48,000
by organization size runs all seven. An **$8,000 monthly retainer** holds phase 6
open with office hours, configuration maintenance, onboarding, and a quarterly
Four Lenses review. Phase 6 is the phase most likely to quietly reverse, which is
why the retainer exists.

## The objection, and the answer

**"We do not have time for a trust phase. Just roll out the tool."**

This is the objection that actually arrives, and phase 0 is the phase that
actually gets skipped. The instinct behind it is reasonable. Leadership measures
logins, trust is not on the dashboard, and a conversation about fear looks like a
week nobody funded.

The answer is that the time gets spent either way. Skipped trust reappears later
as unused licenses, shadow workflows, quiet non-compliance, and a survey nobody
wants to read. Speed without trust creates resistance, and resistance is what
kills a rollout. Phase 0 is the cheapest place in the sequence to spend that time,
because it is the only place where it buys permission instead of paying down
damage.

The second version of the objection is that seven named phases is a consultant's
ladder and real teams are messier. Partly true. Teams arrive mid-sequence, phases
overlap, and a team with good infrastructure starts at 2. The dependency is what
does not move. Standards written by a team that distrusts the exercise are
standards nobody follows. The order is a dependency graph rather than a calendar.

## Where it came from

| Date           | Artifact                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **2026-02-07** | **codewizwit.com v1 goes live with The Lift as a named framework.** First public appearance, in the site's initial commit.                                           |
| 2026-02-08     | The page reordered and its phases extracted into a data file, which is when the phases became structured content.                                                    |
| 2026-02-14     | Tagline set to "AI adoption that elevates everyone." Same day as Dispatch 4, "Plan First, Prompt Second," which is phase 5 published on its own.                     |
| 2026-07-31     | wizwit lab republishes it as **Framework 01**: seven phases, four roles, nine shifts. 932 words, and until this file the only full articulation outside skill files. |
| 2026-08-04     | Tagline changed to **"AI-assisted work that elevates everyone."** "Adoption" names a phase that ends. The model describes the work and the people, which does not.   |

The long-form source is
`~/.claude/skills/alex-professional-skills/nhlb-framework.md`, carrying the
phases, roles, shifts, The Table, and six measures of success. A near-identical
498-line copy sits at `~/Documents/notes/nhlb-full-outline.md` with no git and no
backup. The elevation argument here is section 11 of the DaaS gold copy.

I have run the sequence end to end twice, at a large financial services firm and
at a Chicago education nonprofit.

## Related

- [No Human Left Behind](/ideas/no-human-left-behind), the north star this serves
- [Encoding Intent](/ideas/encoding-intent), phase 5, which outgrew the phase
- [Shift Left](/ideas/shift-left), the sequencing argument behind phases 2, 3, and 4
- [The Four Lenses](/ideas/four-lenses), how you find out whether the elevation
  reached the people
- [Three Layers](/ideas/three-layers), what gets centralized during phases 2 and 3
  and what must not be
- [Testers as Enablers](/ideas/testers-as-enablers), the Advocates role at length
- [DaaS: Documentation as a System](/ideas/documentation-as-a-system),
  section 11, the elevation argument
