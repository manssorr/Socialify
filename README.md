# Socialify

React Native App for displaying a list of posts and their comments

# Screenshots
https://github.com/manssorr/Socialify/assets/19681362/0d7c9d87-2eaa-4d1d-886c-30f6ca81b2e8


https://github.com/manssorr/Socialify/assets/19681362/0e541336-9f52-4fae-92b5-4ea4b5e79c0c

<img src="[https://github.com/manssorr/Socialify/assets/19681362/0f0d28a8-2c1f-4af7-bd9c-6f5e8aba1140](https://github.com/manssorr/Socialify/assets/19681362/0f0d28a8-2c1f-4af7-bd9c-6f5e8aba1140)" width="200" height="400" />
<img src="[https://github.com/manssorr/Socialify/assets/19681362/ab0a99bb-0c3b-4b24-b637-5d8f587a41d7](https://github.com/manssorr/Socialify/assets/19681362/ab0a99bb-0c3b-4b24-b637-5d8f587a41d7)" width="200" height="400" />
<img src="[https://github.com/manssorr/Socialify/assets/19681362/567606d5-d58e-4356-8abf-bbe822c26d45](https://github.com/manssorr/Socialify/assets/19681362/567606d5-d58e-4356-8abf-bbe822c26d45)" width="200" height="400" />





# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install packages

- yarn
- cd ios && pod install
- visit "https://gorest.co.in/my-account/access-tokens" to get your own API key and add it in ./env/.env.development file
  > **Hint**: You can use mine as well but make sure do not share it ;).

## Step 2: Start the Metro Server

yarn start

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
OR
Open `ios/Socialify.xcworkspace` in Xcode
```

# Overview

The app is designed to display a list of posts fetched from a third-party API using axios. The app should efficiently do network calls, error handling, state management, and data caching using redux presist store.

# Technologies Used

- React Native
- gorest.co.in API for fetching posts and comments data.
- TypeScript for static typing.
- redux-toolkit for state management.
- redux-persist for state persistence.
- mmkv storage for state persistence.
- react native splash screen for loading screen.
- Jest for testing.

# App Features

- Posts List: The app displays a list of posts fetched from the gorest API using the /posts endpoint.

- Infinite Scroll: The app should fetch more posts and comments when the user scrolls to the bottom of the posts list or comments list.

- Comments List: Users can view the list of comments for a specific post by clicking on it in the posts list.

- Post Details: Users can view detailed information about a specific post by clicking on it in the posts list.

- Offline Mode: The app should cache data locally to enable offline functionality, allowing users to access previously fetched posts data even when there is no internet connection (requires at least one successful data fetch).

- Error States: The app should gracefully handle scenarios where no data is available or when there is no internet connection, displaying appropriate error states.

- Unit Testing
