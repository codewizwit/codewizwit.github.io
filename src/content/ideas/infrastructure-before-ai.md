---
title: "Infrastructure Before AI"
description: "AI without infrastructure is a hot dog without a bun, and developers are the ones positioned to build the bun."
order: 14
---

## What it means

The meme it starts from is old and still accurate. What do we want? AI! AI to do
what? We don't know! When do we want it? Right now! Everyone wants the hot dog.
Nobody thought about the bun.

You can technically eat a hot dog without a bun. It is messy, hard to handle, and
you are probably going to regret it. That is the shape of AI going into
production without the thing that holds it together.

The bun is the unglamorous connective tissue: testing that catches AI-specific
failures, versioning and rollback, monitoring, review gates, audit trails, and
the documented context a model reads before it does anything. All of it is what
makes the capability safe to handle at scale.

Developers are positioned to build it because of where they already sit. They are
the ones integrating AI into production systems, writing the code, running the
tests, deploying to prod. That position is what lets them make AI safe, reliable,
and scalable.

There is a family version of this I use. My father built broadband
infrastructure. I build the ethical and practical infrastructure for AI. Both
are connective tissue that lets other people do their work.

## Why it matters now

AI is being integrated into production faster than the tooling can keep up. When
I wrote this in January 2026 there was no standard for testing AI behavior, no
established pattern for versioning prompts or managing context, no common
framework for detecting drift, and no agreed-upon way to make a decision
traceable. Most teams were figuring it out as they went, each inventing the same
wheel in isolation.

That gap is the opportunity. Developers can take what they are learning on their
own teams and turn it into reusable tools, shared libraries, real documentation,
and common patterns that make responsible AI the default. As I put it in the
three-layers argument: the defaults being set right now will hold for a decade.

## What it looks like in practice

Five pieces, from the essay:

- **Testing frameworks that catch AI-specific failures.** Bias, fairness, edge
  cases, outputs validated against expected behavior, regression tests that catch
  drift. Make testing AI as easy as testing traditional code.
- **Versioning and rollback for models and prompts.** Prompts versioned like
  code. Every change tracked, every deployment tagged, rollbacks trivial.
- **Monitoring and observability for model behavior.** Log inputs and outputs,
  track latency and error rates, alert when behavior changes.
- **Human review gates on high-stakes decisions.** AI suggests, a human approves,
  the approval is logged, overriding is easy.
- **Audit trails that make decisions traceable.** Who approved this model, who
  deployed this prompt, who signed off, and why.

My starting order for a team that has none of it: start with testing, version
everything, add observability, build the human review patterns, document what
works, use AI itself to generate the scaffolding, and advocate for the time to do
all of it.

Everything I have built since is bun. `human-in-the-loop` is the review gate,
`das` is the context layer, `cpm` is distribution, and the enterprise governance
registry was audit and assessment. The through-line predates the metaphor:
`@human-in-the-loop/cli` went to npm on 2025-10-16, three months before the essay
gave the idea a name.

## The objection, and the answer

**"We do not have time to build infrastructure."**

Building responsibly is faster over the life of the system than cleaning up
problems later. Less time reinventing the wheel, more time on features, and
guardrails baked in so a team can move fast without breaking things. That case
has to be made out loud, which is why "advocate for time to build infrastructure"
is on my getting-started list at all.

I also frame the work as a career opportunity. Responsible AI engineering is
an emerging field with few settled patterns, so the developers building this
infrastructure are the ones writing the playbooks other teams will follow.

## Where it came from

- **2025-10-16** `@human-in-the-loop/cli` published to npm. The oldest artifact
  in the record, and bun before the word existed. Now at v3.0.3.
- **2026-01-15** first public statement, Dispatch 2, "AI Is the Hot Dog,
  Infrastructure Is the Bun."
- **2025 to 2026** inside a large financial services firm: the governance registry and the supporting
  context infrastructure built after the documentation initiative landed.
- **2026-07-24** `@codewizwit/das-cli` published to npm, the context layer
  rebuilt independently and in public.

## Related

- [AI Is an Amplifier](/ideas/ai-is-an-amplifier). Why a missing bun gets expensive
  fast.
- [Documentation as a System](/ideas/documentation-as-a-system). The context
  half, stated as a practice.
- [Documentation as Skills](/ideas/documentation-as-skills). The tool that builds it.
- [Human in the Loop](/ideas/human-in-the-loop). The review gate, and the oldest bun
  I have published.
- [No Human Left Behind](/ideas/no-human-left-behind). What it is all for.
