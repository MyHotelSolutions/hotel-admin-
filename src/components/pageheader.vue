<template>
    <div class="">
        <h1 class="text-xl font-black w-fit">{{ props.pagetitle }}</h1>
    </div>
</template>

<script setup>
const props =  defineProps({
    pagetitle : String  
})

</script>