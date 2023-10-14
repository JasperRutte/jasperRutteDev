<template>
    <header>
        <h3>Hi, my name is</h3>
        <h1>Jasper Rutte</h1>
        <h2>And im a software developer</h2>
    </header>
    <main>
        <router-link @click="aboutExperienceLinks('About')" to="About">About me </router-link> |
        <router-link @click="aboutExperienceLinks('Experience')" to="Experience">Experiences </router-link> |
        <router-link @click="aboutExperienceLinks('Links')"  to="Links">Links</router-link>

        <router-view></router-view>
    </main>
</template>

<script setup>
    export default {
        data() {
            return{
                about: false,
                experience: false,
                links: false
            }
        },
        mounted() {
        },
        methods: {
            aboutExperienceLinks(view){
                if (view === "About"){
                    this.about = true
                    this.experience = false
                    this.links = false
                } else if (view === "Experience"){
                    this.about = false
                    this.experience = true
                    this.links = false
                } else if (view === "Links"){
                    this.about = false
                    this.experience = false
                    this.links = true
                } else {
                    console.log("error")
                }
            }
        }
    }
</script>


<style scoped>

</style>
