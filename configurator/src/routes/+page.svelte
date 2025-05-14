<script>
	import { Navbar, NavBrand, Button, Card } from "flowbite-svelte";
	import { DarkMode } from "flowbite-svelte";
	import {
		CirclePlusSolid,
		LockOpenSolid,
		LockSolid,
	} from "flowbite-svelte-icons";
	import logo from "$lib/assets/logo.png";

	let currentCategory = null;
	let editMode = false;
	let categories = [{ name: "item 01" }, { name: "item 02" }];
	let subcategories = [];

	function editClickHandler() {
		editMode = !editMode;
	}

	function addCategoryHandler() {
		console.log("Add Category Handler");
	}
</script>

<div class="h-screen m-0 flex flex-col">
	<Navbar>
		<NavBrand href="/">
			<img src={logo} class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
			<span
				class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
			>
				ANCO Configurator</span
			>
		</NavBrand>
		<div class="flex justify-center items-center gap-4">
			<!-- Edit Mode Selector -->
			{#if editMode}
				<div
					class="text-primary-500 dark:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-hidden rounded-lg text-sm p-2.5 border dark:border-gray-800"
					onclick={editClickHandler}
				>
					<LockOpenSolid />
				</div>
			{:else}
				<div
					class="text-primary-500 dark:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-hidden rounded-lg text-sm p-2.5 border dark:border-gray-800"
					onclick={editClickHandler}
				>
					<LockSolid />
				</div>
			{/if}

			<!-- Darkmode Selector -->
			<DarkMode
				class="text-primary-500 dark:text-primary-600 border dark:border-gray-800"
			/>
		</div>
	</Navbar>

	<div class="flex m-4 mt-0 flex-1 overflow-hidden gap-1">
		<!-- Sidebar -->
		<Card class="p-4 overflow-y-auto w-auto max-w-auto flex gap-1">
			{#each categories as item}
				<Button>{item.name}</Button>
			{/each}

			{#if editMode}
				<Button onclick={addCategoryHandler}>
					Add Category <CirclePlusSolid class="ms-2 h-5 w-5" />
				</Button>
			{/if}
		</Card>

		<!-- Content -->
		<Card class="flex-1 p-4 overflow-y-auto w-auto max-w-auto">
			<div></div>
		</Card>
	</div>
</div>
