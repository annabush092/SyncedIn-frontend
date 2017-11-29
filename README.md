# syncedIn-frontend

backend: https://github.com/annabush092/syncedIn-backend

frameworks: React, Redux

*/
???:

Why can't I give a hash as an argument to my custom method? (user.add_skill({hash here???}))
Error is that Rails is looking for methods with the names of each key, so it errors when it doesn't find them. So do I have to use regular old arguments and just remember what they are? (annoying...)

Why is my NavLink not working and rendering the url? Url changes, but the page does not...


TODO:

Priority:
  fix routing for Profile
  done - follow/unfollow button should never show up on currentUser's card
  add state and props to wireframe thingy
  add posts and tags

Not priority:
  some done - formatting
  allow users to edit their profile - think of a good way to approach this
  NewUserForm

/*


store state structure:
  users: {
    list: [ {}, {}, etc ]
    currentUser: {}
  }
  instruments: [ {id: , name: "", family_id: }, {}, etc]
  families: [ {id: , name: ""}, {}, etc ]
  genres: [ {id: , name: ""}, {}, etc ]

User api looks like:
{
  id: 2,
  username: "email@email.com",
  full_name: "First Last",
  show_skills: [
    {
      instrument: "",
      skills: [
        {
          genre: "",
          perform: true/false,
          teach: true/false
        },
        {}, etc
      ]
    },
    {}, etc
  ],
  contacts: [
    {
      id: 3,
      first_name: "",
      username: "email@email.com",
      last_name: ""
    },
    {}, etc
  ]
}


Component structure:
  App:
    props: none
    state: none
    fetch: get everything! fill in state.
    renders: LoginForm, UserContainer, NewUserForm
  UserContainer:
    props: none
    state: none
    fetch: none
    renders: UserList, UserProfile
  UserList:
    props: {
      allUsers: [ {}, {}, etc ]
    }
    state: {
      filteredUsers: [ {}, {}, etc] ?
    }
    fetch: none
    renders: UserCard, FilterForm
  FilterForm:
    props: filter options?
    state: {
      filter: ""
    }
    fetch: none
    renders: none
  UserCard:
    props: {
      userBasicProps
    }
    state: none
    fetch: none
    renders: none
  UserProfile:
    props: detailed user information
    state: none
    fetch: none
    renders: EditUserForm ? (for currentUser only)
  LoginForm:
    props: none
    state: {
      username: "",
      password: ""
    }
    fetch: post to submit form data and receive user info back
    renders: none
  NewUserForm:
    props: {
      instruments: [],
      families: [],
      genres: []
    }
    state: {
      username: "",
      password: "",
      familyFilter: "",
      instruments: {
        genre: "",
        teach: boolean,
        perform: boolean
      }
    }
    fetch: post to create user
    renders: none
