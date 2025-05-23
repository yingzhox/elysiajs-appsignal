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
# Custom build command to prepare the dist folder with proper preload and dependencies externally
bun build.ts
```

Now run the built server:

```bash
# Must go to this folder since bunfig.toml needs to be in the root
cd dist
bun install --production
bun run index.js
```

Then you should see:

```
🛠️  Running preload...
WARNING: Error when reading appsignal config, appsignal (as 501/20) not starting: Required environment variable '_APPSIGNAL_APP_ENV' not present
🦊 Elysia is running at localhost:3001
```
