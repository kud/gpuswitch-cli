#!/usr/bin/env node
// React reads NODE_ENV when it is first loaded, so set it before importing the app.
process.env.NODE_ENV ??= "production"

export {}

await import("./index.js")
