<template>
	<div v-if="!inmuebles" class="no-search-term">
		<center>
			<h1>No hay resultados</h1>
		</center>
	</div>
	
	<div v-else class="results-list">
		<div class="label">
			<label>{{inmuebles.results.length}} - {{inmuebles.count}} Resultados</label>
		</div>
		<div v-if="inmuebles.results.length==0" class="no-search-term">
			<center>
				<h1>No se encontraron inmuebles para tu búsqueda</h1>
				<a href="./search/list?q=" target="_blank" rel="noopener noreferrer"></a>
			</center>
		</div>
		<div class="grid-results">
			<InmuebleCard v-for="inmueble in inmuebles.results" :key="inmueble.id" :inmueble="inmueble"/>
		</div>
	<div class="pagination-container">
		<a class="previous-page" @click="$emit('changePage', current-1)" :class="{'inactiveB': current==1}" >Anterior</a>
		<a class="button-pagination-page" v-for="page in pages" :key="page" :class="{'current-page': page==current}" @click="$emit('changePage', page)">{{page}}</a>
		<a class="next-page" @click="$emit('changePage', current+1)" :class="{'inactiveB': !(current < pages)}"  >Siguiente</a>
	</div>
	</div>

</template>

<script>
import InmuebleCard from '../Inmuebles/InmuebleCard.vue'
export default {
	components: {
		InmuebleCard
	},
	props: {
		inmuebles: Object,
		pages: Number,
		current: Number
	},
	mounted() {
	// console.log(Math.round(this.inmuebles.count/10));	
	}
}
</script>

<style scoped>
.grid-results {
	display: grid;
	grid-template-columns: repeat(auto-fill, 328px);
	grid-template-rows: repeat(2, 451px);
	justify-content: space-between;
	row-gap: 40px;
	column-gap: 3px;
}
.label {
	margin: 20px 0px;
}

.inactiveB {
	display: none;
}

.previous-page {
	margin-left: 20px;
	padding: 10px;
	background-color: var(--oposite-color);
	border-radius: 5px;
	border: 1px solid transparent;
}

.previous-page:hover {
	border: 1px solid var(--color-principal);
}

.previous-page:active {
	background-color: var(--color-principal);
	color: var(--oposite-color);
}

.next-page:active {
	background-color: var(--color-principal);
	color: var(--oposite-color);
}
.next-page {
	margin-left: 20px;
	padding: 10px;
	background-color: var(--oposite-color);
	border-radius: 5px;
	border: 1px solid transparent;
}

.next-page:hover {
	border: 1px solid var(--color-principal);
}
.current-page {
	background-color: var(--color-principal)!important;
	color: var(--oposite-color)
}

.button-pagination-page:hover {
	background-color: var(--color-principal);
	color: var(--oposite-color);
}

.button-pagination-page {
	padding: 10px;
	background-color: var(--oposite-color);
	margin: 0px 10px;
}
.pagination-container a{
	cursor: pointer;
}
.pagination-container {
	padding: 50px 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>