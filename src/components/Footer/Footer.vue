<template>
		<div class="flex flex-col justify-center items-center bg-black/50 min-h-[200px] h-[150px] mt-8 text-[#9A208C]">
			<div class="flex justify-around items-center">
				<template v-for="social in socialsList">
					<v-social class="social" :href="social.href" :aria-label="social.ariaLabel" #icon>
						<v-icon :name="social.icon" scale="1.5"/>
					</v-social>
				</template>
			</div>
			<div class="flex justify-around items-center">
				<a class="text-lg m-3 cursor-pointer" href="/">ÁSZF</a>
				<a class="text-lg cursor-pointer" href="/">Adatvédelmi tájékoztató</a>
			</div>

			<div class="flex justify-center items-center w-full">
				<div class="relative aspect-video w-[2%]">
					<img src="/logo.webp" alt="FOOTER_LOGO"/>
				</div>
				<h3 class="text-md font-medium italic mx-2">Galaxy Roleplay</h3>
				<h3 class="text-md font-medium mx-2">Designed by: damon2114</h3>
			</div>

		</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';
	import { OhVueIcon, addIcons } from "oh-vue-icons";
	import { FaDiscord, FaTiktok, FaYoutube, FaTwitch } from "oh-vue-icons/icons";
	import Social from "../Social/Social.vue";
	import { socials } from "../../constants/socials";
	import type { Social as SocialListItem } from "../../types/types";

	addIcons(FaDiscord, FaTiktok, FaYoutube, FaTwitch);

	export default defineComponent({
		name: "Footer",
		components: {
			"v-social": Social,
			"v-icon": OhVueIcon
		},
		data(){
			return {
				socialsList: ref<SocialListItem[]>(socials)
			}
		},
		setup(){}
	})
</script>

<style lang="scss" scoped>
	.social{
		border-radius: 50%;
		border: 1px solid #9A208C;
		padding: 0.5rem;
		gap: 0.2rem;
	}
</style>