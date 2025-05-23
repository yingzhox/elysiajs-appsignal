# Elysia with Bun runtime

## Install bun

```bash
curl -fsSL https://bun.sh/install | bash
```

## Steps to show appsignal integration failure

```
export APPSIGNAL_PUSH_API_KEY={key}
export APPSIGNAL_APP_NAME={name}
```

First, build the project:

```bash
bun build.ts
cp package.json dist/
cp appsignal.cjs dist/
```

Now run the built server:

```bash

cd dist && bun install --production && cd ..
bun run dist/index.js
```

Open http://localhost:3000/ with your browser to see the result.
