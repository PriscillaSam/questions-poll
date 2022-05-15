# Questions Poll

Questions poll is a simple web application that allows users to view polls, vote in them and create new polls.
The interface is powered by [the Apiary polls](https://pollsapi.docs.apiary.io/) API.

Click this link for a [live demo](https://develop--super-malasada-3a7f54.netlify.app/)

## Running the app

Clone this repo and install dependencies by running the following commands in your terminal.

```
- git clone [repo-url]
- cd questions-poll
- npm install | yarn depending on your package manager

```

To start the app in development mode, run

```
npm start
```

or

```
yarn start
```

To create a production build, run

```
npm build
```

or

```
yarn build
```

## Running Tests

To run the tests, run

```
- npm test
```

## Technologies used

- Typescript
- React
- Redux toolkit
- Styled components
- React testing library

## ToDos

- Prevent users from voting on a different choice after voting.
- Create a Notifications module to give users feedback on actions performed on the platform.
