<template>
    <div class="form-container">
        <form class="SignUp_user" v-on:submit.prevent="processSignUp">
          
            <label for="username">Nombre</label>
            <input name="username" type="text" v-model="user.username" placeholder="Nombre de usuario" autocomplete="off" required>

            <label for="email">Correo</label>
            <input name="email" type="email" v-model="user.email" placeholder="correo@email.com" autocomplete="off" required>


            <label for="name">Nombre y Apelido</label>
            <input type="name" v-model="user.name" placeholder="Nombre y Apellido" autocomplete="off" required>


            <label for="cedula">Cedula</label>
            <input name="cedula" type="number" v-model="user.cedula" placeholder="Cedula" autocomplete="off" required>

            <label for="ciudad">Ciudad</label>
            <input name="ciudad" type="text" v-model="user.ciudad" placeholder="ciudad" autocomplete="off" required>

            <label for="contraseña">Contraseña</label>
            <input name="contraseña" type="password" v-model="user.password" placeholder="Contraseña" autocomplete="off" required>
                 
            <button class="button red-action send" type="submit">Registrarse</button>
        </form>
    </div>
    
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: "SignUp",
    
    data: function(){
      return {
        user: {
          username: null,
          password: null,
          name: null,
          email: null,
          cedula: null,
          ciudad: null
        }
      }
  },
          
  methods: {
      processSignUp: async function(){
        
        await this.$apollo
        .mutate({
          mutation: gql`
            mutation SignUpUser($userInput: SignUpInput) {
              signUpUser(userInput: $userInput) {
                refresh
                access
              }
            }
          `,
          variables: {
            userInput: this.user,
          },
        })
        .then((result) => {
          let dataSignUp = {
            username: this.user.username,
            token_access: result.data.signUpUser.access,
            token_refresh: result.data.signUpUser.refresh,
          }

          this.$store.dispatch('completedLogIn', {param: dataSignUp, vm: this})
        })
        .catch((error) => {
          console.log(error)
          alert("ERROR: Fallo en el registro.");
        });



        // axios.post(
        // `${process.env.VUE_APP_API}user/`,
        // this.user,
        // {headers: {'Content-Type': 'application/json'}}
        // )
        // .then((result) => {
        //   let dataSignUp = {
        //     username: this.user.username,
        //     token_access: result.data.access,
        //     token_refresh: result.data.refresh,
        //   }

        //   this.$store.dispatch('completedLogIn', {param: dataSignUp})

        // })
        // .catch((error) => {
            
        //   console.log(error)

        //   alert("ERROR: Fallo en el registro.");
      
        // });
      }
    }
}
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