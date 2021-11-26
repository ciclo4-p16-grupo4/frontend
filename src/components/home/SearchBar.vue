<template>
  <nav class="search-bar">
    <div class="selector-type">
      <input type="radio" id="alquiler" name="TIPO-CONTRATO" value="ALQ">
      <label for="alquiler" class="border-left">
        Alquilar
      </label>

      <input type="radio" name="TIPO-CONTRATO" id="comprar" value="VEN">
      <label for="comprar" class="border-right">Comprar</label>
    </div>
    <div class="search-options">
      <div class="search-options-inputs">
          <fieldset>
          <label for="ubicacion">Ubicación</label>
          <select name="ubicacion" id="ubicacion" v-model="buscar.ciudad">
            <option value="null" selected disabled>Ubicación</option>
            <template v-for="dep in ciudades" :key="dep.id">
              <option v-for="ciudades in dep.ciudades" :key="ciudades"  :value="ciudades">{{ciudades}}, {{pais}}</option>
            </template>
            
          </select>
        </fieldset>

        <fieldset>
          <label for="tipo">Tipo</label>
          <div class="tipo-area">
            <select name="tipo" id="tipo" v-model="buscar.tipo">
              <option value="APT" selected>Apartamento, </option>
              <option value="CAS">Casa, </option>
              <option value="LOC">Local, </option>
            </select>
            <input type="text" name="area" id="" v-model="buscar.area"><label for="area">m²</label>
          </div>
        </fieldset>

        <fieldset class="">
          <label for="tipo">Precio</label>
          <div class="precio">
            $<input type="number" name="" id="" v-model="buscar.precioMI">
            - $ <input type="number" name="" id="" v-model="buscar.precioMX">
          </div>
        </fieldset>
      </div>

      <div class="buscar-button">
        <a target="_blank" href="https://google.com" class="button red-action buscar">Buscar Propiedad</a>
      </div>
    </div>    
  </nav>
</template>

<script>
import ciudades from '../../assets/colombia.min.json'

export default {
  name: 'SearchBar',
  components: {
  },
  data() {
    return {
      pais: 'Colombia',
      ciudades,
      buscar: {
        ciudad: null,
        tipo: null,
        area: null,
        precioMI: null,
        precioMX: null
      }
    }
  }
}
</script>
<style scoped>
nav {
	height: 180px;
	width: 1150px;
	/* background-color: rgb(0, 0, 0); */
  border-bottom-left-radius: 5px;
  font-weight: 600;
  
}
.search-options {
  display: flex;
  align-items: center;
  height: 100px;
  background-color: var(--oposite-color);
  border-bottom-left-radius: 5px;
  padding: 17px 20px;
  box-shadow: -4px 4px 16px rgba(254, 34, 34, 0.1);
}
.selector-type {
  display: flex;
}
.select-type-button {
  padding: 10px;
  /* background-color: brown; */
}
.selector-type label {
  display: flex;
  align-items: center;
  padding: 18px;
  /* width: 100px; */
  height: 10px;
  cursor: pointer;
  background-color: #fe22222d;
}
.border-left{
  border-top-left-radius: 5px;
  
}
.border-right{
  border-top-right-radius: 5px;

}
/* .select-type-button {
  background-color: blue;
} */
input[type="radio"]:checked + label{
  background-color: var(--color-principal);
  color: var(--oposite-color);
}
input[type="radio"]{
  position: absolute;
  opacity: 0;
}
.search-options-inputs {
  display: flex;
}


.search-options label{
  color: var(--gray-color);
  margin-bottom: 20px;
  margin-left: 3px;
}
.search-options fieldset{
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  width: 253px;
  height: 100%;
  padding: 0 10px 0px 0px;
  border: transparent;
  color: rgb(255, 255, 255);
}
.search-options fieldset:not(:last-child) {
  border-right: 1px solid #6666;
}
.search-options select:hover {
  cursor: pointer;
}
.search-options select {
  padding: 12px 0px;
  border: none;
  font-weight: 500;
  /* color: var(--gray-color); */
  font-size: 18px;
  width: 210px;
}
.tipo-area {
  display: flex;
  align-items: center;
}
.precio {
  color: var(--font-color);
  display: flex;
  align-items: center;
  font-size: 18px;
}
.precio input{
  width: 80px;
  height: 30px;
  border: none;
  font-weight: 500;
  font-size: 18px;
}
.tipo-area label {
  margin: 0;
  font-weight: 600;
  color: var(--font-color);
}
.tipo-area select {
  width: 45%;
  /* margin-right: 10px; */
}

.tipo-area select {
  -moz-appearance: none;
  -webkit-appearance: none;
}

.tipo-areaselect::-ms-expand {
  display: none;
}
.tipo-area input {
  width: 20%;
  font-weight: 500;
  font-size: 18px;
  border: none;
}
.buscar {
  height: 70px;
  width: 200px;
  margin-left: auto;
}
.buscar-button {
  width: 100%;
}
</style>