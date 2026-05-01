---
title: "Don't Standardize the Human Out of the Work"
description: "AI made automation cheap. The defaults orgs set right now about who gets to build their own tools will hold for a decade. Three layers, and only one of them belongs in a central registry."
type: essay
number: 8
publishDate: 2026-04-26
tags:
  - ResponsibleAI
  - AIEnablement
  - DeveloperExperience
  - EncodingIntent
  - NoHumanLeftBehind
draft: false
---

Strip the personal layer, and the work stops being human.

AI made automation cheap. Writing a small piece of it used to take hours. You'd scope it, build it, debug it, maintain it, and most of the time the cost outweighed the time saved, so most of it never got built. Now it takes minutes. Skills, agents, and Claude rules were designed exactly for this: cheap, iterable, disposable, written in natural language inside simple markdown files with consistent syntax. The tools are meant to be in everyone's hands.

So developers started doing what developers do when presented with a new tool that makes their job easier: noticing patterns in their own work and automating their own flows. The job stopped being task-by-task ticket pulling and started being something more like designing how the work gets done.

Here's where this gets serious. The new shape of the work asks developers to think differently. To spot patterns in their own flows, design their own automations, exercise judgment about what's worth encoding. That muscle memory only forms through reps. If we react to this moment by automating everything from the top down, developers never build the muscle the new era is asking for. They fall behind the expectations AI created, because the org never gave them the chance to keep up.

What I worry about is what happens by default. When something new and powerful shows up in an org, the reflex is to funnel it through one central team, and a few months from now we look up and the most democratic shift in how engineering works has been quietly turned into another permission slip. Nobody intends that. It just happens unless we name it and decide otherwise.

The biggest return comes from letting people build their own tools, develop their own style, make their own mistakes, and learn from them. That compounds in a way a curated library of approved skills never will. The job is teaching people to fish.

The tools we're using are already designed to support this. They hold encoded intent at three different layers, and each layer needs to be treated differently.

## The enterprise layer

The enterprise layer is the floor: deploy pipelines, security gates, compliance hooks, environment setup. Centralize this. Make it boring and identical everywhere. Nobody needs to get fancy with the test pass. Govern that the standards exist and that the tooling is safe to use on production code, and then move on.

## The team layer

The team layer is shared craft, things like PR templates, test patterns, review checklists, and the conventions a group writes by. Share it, don't force it. Teams and product families should own these. A team deep in legacy Angular doesn't work the same way as a team building something brand new, and when you flatten that context, teams just ignore the tool and do their own thing anyway. This is also where decentralized package management starts to matter, something closer to Homebrew or npm than to a central registry. Distribution and discovery handled by infrastructure, with the patterns themselves living where they're made.

## The personal layer

The personal layer is where the craft lives. How someone prompts. The skills they build for themselves. The way they think through problems with AI. Reinforce best practices here, but let developers figure it out themselves. Standardize this layer and the human touch leaves the work.

## The defaults will hold

The whole industry has moved past "what should we automate." The new question is judgment: when to automate, what to automate, and how to manage tooling without losing the autonomy that made AI useful in the first place. The defaults being set right now will hold for a decade. Build them so developers can grow into what AI is asking of them.

No Human Left Behind.
