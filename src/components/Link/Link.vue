<template>
	<a class="text-[#9A208C] cursor-pointer" :href="href" target="_blank" :aria-label="ariaLabel">
		<slot name="name"></slot>
	</a>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: "Link",
		props: {
			href: String,
			ariaLabel: String,
		}
	})
</script>