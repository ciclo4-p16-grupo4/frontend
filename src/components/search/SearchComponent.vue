<template>
	<div class="search-nav">
		<div class="search-input">
			<input v-model="this.search.q" type="search" placeholder="Casa finca Villeta, Cundinamarca" name="" id="">
		</div>
		<div class="search-opt">
			<a @click="buscar(currentPage = 1)" class="button red-action">Buscar</a>
			<select name="order_by" id="order" v-model="search.order_by">
				<option value="id">id</option>
				<option value="titulo">Titulo</option>
				<option value="direccion">Dirección</option>
				<option value="ciudad">Ciudad</option>
				<option value="poblacion">Población</option>
				<option value="tipo">Tipo</option>
				<option value="precio">Precio</option>
				<option value="area">Área</option>
				<option value="habitaciones">Habitaciones</option>
				<option value="banos">Baños</option>
				<option value="estrato">Estrato</option>
				<option value="contrato">Contrato</option>
				<option value="likes">Megusta</option>
			</select>
			<select name="sort_by" id="order" v-model="search.sort">
				<option value="ASC">Acendente</option>
				<option value="DESC">Decentente</option>
			</select>
			<br>
		</div>
	</div>
	<!-- <pre>
		search_opt: {{search}}
		current_page: {{currentPage}}
		pages_number: {{pageNumber}}
	</pre> -->
	<div class="buttons-tabs">
		<router-link to="/search/list">
			<svg width="20px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list-ul" class="svg-inline--fa fa-list-ul fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/></svg>
			<label>Lista</label>
		</router-link>
		<router-link to="/search/map">
			<svg height="20px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
			<label>Mapa</label>
		</router-link>
	</div>
	<div class="search-results">
		<section v-if="isLoading" class="loading">
			<img width="300" src="@/assets/loading.svg" alt="">
		</section>
		<div v-else>
			<router-view v-on:changePage="changePage" :inmuebles="results" :pages="pageNumber" :current="currentPage" />
		</div>
	</div>
</template>

<script>
import gql from 'graphql-tag'
export default {
	data: function() {
		return {
			isLoading: false,
			results: null,
			pageNumber: null,
			currentPage: this.$route.query.page || 1,
			search: {
				q: this.$route.query.q,
				order_by: this.$route.order || 'id',
				sort: this.$route.sort || 'ASC',
				offset: null,
				limit: null
			},
			defaultOffset: 12
		}
	},
	apollo: {
		serachInmuebles: {
			manual: true,
			query: gql`
				query SerachInmuebles($q: String!, $order: String, $sort: String, $offset: Int, $limit: Int) {
					serachInmuebles(q: $q, order: $order, sort: $sort, offset: $offset, limit: $limit) {
						count
						results {
							id
							likes
							titulo
							direccion
							ciudad
							poblacion
							tipo
							precio
							area
							habitaciones
							banos
							estrato
							contrato
							descripcion
							coordenadas
							imagenes {
								url
							}
						}
					}
				}
			`,
			variables() {
				return {
					q: this.search.q,
					order: this.search.order_by,
					sort: this.search.sort,
					offset: this.defaultOffset*(this.currentPage-1),
					limit: this.defaultOffset*(this.currentPage)
				}
			},
			deep: false,
			skip() {
				return true	
			},
			manual: true,
			result ({ data, loading }) {
				if (!loading) {
					this.results = data.serachInmuebles
					this.pageNumber = Math.ceil(Number(this.results.count/this.defaultOffset))
				}
			},
		}
	},
	methods: {
		async buscar() {
			this.isLoading = true
			this.$router.replace({ 
				query: {
					q: this.search.q, 
					page: this.currentPage, 
					order: this.search.order_by, 
					sort: this.search.sort
				}
			})
			this.$apollo.queries.serachInmuebles.skip = false
			await this.$apollo.queries.serachInmuebles.refetch();
			this.$apollo.queries.serachInmuebles.skip = true
			this.isLoading = false
		},
		changePage(page) {
			this.currentPage = page
			this.buscar()
		}
	},
	mounted() {
		if(this.search.q != undefined) {
			this.buscar()
		}
	}
}
</script>

<style scoped>
.button {
	height: 100%;
	margin-left: 10px;
	margin-right: 50px
}
.search-nav {
	display: flex;
}
.search-input{
	width: 50%;
}
.search-input input{
	height: 50px;
	width: 100%;
	border-radius: 5px;
	padding: 10px;
	border: none;
	outline: none;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

input, select {
	font-family: 'Raleway', sans-serif;
	font-size: 20px;
}
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
  height: 15px;
  width: 15px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEyMy4wNXB4IiBoZWlnaHQ9IjEyMy4wNXB4IiB2aWV3Qm94PSIwIDAgMTIzLjA1IDEyMy4wNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIzLjA1IDEyMy4wNTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTEyMS4zMjUsMTAuOTI1bC04LjUtOC4zOTljLTIuMy0yLjMtNi4xLTIuMy04LjUsMGwtNDIuNCw0Mi4zOTlMMTguNzI2LDEuNzI2Yy0yLjMwMS0yLjMwMS02LjEwMS0yLjMwMS04LjUsMGwtOC41LDguNQ0KCQljLTIuMzAxLDIuMy0yLjMwMSw2LjEsMCw4LjVsNDMuMSw0My4xbC00Mi4zLDQyLjVjLTIuMywyLjMtMi4zLDYuMSwwLDguNWw4LjUsOC41YzIuMywyLjMsNi4xLDIuMyw4LjUsMGw0Mi4zOTktNDIuNGw0Mi40LDQyLjQNCgkJYzIuMywyLjMsNi4xLDIuMyw4LjUsMGw4LjUtOC41YzIuMy0yLjMsMi4zLTYuMSwwLTguNWwtNDIuNS00Mi40bDQyLjQtNDIuMzk5QzEyMy42MjUsMTcuMTI1LDEyMy42MjUsMTMuMzI1LDEyMS4zMjUsMTAuOTI1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=);
}
.search-opt select:not(:last-child) {
	margin-right: 15px;
}
.search-opt select{
	/* height: 50px; */
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #666666;
}
.search-opt {
	width: 50%;
	display: flex;
	/* justify-content: flex-end; */
}
.buttons-tabs {
	display: flex;
	flex-wrap: wrap;
  	gap: 20px;
	margin-top: 20px;
}
.buttons-tabs a svg {
	margin-right: 10px;
}
.buttons-tabs a path {
	fill: var(--gray-color)
}
.router-link-active path {
	fill: var(--color-principal) !important;
}
.router-link-active {
	border-bottom: 2px solid var(--color-principal) !important;
	color: var(--color-principal) !important;
}
.buttons-tabs label{
	cursor: pointer;
}
.buttons-tabs a {
	display: flex;
	height: 20px;
	padding: 10px 5px;
	border: none;
	cursor: pointer;
	color: var(--gray-color);
	align-items: center;
	text-decoration: none;
}
label {
	font-size: 18px;
}

.search-results {
	min-height: 500px;
}
.loading {
	display: flex;
    justify-content: center;
	margin-top: 20px;
}
</style>