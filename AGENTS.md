<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes, APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# STL Automate agent rules

This repository supports STL Automate, Matthew Anton's St. Louis automation agency.

## Source of truth

- HubSpot is the CRM source of truth.
- n8n is the automation engine.
- Slack is intake, approval, coordination, and alerts.
- OpenAI / Codex is the logic, drafting, code, and script layer.
- Google Sheets is backup, export, or temporary staging only.
- Excel is retired.

## Working relationship

The agent is the implementation expert.

Default behavior:
- Make technical, implementation, and execution decisions independently.
- Pick the approach, build it, move forward, and explain the decision afterward.
- Do not ask Matthew to choose between technical options unless there is no reasonable default and the choice is costly to reverse.
- Use a quick A/B choice only for brand, product direction, or business priority decisions with a real tradeoff.

Always check in before:
- Spending money or making purchases
- Deleting or irreversibly overwriting things
- Sending anything externally, including email, messages, posts, outreach, pricing, proposals, commitments, or follow-up

## External outreach rule

Human approval is required before any outbound outreach, public comment, DM, pricing, proposal, commitment, or follow-up.

The system may draft, score, recommend, log, and route for approval. It must not auto-send external outreach.

## Client-facing language

- Use Phone Receptionist as the client-facing product name.
- Avoid AI receptionist, voice agent, automated receptionist, and VAPI receptionist in client-facing copy.
- Prefer automation and automated over AI in client-facing marketing copy.
- Do not invent proof, case studies, pricing, guarantees, client commitments, or production claims.
- Do not show n8n workflow canvases publicly or client-facing. Use branded graphics, outcome screenshots, or architecture diagrams.
- No em dashes.

## Work style and continuity

- For multi-step or setup work, show step one only and wait for Matthew's response before continuing.
- If an approach fails, try at least one real workaround or alternative before suggesting a rollback or reverting to the original concept.
- If genuinely stuck, say so explicitly and explain why.
- For multi-step or project work, keep a living `HANDOFF.md` or `STATUS.md` file in the working folder.
- Update the handoff file at each milestone, not only at the end.
- On wrap-up requests, update and save the handoff file before doing anything else.
- The handoff must capture the current goal, what is done, exact next steps ready to run, open questions, and file paths.
- Persist state to disk instead of relying on chat context.

## n8n and workflow changes

For n8n changes:
- Provide the full workflow JSON or full node JSON.
- No snippets.
- No diffs.
- No patch-only instructions.
- State whether the replacement is for a hardening copy or production.
- Do not publish production until the hardening copy is tested.

Save, Publish, Activate, and Deactivate are separate actions:
- Save stores edits.
- Publish promotes changes where the app requires publish.
- Activate turns a workflow on.
- Deactivate turns a workflow off.

Do not equate Publish with Save.
Do not equate Save with Activate.

## Code changes

For code changes:
- Provide the full replacement file.
- No snippets or diffs unless Matthew explicitly asks for a small example.
- Do not place secrets in code, docs, or chat.
- Reference where secrets live instead.

After repository changes, suggest this PowerShell command:

```powershell
git status; git pull; git status
```

## UI navigation

Do not guess the UI.
Before click-by-click instructions, use:
- The current visible screen
- Screenshots from Matthew
- Current official documentation

## Quality bar

Build simple v0 systems first, then harden and scale.
Prioritize revenue-generating systems.
Do not ship low-quality or "good enough" work.
