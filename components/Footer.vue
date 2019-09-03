<template>
    <div class="footer-section">
        <div class="footer-container">
            <div class="footer__sub-details">
                <div class="footer__logo desktop-only">
                    <img src="https://i.imgur.com/goTi9uK.png" alt="">
                    <span class="footer__company-title">Personalized guidance for non-toxic beauty that works</span>
                </div>
                <div class="footer__emailsubscription">
                    <span class="title">Sign Up for Updates</span>
                    <form class="footer__newsletter">
                        <input type="text" name="" placeholder="Get Updates" class="textbox">
                        <button class="join-us">Subscribe</button>
                    </form>
                    <ul class="footer__social-links desktop-only">
                        <li class="fb"><a href=""></a></li>
                        <li class="twit"><a href=""></a></li>
                        <li class="pint"><a href=""></a></li>
                        <li class="insta"><a href=""></a></li>
                    </ul>
                </div>
            </div>

            <div class="footer__links desktop-only" v-for="footerLink in footerLinksData" :key='footerLink.class' :class='footerLink.class'>
                <h2 class="footer__title">{{ footerLink.title }}</h2>
                <ul class="links" v-for="link in footerLink.links" :key="link">
                    <li class="link"><a href="javascript:;">{{ link }}</a></li>
                </ul>
            </div>

            <div class="mobile-footer mob-only">
                <FooterLink 
                    v-for="(footerLink,index) in footerLinksData" 
                    :key='index' 
                    :classname="footerLink.class" 
                    :index ='index' 
                    @change-accordion="(newOpen) => openedIndex = newOpen" 
                    :openedIndex="openedIndex"
                    :footerLinksData="footerLinksData">
                </FooterLink>
            </div>
            
            <div class="footer__logo mob-only">
                <img src="https://i.imgur.com/goTi9uK.png" alt="">
                <span class="footer__company-title">Personalized guidance for non-toxic beauty that works</span>
            </div>
            <ul class="footer__social-links mob-only">
                <li class="fb"><a href=""></a></li>
                <li class="twit"><a href=""></a></li>
                <li class="pint"><a href=""></a></li>
                <li class="insta"><a href=""></a></li>
            </ul>
            <ul class="footer__bottom-links mob-only">
                <li class="links">
                    <a href="javascript:;"><span class="bar">|</span>Site Map<span class="bar">|</span></a>
                </li>
                <li class="links">
                    <a href="javascript:;">Terms<span class="bar">|</span></a>
                </li>
                <li class="links">
                    <a href="javascript:;">Privacy Policy</a>
                </li>
            </ul>
        </div>
        <div class="footer__bottom">
            <div class="footer__bottom-container">
                <div class="footer__copyrite">
                    © 2018 Ayla Phone:<a href="tel:415-520-7320">415-520-7320</a>. Email: <a href = "mailto: help@aylabeauty.com">help@aylabeauty.com</a>. Store: 1825 Bush St, SF CA 94109
                </div>
                <ul class="footer__bottom-links desktop-only">
                    <li class="links">
                        <a href="javascript:;"><span class="bar">|</span>Site Map<span class="bar">|</span></a>
                    </li>
                    <li class="links">
                        <a href="javascript:;">Terms<span class="bar">|</span></a>
                    </li>
                    <li class="links">
                        <a href="javascript:;">Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import FooterLink from './footer/FooetLinkOne.vue';
    export default {
        data(){
            return{
                footerLinksData:[
                    { title:'Shop',links:['Skin','Body','Color','Hair','Gifts'],class:'one' },
                    { title:'Explor',links:['Brand Stories','Blog','SF Studio Events','Gratitude & referral programs'],class:'two' },
                    { title:'Support',links:['FAQ’S','Consulatation'],class:'three' },
                    { title:'Company',links:['About us','Our Story','Press','Our Products','Affiliates'],class:'four' }
                ],
                openedIndex:false
            }
        },
        components:{
            FooterLink
        }
    }
</script>

