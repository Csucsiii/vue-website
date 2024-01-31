<template>
	<div className="flex flex-col items-center w-full my-10">
		<v-title label="Néhány szó a scriptjeinkről">
			<v-icon name="fa-code" scale="2.5"></v-icon>
		</v-title>
		<div
			className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 justify-items-center md:items-center w-full md:h-full p-2 m-4"
		>
			<v-card v-for="script in items" :description="script.description">
				<v-icon :name="script.icon" scale="2.5"></v-icon>
			</v-card>
			</div>
		</div>
</template>


<script lang="ts">
	import { defineComponent, ref } from "vue";
	import { OhVueIcon, addIcons } from "oh-vue-icons";
	import { FaCode, FaScrewdriver, FaLaptopCode, FaUserSecret } from "oh-vue-icons/icons";
	import Title from "../Title/Title.vue";
	import Card from "./Card.vue";
	import { scripts } from "../../constants/scripts";

	addIcons(FaCode, FaScrewdriver, FaLaptopCode, FaUserSecret);

	export default defineComponent({
		name: "Script",
		components: {
			"v-title": Title,
			"v-icon": OhVueIcon,
			"v-card": Card
		},
		props: {},

		setup(){
			const items = ref(scripts);

			console.log(scripts);
			console.log(items);
			return {
				items
			}
		}
	});
</script>