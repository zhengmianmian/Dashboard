# Dashboard

This is my first practice of NextJS. Done by following the guide.

## Tech stack

NextJS + PostgreSQL + NextAuth

## Run the project

### Install correct dependencies

Check what pnpm says, here, install these two

```
pnpm i react@19.0.0-rc.0 react-dom@19.0.0-rc.0
```

```
pnpm run dev
```

## Learning points

### server & client

At the top of a tsx file:

- server: operating data from db, backend
- client: use what server gets to render UI

```
use "server";
```

```
use "client";
```
