<template>
	<div class="page_layout">
		<nav class="page_nav shrink-0">
			<NuxtLink to="/">Home</NuxtLink>
		</nav>
		<main class="page_main-content shrink-0">
			<slot />
		</main>
		<footer class="page_footer shrink-0">
			<span>copyright Turek</span>
		</footer>
	</div>
</template>

<script setup>
</script>

<style scoped>
.page_layout {
	display: flex;
	flex-direction: column;
	height: 100%;
}

.page_main-content {
	height: 100%;
}

.page_footer {
	margin-top: auto;
}
</style>
