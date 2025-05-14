<script>
	import { Navbar, NavBrand, Button, Card } from "flowbite-svelte";
	import { DarkMode } from "flowbite-svelte";
	import logo from "$lib/assets/logo.png";

	let subitems = [];
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
			<h1>test</h1>
			<DarkMode
				class="text-primary-500 dark:text-primary-600 border dark:border-gray-800"
			/>
		</div>
	</Navbar>

	<div class="flex m-4 mt-0 flex-1 overflow-hidden gap-1">
		<!-- Sidebar -->
		<Card class="p-4 overflow-y-auto w-auto max-w-auto">
			<div></div>
		</Card>

		<!-- Content -->
		<Card class="flex-1 p-4 overflow-y-auto w-auto max-w-auto">
			{#if subitems.length === 0}
				<Card class="p-4 sm:p-6 md:p-8">
					<h5>You have no Categories.</h5>
					<Button>Create one now.</Button>
				</Card>
			{/if}
		</Card>
	</div>
</div>
