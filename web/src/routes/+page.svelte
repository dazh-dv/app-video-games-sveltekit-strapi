<script lang="ts">
	import Pagination from '$lib/components/pagination.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Lista de Videojuegos</title>
</svelte:head>

<main class="flex flex-col items-center min-h-screen p-24 gap-4">
	{#each data.games as game}
		<a
			href="/"
			class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-[800px] h-[200px]"
		>
			<img
				class="object-cover w-[44%] h-full rounded-t-lg md:rounded-none md:rounded-s-lg"
				src={game.cover}
				alt={game.title}
			/>
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{game.title}
				</h5>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{@html game.description}
				</p>
			</div>
		</a>
	{/each}
	<Pagination pagination={data.pagination} />
</main>
