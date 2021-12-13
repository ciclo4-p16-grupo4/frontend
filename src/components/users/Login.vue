<template>
  <div class="form-container">
    <form class="SignUp_user" v-on:submit.prevent="processLogInUser">
      <label for="username"></label>
      <input name="username" type="text" v-model="user.username" placeholder="Username" />

      <input type="password" v-model="user.password" placeholder="Password" />

      <button class="button red-action send" type="submit">Iniciar Sesion</button>
      <pre>
        Usuario administrador de prueba
        user: {{ user_def}}
        password: {{ pw_def}}
      </pre>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: "LogIn",

  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
      user_def: process.env.VUE_APP_DEFAULT_USER || 'Configurar',
      pw_def: process.env.VUE_APP_DEFAULT_PW || 'Configurar',
    };
  },

  methods: {
    processLogInUser: async function () {
      await this.$apollo
      .mutate({
        mutation: gql`
          mutation Mutation($credentials: CredentialsInput!) {
            logIn(credentials: $credentials) {
              refresh
              access
            }
          }
        `,
        variables: {
          credentials: this.user,
        },
      })
      .then((result) => {
        console.log(result);
        let dataLogIn = {
          username: this.user.username,
          token_access: result.data.logIn.access,
          token_refresh: result.data.logIn.refresh,
        };

        this.$store.dispatch('completedLogIn', {param: dataLogIn, vm: this})
      })
      .catch((errors) => {
        console.log(errors);
        alert("ERROR: Credenciales Incorrectas."+'\n'+errors.message)
      });






      // axios
      //   .post(
      //     `${process.env.VUE_APP_API}login/`,
      //     this.user,
      //     {headers: {'Content-Type': 'application/json'}}          
      //   )
      //   .then((result) => {
      //     let dataLogIn = {
      //       username: this.user.username,
      //       token_access: result.data.access,
      //       token_refresh: result.data.refresh,
      //     };

      //     this.$store.dispatch('completedLogIn', {param: dataLogIn})
      //     //console.log(this.$store.state);
      //   })
      //   .catch((error) => {
      //     if (error.response.status == "401")
      //       alert("ERROR 401: Credenciales Incorrectas.")
      //     if (error.response.status == "400")
      //       alert("ERROR 400: Los datos ingresados son incorrectos\n")
      //   });
    },
  },
};
</script>

<style scoped>
input,textarea,select {
  font-family: inherit;
}
input:focus,textarea:focus,select:focus {
  border-color: var(--color-principal);
}
textarea {
  height: 50px !important;
}
input,textarea {
  width: 390px;
  height: 20px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid;
  outline: none;
  font-size: 15px;
  font-weight: 500  ;
}
input[type=submit] {
  height: 50px;
  margin-top: 10px;
  margin-bottom: 0px;

}
.dos-selects {
  display: flex;
  justify-content: space-between;
}
.dos-selects select{
  width: 48%;
  height: 38px;
  border: 1px solid;
  margin-bottom: 20px;
}
.add-imagen-container button:hover {
  cursor:pointer;
}
.add-imagen-container button {
  background-color: var(--color-principal);
  border: none;
  color: var(--oposite-color);
  height: 40px;
  width: 40px;
}
.add-imagen-container {
  display: flex;
  justify-content: space-between;
}
.add-imagen-container input {
  padding: 5px;
  width: 80%;
}
label{
  margin-bottom: 10px;
}

.send {
  width: 100%;
}

.SignUp_user {
  display: flex;
  flex-direction: column;
}

.form-container {
  height: 500px;
}
</style>