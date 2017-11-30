# syncedIn-frontend

backend: https://github.com/annabush092/syncedIn-backend

frameworks: React, Redux

component structure: see googledoc

*/
TODO:

Priority:
  done - add posts and tags
  Add follow/unfollow button to profile- maybe make the button its own component...
  done - JWT auth
  have JWT auth control the rest of the fetch requests in App

Not priority:
  after JWT - allow users to edit their profile - think of a good way to approach this
  after JWT - NewUserForm

  Formatting!

  Why does it take so long to follow/unfollow on the front-end? Can it not make the entire screen blink? (optimistic render)
  When a user follows another user, update both in the frontend (currently only the currentUser is updated in the frontend, even though both are updated in the backend- to see the full updates, you need to refresh the entire site)

  Catch error in frontend if server is down and sends any response besides 200...


Refactoring not priority:
  Make an adapter file for all fetch actions
  Move login actions to their own file
  Make readme's good- tell how to run/install, and exactly what the API returns for different requests
  Refactor so Profile renders a specifically filtered UserList (for following) and PostList
  Worth it to disconnect UserCard/PostCard from the store? Is it slowing me down at all?
  Protect params in backend (require/permit)

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
