# syncedIn-frontend

backend: https://github.com/annabush092/syncedIn-backend

frameworks: React, Redux

*/
???:

Why can't I give a hash as an argument to my custom method? (user.add_skill({hash here???}))
Error is that Rails is looking for methods with the names of each key, so it errors when it doesn't find them. So do I have to use regular old arguments and just remember what they are? (annoying...)

Why is my NavLink not working and rendering the url? Url changes, but the page does not...


TODO:

done - end of day Wednesday: create db, models, associations, start seeding
done - end of day Friday:
  seed db with:
    ~10 instruments + relevant families,
    ~3 genres,
    ~5 users,
    DETAILED associations so I have enough to test with and don't have to add
      anything extra to be able to work on front-end
  start controllers/routes
done (Fri)- end of day Saturday:
  finish API, test with Postman
  Get Redux structure set up in front-end
done (Fri)- end of day Sunday:
  UserProfile (detailed show pages),
  UserList and UserCard (basic info to display in list)
  no formatting yet
done (Saturday) - end of day Sunday:
  filters for User list
done (Mon) - stretch goals for end of day Monday:
  done - allow users to follow other users
  done - basic login (no auth) and sign-up forms
  done (Mon) - catch validation errors when following someone you already follow.
  done (Mon) - make entire website update when you change something in the backend
  (Profile is not updated when currentUser makes a change like following/unfollowing)

Tuesday:
  fix formatting bug of NavBar- why is the color not changing when we change route?
  formatting of index and profile
  allow users to edit their profile - think of a good way to approach this
  update readme info (backend especially)

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