<style lang="scss">
    .footer-section{
        background: #5C4141;
        .footer__sub-details{
            width: 39.5%;
            margin-right:2%; 
        }
        .footer__logo{
            margin-bottom: 15%;
        }
        .footer__links{
            padding-top: 3.5%;
            .footer__title{
                font-size:17px;
                color:#fff; 
                padding-bottom: 27px;
            }
            .link a{
                color: #fff;
                font-size: 14px;
                padding-bottom: 13px;
                display:inline-block;
            }
            &.one{
                width: 11.5%;
                margin-right:2%; 
            }
            &.two{
                width: 17%;
                margin-right:2%; 
            }
            &.three{
                width: 15.5%;
                margin-right:2%; 
            }
            &.four{
                width: 8%;
            }
        }
        .footer-container{
            max-width: 1200px;
            margin: 0 auto;
            padding: 4.5% 20px;
            display: flex;
            flex-wrap: wrap;
        }
        .footer__company-title{
            display: block;
            font-size: 12px;
            color: #ffffff;
            margin-top: 7px;
            letter-spacing: -0.9px;
        }
        .footer__emailsubscription{
            .title{
                font-size: 14px;
                color: #ffffff;
                padding-bottom: 20px;
                display: block;
            }
            .footer__newsletter{
                display: flex;
                flex-wrap: wrap;
                max-width: 353px;
                .textbox{
                    line-height: 36px;
                    font-size: 14px;
                    color: #ffffff;
                    width: 69.5%;
                    background: transparent;
                    border: 1px solid;
                    border-right: 0;
                    padding-left:10px;
                    &::-webkit-input-placeholder { 
                        color: #ffffff;
                    }

                    &:-ms-input-placeholder { 
                        color: #ffffff;
                    }

                    &::placeholder {
                        color: #ffffff;
                    } 
                }
                .join-us{
                    width: 30%;
                    background: #C9BE9E;
                    border: 0;
                    color:#5C4141;
                    font-size: 14px;
                }
            }
        }
        .footer__social-links{
            margin: 20px 0;
            li{
                display: inline-block;
                margin: 10px;
                a{
                    display: block;
                    width: 25px;
                    height: 25px;
                }
                &.fb{
                    a{
                        background: url(../assets/images/socials/Facebook.svg) no-repeat;
                    }                    
                }
                &.twit{
                    a{
                        background: url(../assets/images/socials/twit.svg) no-repeat;
                    }                    
                }
                &.pint{
                    a{
                        background: url(../assets/images/socials/pint.svg) no-repeat;
                    }                    
                }
                &.insta{
                    a{
                        background: url(../assets/images/socials/insta.svg) no-repeat;
                    }                    
                }
            }
        }
    }
    .footer__copyrite,.footer__bottom-links{
        color: #fff;
        font-size: 14px;
        a{
            color: #fff;
            font-size: 14px;
        }
    }
    .footer__bottom-container{
        display: flex;
        justify-content: center;
        padding: 20px 0;
        background: #4c3737; 
        align-items: center;            
    }
    ul.footer__bottom-links{
        display: flex;
        justify-content: center;
        &.mob-only{
            display: none;
        }
    }
     .bar{
        padding: 0 10px;
    }  
    @media only screen and (max-width: 768px) {
        .footer-section{
            .footer-container{
                display: block;
                .footer__sub-details,.footer__links{
                    width: 100%;
                }
            }  
            .footer__emailsubscription .title{
                text-align: center;
            }  
            .footer__social-links.mob-only li{
                width: 23%;
                margin: 0;
                text-align: center;
                a{
                    margin: 0 auto;
                }
            } 
            .footer__logo.mob-only{
                text-align: center;
                margin-top: 30px;
            }
            .footer__emailsubscription .footer__newsletter{
                margin: 0 auto;
            }
        } 
        .footer__social-links.mob-only {
            text-align: center;
        } 
        .footer__bottom-container .footer__bottom-links{
            &.desktop-only{
                display: none;
            }
            &.mob-only{
                display: block;
            }
        }
        .mobile-footer{
            padding-top: 30px;
            .footer__links{
                border-bottom:1px solid ; 
                padding: 0;
                &.active{
                    padding-bottom:27px; 
                    .footer__title{
                        &:after{
                            content: "-";
                        }
                    }
                }
            }
            .footer__title{
                position: relative;
                padding: 27px 0;
                &:after{
                    content: "+";
                    color: #fff;
                    position: absolute;
                    right: 0;
                    top:0;
                    font-size: 25px;
                    line-height: 70px;
                }
            }
        } 
        ul.footer__bottom-links{
            &.mob-only{
                display: flex;
            }
        }             
    }
    .footer__copyrite{
        text-align: center;
        padding: 10px 0;
        line-height: 20px;
    }
    
</style>