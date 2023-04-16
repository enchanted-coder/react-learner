# To publish this site:

- ### Build the project on your local machine
```
    npm run build
```

- ### push dist files produced from the build to a separate branch called gh-pages
```
    git subtree push --prefix dist origin gh-pages
```

