<template>
	<button class="bg-fuchsia-800 px-3 py-2 m-2 text-md rounded-md duration-300 ease-in-out" @click="toggleExpanded">
		{{ label }}
	</button>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: "StreamerButton",
		props: {
			label: String,
			expanded: Boolean
		},
		emits:["update:expanded"],
		setup(_, { emit }){
			const toggleExpanded = () => {
				emit("update:expanded");
			};

			return {
				toggleExpanded
			}
		}
	})
</script>