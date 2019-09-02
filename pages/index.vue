<template>
  <div class="home-page">
    <Home />
  </div>
</template>

<script>

import Home from './Home.vue';
export default {

  head(){
    return{
      title:'Home'
    }          
  },
  components:{
    Home
  }
}
</script>

<style lang="scss">

  @font-face {
      font-family: 'Gotham-bold';
      src: url('../assets/fonts/Gotham-Bold.eot'); /* IE9 Compat Modes */
      src: url('../assets/fonts/Gotham-Bold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../assets/fonts/Gotham-Bold.woff') format('woff'), /* Pretty Modern Browsers */
          url('../assets/fonts/Gotham-Bold.ttf')  format('truetype'), /* Safari, Android, iOS */
          url('../assets/fonts/Gotham-Bold.svg#svgFontName') format('svg'); /* Legacy iOS */
    }

    @font-face {
      font-family: 'Gotham-Medium';
      src: url('../assets/fonts/Gotham-Medium.eot'); /* IE9 Compat Modes */
      src: url('../assets/fonts/Gotham-Medium.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../assets/fonts/Gotham-Medium.woff') format('woff'), /* Pretty Modern Browsers */
          url('../assets/fonts/Gotham-Medium.ttf')  format('truetype'), /* Safari, Android, iOS */
          url('../assets/fonts/Gotham-Medium.svg#svgFontName') format('svg'); /* Legacy iOS */
    }

    @font-face {
      font-family: 'GothamHTF-Book';
      src: url('../assets/fonts/GothamHTF-Book.eot'); /* IE9 Compat Modes */
      src: url('../assets/fonts/GothamHTF-Book.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../assets/fonts/GothamHTF-Book.woff') format('woff'), /* Pretty Modern Browsers */
          url('../assets/fonts/GothamHTF-Book.ttf')  format('truetype'), /* Safari, Android, iOS */
          url('../assets/fonts/GothamHTF-Book.svg#svgFontName') format('svg'); /* Legacy iOS */
    }

   * {
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-family: 'GothamHTF-Book';
  }
  body {
    color: #363636;
    font-family: 'GothamHTF-Book','Arimo','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
    background-color: #fff;
  }
  ul,li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  img{
    max-width: 100%;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .desktop-only{
    display: block;
  }
  .mob-only{
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .desktop-only{
      display: none;
    }
    .mob-only{
      display: block;
    }
  }
</style>
