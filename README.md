# DashStack — Admin Dashboard (React + Vite + Tailwind)

A pixel-faithful build of the DashStack Figma design: 20 screens, full dark/light
theming through the React Context API, and responsive layouts from 320px up.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

Build for production with `npm run build` and preview it with `npm run preview`.

No extra install steps are needed — `react-router-dom`, `recharts` and
`lucide-react` are already listed in `package.json`.

## Routes

| Path | Screen |
| --- | --- |
| `/` | Dashboard |
| `/products` | Products |
| `/favorites` | Favorites |
| `/inbox` | Inbox (list + thread view) |
| `/orders` | Order Lists (date / type / status filters) |
| `/product-stock` | Product Stock |
| `/pricing` | Pricing |
| `/calendar`, `/calendar/new-event` | Calender, Add New Event |
| `/todo` | To-Do List / Add New To-Do |
| `/contact`, `/contact/new` | Contact, Add New Contact |
| `/invoice` | Invoice |
| `/ui-elements` | UI Elements (bar / pie / donut charts) |
| `/team`, `/team/new` | Team, Add Team Member |
| `/table` | Table |
| `/settings` | General Settings |
| `/login`, `/signup` | Login, Create an Account |
| anything else | 404 |

## Theme

`src/context/ThemeContext.jsx` holds the only copy of the theme. It reads
`localStorage` (falling back to the OS preference) on first render, toggles the
`dark` class on `<html>`, and writes every change back to storage, so the choice
survives a refresh. Components read it with the `useTheme()` hook; Tailwind's
`dark:` variants do the rest.

## Images

The PDF export did not include separate image assets, so product photos, event
covers and contact photos render through `ImagePlaceholder` / `Avatar`, which
keep the exact box sizes from the design. Drop real files into
`src/assets/images/` and swap those two components out when the assets arrive.
