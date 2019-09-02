<template>
    <carousel :per-page="4">
        <slide>
            <li class="home__feed">
                <a href="javascript:;"><img src="https://imgur.com/mgz7k69.jpg" alt=""></a>
            </li>
        </slide>
        <slide>
            <li class="home__feed">
                <a href="javascript:;"><img src="https://imgur.com/mgz7k69.jpg" alt=""></a>
            </li>
        </slide>
        <slide>
            <li class="home__feed">
                <a href="javascript:;"><img src="https://imgur.com/mgz7k69.jpg" alt=""></a>
            </li>
        </slide>
        <slide>
            <li class="home__feed">
                <a href="javascript:;"><img src="https://imgur.com/mgz7k69.jpg" alt=""></a>
            </li>
        </slide>
        <slide>
            <li class="home__feed">
                <a href="javascript:;"><img src="https://imgur.com/mgz7k69.jpg" alt=""></a>
            </li>
        </slide>
        <slide>
            <li class="home__feed">
                <a href="javascript:;"><img src="https://imgur.com/mgz7k69.jpg" alt=""></a>
            </li>
        </slide>
    </carousel>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    export default {
        components:{
            Carousel,
            Slide 
        }
    }
</script>