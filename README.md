# syncedIn-frontend

backend: https://github.com/annabush092/syncedIn-backend

frameworks: React, Redux

component structure: see googledoc

*/
TODO:

Priority:
  done - refactor backend auth so JWT secret is only in the concerns file
  done - allow users to edit their profile - think of a good way to approach this
  done - When you type in a route in the url, it does not go there- it instead just reroutes based on loadingPrep...

  Move error state into the loadingReducer instead of the userReducer
  Find a way to display the error state in App if anything goes wrong. Modal?

  When you re-load a profile page, it gets messed up (same problem)- try putting the profile state check in App instead of where it is...

  Add instruments to the edit profile page.

Not priority:

  Formatting!

  Make an adapter file for all fetch actions
  Move login actions to their own file

  Expand users so they have more information in backend
  Expand NewUserForm and EditUserForm so they're more comprehensive.

  Catch error in frontend if server is down and sends any response besides 200...

  have JWT auth control the rest of the fetch requests in App

  When making an update in the backend (follow/unfollow, update, make new user), instead of re-fetching the user.list to update the store, do something less costly...

Very not priority:
  Why does it take so long to follow/unfollow on the front-end? Can it not make the entire screen blink? (optimistic render)
  Make readme's good- tell how to run/install, and exactly what the API returns for different requests
  Refactor so Profile renders a specifically filtered UserList (for following) and PostList
  Worth it to disconnect UserCard/PostCard from the store? Is it slowing me down at all?
  Protect params in backend (require/permit)
  Make the user interface to change password more secure (have them type it twice)
  Make users enter their password to verify before making any changes to their profile.
  Also allow a user to change their password

/*
Random stretch features:

  Add instrument families to search users filter

  Incorporate equipment- if someone plays the bass clarinet, do they have one? Especially important for percussion

  Allow users to create new Genres. Before creating the genre, try to match it with something that already exists, and ask them to choose one or create a new one anyways. (Try to search for each individual word inside other genre names to see if there are any matches?)

  Add a 'willing-to-learn' category for instruments and genres in a user profile

  Location of musicians!

  Can users rank their instruments so the userCard shows the most important ones? (userCard shows perform=true instruments)

  Allow musicians to upload a resume, what they're currently working on, past schools, bio, etc

  Add pictures for each instrument and genre to display on profile instrument cards

  Allow users to link to each other in posts (think of twitter- you can follow people or mention their name in a tweet to get their attention)

  Allow users to directly message each other, but also give them the option to block direct messages
