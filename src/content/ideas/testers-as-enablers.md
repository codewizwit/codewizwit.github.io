---
title: "Testers as enablers"
description: "Testers are the highest-leverage people in an AI rollout, because thinking in edge cases, failure modes, and quality gates is exactly what an AI configuration needs and exactly what most developers skip."
order: 10
---

## What it means

Everywhere else in this body of work, testing shows up as a stage. This says something stronger about the people. A tester's entire professional instinct is the instinct an AI configuration is missing.

The claim runs in two directions, and both matter.

**Testers encode their expertise so developers get it automatically.** A team's testing conventions, naming, mocking approach, and anti-patterns can live in a skill an agent reads whenever it writes a test. Commands like `/test-this`, `/test-plan`, and `/test-review` put a tester's judgment into a developer's hands at the moment they need it, without a review cycle. Hooks turn quality gates into something the tooling enforces rather than something a person has to remember to check.

**Testers use AI to make their own work better.** Gap analysis against existing tests, edge case generation, diagnosing a flaky test, reviewing E2E selectors for resilience, parsing CI failure output. The repetitive parts of testing are exactly the parts that are safe to delegate.

Then there is the third move, which almost nobody is making.

**Test the configuration itself.** Does `/test-this` actually produce good tests? Does the testing skill trigger when it should? Does the quality gate hook actually block a bad commit? What happens with a file that has no existing tests, or a hundred? A command is a unit with a happy path, edge cases, and failure modes. Treat it like one.

## Why it matters now

Writing code was never the constraint, and verification is where the leverage moved. Output volume goes up with AI-assisted development, human reading time per line goes down, and the defect rate compounds unless verification absorbs the difference.

That makes the people who think in failure modes the most valuable people in the room, and most organizations have them filing tickets instead of writing the standards.

There is also a plainer argument. Most Claude configurations are vague, untested, and have no quality gates. Someone has to write the standards down. Testers already have the standards. They have been enforcing them one pull request at a time, which is the slowest possible distribution mechanism.

## What it looks like in practice

Start where it already hurts. Audit what testing mistakes keep appearing in review, since those are the standards that are not written down anywhere an agent can read.

Then, in order: one command that addresses the most common mistake, a `testing-patterns` skill carrying the team's conventions with a gold-standard example, and one hook that makes a quality gate automatic. Use each one on real work for a week before sharing it.

The measure of whether it worked is not how much AI the team uses. It is whether the tests coming out match the house style without anyone asking.

## The objection, and the answer

**"This turns testers into tooling engineers instead of testers."**

It turns one tester's judgment into something every developer on the team applies by default. A tester who catches a bad mocking pattern in review has fixed one pull request. A tester who writes that pattern into a skill has fixed every pull request after it, including the ones written by people who have never met them.

The reviewing does not go away. It moves upstream, which is the same move this whole body of work argues for.

## Where it came from

My second lifelong instinct, alongside documentation.

| Date         | Artifact                                                                                                                                                                                      |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2021 to 2025 | In a regulated financial environment: automated the E2E enrollment suite in Cypress, cutting manual pre-production testing from hours to minutes, and raised every app to a common coverage baseline |
| 2026-02      | Vanguard IGNITE: presented "Testing Strategies for Bias and Blindspots in AI Workflows"                                                                                                       |
| 2026-07      | `das-cli` built under strict TDD, 426 tests, each phase reviewed by an agent that did not write it                                                                                            |
| 2026-08-04   | This presentation outline, captured at sources/testers-as-enablers-outline.md                                                                       |

## Related

[shift-left](/ideas/shift-left) for why verification is where the leverage moved. [diligence-as-a-team](/ideas/diligence-as-a-team) for the retro loop this feeds. [encoding-intent](/ideas/encoding-intent) for the general form of putting judgment upstream. [three-layers](/ideas/three-layers) for where testing standards live, which is the team layer, shared and not forced. [Documentation as a System](/ideas/documentation-as-a-system) for the substrate all of it runs on.
