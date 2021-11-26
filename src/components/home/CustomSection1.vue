<template>
  <!-- <section class=""> -->
    <div class="cs1">
      <div class="custom-section-title">
        <div class="section-title">
          <h1>En tu ciudad</h1>
        </div>
        <div class="section-buttons">
          <button @click="left()" class="action-btn"><svg width="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg></button>
          <button @click="right()" class="action-btn active"><svg width="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg></button>
        </div>
      </div>
      
    </div>
    <div class="custom-section-body">
      <InmuebleCard v-for="(inmueble, i) in inmuebles" :key="inmueble.id" :inmueble="inmueble" :id="'in'+i" />
    </div>
  <!-- </section> -->
</template>

<script>
// @ is an alias to /src
import InmuebleCard from '../Inmuebles/InmuebleCard.vue'
export default {
  name: 'CS1',
  components: {
    InmuebleCard
  },
  data() {
    return {
      inmuebles: Array
    }
  },
  mounted() {
    this.getInmuebles('order_by=ciudad&sort=ASC&limit=20')
  },
  methods: {
    getInmuebles(queryParams) {
      fetch(`${process.env.VUE_APP_API}inmuebles/?${queryParams}`).then(data =>data.json()).then(json => {
        this.inmuebles = json
      })
    },
    right() {
      // let inPage = Math.round(window.innerWidth/360)
      // // this.$refs.[inPage/2].focus();
      // // document.querySelector('#6').focus()
      // let el = document.querySelector('#in8')
      // el.scrollIntoView()
    },
    
    left() {

    }
  }
}
</script>

<style scoped>
.cs1 {
  padding: 0px 100px;
}
/* .acton-btn:hover {
  mask: #000;
} */
.inmueble-card {
	margin-right: 40px;
}
.action-btn {
  width: 40px;
  height: 40px;
  border: none;
  background-color: rgba(254, 34, 34, 14%);
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(254, 34, 34, 0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 0; */
  padding: 0;
}
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
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 30px 100px;
}
</style>