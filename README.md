# syncedIn-frontend

backend: https://github.com/annabush092/syncedIn-backend

frameworks: React, Redux


store state structure:
  users: {
    list: [ {only basic information for user cards}, {}, etc ]
    currentUser: {full user information from backend}
  }
  instruments: [ {id: , name: "", family_id: }, {id: , name: "", family_id: }, etc]
  families: [ {id: , name: ""}, {id: , name: ""}, etc ]
  genres: [ {id: , name: ""}, {id: , name: ""}, etc ]


Component structure:
  App:
    props: none
    state: none
    fetch: none
    renders: LoginForm, UserContainer
  UserContainer:
    props: none
    state: none
    fetch: get all users basic information
    renders: UserList, UserProfile, NewUserForm
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
    props: none
    state: detailed user information
    fetch: get user detailed information
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
    fetch:
      - post to create user
      - get all instruments
      - get all families
      - get all genres
    renders: none
