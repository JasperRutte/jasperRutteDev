<script setup>
</script>

<template>
    <header>
        <h3>Hi, my name is</h3>
        <h1>Jasper Rutte</h1>
        <h2>And im a software developer</h2>
    </header>
    <main>
        <router-link to="About">About me </router-link> |
        <router-link to="Experience">Experiences </router-link> |
        <router-link to="Links">Links</router-link>

        <router-view></router-view>
    </main>
</template>

<style scoped>

</style>
