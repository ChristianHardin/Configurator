<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
	} from "flowbite-svelte";
	import { DarkMode } from "flowbite-svelte";
	import logo from "$lib/assets/logo.png";
</script>

<Navbar>
	<NavBrand href="/">
		<img src={logo} class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span
			class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
			>Anco Configurator</span
		>
	</NavBrand>
	<DarkMode
		class="text-primary-500 dark:text-primary-600 border dark:border-gray-800"
	/>
</Navbar>
