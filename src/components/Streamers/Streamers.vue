<template>
		<div class="flex flex-col justify-around text-slate-200 items-center w-full mt-10">
			<v-title label="Tartalomgyártóink" #icon>
				<v-icons name="fa-laptop-code"></v-icons>
			</v-title>
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 justify-items-center items-strecth w-full my-5">
				<template v-for="streamer in filterStreamerList">
					<v-card
					:name="streamer.name"
					:icon="streamer.icon"
					:description="streamer.description" />
				</template>

			</div>
				<div class="flex justify-center items-center w-[50%] mt-10">
					<v-button :label="expanded ? 'Összecsukás' : 'Kinyitás'" :expanded="expanded" @update:expanded="toggleExpanded" />
				</div>
			</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed } from 'vue';
	import { OhVueIcon, addIcons } from "oh-vue-icons";
	import { FaLaptopCode } from "oh-vue-icons/icons";
	import Title from "../Title/Title.vue";
	import { streamerList } from "../../constants/streamers";
	import Card from "./Card.vue";
	import Button from "./Button.vue";

	addIcons(FaLaptopCode);

	export default defineComponent({
		name: "Streamers",
		components: {
			"v-title": Title,
			"v-icons": OhVueIcon,
			"v-card": Card,
			"v-button": Button
		},
		data(){
			return {
				streamers: ref(streamerList)
			}
		},
		setup(){
			const streamerListRef = ref(streamerList);
			const expanded = ref<boolean>(false);

			const toggleExpanded = () => {
				expanded.value = !expanded.value;
			};

			const filterStreamerList = computed(() => {
				return expanded.value ? streamerListRef.value: streamerListRef.value.slice(0,3)
			});

			return {
				expanded,
				toggleExpanded,
				filterStreamerList
			}
		}

	})
</script>