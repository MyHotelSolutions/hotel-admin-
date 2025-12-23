<template>
    <div class="">
        <p>this is for room management</p>
        <p>{{ route.path }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

</script>