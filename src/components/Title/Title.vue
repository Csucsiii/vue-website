<template>
	<div class="flex justify-center items-center text-slate-200 text-2xl lg:text-3xl gap-2 mb-4 w-[100%]">
		<slot></slot>
		<h1>{{ label }}</h1>
	</div>
</template>


<script lang="ts" setup>
	import type { TitleProps } from "../../types/types";
	defineProps<TitleProps>();
</script>