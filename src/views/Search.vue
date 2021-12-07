<template>
	<section class="search-page">
		<SearchComponent />
	</section>
</template>

<script>
import SearchComponent from '../components/search/SearchComponent.vue'

export default {
	components: {
		SearchComponent
	}
}
</script>

<style scoped>
.search-page {
	padding: 0px 100px;
}
</style>