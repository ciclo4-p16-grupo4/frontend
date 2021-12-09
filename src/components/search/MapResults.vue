<template>
	<div v-if="!inmuebles" class="no-search-term">
		<center>
			<h1>No hay resultados</h1>
			<h2>Mapa</h2>
		</center>
	</div>
	<div v-else class="results-list">
		<img width="100%" src="../../img/no-image.png" />
		<!-- <label>{{inmuebles.results.count}} Resultados</label> -->
		<div id='map' style='width: 100%; height: 70vh;'></div>
	
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
		inmuebles: Object,
		pages: Number,
		current: Number
	},
	methods: {
		addMap(inmuebles) {
			mapboxgl.accessToken = 'pk.eyJ1IjoieWFkZXJyIiwiYSI6ImNrOTk2dnNtZDFkbDczbW11anR4bDI2bnQifQ.YdtBms-8QHbLXVbgPH5tuw';
			const map = new mapboxgl.Map({
				container: 'map', // container ID
				style: 'mapbox://styles/mapbox/streets-v11', // style URL
				center: [-74.063644, 4.624335], // starting position [lng, lat]
				zoom: 5 // starting zoom
			});

			map.on('load', () => {
				inmuebles.results.forEach(function(marker, i) {


					const coordernadas = marker.coordenadas.replaceAll(" ", "").split(',')

					var el = document.createElement('div');
					el.className = 'marker-inmueble';
					el.innerHTML = `<div></div>`
					let dii = marker.imagenes[0]?marker.imagenes[0].url:'https://i.imgur.com/4PhhbBv.png'
					new mapboxgl.Marker(el)
					.setLngLat({lon: coordernadas[1], lat: coordernadas[0]})
					.setPopup(
						new mapboxgl.Popup({
							offset: 25
						}).setHTML(
							'<img width="100%" src="'+dii+'" />'
							+'<h3>'+Intl.NumberFormat('es-CO',{style: 'currency', currency: 'COP'}).format(marker.precio)+'</h3>'
							+'<h2>'+marker.titulo+'</h2>'
							+'<span>'+marker.direccion+', '+marker.ciudad+'</span>'
							+'<div class="to-details" ><a class="button red-action" href="../details/'+marker.id+'">Detalles</a></div>'
						)
					).addTo(map);
				});
			})
		}
	},
	mounted() {

		var geojson = {
			"type": "FeatureCollection",
			"features": [{
				"type": "Feature",
				"geometry": {
					"type": "Point",
					"coordinates": [-73.08615062489861, 7.024789611747215]
				},
				"properties": {
					"title": "Mapbox",
					"description": "Washington, D.C."
				}
				},
				{
				"type": "Feature",
				"geometry": {
					"type": "Point",
					"coordinates": [-74.06196154218274, 4.762965609466453]
				},
				"properties": {
					"title": "Mapbox",
					"description": "San Francisco, California"
				}
				}
			]
		}

		if(this.inmuebles) {
			this.addMap(this.inmuebles)
		}

		
		
	}
}
</script>
<style>
.to-details a{
	width: 100%;
	height: 35px;
	margin-top: 10px;
}
.marker-inmueble {
	font-size: 20px;
	background-color: var(--color-principal);
	border-radius: 100%;
	border: 3px solid var(--oposite-color);
	height: 20px;
	width: 20px;
	box-shadow: 0px 3px 8px rgba(254, 34, 34, 0.4);
}
.mapboxgl-popup-content {
	border-radius: 20px!important;
	padding: 10px;
	font-family: 'Raleway', sans-serif;
}
.mapboxgl-popup-close-button {
	display: none;
}
.mapboxgl-popup-content img {
	/* margin: 5px 0px */
	border-radius: 20px;
}
.mapboxgl-popup-content  h3{
	color: var(--color-principal);
	margin-top: 5px;
}
.mapboxgl-popup-content p{
	
	height: 163px;
	display: -webkit-box;
	-webkit-line-clamp: 8;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
<style scoped>
#map {
  height: 100%;
}
.marker {width:0; height:0;}



.mapboxgl-popup {
  /* max-width: 500px; */
}

</style>