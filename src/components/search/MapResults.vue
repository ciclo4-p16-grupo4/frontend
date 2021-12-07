<template>
	<div v-if="!inmuebles" class="no-search-term">
		<center>
			<h1>No hay resultados</h1>
			<h2>Mapa</h2>
		</center>
	</div>
	<div v-else class="results-list">
		<label>{{inmuebles.results.length}} Resultados</label>
	</div>
</template>

<script>
export default {
	
	data: function() {
		return {
			search: {
				q: null,
				order_by: null,
				sort: null
			},
			pagination: {
				offset: 10,
				limit: 10
			}
		}
	},
	props: {
		inmuebles: Object
	}
}
</script>

<style scoped>

</style>