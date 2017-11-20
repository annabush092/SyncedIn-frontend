# SyncedIn-frontend

backend: https://github.com/annabush092/syncedIn-backend

frameworks: React, Redux


store state structure:
  users: {
    list: [ {}, {}, etc ]
    currentUser: {}
  }
  instruments: [ {id: , name: "", family_id: }, {id: , name: "", family_id: }, etc]
  families: [ {id: , name: ""}, {id: , name: ""}, etc ]
  genres: [ {id: , name: ""}, {id: , name: ""}, etc ]


Component structure:
  App:
    props: none
    state: none
    fetch: none
  LoginForm:
    props: none
    state: {
      username: "",
      password: ""
    }
    fetch: post to submit form data and receive user info back
  UserContainer:
    props: none
    state: none
    fetch: get all users
  UserList:
    props: {
      allUsers: [ {}, {}, etc ]
    }
    state: {
      filteredUsers: [ {}, {}, etc]
    }
    fetch: none
  FilterForm:
    props: none
    state: {
      filter: ""
    }
    fetch: none
  UserCard:
    props: {
      userProps
    }
    state: none
    fetch: none
  UserProfile:
    props: {
      currentUserProps
    }
    state: none
    fetch: post to edit user?
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
