# deviget-code-challenge

## Decisions taken

- Use AWS S3 to host the app.
- Postpone Reddit API integration: to avoid wasting scarce time, since an API response mock has been provided, the integration will be implemented only if time permits. Pagination will be implemented after API integration.
- Use element IO componentes dependecy to avoid wating time working on styling.
- Keep objects map using post ids as keys to find them in O(1) and avoid searching in an array.
- Create post model: the API response JSON is not camelcase and contains lots of fields that won't be used, so posts will be modeled using a class.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
