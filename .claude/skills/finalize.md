# Finalize Session

End-of-session workflow to update documentation and commit changes to git.

## When to Use

Run this skill at the end of a work session after completing changes, additions, or cleanup to the website. It ensures documentation stays in sync and changes are properly committed.

## Instructions

You are finalizing a work session. Follow these steps in order:

### 1. Review Session Changes

- Summarize what was accomplished in this session
- List all files modified, created, or deleted (use `git status` and `git diff --stat`)
- Note any significant decisions, patterns, or conventions established
- Identify key accomplishments to highlight in commit message

### 2. Update CLAUDE.md

Review if any changes require CLAUDE.md updates:

**Add to CLAUDE.md if:**
- File structure changed (new pages, directories, or organization)
- New patterns or conventions were established
- New common mistakes were discovered and should be documented
- Critical path rules changed or new examples are needed
- Design system elements were added or modified
- New workflow steps were established

**Keep CLAUDE.md concise:**
- Only add information that will help future sessions run efficiently
- Consolidate redundant information
- Remove obsolete information
- Each addition should prevent future errors or save time

**If no updates needed:**
- Explicitly state why (e.g., "Changes were content-only, no structural updates needed")

### 3. Update README.md

Check if README.md needs updates:

**Update README.md if:**
- New features were added to the site
- Project structure significantly changed
- Installation or setup steps changed
- New pages or sections were added
- Technology stack changed
- New documentation files were created

**If no updates needed:**
- Explicitly state why

### 4. Update future_ideas.md

**Check for completed items:**
- Scan future_ideas.md for any items that were implemented in this session
- Mark completed items by changing checkbox and adding completion note:
  - From: `- [ ] **Item name**` (or partial status)
  - To: `- [✅ 2026-02-17] **Item name**` (use today's actual date)
- Keep the original item text intact, just add the completion status
- If started but only partially implemented and not finished:
  - From: `- [ ] **Item name**`
  - To: `- [🟡] **Item name**` (use today's actual date)

**Check for new ideas:**
- If new ideas or tasks emerged during the session, ask user if they want them added to future_ideas.md
- Suggest which section they should go in (Website Improvements, Blog Ideas, Features to Explore, etc.)


### 5. Prepare Git Commit

**Important: Do NOT commit yet - get user approval first**

Run these commands to prepare:
```bash
git status
git diff --stat
```

**Draft commit message:**
- First line: Concise summary (50 chars or less) describing the nature of changes
  - Start with verb: "Add", "Update", "Fix", "Remove", "Refactor", etc.
  - Be specific: "Add favicon cleanup and optimize documentation" not "Update files"
- Blank line
- Body: Brief bullet points of key changes (if needed for clarity)
- Blank line
- End with co-authorship line

**Commit message format:**
```
<Action> <what changed and why>

- Key change 1
- Key change 2
- Key change 3

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

**Review existing commit history** to match the style:
```bash
git log --oneline -5
```

**Show user:**
1. All files that will be committed
2. The proposed commit message
3. Ask for approval: "Ready to commit and push? (yes/no/modify message)"

### 6. Commit and Push

**Only proceed after user confirms approval**

Stage and commit:
```bash
git add -A
git commit -m "$(cat <<'EOF'
<approved commit message>

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

Push to remote:
```bash
git push origin main
```

Confirm success and show:
- Commit hash
- Number of files changed
- Confirmation that push succeeded

## Important Notes

- **Always get user approval** before committing - never commit without explicit confirmation
- **Be thorough** in documentation updates - they save significant time in future sessions
- **Keep commit messages factual** and concise - follow existing repo style
- **If unsure** about marking something as done in future_ideas.md, ask the user
- **Check git status carefully** - don't commit untracked files user didn't intend (like .env, credentials, etc.)
- **Use HEREDOC for commit messages** to ensure proper formatting with multi-line messages

## What NOT to Do

- Don't commit sensitive files (.env, credentials, API keys)
- Don't mark items as done in future_ideas.md if only partially completed
- Don't skip documentation updates thinking they're unnecessary
- Don't create overly verbose commit messages - keep them focused
- Don't push without confirming the commit succeeded first

## Example Session

**User completes work adding a new blog post and updating styles**

1. ✅ Review: "Added new blog post 'Voronoi Experiments', updated CSS for blog cards, added thumbnail"
2. ✅ CLAUDE.md: No updates needed - followed existing blog post pattern
3. ✅ README.md: No updates needed - no structural changes
4. ✅ future_ideas.md: Mark "Voronoi experiments blog post" as done
5. ✅ Show proposed commit: "Add Voronoi Experiments blog post and style updates"
6. ✅ User approves: yes
7. ✅ Commit and push: Success!

## Troubleshooting

**If commit fails:**
- Check for merge conflicts
- Verify git credentials are configured
- Ensure you're on the correct branch

**If push fails:**
- Pull latest changes first: `git pull origin main`
- Resolve any conflicts if they exist
- Try push again

**If unsure about documentation changes:**
- Err on the side of updating - it's easier to refine later than to remember what changed
