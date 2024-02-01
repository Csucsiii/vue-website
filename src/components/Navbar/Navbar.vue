<template>
	<nav class="hidden lg:flex justify-around items-center text-slate-200 bg-[#0f0f0f]/60 shadow-md shadow-[#9A208C] p-3 z-50">
		<div class="flex justify-start items-center w-1/2 font-medium subpixel-antialiased gap-4">
			<nav-item label="Főoldal" #icon>
				<v-icon name="fa-home"></v-icon>
			</nav-item>
			<nav-item label="Jelentkezés" href="apply" #icon>
				<v-icon name="fa-newspaper"></v-icon>
			</nav-item>
			<nav-item label="Scriptek" href="scripts" #icon>
				<v-icon name="fa-code"></v-icon>
			</nav-item>
			<nav-item label="Streamek" href="streams" #icon>
				<v-icon name="fa-laptop-code"></v-icon>
			</nav-item>
		</div>
	</nav>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import NavItem from "./NavItem.vue";
	import { OhVueIcon, addIcons } from "oh-vue-icons";
	import { FaHome, FaNewspaper, FaCode, FaLaptopCode } from "oh-vue-icons/icons";

	addIcons(FaHome, FaNewspaper, FaCode, FaLaptopCode);

	export default defineComponent({
		components: {
			"v-icon": OhVueIcon,
			"nav-item": NavItem
		}
	});
</script>
