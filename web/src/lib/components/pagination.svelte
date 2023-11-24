<script lang="ts">
	export let pagination: {
		page: number;
		pageSize: number;
		pageCount: number;
		total: number;
	};

	$: firstPage = pagination.page === 1;
	$: lastPage = pagination.page === pagination.pageCount;
</script>

<div class="flex flex-col items-center mt-5">
	<span class="text-sm text-gray-700 dark:text-gray-400">
		Mostrando <span class="font-semibold text-gray-900 dark:text-white">{pagination.pageSize}</span>
		a
		<span class="font-semibold text-gray-900 dark:text-white">{pagination.pageSize}</span>
		de <span class="font-semibold text-gray-900 dark:text-white">{pagination.total}</span> videojuegos
	</span>
	<div class="inline-flex mt-2 xs:mt-0">
		<a
			href={`/?page=${firstPage ? '1' : pagination.page - 1}`}
			class={`flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
				firstPage ? 'opacity-30' : 'opacity-100'
			}`}
		>
			Prev
		</a>
		<a
			href={`/?page=${lastPage ? pagination.pageCount : pagination.page + 1}`}
			class={`flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
				lastPage ? 'opacity-30' : 'opacity-100'
			}`}
		>
			Next
		</a>
	</div>
</div>
