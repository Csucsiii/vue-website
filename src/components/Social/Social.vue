<template>
	<div class="m-3 cursor-pointer duration-300 ease-in-out hover:scale-105">
		<a :href="href" target="_blank" class="flex justify-start items-center">
			<slot name="icon"></slot>
		</a>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Social",
	props: {
		href: String,
	},
});
</script>
