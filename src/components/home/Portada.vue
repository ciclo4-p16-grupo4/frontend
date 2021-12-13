<template>
  <section class="portada">
    <div class="portada-elements">
      <h1>Venta y Alquiler De Inmuebles </h1>
      <p>
        Compra, arrienda y alquila los mejores inmuebles del país en un solo lugar
      </p>
      <a class="button red-action" href="/user/login">Aprende más</a>
      <SearchBar />
    </div>
    <div class="portada-cover-img">
    </div>
    
  </section>
</template>

<script>
// @ is an alias to /src
import SearchBar from './SearchBar.vue'

export default {
  name: 'CS1',
  components: {
    SearchBar
  }
}
</script>
<style scoped>
.button {
  margin-top: 74px;
  margin-bottom: 100px;
}
.portada {
  /* padding: 100px; */
}
.portada-elements p{
  font-size: 21px;
  color: var(--gray-color);
  width: 549px;
  margin: 22px 0 0 0;
}
.portada-elements h1{
  margin: 100px 0px 0px 0px;
  font-size: 85px;
  width: 870px;
}
.portada-elements {
  position: absolute;
  padding: 0px 0px 0px 100px;
  
}
.portada-cover-img {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  transition: none !important;
  width: 46%;
  height: 1000px;
  margin-left: auto;
  background-position: center;
  transform: translateY(-110px);
  z-index: -1;
  position: relative;
  background-image: url('../../assets/imagen-portada-section.jpg');
}
</style>