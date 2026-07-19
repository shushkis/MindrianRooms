---
title: "Bootstrap Financial Model -- First Real Pass"
status: active
source: larry-session
date: 2026-07-19
section: financial-model
supersedes_note: "First real content in financial-model/ (previously placeholder only). Built from figures already on file (buyer-analysis.md pricing, market-analyst-report-2026-07.md's $79M government budget, team-execution/mordi-role-decision-2026-07.md's freemium/no-salary structure) plus new WebSearch on infra and incorporation costs. Sourcing discipline: cite or flag unconfirmed, never invent a number."
---

# Bootstrap Financial Model

## The Headline: Burn Is Genuinely Small. Time Is the Real Constraint, Not Cash.

Given the investor feedback (bootstrap, don't raise) and the decisions
already on file -- no founder salaries during bootstrap, Mordi's firm on
freemium not paid, both founders currently have other income -- this
venture's actual cash burn is close to infrastructure cost alone. The
real constraint isn't money. It's the founder-time tradeoff already
flagged in `mordi-role-decision-2026-07.md`: Mordi's "full-time if
needed" and Elli's current job are the actual scarce resource here, not
capital.

## Known Costs (Sourced)

| Item | Amount | Frequency | Source |
|---|---|---|---|
| Israeli company incorporation (registration + lawyer + accountant) | ~$2,500-$7,000 | One-time | [Company registration cost breakdown](https://en.simengqifu.com/IsraelCompany/9847.html) |
| Ongoing bookkeeping/accounting | NIS 1,000-5,000 (~$270-$1,350) | Monthly | Same source |
| Hosting (Render -- current deployment, per `hamuzim-chat/DEPLOY.md`) | $26-50 minimum for a basic production setup ($7/service Starter or $25/service Standard, +$6 database) | Monthly | [Render pricing 2026](https://kuberns.com/blogs/render-pricing/) |
| Gemini API usage (LLM backend, per `DEPLOY.md`'s `GEMINI_API_KEY`) | Usage-based, not sized this pass | Monthly, variable | Not researched this pass -- flag to track once freemium query volume with Mordi's firm starts, not before |

**Rough all-in monthly burn at current PoC scale: ~$300-$1,400/month**,
dominated by bookkeeping once incorporated, not infrastructure. Pre-
incorporation, burn is close to hosting cost alone (~$26-50/month).

## What's Deliberately Not a Cost Yet

- **Founder salaries:** $0, by the standing decision that both founders
  keep outside income during bootstrap (`mordi-role-decision-2026-07.md`).
  This is a real constraint disguised as a cost saving -- it caps how
  much time either founder can actually give until something changes it.
- **Mordi's firm as a customer:** $0 revenue, by design (freemium/PoV,
  same decision doc). Not a gap -- a deliberate choice to avoid the
  founder-self-dealing pricing question.

## The Real Tension This Model Surfaces

The product roadmap sequences the **government buyer first** (MVP) and
the **private claimant (Avi) segment last** (`big market expansion`,
per `buyer-analysis.md`). But the revenue timeline for each is wildly
different, and this model is the first place that mismatch becomes a
number instead of an assumption:

- **Government path:** B2G, "formal process, slow" (`buyer-analysis.md`).
  The LTSA mechanism itself takes ~18 months just to establish
  (`market-analyst-report-2026-07.md`). Realistic first-revenue timeline:
  12-18+ months, possibly longer given no pricing model exists yet for
  this segment at all.
- **Private claimant path:** B2B via law firms, **no procurement process**
  (`buyer-analysis.md`), 20,000-50,000 NIS per case, willingness-to-pay
  now partially corroborated against real Israeli legal fee data
  (`tam-pricing-gap-closure-2026-07.md`). Mordi already has the
  relationships. This could plausibly generate real revenue in weeks to
  months, not years -- if opened earlier than the current roadmap
  sequencing plans for it.

**This is not a recommendation to reorder the roadmap** -- the room's
existing sequencing logic (state as MVP, private claimant as
expansion) was a deliberate, scored decision (Mullins verdict, Domain 1
economics). But a bootstrap plan that assumes zero revenue for 12-18
months while founders draw no salary is a materially different plan than
one with a private-claimant revenue bridge in month 2-3. Worth a
deliberate choice, not a default.

## Runway Math (Illustrative, Not a Commitment)

At ~$300-$1,400/month burn and $0 revenue, even a modest personal
runway contribution from either founder covers 6-12+ months without
external funding -- consistent with the investor feedback that this
doesn't need VC money to operate. The open variable isn't whether you
can afford to bootstrap; it's whether you can afford the *time*,
especially if/when Mordi's "full-time if needed" triggers.

## Open Items

- [ ] Size Gemini API cost at realistic freemium query volume once
      Mordi's firm starts using it -- currently unsized
- [ ] Decide, explicitly, whether the private-claimant channel opens
      earlier than "big market expansion" stage, purely as a bootstrap
      revenue bridge -- separate from the long-term product-priority
      question, which stays unchanged
- [ ] No pricing model exists yet for the government segment at all
      (only the private-claimant per-case figure is priced) -- carried
      over from `buyer-analysis.md`'s original open items
- [ ] Personal runway numbers for each founder -- not something Larry can
      size, needs founders' own input
