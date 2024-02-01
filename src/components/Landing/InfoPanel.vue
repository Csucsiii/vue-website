<template>
		<div class="flex flex-col lg:flex-row lg:justify-between items-center bg-zinc-800/70 w-[100%] lg:w-[70%] p-2 rounded-md gap-3">
			<div class="flex items-center justify-around lg:justify-start gap-4 w-[80%] lg:w-[40%] h-[100%]">
				<div class="flex items-center w-[20%] h-[100%] aspect-square p-2 bg-zinc-600 rounded-md">
					<img loading="lazy" src="/logo.webp" alt="GALAXY_LOGO" />
				</div>
				<div class="flex flex-col justify-around text-slate-200 h-[100%]">
					<h1>GALAXY RP</h1>
					<div class="flex items-center gap-2">
						<div :class="serverStatus ? 'text-green-800' : 'text-rose-700 text-2xl'">
							<v-icon name="fa-signal" scale="1.5"/>
						</div>
						<h2>{{ serverStatus ? "ONLINE" : "OFFLINE" }}</h2>
					</div>
				</div>
			</div>
			<div class="flex flex-col justify-around w-[80%] lg:w-[60%] gap-2 h-[100%] mr-4">
				<div class="flex justify-end items-center w-[100%] text-slate-200 gap-2">
					<h2>Játékosok</h2>
					<div class="relative flex items-center w-[100%]">
						<div class="absolute bg-zinc-600 w-[100%] p-2 rounded-md"></div>
						<div class="absolute bg-[#9A208C] p-2 rounded-md" :style="{ width: `${(playerCount / maxPlayerCount) * 100}%` }"></div>
					</div>
					<h2>{{ playerCount }}/{{ maxPlayerCount }}</h2>
				</div>
				<div class="flex justify-center lg:justify-end items-center text-[#9A208C] text-3xl">
					<template v-for="social in socials">
						<v-social :href="social.href" :aria-label="social.ariaLabel" #icon>
							<v-icon :name="social.icon" scale="1.5"/>
						</v-social>
					</template>
				</div>
			</div>
		</div>
</template>


<script lang="ts">
	import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
	import { socials } from "../../constants/socials";
	import { OhVueIcon, addIcons } from "oh-vue-icons";
	import { FaDiscord, FaTiktok, FaYoutube, FaTwitch, FaSignal } from "oh-vue-icons/icons";
	import Social from "../Social/Social.vue";

	addIcons(FaDiscord, FaTiktok, FaYoutube, FaTwitch, FaSignal);

	export default defineComponent({
		name: "InfoPanel",
		components:{
			"v-icon": OhVueIcon,
			"v-social": Social
		},
		data(){
			return {
				socials: ref(socials)
			}
		},
		setup(){
			const playerCount = ref<number>(0);
			const maxPlayerCount = ref<number>(0);
			const serverStatus = ref<boolean>(false);
			const intervalId = ref<number | undefined>();

			const fetchPlayerData = () => {
				fetch("https://play.galaxyrp.hu/dynamic.json", {
					headers:{
						"Access-Control-Allow-Origin": "*"
					},
					method: "GET"
				})
					.then((resp) => {
						if (!resp.ok){
							throw Error(`HTTP ERROR: ${resp.status}`);
						}

						return resp.json();
					})
					.then((resp) => {
						if (typeof resp.clients === "number"){
							playerCount.value = resp.clients;
						}else{
							playerCount.value = 0;
						}


						if (typeof resp.sv_maxclients === "number"){
							maxPlayerCount.value = resp.sv_maxclients;
						}else{
							maxPlayerCount.value = 0;
						}
					})
					.catch((err) => {
						playerCount.value = 0;
						maxPlayerCount.value = 0;
						console.error(err);
					});
			};

			onMounted(() => {
				fetchPlayerData();

				intervalId.value = setInterval(() => {
					fetchPlayerData();
				}, 0.5 * 60 * 1000);
			});

			onUnmounted(() => {
				clearInterval(intervalId.value);
			});


			return {
				playerCount,
				maxPlayerCount,
				serverStatus
			}
		}
	})
</script>