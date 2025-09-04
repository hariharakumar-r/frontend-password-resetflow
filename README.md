# Password Reset Flow — Frontend

A Vite + React app styled with Tailwind CSS, using React Router for navigation and Axios for HTTP requests.

## Tech stack
- Vite + React (SWC)
- Tailwind CSS v3 (configured via tailwind.config.js)
- React Router DOM
- Axios

## Getting started
1) Install dependencies
```bash path=null start=null
npm install
```

2) Start the dev server
```bash path=null start=null
npm run dev
```

3) Build for production
```bash path=null start=null
npm run build
```

4) Preview the production build
```bash path=null start=null
npm run preview
```

## Project structure (key paths)
````text path=null start=null
frontend/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ index.css
   └─ Components/
      ├─ HomePage.jsx
      ├─ PasswordReset.jsx
      ├─ RegistrationForm.jsx
      ├─ SignIn.jsx
      └─ UserDetails.jsx
````

## Routes
- `/` → HomePage
- `/signin` → SignIn
- `/register` → RegistrationForm
- `/reset-password` → PasswordReset
- `/user` → UserDetails

## Tailwind CSS
Tailwind is configured via `tailwind.config.js` with content scanning for `index.html` and all files in `src/**/*.{js,ts,jsx,tsx}`. Base styles are injected in `src/index.css` using the Tailwind directives:
```css path=null start=null
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Axios setup (optional example)
Create an Axios instance with a base URL from a Vite environment variable.

1) Create an `.env` file at the project root:
```dotenv path=null start=null
VITE_API_BASE_URL=https://api.example.com
```

2) Create `src/api/client.js`:
```js path=null start=null
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})
```

3) Use it in a component:
```js path=null start=null
import { api } from '../api/client'

export async function fetchStatus() {
  const { data } = await api.get('/status')
  return data
}
```

## Scripts
Defined in `package.json`:
- `dev` — start Vite dev server
- `build` — build for production
- `preview` — preview the production build
- `lint` — run ESLint

## Notes
- This project pins Tailwind to v3 for the classic config-based workflow. If you prefer Tailwind v4, update dependencies and follow the v4 setup steps (configless by default), then adjust `index.css` accordingly.
- The provided components include basic UI and form stubs. Wire them to your backend APIs using Axios as needed.
"# frontend-password-resetflow" 
