<template>
	<div class="flex gap-1 items-center text-lg cursor-pointer bg-fuchsia-800 rounded-md p-2">
		<slot name="icon"></slot>
		{{ label }}
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "NavItem",
		props:{
			label: String
		}
	})
</script>