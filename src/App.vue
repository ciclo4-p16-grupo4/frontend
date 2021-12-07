<template>
  <NavBarSection />
  <!-- <transition name="fade" mode="out-in"> -->
     <router-view/>
  <!-- </transition> -->
  <FooterSection />
</template>
<script>
import NavBarSection from './components/home/NavBarSection.vue'
import FooterSection from './components/home/FooterSection.vue'
export default {
  name: "App Component",
  components: {
    NavBarSection,
    FooterSection
  },
  created() {
    this.$store.dispatch('verifyAuth')
  },
  mounted() {
    if(process.env.NODE_ENV == "development") {
      console.log(process.env);
    }

  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
body {
  background-color: #FFFFFF;
  margin: 0;
  min-width: 1250px;
  /* max-width: 200px; */
}
/* section  {
  padding: 100px;
} */

button {
  font-family: 'Raleway', sans-serif;
}
.button {
  text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	width: 144px;
	height: 43px;
	font-weight: 600;
	border: none;
	cursor: pointer;
	font-size: 18px;
	transition: opacity 0.2s ease-out;
}
.button:not(:last-child) {
  	margin-right: 18px;
}

.button:hover {
	
	opacity: .8;
}
.red-action {
	background-color: var(--color-principal);
	color: var(--oposite-color);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.outlined {
	color: var(--font-color);
	background-color: transparent;
	/* transition: border-color 0.2s ease-out; */
	transition: box-shadow 0.2s ease-out;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
#app {
  font-family: 'Raleway', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --color-principal: #FE2222;
  --font-color: #000000;
  --gray-color: #666666;
  --oposite-color: #ffff;
  color: var(--font-color);
}

/* .nav-links {
  padding: 30px;
} */

section {
  opacity: 1;
  transition: opacity 500ms ease 0s;
}
/* .nav-links a:hover {
  font-weight: bold;
} */

.nav-links a.router-link-active {
	color: var(--font-color);
  	font-weight: bold;
}
.user a.router-link-active {
	color: var(--font-color);
  	font-weight: bold;
}
/* #nav a.router-link-exact-active {
	color: var(--font-color);
  	font-weight: bold;
} */

.custom-section-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.no-image {
  background-image: url('./img/no-image.png') !important;
}
</style>
