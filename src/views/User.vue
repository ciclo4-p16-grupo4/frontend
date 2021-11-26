<template>
  <div class="user">
    <div class="container">
      <div class="container-image"></div>
      <div class="opt_routers">
        <div class="links">
          <router-link to="./signup">Registrarse</router-link>
          <router-link to="./login">Iniciar Sesión</router-link>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "User",
  components: {},
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  height: 90vh;
}

.container-image {
  width: 50%;
  background-image: url('../assets/imagen-portada-section.jpg');
  background-position: center;
}
.opt_routers {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

a {
  text-decoration: none;
  font-size: 18px;
  font-weight:100;
  color: var(--gray-color);
}

.links {
  padding: 30px;
  width: 230px;
  display: flex;
  justify-content: space-between;
}


</style>