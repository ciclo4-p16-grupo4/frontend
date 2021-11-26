<template>
  <!-- <section class=""> -->
    <div class="cs2">
      <div class="custom-section-title">
        <div class="section-title">
          <h1>Agregados recientemente</h1>
        </div>
        
      </div>
      
    </div>
    <div class="custom-section-body">
      <InmuebleCard v-for="inmueble in inmuebles" :key="inmueble.id" :inmueble="inmueble"/>
    </div>

    <div class="custom-section-title">
       <a class="button red-action" href="./search?order_by=created">Ver Más</a>

    </div>
    
  <!-- </section> -->
</template>

<script>
import InmuebleCard from '../Inmuebles/InmuebleCard.vue'

export default {
  name: 'CS2',
  components: {
    InmuebleCard
  },
  data() {
    return {
      inmuebles: Array
    }
  },
  mounted() {
    this.getInmuebles('order_by=creado&sort=DESC&limit=6')
  },
  methods: {
    getInmuebles(queryParams) {
      fetch(`${process.env.VUE_APP_API}inmuebles/?${queryParams}`).then(data =>data.json()).then(json => {
        this.inmuebles = json
      })
    }
  }
}
</script>

<style scoped>
.custom-section-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.cs2 {
  margin-top: 100px;
  padding: 0px 100px;
}
/* .acton-btn:hover {
  mask: #000;
} */

.active {
  background-color: var(--color-principal);
  box-shadow: 0px 3px 8px rgba(254, 34, 34, 0.4);

}
svg path{
  fill: var(--oposite-color)
}
.section-buttons {
  width: 100px;
  display: flex;
  justify-content: space-between;
}
.custom-section-body {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, 451px);
  justify-items: center;
  justify-content: center;
  padding: 30px 100px;
  row-gap: 50px;
  column-gap: 92px;
}
.section-title {
  width: 400px;
}
.section-title h1{
  font-size: 50px;
  text-align: center;
}
</style>