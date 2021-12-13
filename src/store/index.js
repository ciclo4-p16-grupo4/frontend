import { createStore } from 'vuex'
import jwt_decode from "jwt-decode";
import router from '../router/index.js'
import gql from 'graphql-tag'

export default createStore({
  state: {
    is_auth: false,
    loguedUser: {
      username: null,
      user_id: null,
      is_staff: null,
      email: null,
      ciudad: null,
      access_token: null,
      refresh_token: null
    }
  },
  mutations: {
    setLoguedIn(state, data) {
      state.loguedUser = {
        access_token: data.token_access,
        refresh_token: data.token_refresh,
        username: data.username,
        user_id: data.user_id,
        is_staff: data.is_staff,
        email: data.email,
        ciudad: data.ciudad
      }

      state.is_auth = true

      localStorage.setItem("isAuth", state.is_auth);
			localStorage.setItem("username", state.loguedUser.username);
      localStorage.setItem("user_id", state.loguedUser.user_id);
      localStorage.setItem("is_staff", state.loguedUser.is_staff);
      localStorage.setItem("email", state.loguedUser.email);
      localStorage.setItem("ciudad", state.loguedUser.ciudad);
			localStorage.setItem("token_access", state.loguedUser.access_token);
			localStorage.setItem("token_refresh", state.loguedUser.refresh_token);

      
    }
  },
  actions: {
    async completedLogIn({ dispatch, commit }, { param, vm }) {
      
      let user_id = jwt_decode(param.token_access).user_id.toString();
      localStorage.setItem("token_access", param.token_access);

      await vm.$apollo.query({
        query: gql`
          query UserDetailById($userId: Int!) {
            userDetailById(userId: $userId) {
              id
              username
              name
              email
              cedula
              ciudad
              is_staff
            }
          }
        `,
        variables: {
          userId: Number(user_id),
          reqAuth: true
        },
      }).then((result) => {

        const user = result.data.userDetailById
        const is_staff = user.is_staff

        commit('setLoguedIn', {
          ...param, 
          user_id, 
          is_staff, 
          ciudad: user.ciudad, 
          email: user.email
        })

        if(this.state.loguedUser.is_staff) {
          router.push({path: '/admin'})
        }else {
          router.push({path: '/profile'})
        }

      })   
    },
    verifyAuth() {
      
      this.state.is_auth = localStorage.getItem("isAuth") || false;
      if(this.state.is_auth) {
        this.state.loguedUser = {
          access_token: localStorage.getItem("token_access"),
          refresh_token: localStorage.getItem("token_refresh"),
          username: localStorage.getItem("username"),
          user_id: localStorage.getItem("user_id"),
          is_staff: localStorage.getItem("is_staff")
        }
      }
    },

    refreshToken({ dispatch, commit }) {
      if(this.state.is_auth) {
        fetch(`${process.env.VUE_APP_API}user/${this.state.loguedUser.user_id}/`, {
          headers: {
            'Authorization': `Bearer ${this.state.loguedUser.access_token}`
          }
        }).then(data => {
          if(data.status == 401) {
            fetch(`${process.env.VUE_APP_API}refresh/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                'refresh': this.state.loguedUser.refresh_token
              })
            }).then(data => data.json()).then(json => {
              this.state.loguedUser.access_token = json.access
              localStorage.setItem("token_access", this.state.loguedUser.access_token)
              dispatch('verifyAuth')
            })
          }
        })
      }
    },
    
    logOut({ dispatch }) {
      localStorage.clear();
      this.state.loguedUser = {
        access_token: null,
        refresh_token: null,
        username: null,
        user_id: null,
        is_staff: null,
      }
			window.alert("Sesión Cerrada");
			dispatch('verifyAuth')
      router.push({path: '/'})
    }
  },

  modules: {
  }
})
