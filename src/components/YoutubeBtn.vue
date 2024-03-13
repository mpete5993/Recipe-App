<template>
	<a 
	:href="href" 
	target="_blank" 
	class="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500" >  <slot></slot>  </a>
</template>

<script setup>
	
	const props = defineProps({
		href: String
	})

</script>