<template>
	<div class="flex flex-col justify-evenly lg:justify-around items-center m-4 min-h-[85vh]">
		<div class="flex flex-col justify-center items-center w-[90%] xl:w-[80%] h-[80%] lg:h-[50%]">
			<video loop autoPlay muted oncontextmenu="(e) => e.preventDefault()" class="aspect-[12/5] w-[100%] lg:w-[70%] 2xl:w-[40%]">
				<source src="/Galaxy_Banner_1.webm" type="video/webm"/>
			</video>
			<h1 class="text-slate-200 text-xl lg:text-3xl">ÜDVÖZÖLLEK A GALAXY ROLEPLAY OLDALÁN!</h1>
		</div>
		<v-info-panel />
	</div>
</template>


<script lang="ts">
	import { defineComponent } from 'vue';
	import InfoPanel from "./InfoPanel.vue";

	export default defineComponent({
		name: "Landing",
		components:{
			"v-info-panel": InfoPanel
		}
	})
</script>