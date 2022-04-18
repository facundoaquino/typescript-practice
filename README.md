# TYPESCRIPT 🤓💾

`tsc --init` to create a tsconfig.json

`tsc --w` watch a generate .js files transpiled

### Concurrently

We can install concurrently global into our so and run it with the follow command in this case first compile de ts file to js file and them run this one with nodemon

`concurrently "tsc -w bases/app.ts" "nodemon bases/app.js"`
