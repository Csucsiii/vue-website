<template>
    <main class="flex flex-col h-screen max-h-screen overflow-hidden">
		<div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 aspect-square">
			<img loading="lazy" class="bg-blur" src="/background.webp" alt="background_img"/>
		</div>
		<v-navbar />
        <div class="flex flex-col overflow-auto">
			<v-application />
			<v-scripts />
			<v-streamers />
			<v-footer />
        </div>
    </main>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import Navbar from "./Navbar/Navbar.vue";
	import Application from "./Application/Application.vue";
	import Scripts from "./Scripts/Scripts.vue";
	import Streamers from "./Streamers/Streamers.vue";
	import Footer from "./Footer/Footer.vue";

	export default defineComponent({
		name: "Layout",
		components: {
			"v-navbar": Navbar,
			"v-application": Application,
			"v-scripts": Scripts,
			"v-streamers": Streamers,
			"v-footer": Footer
		}
	});
</script>

<style lang="scss" scoped>
	.bg-blur{
		filter: blur(30px);
		width: 100%;
	}
</style>