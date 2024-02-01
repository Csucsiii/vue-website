<template>
	<div class="flex flex-col items-center w-full my-10">
		<v-title label="Jelentkezés" #icon>
			<v-icon name="fa-newspaper" scale="2.5"></v-icon>
		</v-title>
		<div className="flex flex-col lg:flex-row justify-evenly items-center w-[90%]">
			<div class="flex flex-col items-center w-[100%] lg:w-[50%] bg-zinc-800/70 text-slate-200 text-center gap-4 p-3 rounded-md icon-shadow">
				<h1 class="text-xl lg:text-2xl font-bold my-2">Jelentkezés folyamata</h1>
				<h1 class="text-sm lg:text-md w-[80%]">Légy része te is Magyarország egyik leghíresebb és teljesen egyedi rendszerekből álló FiveM RP szerver közösségének.</h1>
				<ul class="flex flex-col text-left list-inside list-decimal w-[90%] my-2 gap-1 text-sm lg:text-md">
					<li>Bejelentkezés a weboldalra és jelentkezés megkezdése.</li>
					<li>Jelentkezéshez szükséges az adataid megadása.</li>
					<li>Karaktereddel kapcsolatos információk kitöltése.</li>
					<li>Jelentkezés leadása.</li>
				</ul>
				<h3 class="text-sm lg:text-md">
					Jelentkezés leadásától számított <span class="font-bold">72 órán belül</span> elbírálásra kerül a lapod.
				</h3>
				<button class="bg-fuchsia-900 text-lg lg:text-xl font-semibold p-1 lg:p-2 rounded-md duration-300 w-[70%] lg:w-[30%] hover:scale-105" onclick="console.log('Jelentkezés')">
					Jelentkezés
				</button>
			</div>
			<div class="flex justify-center h-[100%] w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%]">
				<div class="flex justify-center items-center w-[55%] aspect-square -z-[9]">
					<img src="/astronaut2.webp" alt="astronaut_2">
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import Title from "../Title/Title.vue";
	import { OhVueIcon, addIcons } from "oh-vue-icons";
	import { FaNewspaper } from "oh-vue-icons/icons";

	addIcons(FaNewspaper);

	export default defineComponent({
		components: {
			"v-title": Title,
			"v-icon": OhVueIcon
		}
	});
</script>