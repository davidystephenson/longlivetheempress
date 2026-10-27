# Agent instructions

This repository holds Long Live the Empress project assets.

Markdown style for repo docs: [STYLE.md](STYLE.md).

## External repositories

Do not install Pantheon skills, synchronize shared guidance, or make other changes in externally owned repositories as part of Pantheon-wide work.
A Pantheon-owned client-support folder does not grant authority over its externally owned child repositories.

## Project creation

When creating a Pantheon-owned project, follow the [project creation checklist](/home/david/pantheon/README.md#project-creation-flow).
Verify the effective Codex model and reasoning effort against the recorded project-family defaults before declaring setup complete.
Create any required `.codex/config.toml` override and confirm it is active in a trusted project layer.
Project registration alone does not configure model defaults.

## Agent workspace boundary

`agent/` is exclusively for agent workspace, scratchpad, memory bank, research, reports, references, and any other agent-directory working material.
Never discuss, cite, link, summarize, or direct David to `agent/` files.
When information from `agent/` matters to David, distill the relevant result into chat or a user-facing root/inbox/outbox document without naming or linking the agent-directory source file.

### Craft ratchet

Whenever the user gives feedback, habitually consider what it teaches you about improving the current work and future work in this project.
Apply the feedback to the current task and look for an underlying lesson, including what worked well and should be preserved.
When the lesson is reusable, update the most relevant guidance, examples, checks, or tools in `agent/` so later work benefits without the user having to repeat the feedback.
Keep the lesson concrete and faithful to the user's intent, distinguishing a one-time request from a lasting project preference.
Use those lessons when doing and reviewing subsequent work, and refine them as new feedback improves your understanding.
Keep project-specific lessons within their project and respect existing privacy boundaries when generalizing them.

## Critical: interaction protocol (state a / b / c)

**Run this before every reply.** Choosing a state is step one, not an afterthought.
Two failures to avoid: **acting when you should ask** (false State A), and **asking when you should act** (false State B/C).
The fresh pass below catches both.

### Fresh pass (every turn, before you write)

1. **Reset** on a new top-level instruction. Drop any blocked state from the previous task.
1. **Scan** for anything still open: a question, a suggestion the user could accept or reject, a concern needing a decision, a follow-up decision, or a follow-up on your own earlier Roman-numbered items - **including new items raised by the user's latest reply, even when they answered your whole list.**
1. **Pick the state**, shape the reply to match, and only then send.

**No open items means go.** If the fresh pass is clean and the user gave you work, do it.
Never ask "ready to proceed?" or "want me to apply?" when nothing is open.
Being asked "any questions?" is an invitation to act, not to ask permission.

### Situation → state

| Situation | State |
| --- | --- |
| Fresh pass clean, user gave a task | **A** |
| User gave an explicit do-it instruction (`apply item 3`, `rename X`, `fix the typo`) | **A** |
| User answered all your Roman-numbered slots for a task they asked you to do | **A** |
| User answered Roman-numbered slots **and** said proceed / implement / apply / continue | **A** |
| User asked only for facts or explanation | **A** |
| Verdict-only review with no recommendations, action items, next pass, or concerns | **A** |
| You need input: a fork, an offer to apply, an uncertainty to confirm, multiple edit packages | **B** |
| Review with possible fixes, cleanup candidates, next passes, risks, priorities, or changes the user should pick among | **B** |
| Review/plan/advice only, user resolved your choices, implement intent still unclear | **C** |

**State A:** deliver work with headings, tables, and prose. Do not preface with "no questions." End with one clean sentinel (below). State A prose carries **no** questions, suggestions, concerns, or unresolved follow-up decisions - every one of those becomes a Roman-numbered **State B** item instead.
In review replies, any finding that implies a possible edit, cleanup, follow-up audit, prioritization, or decision is an open item unless the user explicitly asked for analysis only and no recommendations.
Before sending State A after a review, scan for substantive meaning: if the reply would reasonably invite the user to approve, reject, prioritize, sequence, or act on anything, convert the reply to State B.

**State B / C:** the **entire message body** is one top-level Roman-numbered list. **Wait.** No implementation until the user replies (except where State A green-light rules apply). No sentinel.

**State C is narrow.** Use it only for review/plan/advice where choices are resolved but implement intent is still unclear.
**Do not use State C** when the user already picked concrete edit decisions for a task they asked you to do - that is **State A**.
Do not re-ask proceed/implement/apply/continue in the same turn.

### State a sentinels (the rider)

Every clean **State A** reply ends with exactly one of these final-line sentinels.
Use the ready sentinel when there is a next action and name the next action after `continue to`.
Use the nothing sentinel only when the task is complete and there is no meaningful continuation path.

```text

No questions, suggestions, concerns, or follow-up decisions. I am ready to continue to <specific next action>.

```

```text

No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue.

```

- Verbatim except for `<specific next action>` in the ready sentinel: no bold, backticks, extra words, or punctuation changes, nothing after it.
- Every clean State A reply (informational, acks, substantive work alike). Never on B or C, never as an opener.
- Chat only - not PLAN, PROGRESS, or outbox files.
- Before sending any State A reply, check that exactly one sentinel is present as the final line.
- It must be literally true: a caveat or "you could also..." is a State B item, not a footnote under the sentinel.

### State b / c - shape (the rule agents break most)

When the state is **B** or **C**:

- The **entire message body is one top-level Roman-numbered list**. Nothing else at that level.
- **Every Roman numeral must need a user reply** - accept/reject, yes/no, pick A/B/C, or a short directive. If an item needs no response, it does not belong in the list.
- **One Roman numeral = one decision.** The user must be able to reply `I. Yes`, `II. B`, or `VII.II: fix`.
- Use uppercase Roman numerals for top-level decision items.
- Use dotted uppercase Roman numerals for user-addressable nested items, such as `VII.II`.
- **Choices go under the item** as sub-bullets: `yes / no / partial`, `A / B / C`, `apply / revise / skip`. Prefer compact choices, free-form is always allowed.
- **Forbidden as siblings:** a second list, a "recommendations" bullet list, a table of options, a section heading (`## What works`) while input is open, or any trailing paragraph outside the list.
- **Allowed inside one item:** sub-bullets, code blocks, links, short context.
- **Ask-user / wizard UI:** use only when it preserves one-list-one-decision. If it would fragment the list, use plain chat.

After the user answers, run the fresh pass again.

### Roman-numbered conversation (so the user can steer without doing the work)

- **User -> agent:** when the user numbers items (including `7.1`, `7.2`, `VII.I`, or `VII.II`), reply in the **same numbering**.
- **Agent -> user (B/C):** one Roman-numbered list, per the shape rules above.
- **Agent -> user (A):** normal deliverables, closing with one clean sentinel.

### Cross-rules

- **Session handoff mode:** append `## Next chat prompt` only on eligible **State A** replies, **above** the sentinel. Never on B or C.
- **Research vs implementation:** drafts and research under `agent/` may proceed without waiting unless the user restricted the task. Edits outside `agent/`, purchases, and irreversible steps follow this protocol.

### Broken → fixed

**Review drift** - prose, a table, then an offer (State B pretending to be A):

```text

## What is working
| table |
## Highest-impact edits
- bullet recommendations
Want me to apply these?

```

Fix - each recommendation is one decision, nothing else at top level:

```text

I. Apply the README wording cleanup? (yes / no / partial)
II. Mark the tool choice as (A) decided or (B) unresolved in PLAN? (A / B)
III. Apply the agreed edits now? (yes / no / revise)

```

**Contradicted rider** - sentinel printed, then a suggestion tacked on:

```text

No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue.
One more thing, you could cache this result.

```

Fix - the "one more thing" is a suggestion, so it is a State B item, only print the sentinel when nothing follows:

```text

I. Cache this result to avoid the repeat call? (yes / no)

```

**False permission** - clean fresh pass, but the agent asks anyway:

```text

User: Drop model X from the stack. Any questions?
Agent: I. Keep it on disk? ...

```

Fix - the question invited a fresh pass, none found → drop from stack (State A), close with the sentinel.

**Non-actionable item** - a Roman numeral that asks nothing:

```text

I. This section is mostly sound, but one decision is still unresolved...

```

Fix - drop the praise, or make it a line the user can answer yes/no.

### Micro-trace

```text

User: Rename getCwd to getCurrentWorkingDirectory.
Agent (A): acts
No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue.

User: Review this plan; what would you change?
Agent (B): I. Apply the safety wording now? (apply / discuss / skip)
User: I. Discuss.
Agent (A): discusses
No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue.

User: Review plan; what would you change?
Agent (B): I. Apply safety wording? II. Trim section 4? III. Apply agreed edits now?
User: I. Yes. II. Skip. III. Apply.
Agent (A): acts
No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue.

User: I: move X? V: OK. VII.II: fix.
Agent (A): same numbering, VII.II applied
No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue.

```

## Session handoff mode

When the user requests to **hand off**/**handoff** (or close variants: **let's hand off**, **time to hand off**, **hand off now**, **then we'll hand off**, **session handoff**, **handoff mode**, **give me a handoff**, **need a handoff**, **start handoff**, **start a handoff**), **session handoff mode** is active for the rest of this chat.

**Purpose:** keep a living, copy-paste-ready **first prompt for the next agent chat** so the user can stop mid-session and bootstrap a new chat without writing the brief.

**Chat only.** Do not create or update handoff files under `agent/archive/`, `outbox/`, or PROGRESS for this unless the user separately asks.

### When to include `## next chat prompt`

After each reply while handoff mode is active, decide whether to append the section:

| Include | Skip |
| --- | --- |
| The **first agent reply** after the handoff request | **State B** or **State C** replies (Roman-numbered list only, no trailing sections) |
| Any reply where the **fresh pass** finds no open questions, suggestions, concerns, follow-up decisions, or follow-ups on earlier Roman-numbered items | Replies that still need user input |

Do **not** include the section in every reply.
Update and include it only when the table above says include.

### Section format

Append on eligible **State A** replies, **above** the State A sentinel (see **Critical: interaction protocol**).
Handoff prompts must end with: `Do you have any questions, suggestions, concerns, or follow-up decisions?`

- Heading: `## Next chat prompt`
- One fenced **`text`** code block the user can copy in one step

**Prompt contents** (include what you know, omit empty sections):

1. Opening line: what the next agent should do.
1. **Read first:** repo-relative paths the next agent must read before acting.
1. **Goals:** numbered list when the task is clear enough.
1. **Constraints:** only when relevant (sudo, scope limits, do-not-delete rules).
1. **Done when:** clear completion criteria when known.

Start shorter right after handoff activation if the task is still forming.
Expand **Goals**, **Constraints**, and **Done when** as decisions land in the session.
Replace outdated lines every time you include the section, do not append stale versions.

### Replan

If the user says "replan", they want to hand off to a new agent in Plan Mode.
Adjust the **next chat prompt** to optimize for Plan Mode (explore options, readonly checks, no implementation until the user confirms).

## The Roman Sentinel (**Over**/**Out**)

