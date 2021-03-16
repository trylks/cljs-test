# Notes to do the same

And to do differently when convenient.

To create the project, having npx and shadow-cljs installed:

```bash
  npx create-cljs-project cljs-test
```

I also like to create in GitHub independently, just to get the initial files (e.g. license) in the laziest way.
Everything is going to be nearly as lazy as possible here.

Follow the guide in [shadow-cljs](https://github.com/thheller/shadow-cljs) to get started with the template, i.e.

1. Create `app.cljs`.
1. Update `shadow-cljs.edn` with the build target.
1. `npx shadow-cljs watch frontend` and it runs, but it does nothing...
1. update `public/index.html` and add the `:dev-http` to the `.edn` to have a server with something
1. copy everything from the [add routing recipe](https://github.com/reagent-project/reagent-cookbook/tree/master/recipes/add-routing).
1. generate what to deploy: `npx shadow-cljs release frontend`


Those are the basics.
