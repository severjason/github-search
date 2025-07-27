# Github repository search

## Development

1. Install dependencies - run `npm run install` from _root_ dir:
   ```sh
   npm run install
   ```
2. Start development server:
   ```sh
   npm run dev
   ```
3. Build app:
   ```sh
   npm run  build
   ```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Deployed app

Please follow this [link](https://github-search-fawn.vercel.app)

## Tech stack

Core - React, Tailwind, TanStack Query

Primitive components - @radix-ui.


## Scripts

| Script    | Description                      |
|-----------|----------------------------------|
| `dev`     | start server in development mode |
| `build`   | build app                        |
| `lint`    | run eslint                       |
| `tscheck` | run typescript types checking    |
| `format`  | run prettier                     |
| `preview` | started built app                |
| `prepare` | husky install                    |



## Environment variables

| VAR                        | Description                             |
|----------------------------|-----------------------------------------|
| `VITE_API_URL`             | github api url (https://api.github.com) |
| `VITE_GITHUB_ACCESS_TOKEN` | github token to handle api limitations  |


## Additional info
TanStack Query used here as a library for API calls and as a state manager instead of Redux.


## Possible improvements
1. Adding tests with React-testing-library.
2. Add virtualization for repositories list
3. Filtering/sorting.
