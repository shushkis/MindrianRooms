# Deploying GroundTruth to Render

This needs your live participation at a few steps (GitHub connection,
account login, entering the secret key) -- nothing here can be done on
your behalf. Two paths: the Blueprint (faster, uses `render.yaml`) or
manual dashboard setup (slower, but works even if Render's Blueprint
syntax has moved on since this was written 2026-07-13).

## Before you start

- A GitHub repo Render can connect to. If `MindrianRooms` isn't already
  pushed to GitHub in a form Render can see, that needs to happen first --
  Render deploys from a git repo, not a local folder.
- Your real `GEMINI_API_KEY` (from https://aistudio.google.com/apikey).
  Never put this in a file that gets committed -- Render's dashboard has a
  dedicated secret env var field for exactly this.

## Path A -- Blueprint (render.yaml already committed)

1. Go to https://dashboard.render.com -> **New** -> **Blueprint**.
2. Connect the GitHub repo, point it at this one, branch `main`. Render
   normally looks for `render.yaml` at the repo root -- this is a monorepo
   with unrelated ventures alongside `geospatial/`, so the file actually
   lives at `geospatial/hamuzim-chat/render.yaml`. If Render's setup screen
   doesn't auto-detect it, look for a field to enter that path directly; if
   there isn't one, skip straight to Path B rather than fighting it.
3. Render finds the blueprint and proposes two services:
   `groundtruth-api` (Python web service) and `groundtruth-frontend`
   (static site). Review, then **Apply**.
4. Before the first successful deploy of `groundtruth-api`, open its
   **Environment** tab and set `GEMINI_API_KEY` to your real key (the
   blueprint deliberately leaves this blank -- `sync: false` means "you
   fill this in by hand," not "skip it").
5. Wait for both services to build. Visit
   `https://groundtruth-frontend.onrender.com`.

If step 3 fails because Render's blueprint syntax has changed since this
was written, use Path B instead -- don't fight the YAML.

## Path B -- Manual dashboard setup (no render.yaml dependency)

**Backend:**
1. **New** -> **Web Service** -> connect the repo.
2. Root Directory: `hamuzim-chat/backend`
3. Runtime: Python 3
4. Build Command: `pip install -r requirements.txt`
5. Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
6. Add environment variables:
   - `GEMINI_API_KEY` = your real key
   - `ALLOWED_ORIGINS` = `https://groundtruth-frontend.onrender.com`
     (Render tells you the exact frontend URL once you've named that
     service in the next section -- come back and set this after.)
7. Create. Note the backend's URL once it's live (e.g.
   `https://groundtruth-api.onrender.com`).

**Frontend:**
1. **New** -> **Static Site** -> connect the same repo.
2. Root Directory: `hamuzim-chat/frontend`
3. Build Command: `npm install && npm run build`
4. Publish Directory: `dist`
5. Add environment variable:
   - `VITE_API_BASE_URL` = `<the backend URL from above>/api`
6. Create.
7. Go back to the backend's `ALLOWED_ORIGINS` env var and set it to this
   frontend's actual URL, then trigger a manual redeploy of the backend so
   the new value takes effect.

## After it's live

- Test it exactly like the class demo: a real question, an off-topic
  question, a Hebrew question. Free-tier Render web services spin down
  after inactivity and take ~30-60s to wake back up on the next request --
  don't let that first slow response surprise you mid-presentation. Hit it
  once yourself a minute or two before you go on.
- The rule-based and offline-JS fallbacks still work with no
  `GEMINI_API_KEY` at all, same as local -- if the key ever stops working
  live, the demo degrades to that instead of erroring out.
- CORS being locked to your frontend's origin stops browsers from calling
  your API from other sites. It does not stop someone who has the backend
  URL from calling it directly (e.g. with `curl`) -- that's a browser-side
  restriction, not server-side auth. Fine for a class demo; worth knowing
  if this needs to survive being shared more widely.