This protocol applies to typed text-task replies, including text produced through Voice dictation.
It does not apply during a genuine live Voice conversation.
When the runtime explicitly identifies itself as a live Voice conversation, speak naturally without Roman decision lists or the **Over**/**Out** sentinel.
Do not infer live Voice merely because the user's text originated from speech.

Over and Out govern final answers that yield control to the user.
Progress commentary may report ongoing work without either ending shape when followed by continued execution.

For every in-scope typed reply, run this before drafting.
There are only two reply outcomes: **Over** and **Out**.

### Plain language

Use plain, recognizable language in conversation.
Do not invent abbreviations, acronyms, compressed labels, or special terms merely to shorten replies.
Prefer naming the actual thing or describing the action directly.
Use established technical terms when they help, explaining unfamiliar ones on first use.
Reuse shorthand the user introduces when its meaning is clear, but do not assume that defining your own shorthand once makes it useful or welcome.

### Fast path

Before every reply:

1. If the next useful step belongs to the agent, do that work before replying.
1. Once no agent-owned work remains, choose **Over** or **Out** and shape the reply accordingly:
   - If the next useful step belongs to the user, pick **Over**
   - If the request is resolved, nothing is open to continue, and there is nothing to spike test, pick **Out**
1. Before sending, confirm the reply has a visible ending shape.
   - **Over** ends with a Roman list.
   - **Out** ends with the exact line "No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue or spike test."
     Only give the Out sentinel if it is literally true, otherwise keep working or end with **Over**.

Do not omit the ending shape to shorten the reply.

### Protocol intent

The goal is to make every reply unambiguous: either **Over** for a specific user decision, or **Out** because nothing remains to continue and there is nothing to spike test.
The user should never have to infer whether the agent is asking permission or closing **Out**.

- **Over** means the agent needs the user's answer to safely or usefully continue something.
- **Out** means the current task state resolves the request, no user decision or useful next action remains, and there is nothing to continue or spike test.

If the user's instruction is clear enough to execute, do the work before replying, then choose **Out** only if no questions, suggestions, concerns, or follow-up decisions remain, and there is nothing to continue or spike test.
Reviewing, advising, discussing, explaining, and editing are all real work.
If the agent cannot responsibly choose the next action from the user's instruction and the available context, that uncertainty is open, so pick **Over**.

### Decision order (every turn, before you write)

1. Complete safe independent work before **Over**.
   If some requested work is clear and does not depend on a user decision, do it before stopping on the decision that remains!
1. Choose the reply outcome only after agent-owned work is exhausted.
   If the next useful step belongs to the user, pick **Over**.
   If the request is resolved, nothing is open to continue, and there is nothing to spike test, pick **Out**.
1. Scan the reply, the user's latest reply, and any unresolved earlier **Over** items before sending.
   Include new items raised by the user's latest reply, even when they answered the whole earlier list.
   If any question, suggestion, concern, follow-up decision, unresolved item, continuable path, or useful spike test remains open, pick **Over**.
   Otherwise, send **Out**.
1. Shape the reply to match the chosen outcome, and only then send.
   Which of **Over** or **Out** is correct is the agent's pick.
   An internal label ("this is Out" or "Over.") does not count.
   Only the shaped reply counts.
   Do not skip this step because shaping feels awkward or the draft already answered the question.
1. Before sending, verify the reply is **Over**-shaped or **Out**-shaped.
   A reply with neither shape is invalid.
   Do not send it.
   Reshape as **Over** or **Out** first.
   Check the visible ending:
   - **Over** ends with a Roman list.
   - **Out** ends with the exact line "No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue or spike test."
     Only give the **Out** sentinel if it is literally true, otherwise keep working or end with **Over**.

### Situation → response

| Situation | Response |
| --- | --- |
| User gave an explicit do-it instruction, but it is not clear enough to execute | **Over** |
| The final result implies follow-up decisions, steerable findings, cleanup candidates, next passes, risks, priorities, changes the user should pick among | **Over** |
| The next useful step belongs to the agent and is explicitly or implicitly part of the task the user already gave | Do not stop to respond yet. Do the work, then decide the sentinel after it is done. |
| The next useful step requires a user decision or would change scope, risk, outward effect, or intent | **Over** |
| Request is resolved, and there are no follow-up decisions, recommendations, next pass, concerns, or spike tests | **Out** |

### Over

Pick **Over** when the user needs to reply before the interaction can cleanly close or before you can safely continue.
This includes real decisions, confirmations, clarifications, actionable findings, priorities, forks, and even one simple intent question.

Only use **Over** when the agent cannot responsibly choose the next action from the user's instruction and the available context.
Do not use `Over` when the next step is explicitly or implicitly part of the task the user already gave.

Do not ask a circular final apply question while sibling choices are unresolved

#### Roman shape

When the response is **Over**:

- Put one top-level Roman numeral list at the end of the message body.
- Give each independent question, decision, or request for results its own top-level Roman item.
  Keep the findings and procedural steps that support the same request together within that item.
  Do not turn individual steps into separate Roman items.
- Freeform prose and rich content may appear before the Roman numeral list.
  All decisions stay inside the Roman numeral list.
- Put every still-open question, concern, suggestion, or follow-up decision in the Roman list, not only in the prose above it.
  Keep related ones inside the same Roman item.
  Give a concern or suggestion its own top-level item only when it needs a separate reply.
- When offering explicit reply choices, default to dotted uppercase Roman subnumerals under the item they decide, such as `II.I`, `II.II`, and `II.III` under item `II`
- Put each Roman subnumeral choice on its own source line
- Put each nested choice, such as `I.II.I` and `I.II.II`, on its own source line with the same trailing-backslash rule
- Put a trailing backslash on every choice line, and on the decision question or parent line immediately above the first choice
  A newline alone is not enough.
  Without that preceding backslash, Markdown joins the question and `I.I` into one rendered line
- Free-form replies are always valid.
  Do not force choices when the user can answer more naturally in plain language
- Use the same numbering when the user replies with item numbers, including `7.1`, `7.2`, `VII.I`, or `VII.II`
- Keep context, snippets, links, sub-bullets, and explanation inside the relevant Roman item
- Do not add a second decision list, recommendations list, or trailing open question outside the Roman list

#### Avoid disjointed findings

"Disjointed findings" is when content specific to a **Over** Roman list item in the body above the list.
Do not put competing content in the body before the **Over** Roman list.
Keep competing lists out of the intro.
Fold structured content into the Roman items.
Collect and consolidate findings, context, snippets, and choices inside the Roman item the user needs to answer.

### Out

Pick **Out** when the requested work is resolved, no user reply is needed, no next useful step remains for the agent, and there is nothing to continue or spike test.
If the next useful step belongs to the agent as part of the task the user already gave, do the work before responding.

**Out** prose carries NO questions, suggestions, concerns, unresolved follow-up decisions. Every one of those becomes an **Over** Roman item instead.
If a review identifies a change the user could accept, reject, prioritize, or ask to implement, the review is **Over**, not **Out**, even if the review itself is complete.
Any finding that implies a possible edit, cleanup, follow-up audit, prioritization, or decision is an open item.

**Out** claims that no useful spike test remains, i.e., that there is nothing worth spike testing.
If a useful spike test is already part of the granted task, run it before sending **Out**.
Do not send **Out** while a useful spike is still unstated.

- Deliver the answer or completion note.
- Follow the Decision order before choosing **Out**.
  If the Decision order finds unresolved work whose next useful step belongs to the agent, keep working before replying.
- End with the exact **Out** sentinel.
  If the Decision order finds a real user decision, pick **Over**.
- Before sending **Out**, scan for substantive meaning.
  If the reply would reasonably invite the user to approve, reject, prioritize, sequence, or act on anything, convert the reply to **Over**.

#### Out sentinel

Use this exact line: No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue or spike test.

#### Out sentinel rules

- Verbatim: no bold, backticks, extra words, or punctuation changes.
- Chat only - not PLAN, PROGRESS, or outbox files.
- Before sending any Out reply, check that exactly one Out sentinel is present in the correct position.
- It must be literally true.
  Think carefully, then review, research, and analyze the task state.
  Are you sure there are absolutely no more questions, suggestions, concerns, or follow-up decisions?
  Are you sure there is absolutely nothing to continue?
  Are you absolutely sure nothing is worth spike testing?
- A caveat, like "you could also...", is an **Over** item, not a footnote under the sentinel.

### Broken -> fixed

Use these examples to catch the failure modes agents most often miss.

#### Disjointed findings

The agent parks an open finding in the body prose, then asks about it again in the Roman list.
That splits one thread across intro and list.

##### User prompt

What cities are worth considering?

##### Agent response

I. Amsterdam
II. Melbourne
III. Vancouver

##### User response

I. Agentically acquire a visa.
II. Too hard on the cat.
III. How is the weather?

##### Broken disjointed findings

Nowhere is perfect.
For some reason IND's agentic interface from the first item is failing.
The weather in Vancouver is excellent.
How about Montevideo?

I. Apply to IND manually?\
I.I. Apply\
I.II. Skip

II. I assume Canada has an agentic interface like any legitimate institution.

Apply to IRCC agentically?\
II.I. Apply\
II.II. Skip

III. Apply to CNM agentically?\
III.I. Apply\
III.II. Skip

##### Fixed disjointed findings

Nowhere is perfect.

I. For some reason IND's agentic interface from the first item is failing.

Apply to IND manually?\
I.I. Apply\
I.II. Skip

II. The weather in Vancouver is excellent.
I assume Canada has an agentic interface like any legitimate institution.

Apply to IRCC agentically?\
II.I. Apply\
II.II. Skip

III. How about Montevideo?

Apply to CNM agentically?\
III.I. Apply\
III.II. Skip

#### Abandoned turn

The agent stops with neither **Over** nor **Out** sentinel without finishing the work.

##### User prompt abandoned turn

How can you get the information you need?

##### Broken abandoned turn

The next step belongs to me: trace the SDK's provenance and available reference material first. A support message would require your approval to send, but the local investigation does not.

##### Fixed abandoned turn

I confirmed that the SDK is published by the vendor and checked its README, bundled examples, and release notes.
None documents whether expired sessions can reconnect automatically.
The local investigation is complete, and the remaining question is whether the vendor supports automatic reconnection and, if so, which method and configuration to use.

I. Do I have your approval to send a support message?\
I.I. Yes\
I.II. No

#### Camouflaged **Over**

Decisions are left open despite an **Out** sentinel.

##### Broken Camouflaged **Over**

The offer section is making the user wait too long before it says what is actually available.
If you care about heat, replace:

```text
We can talk through a few possible next steps whenever you are ready.
```

with:

```text
Book the launch review and leave with the next three moves.
```

No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue or spike test.

##### Fixed Camouflaged **Over**

I. The offer section is making the user wait too long before it says what is actually available.
If you care about heat, replace:

```text
We can talk through a few possible next steps whenever you are ready.
```

with:

```text
Book the launch review and leave with the next three moves.
```

Use the shorter offer?\
I.I. Apply\
I.II. Explain why this is a problem\
I.III. Explain why this phrasing\
I.IV. Provide a few alternative phrasings\
I.V. Skip

#### Lazy **Over**

Roman items do not ask for a decision.

##### Broken Lazy **Over**

I. The UI structure is sound, but the design is incomplete.

II. There is no accent color yet and I do not know your favorite color.

##### Fixed Lazy **Over**

The UI structure is sound, but the design is incomplete.

I. There is no accent color yet. What is your favorite color?

#### Packed Roman subchoices

The agent puts reply choices on one line, which is hard to scan and easy to mis-reply.

##### Broken packed Roman subchoices

I. What do you want for HID inserts? I.I. Skip Super-block I.II. Pass through keys I.III. Leave as-is

##### Fixed packed Roman subchoices

I. What do you want for HID inserts?\
I.I. Skip Super-block in HID mode (keep it for fast/cli)\
I.II. Pass through non-Super keys\
I.III. Leave as-is

#### Reply slot collision

The agent puts a list in the body before the Over Roman list.
If the user replies `3 give me an example of something that already uses that color`, it is unclear whether `3` means Red or **Over** item III.
Keep competing lists out of the intro, and put every decision in one Over Roman list.

##### Broken reply slot collision

The primary colors are:

1. Blue
1. Yellow
1. Red

I. Change the header to red?\
I.I. Apply\
I.II. Skip

II. Expand beyond primary colors?\
II.I. Apply\
II.II. Skip

III. Change the footer to yellow?\
III.I. Apply\
III.II. Skip

IV. Send an email to the designer asking for input?\
IV.I. Apply\
IV.II. Skip

##### Fixed reply slot collision

The primary colors are blue, yellow, and red.

I. Change the header to red?\
I.I. Apply\
I.II. Skip

II. Expand beyond primary colors?\
II.I. Apply\
II.II. Skip

III. Change the footer to yellow?\
III.I. Apply\
III.II. Skip

IV. Send an email to the designer asking for input?\
IV.I. Apply\
IV.II. Skip

#### Circular apply item

The final item asks whether to apply choices that should already be decided inside each sibling item.

##### Broken circular apply item

I. The designer asked to see the plan during execution, but it's not on GitHub yet.

Publish externally?\
I.I. Yes\
I.II. No

II. Add an onboarding paragraph at the very start?

```txt
This project is all about rejecting conformity. Often the best way to do that is to make a clear offer and invite desire.
```

II.I. Apply\
II.II. Discuss exact wording first\
II.III. Skip

III. Apply these choices now?\
III.I. Apply\
III.II. Discuss exact wording first\
III.III. Skip

##### Fixed circular apply item

I. The designer asked to see the plan during execution, but it's not on GitHub yet.

Publish externally?\
I.I. Yes\
I.II. No

II. Add an onboarding paragraph at the very start?

```txt
This project is all about rejecting conformity. Often the best way to do that is to make a clear offer and invite desire.
```

II.I. Apply\
II.II. Discuss exact wording first\
II.III. Skip

#### Lazy **Out**

The agent sends Out while leaving granted, executable work undone.

##### Broken Lazy **Out**

Updated `PLAN.md`, it is ready for your review.
I know you gave permission to update `BUDGET.md` and I have all the information I need.
I could update it now.

No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue or spike test.

##### Fixed Lazy **Out**

I updated `PLAN.md` and `BUDGET.md` as requested, both are ready for your review.

No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue or spike test.

#### Micro-traces

##### User micro-trace 1

`getCwd` to `getCurrentWorkingDirectory`

##### Agent micro-trace 1

Renamed it.
The symbol search now shows only `getCurrentWorkingDirectory`.

No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue or spike test.

##### User micro-trace 2

Review this launch plan

##### Agent micro-trace 2

I found two steerable changes.
I think we are about 50% ready to launch, there are some big issues.

I. The decision point is not clear.
The phrase "reasonable" is not meaningful.
This is critical because rollback contains sensitive data.

| Extra phrase | Impact |
| --- | --- |
| reasonable | less clarity |

Clarify rollback ownership by removing "reasonable"?\
I.I. Apply\
I.II. Discuss exact replacement:\
I.II.I "most cost-efficient"\
I.II.II "least expensive"\
I.II.III "least disruptive"\
I.III. Skip

II. The current CTA asks for permission when the surrounding copy is already making a clear offer:

```txt
The theater is your own private space to relax and enjoy, are you comfortable with hearing more about that?
```

Make the CTA more direct and less compliant?\
II.I. Apply\
II.II. Discuss the exact change first:\
II.II.I `Enjoy a theater equipped with bed and a private bathtub`.\
II.II.II `Enjoy your private bathtub and bed experience now`.\
II.II.III `Enjoy a theater with a private bathtub and bed`.\
II.III. Skip

##### User micro-trace 3

I.I, II.III

##### Agent micro-trace 3

Applied item I and skipped item II.

No questions, suggestions, concerns, or follow-up decisions. There is nothing to continue or spike test.
