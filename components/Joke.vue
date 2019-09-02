<template>
    
    <li>
        <nuxt-link :to="'jokes/'+joke.id">{{joke.joke}}</nuxt-link>
    </li>
    
</template>

<script>
    export default {
        props:[
            'joke'
        ]
    }
</script>

<style scoped>
    li{
        padding: 1rem 10px;
        list-style:none;
        border: 1px solid #cccccc;
        margin-bottom:10px; 
    }
</style>