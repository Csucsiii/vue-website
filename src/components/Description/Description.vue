<template>
	<div class="flex flex-col items-center w-[100%] text-slate-200 gap-2">
		<v-title label="Szerverünk" #icon>
			<v-icon name="fa-info-circle" scale="2.5" />
		</v-title>
		<div class="flex flex-col-reverse lg:flex-row items-center w-[90%] lg:w-[70%] gap-2 h-full">
			<div class="flex justify-center h-[100%] w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%]">
				<div class="flex justify-center items-center w-[70%] aspect-square -z-[9]">
					<img loading="lazy" class="bg" src="/astronaut.webp" alt="astronaut_img" />
				</div>
			</div>

			<div
				class="flex flex-col justify-center items-center text-slate-200 w-[100%] lg:w-[70%] h-[100%] text-center text-sm lg:text-lg left-[5%] bg-zinc-800/60 p-2 rounded-md"
			>
				<div class="m-2">
					A
					<v-link href="https://discord.gg/galaxyrp" ariaLabel="Galaxy Roleplay hivatalos oldala." #name> Galaxy Roleplay </v-link>
					egy GTA V szerepjáték szerver, amelynek tulajdonosai
					<v-link href="https://twitch.tv/suri" ariaLabel="Suri hivatalos twitch oldala" #name> Suri </v-link>
					,
					<v-link href="https://twitch.tv/html" ariaLabel="htmL hivatalos twitch oldala" #name> htmL </v-link>
					, és
					<v-link href="https://twitch.tv/ruben" ariaLabel="Ruben hivatalos twitch oldala" #name> Ruben </v-link>
					. A szerver jelenleg egy harmadik féltől származó alrendszeren fut, ami a
					<v-link href="https://fivem.net" ariaLabel="FiveM hivatalos oldala" #name> FiveM </v-link>
					. A szerveren a fejlesztők által készített egyéni szkriptek találhatók, amelyekhez rendszeresen érkeznek frissítések.
				</div>
				<div class="m-2">
					A szerepjáték lényege, hogy beszélj, cselekedj, és úgy járj el, mint a karaktered, akit alakítasz. Ez azt jelenti, hogy a játék közben végrehajtott
					minden művelet a karaktered nevében történik. A cél egy olyan magával ragadó élmény megteremtése, ahol a játékosok és a nézők egyaránt átélhetnek
					történeteket és helyzeteket, egy lényegében egy másik világban.
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { OhVueIcon, addIcons } from "oh-vue-icons";
	import { FaInfoCircle } from "oh-vue-icons/icons";
	import Title from "../Title/Title.vue";
	import Link from "../Link/Link.vue";

	addIcons(FaInfoCircle);

	export default defineComponent({
		name: "Description",
		components: {
			"v-icon": OhVueIcon,
			"v-title": Title,
			"v-link": Link,
		},
	});
</script>

<style lang="scss" scoped>
	.bg {
		transition: all 350ms ease-in-out;
		animation: floatAstronaut 5s linear infinite;
		overflow: hidden;
	}
</style>