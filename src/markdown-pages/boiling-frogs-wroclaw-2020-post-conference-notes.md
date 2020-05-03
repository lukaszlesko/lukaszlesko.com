---
path: /publications/boiling-frogs-wroclaw-2020-post-conference-notes
title: Notes after being at Boiling Frogs 2020 conference in Wroclaw 
description: Because of private stuff I was able to attend only 3 presentationss, but it's worth to share them and remember 
contentType: publication
created: 2020-03-24
---

## n-layered domain models

Presented by Marcin Gil.

### Worth checking out more

- Eric Evans book "Domain-driven design" from 2003
- Tactical and strategic pattern
- Bounded contexts

### What are those layers (n=4 is quite good)

- Capabilities (examples: Offer, Room, Seat, Gift card)
- Operations - use cases (examples: Order, Seat reservation)
- Policies - behaviour strategies, tuning of a model (examples: First wins, waiting list rules)
- Decision support (examples: review share, recommender)

Optional layer:
- Commitments layer (stakeholder commitments, client commitments etc.)

## DDD - one step too much

Presented by Łukasz Szydło.
 
### Worth checking out more 

- Connascence.io
- Event sourcing

### Validation types

- first level: format validation
- second level: structure validation
- third level: constraints validation

## Microfrontends

Presentation made by Marcin Milewicz.

### Drawback of monolithic approach:

- Dependence of team
- Coupled codebase
- Coupled deployment
- Dependence of technology

### Share nothing architecture

...


### How to integration

- build-time via package.json
- runtime via iframme's
- runtime via JS bundles
- runtime via WebComponents

### Communication tips

- establish ownership over extra shell layer (router on the top of the rest apps)
- beware about sharing codebase (share common UI patterns, owner of common libraries needed)

### Trade-offs of microfrontends

- redundancy (i.e. multiple angular library code setup)
- if security issue in app found then multiple deployments will be needed
- much more apps to maintain and architecture connections
- it's not a silver bullet