# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
figuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)


YouTube Clone App

Implemented Different functionalities of Youtube:

  1. SideBar: Which will be implemented with the help of Redux-store which will work exactly same as in Youtube.
  2. SearchBox: searchBox and its functionalities like Search Results are most Important and most difficult part of this web-App
           1. Calling API for search Suggestion.
           2. Calling API for SearchResults According to query.
           3.Triggering the redux store to save the searchQuery and At the same time render the SearchVideo Component according to the                  searchQuery.
  3. MainVideoContainer: This will hold the ButtonList, VideoContainer, WatchPage And SearchVideoContainer all will Render Acccording to 
     the Router.
  4. WatchPage: This will Have a Comment Component So I moved One Step ahead here And Implemented Nested Comments.
       1. Creating Comment Component is also a challenging task here as It needs Recursion to Implement nested Comments.
       2. LiveChat feature: It is the Most Inetresting part of this webApp as it needs good Knowledge of Javscript React and Redux So 
          here knowledge of all three will be tested.
