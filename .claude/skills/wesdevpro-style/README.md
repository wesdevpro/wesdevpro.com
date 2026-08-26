# wesdevpro-style — Claude Code skill

Install (project-level):

```
cp -r wesdevpro-style .claude/skills/wesdevpro-style
```

Or user-level, for every project: `~/.claude/skills/wesdevpro-style`.

Then in Claude Code: `/wesdevpro-style` — or just ask for on-brand work ("restyle the projects page to the wesdevpro system") and the skill triggers from its description.

```
wesdevpro-style/
  SKILL.md                  entry point — the one rule, non-negotiables, working method
  references/tokens.css      complete token layer; copy into the project
  references/components.md   copy-paste recipes for every component
  references/voice.md        copy voice + off-brand rewrites
  references/checklist.md    pre-ship / audit checklist
  assets/                    wordmark, tagline lockup, diamond monogram, text-only mark
```

Self-contained — no network access needed beyond Google Fonts and the Font Awesome CDN at runtime.
