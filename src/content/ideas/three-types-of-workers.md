---
title: "Three types of workers"
description: "People differ in where their thinking happens, so a rollout measured by how much AI everyone uses will quietly push out the people who think through their hands."
order: 3
---

## What it means

There are three, and the difference between them is not enthusiasm. It is where the thinking lives.

**The planner.** Big picture, architecture decisions, system design, tradeoffs. They do their best thinking before anything gets typed, in the plan and the pseudocode. By the time typing starts the interesting work is finished, and the typing is the part that drains them. For this person AI is straightforwardly good. It does the half they were never excited about.

**The hands-on.** Detail oriented and syntax heavy. They think **through** the work rather than before it. Writing it is where the thinking happens. This is the person who says AI takes the fun out of coding, and that deserves to be heard precisely: handing the typing away does not only remove typing, it removes the medium they think in.

**Both.** Plenty of people are genuinely happy at the whiteboard and happy in the weeds, leaning one way or the other depending on the day and the problem. This is not a personality test and nobody sits at one pole permanently.

## Why it matters now

Most AI enablement measures adoption. How many seats, how many prompts, what percentage of the team is using it weekly.

That metric is broken here, because AI is a gift to one type and a loss to another, and neither chose which they are. A rollout that rewards usage rewards being a planner. Run it long enough and the hands-on engineers learn that the way they think is a performance problem.

Those are frequently the most careful people on a team. They are the ones who notice the thing that was almost right.

## What it looks like in practice

**Start in your own environment.** Everyone should be setting standards around how they personally like to work. That is the seed, and it is the one layer nobody else governs.

**Build a reusable skill for your own papercuts.** The work that never inspired you: scaffolding a module, scaffolding test functions and filling them in, generating TSDoc, drafting PR documentation. For someone who thinks through their hands, that is exactly the right delegation, because none of it is where their thinking lives.

**A skill graduates to the shared pool once it has proven it works with little human intervention on the output.** That is the bar. Something that still needs babysitting is not ready to be anyone else's default. Once it clears, a plugin architecture is how it travels.

**For the planner the same infrastructure does a different job.** Standards and norms written down mean the same context never has to be re-established every time architecture comes up for discussion. `das` earns its keep here, because it turns those standards into something an agent can navigate rather than a wall of text nobody loads.

**Every worker has something to contribute to the shared pool. And when they do not, it stays in the personal layer, which is fine.** Nobody is required to publish. Nobody is excluded from what others publish.

## The objection, and the answer

**"The hands-on people are just resistant, and they will come around."**

They might, and it does not matter. The claim is falsifiable and it is not about attitude: for that person, writing it is the thinking. Remove the writing and you removed the thinking. Nobody has to be talked out of that, because it is a description of how they work rather than an opinion they hold.

The infrastructure does not ask them to change. It asks what their papercuts are, and takes those.

## Where it came from

Articulated by Alexandra 2026-08-04, correcting an earlier and worse framing that had described this as people who protect their craft. That version made the position sound precious. This one makes it true.

The instinct was encoded well before it was written down. **Lens 1 of The Four Lenses asks: "Can developers opt out or adjust assistance level?"** Its red flags include developers pressured to accept suggestions without understanding, and loss of creative autonomy or flow state. See [four-lenses](/ideas/four-lenses).

## Related

[no-human-left-behind](/ideas/no-human-left-behind) is the value this protects. This is the specific mechanism by which a well-meaning team fails at it.

[three-layers](/ideas/three-layers) for why the personal layer is where this starts and why standardizing it removes the human touch.

[documentation-as-skills](/ideas/documentation-as-skills) for how a captured pattern travels once it has earned promotion.

[Documentation as a System](/ideas/documentation-as-a-system) for the substrate that serves all three types without asking any of them to move.
