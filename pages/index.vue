<!-- eslint-disable vue/no-multiple-template-root -->
<template>
	<header class="home_header">
		<h1>Galeria Konrada</h1>
	</header>
	<section class="home_item-gallery">
		<h2>Przedmioty</h2>
		<ul class="gallery">
			<li v-for="item in items" class="gallery_item"  :key="item.id">
				<NuxtLink class="" :to="`/przedmiot/{item.id}`">
					
					{{ item.name }}
				</NuxtLink>
			</li>
		</ul>
	</section>
</template>

<script setup>
const items = [
	{ id: 1, name: "niebieska łyżka" },
	{ id: 2, name: "żółta miska" },
];
</script>

<style scoped lang="scss">
.gallery {
	display: flex;
	gap: 16px;

	.gallery_item {
		display: block;
		min-width: 240px;
		min-height: 240px;
		border: 1px solid var(--primary);
		border-radius: 2px;
		padding: 12px;
	}
}
</style>
