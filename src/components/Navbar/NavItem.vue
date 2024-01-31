<script lang="ts" setup>
	import type { NavItemProps } from "../../types/types";
	defineProps<NavItemProps>();
</script>

<template>
	<div class="flex gap-1 items-center text-lg cursor-pointer bg-fuchsia-800 rounded-md p-2">
		<slot></slot>
		{{ label }}
	</div>

</template>