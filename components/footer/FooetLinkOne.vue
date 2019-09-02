<template>
    <div class="footer__links" :class="[classname,index === openedIndex ? 'active' : '']">
        <h2 class="footer__title" v-on:click="toggle" v-text="footerLinksData[index].title" />
            <transition name="slide">
                <ul class="links" v-show="index === openedIndex" >
                    <li v-for="link in footerLinksData[index].links" :key='link.title' class="link">
                        <a href="javascript:void(0)">{{link}}</a>
                    </li>
                </ul>
            </transition>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                show: false
            }
        },
        props:[
            'classname',
            'index',
            'openedIndex',
            'footerLinksData'
        ],
        methods: {
            toggle() {
                const value = this.index === this.openedIndex ? false : this.index;
                this.$emit('change-accordion', value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .slide-enter-active {
        -moz-transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }

    .slide-leave-active {
        -moz-transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

    .slide-enter-to, .slide-leave {
        max-height: 100px;
        overflow: hidden;
    }

    .slide-enter, .slide-leave-to {
        overflow: hidden;
        max-height: 0;
    }
</style>