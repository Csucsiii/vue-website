<template>
		<div class="flex flex-col items-center w-[90%] lg:w-[60%] rounded-md icon-shadow bg-zinc-800/70 text-slate-200 min-h-full h-full duration-300 ease-in-out gap-2">
			<div class="flex justify-center items-center border-b-[1px] border-zinc-600 w-[80%] p-2 py-3">
				<h1 class="text-xl font-medium">{{ name }}</h1>
			</div>

			<div class="flex justify-center items-center w-[80%] aspect-[6/4] bg-zinc-900">
				<div class="flex justify-center items-center w-[50%] aspect-square">
					<img loading="lazy" :src="icon" :alt="name" class="h-[50%] rounded-[50%] icon-shadow" />
				</div>
			</div>

			<div class="flex w-[80%] justify-center items-center text-md text-center m-3">
				<h1>{{ description }}</h1>
			</div>
		</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: "StreamerCard",
		props:{
			name: String,
			icon: String,
			description: String
		},
		setup(){}
	});
</script>

<style lang="scss" scoped>
	.icon-shadow{
		box-shadow:  0 0 60px 15px rgba(170, 87, 160, .5), 0 0 0 0 rgba(170, 87, 160, .2);
	}
</style>