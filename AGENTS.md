## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Single-commit history

This repository intentionally keeps `main` as one root commit containing the
current source. The owner prefers a current snapshot over development history.
Treat this as standing authorization to consolidate completed changes locally;
do not ask again merely because this workflow rewrites history.

- After completing a requested change and the relevant checks, stage only the
  intended files and fold them into the single commit. Preserve unrelated work.
- Keep the commit title exactly `Publish portfolio source`, with no commit body
  or trailers containing private details.
- Use `Omar <19715428+Cr0s4k@users.noreply.github.com>` for **both author and
  committer**. Set the repository-local email to this noreply address; never
  change global Git identity or use a work email.
- If `main` already contains one root commit, amend it with the identity above.
  Explicitly set both identities: changing `user.email` alone does not replace
  an existing commit's author.
- If multiple commits have accumulated, create a new parentless commit from the
  reviewed index with `git commit-tree`, then update `main` using `git update-ref`
  with its expected old SHA. Do not use a destructive working-tree reset or
  merge the previous history back in.
- Verify that `git rev-list --count main` returns `1`, the commit has no parents,
  its title and both email addresses are correct, and the staged source contains
  no work email or credentials. Keep locally installed skills untracked.
- When pushing is authorized by the task, record the remote `main` SHA before
  starting and push with an explicit lease:
  `git push --force-with-lease=refs/heads/main:<recorded-remote-sha> origin main`.
  Never use plain `--force`, push backup history, or overwrite unexpected remote
  changes. If the lease fails, inspect the remote changes before proceeding.
- After pushing, verify the remote has the new single commit. Do not change
  repository visibility unless explicitly requested.

Rewriting the branch does not guarantee removal of old commits from GitHub
caches, existing clones, or forks. Do not describe it as a complete privacy purge.
