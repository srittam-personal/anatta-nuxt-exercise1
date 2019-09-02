<template>
    <div class="header">
        <div class="banner__stripe">
            <div class="banner__stripe-sec">
                <span class="banner__stripe-text">Free, fast shipping on all orders over $35!</span>
                <ul class="banner__stripe-links">
                    <li><a href="javascript:;" class="links first">Let us guide you</a></li>
                    <li><a href="javascript:;" class="links">Our blog</a></li>
                </ul>
            </div>
        </div>
        <div class="header__container">
            <div class="container header__section">
                <a href="javascript:;" class="action nav-toggle mob-only" v-on:click='isOpen = !isOpen'>
                        <span class="push-lines">Toggle Nav</span> 
                        <span class="push-lines"></span> 
                        <span class="push-lines"></span>
                </a>
                <div class="logo"><nuxt-link to='/'><img alt="logo" src="../assets/images/logo.png"></nuxt-link></div>

                <div class="header__menu" v-bind:class="[ isOpen === true ? 'active' : '' ]">
                    <ul class="header__links">
                        <li class="mob-only close" v-on:click='isOpen = !isOpen'>X</li>
                        <li>
                            <nuxt-link to='/skin' class="link-color">skin</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to='/body' class="link-color">body</nuxt-link>
                        </li>  
                        <li>
                            <nuxt-link to='/about' class="link-color">color</nuxt-link>
                        </li> 
                        <li>
                            <nuxt-link to='/about' class="link-color">hair</nuxt-link>
                        </li> 
                        <li>
                            <nuxt-link to='/about' class="link-color">favourites</nuxt-link>
                        </li>  
                        <li>
                            <nuxt-link to='/about' class="link-color">new</nuxt-link>
                        </li>  
                        <li>
                            <nuxt-link to='/about' class="link-color">gifts</nuxt-link>
                        </li>  
                        <li class="search">
                            <a href="javascript:;">search</a>
                        </li>             
                    </ul>
                </div>

                <div class="header__customer-action">
                    <ul class="links">
                        <li class="header__account"><a href="javascript:;">account</a></li>
                        <li class="header__cart"><a href="javascript:;" class="header__cart-link"><span class="cart-text">Cart</span><span class="cart-count">10</span></a></li>
                    </ul>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isOpen:false
            }
        }
    }
</script>

<style lang="scss" scoped>
/* ======= mixins ======== */
    @mixin flex {
      display: flex;
      -webkit-display:flex;
      -moz-display:flex;
      -ms-display:flex;
    }

    @mixin flex__child($flexVal) {
      flex : $flexVal;
    }

    .link-color{
        color: #5C4141;
        font-size: 14px;
        text-transform: capitalize;
    }
    .banner__stripe{
        background: #5C4141;
    }
    .banner__stripe-text{
        font-size: 14px;
        color:#fff;
        line-height: 36px;
    }
    .nav-toggle{
        width: 25px;
        height: 35px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 0;
        z-index: 14;
        padding: 2px 0 0;
       .push-lines{
            width: 18px;
            height: 2px;
            background: #535350;
            position: relative;
            margin: 0 0 5px;
            display: block;
        } 
    } 
    .banner__stripe-sec{
        display: flex;
        padding-left: 40px;
        .banner__stripe-links{
            margin-left: auto;
            order: 2;
            display: flex;
            .links{
                color:#fff;
                font-size: 14px;
                display: block;
                line-height: 36px;
                padding: 0 20px;
                &.first{
                    background: #C7BC9C;                    
                }
            }
        }
    }
    .header__container{
        padding: 12px 0;
        border-bottom: 1px solid #dfdfdf;
    }
    .header__section,.header__links,.header__customer-action .links{
        @include flex;
    }
    .header__section{
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        align-items: center;
    }
    .header__customer-action .links{
        justify-content: flex-end;
        -webkit-box-pack: end;
        align-items: center;
        >li{
            margin-left: 33px;
        }        
    }
    .header__links .search a,
    .header__customer-action .header__account,
    .header__customer-action .cart-text{        
        display: block;
        width: 20px;
        height: 20px;
        font-size: 0;
    }
    
    .header__links{
        justify-content: center;
        >li{
            padding: 0 26px;
        }
        .search{
            a{
                background: url('../assets/images/search.svg') no-repeat;
            }
        }
    }
    .header__customer-action{
        .header__account{
            background: url('../assets/images/account.svg') no-repeat;
        }
        .header__cart{    
            .header__cart-link{
                display: flex;
            }        
            .cart-text{
                background: url('../assets/images/cart.svg') no-repeat;
                margin-right: 10px;    
            }
            .cart-count{
                font-size:12px;
                padding-left:20px;
                width: 25px;
                border-radius:50%;
                background: #e4e7f7;
                padding: 6px 0; 
                text-align: center;
            }
        }
    }
    .header__section{                
        .header__menu{
            @include flex__child(3);
        }
        .logo,.header__customer-action{
            @include flex__child(1);
        }
        .link-color{
            font-family: 'Gotham-Medium';
        }
    }

@media only screen and (max-width: 768px) {
    .banner__stripe-sec{
        justify-content: center;
        padding: 0;
        .banner__stripe-links{
            display: none;
        }
    }
    .header__section {
        .header__menu{
            display: none;
            &.active{
                display: block;
                background-color: #ffffff;
                left: 0;
                overflow-x: hidden;
                padding-top: 60px;
                position: fixed;
                -webkit-transition: .5s;
                transition: .5s;
                width: 0;
                z-index: 1000;
                top: 0;
                width: 300px;
                height: 100%;
                display: block;
                padding: 10px;
                border-right: 1px solid #5C4141;
                .header__links{
                    display: block;
                    >li{
                        margin-bottom: 15px;
                    }
                    .close{
                        float: right;
                        margin-bottom: 20px;
                        cursor: pointer;
                        padding: 0;
                        &+li{
                            clear: both;
                        }
                    }
                }
            }
        }
        .logo{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            max-width: 93px;
        }
    }
    .header__customer-action .header__account{
        display: none;
    }    
}
</style>