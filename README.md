# European Portuguese Flashcards

A web app to practice European Portuguese vocabulary (animals, food, verbs) with study and quiz modes.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Share with friends (deploy online)

Your friends can use the app in their browser once it’s deployed. Two free options:

### Option 1: GitHub Pages (recommended)

1. In your repo on GitHub go to **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push a commit (or run the workflow from the **Actions** tab). The workflow will build and deploy.
4. After it finishes, the app will be at:  
   **https://ifatro.github.io/FLASHCARDS/**  
   Share that link with your friends.

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** → **Project** and import your **FLASHCARDS** repo.
3. Click **Deploy**. Vercel will give you a URL like `https://flashcards-xxx.vercel.app`.
4. Share that URL with your friends.

---

Built with Vite, React, and TypeScript.
