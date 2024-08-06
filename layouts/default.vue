<template>
	<div class="page_layout">
		<nav class="page_main-nav shrink-0">
			<NuxtLink class="main-nav_link" to="/">GK</NuxtLink>
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
	background-color: var(--bg_light);
}

.page_main-content {
	padding-top: 56px;
	height: 100%;
}

.page_main-nav {
	position: fixed;
	display: flex;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	background-color: var(--primary);
}

.main-nav_link {
	color: #FFFFFF;
	text-decoration: none;
	padding: 8px 12px;
}

.page_footer {
	margin-top: auto;
}
</style>
