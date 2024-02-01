<template>
	<div class="flex flex-col justify-evenly items-center w-[80%] lg:w-[50%] text-slate-200 rounded-md overflow-hidden bg-[#1A1B1F]/80 icon-shadow">
		<div class="relative w-[100%] min-w-[100%] h-[80px] mb-[55px] bg-[#fff] script-bg">
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 bg-zinc-800/80 flex justify-center items-center text-[40px] p-4 rounded-[50%] icon-shadow">
				<slot></slot>
			</div>
		</div>

		<div class="text-sm md:text-md text-center h-[50%] p-2">{{ description }}</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "ScriptCard",
		props: {
			description: String
		}
	})
</script>

<style lang="scss" scoped>
	.script-bg {
		background-image: linear-gradient(to bottom, rgba(26, 27, 31, 0.75) 90%, rgba(26, 27, 31, 1)), url("/scripts.webp");
		background-position: top center;
		background-size: cover;
	}

	.icon-shadow{
		box-shadow:  0 0 60px 15px rgba(170, 87, 160, .5), 0 0 0 0 rgba(170, 87, 160, .2);
	}
</style>
