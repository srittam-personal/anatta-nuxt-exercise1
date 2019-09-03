<template>
    <div class="home-container">

        <div class="home__banner">
            <div class="banner__img-cont">
                <picture>
                    <source media=" (min-width: 769px)" data-aspectratio="1600/600" srcset="https://imgur.com/WA6o9UP.jpg">
                    <source media="(min-width: 1px)" data-aspectratio="640/250" srcset="https://imgur.com/U6Hr0lm.jpg">
                    <img alt="banner" src="https://imgur.com/WA6o9UP.jpg">
                </picture>
                <h1 class="banner__header mob-only">Lorem ipsum dolor sit amet</h1>
            </div>
            <div class="banner__content-section">
                <h1 class="banner__header desktop-only">Lorem ipsum dolor sit amet</h1>
                <p class="banner__content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <ul class="banner__actions">
                    <li class="action"><a href="javascript:;">Shop Products</a></li>
                    <li class="action"><a href="javascript:;">Consult our Experts</a></li>
                    <li class="action"><a href="javascript:;">Come , Meet Us</a></li>
                </ul>
            </div>
        </div>

        <div class="home__branding">
            <div class="container">
                <p class="title">As seen in</p>
                <ul class="brand__listing">
                    <li class="brand new-york-times">
                        <img src="../assets/images/newyork_times.png" alt="">
                    </li>
                    <li class="brand goop">
                        <img src="../assets/images/goop.png" alt="">
                    </li>
                    <li class="brand wallpaper">
                        <img src="../assets/images/wallpaper.png" alt="">
                    </li>
                    <li class="brand allur">
                        <img src="../assets/images/allur.png" alt="">
                    </li>
                </ul>
            </div>
        </div>

        <div class="home__networthy">
            <div class="home__networthy-container">
                <div class="networthy__header">
                    <h2 class="title">What’s <span>Noteworthy</span></h2>
                    <p class="content">Specially crafted for you</p>
                </div>
                <ul class="networthy-list desktop-only">
                    <li class="networthy-section">
                        <img src="https://imgur.com/DJxkF8w.jpg" alt="new">
                        <span class="title">New</span>
                    </li>
                    <li class="networthy-section">
                        <img src="https://imgur.com/t0rbyju.jpg" alt="Staff Picks">
                        <span class="title">Staff Picks</span>
                    </li>
                    <li class="networthy-section">
                        <img src="https://imgur.com/SOYo8e3.jpg" alt="Best Sellers">
                        <span class="title">Best Sellers</span>
                    </li>
                </ul>
                <ul class="networthy-list-mob">
                    <carousel v-if="carouselLoaded && mobView" :paginationEnabled="false" :navigationEnabled="true" :per-page="1">
                        <slide>
                            <li class="networthy-section">
                                <img src="https://imgur.com/DJxkF8w.jpg" alt="new">
                                <span class="title">New</span>
                            </li>
                        </slide>
                        <slide>
                            <li class="networthy-section">
                                <img src="https://imgur.com/t0rbyju.jpg" alt="Staff Picks">
                                <span class="title">Staff Picks</span>
                            </li>
                        </slide>
                        <slide>
                            <li class="networthy-section">
                                <img src="https://imgur.com/SOYo8e3.jpg" alt="Best Sellers">
                                <span class="title">Best Sellers</span>
                            </li>
                        </slide>
                    </carousel>
                </ul>
            </div>            
        </div>

        <div class="myhavtorn-container">
            <div class="myhavtorn__banner">
                <div class="myhavtorn__banner-img">
                    <h2 class="title mob-only">Featured Brand</h2>
                    <img src="https://imgur.com/JfDvfkr.jpg" alt="">
                </div>
                <div class="myhavtorn__banner-content">
                    <h2 class="title desktop-only">Featured Brand</h2>
                    <span class="small-desc">MyHavtorn</span>
                    <p class="long-desc">MyHavtorn is a small company from Sweden's Bollebygd Valley that has sustainably grown and 
                        harvested its own sea buckthorn for the past 100 years. To avoid irritating preservatives, MyHavtorn freshly makes 
                        their sea buckthorn oil just for us. 
                        Their vitamin- and EFA-rich products work wonders on sensitive skin & rosacea.</p>
                </div>
            </div>

            <div class="myhavtorn__products">
                <span class="title">Myhavtron Products </span>
                <ul class="prd-container desktop-only">
                    <li class="product" v-for="count in 4" :key="count">
                        <img src="https://imgur.com/B3hG1xc.jpg" alt="">
                        <span class="prd-name">MyHavtorn Organic Essence</span>
                    </li>
                </ul>
                <ul class="prd-container mob-only">
                    <carousel v-if="carouselLoaded && mobView" :paginationEnabled="false" :navigationEnabled="true" :per-page="1">
                        <slide v-for="count in 4" :key="count">
                            <li class="product">
                                <img src="https://imgur.com/B3hG1xc.jpg" alt="">
                                <span class="prd-name">MyHavtorn Organic Essence</span>
                            </li>
                        </slide>
                    </carousel>
                </ul>
                <ul class="myhavtorn__actions">
                    <li class="primary"><button>See All Myhavtron products</button></li>
                    <li class="secondary"><button>See All Brands</button></li>
                </ul>
            </div>
        </div>

        <div class="home__networthy home__exploremore">
            <div class="home__networthy-container">
                <div class="networthy__header">
                    <h2 class="title">Explore More</span></h2>
                    <p class="content">Lorem ipsum dolor sit amet</p>
                </div>
                <ul class="networthy-list">
                    <li class="networthy-section">
                        <img src="https://imgur.com/DJxkF8w.jpg" alt="new">
                        <span class="title">Skin</span>
                    </li>
                    <li class="networthy-section">
                        <img src="https://imgur.com/t0rbyju.jpg" alt="Staff Picks">
                        <span class="title">Hair</span>
                    </li>
                    <li class="networthy-section">
                        <img src="https://imgur.com/SOYo8e3.jpg" alt="Best Sellers">
                        <span class="title">Color</span>
                    </li>
                </ul>
                <ul class="networthy-list-mob">
                    <carousel v-if="carouselLoaded && mobView" :paginationEnabled="false" :navigationEnabled="true" :per-page="1">
                        <slide>
                            <li class="networthy-section">
                                <img src="https://imgur.com/DJxkF8w.jpg" alt="new">
                                <span class="title">New</span>
                            </li>
                        </slide>
                        <slide>
                            <li class="networthy-section">
                                <img src="https://imgur.com/t0rbyju.jpg" alt="Staff Picks">
                                <span class="title">Staff Picks</span>
                            </li>
                        </slide>
                        <slide>
                            <li class="networthy-section">
                                <img src="https://imgur.com/SOYo8e3.jpg" alt="Best Sellers">
                                <span class="title">Best Sellers</span>
                            </li>
                        </slide>
                    </carousel>
                </ul>
            </div>            
        </div>

        <div class="myhavtorn-container home__aboutAyla">
            <div class="myhavtorn__banner">
                <div class="myhavtorn__banner-img">
                    <h2 class="title mob-only">About Ayla</h2>
                    <img src="https://imgur.com/mGhLmeW.jpg" alt="">
                </div>
                <div class="myhavtorn__banner-content">
                    <h2 class="title desktop-only">About Ayla</h2>
                    <p class="long-desc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p class="long-desc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="javascript:;" class="home__aboutAyla-action">Know More</a>
                </div>
            </div>
        </div>

        <div class="home__trending-products">
            <ul class="home__trending-list">
                <carousel v-if="carouselLoaded" :navigationEnabled="true" :per-page="1">
                    <slide v-for="(count,index) in customCounter" :key="index">
                        <li class="home__trending-product">
                            <div class="prd-details">
                                <p class=prd-description>“Awesome. It already healed a red pimple scar on my chin”</p>
                                <span class="author name">Sarita</span>
                            </div>
                            <div class="trending__prd-img">
                                <img src="https://imgur.com/ub3mLyY.jpg" alt="">
                            </div>
                        </li>
                    </slide>
                </carousel>
            </ul>
        </div>

        <div class="home__blogs">
            <div class="home__blog-content">
                <h2 class="blog__title">Our Latest Blogs</h2>
                <ul class="home__blog-list">
                    <li class="home-blog">
                        <img src="https://imgur.com/PEe1W5A.jpg" alt="">
                        <span class="blog-title">Skincare Concerns</span>
                        <span class="blog-content">Kristina Holey & Marie Veronique On Perioral Dermatitis</span>
                        <a href="javascript:;" class="blog-action">Read More</a>
                    </li>
                    <li class="home-blog">
                        <img src="https://imgur.com/O9cYVwR.jpg" alt="">
                        <span class="blog-title">Inside Our Brands</span>
                        <span class="blog-content">The Story Behind Foot Therapy</span>
                        <a href="javascript:;" class="blog-action">Read More</a>
                    </li>
                </ul>
                <button class="home__blog-action">See All Blog Posts</button>
            </div>
        </div>

        <div class="home__instafeed">
            <h2 class="home__feed-title">Our Insta Feed</h2>
            <ul class="home__feed-list">
                <carousel v-if="carouselLoaded" :paginationEnabled="false" :navigationEnabled="true" :per-page-custom="[[320, 1],[768, 2], [1024, 4]]">
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
            </ul>
        </div>

    </div>
</template>

<script>
    
    export default {
        data(){
            return{
                carouselLoaded:false,
                mobView:false,
                customCounter : 5
            }
        },
        mounted(){
            this.carouselLoaded = true;
            window.addEventListener('resize', this.resizeDebounce(this.resizeOptimize,200));
            if(window.innerWidth < 768){ this.mobView = true }
        },
        methods:{
            resizeDebounce(fn,delay){
                let timeOut;
                return function(){
                    clearTimeout(timeOut);
                    timeOut = setTimeout(fn,delay); 
                }            
            },
            
            resizeOptimize(){
                const windowWidth = window.innerWidth;

                if(windowWidth < 768){
                    this.mobView = true;
                }else{
                    this.mobView = false;
                }
            }
        }
       
    }
</script>

<style lang="scss" scoped>
    .banner__header{
        font-family: 'GothamHTF-Book';
        font-size: 60px;
        font-weight: normal;
        color: #5C4141;
        max-width: 514px;
        width: 100%;
        line-height: 70px;
        margin-bottom: 32px;
    }
    .banner__content-section{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        max-width: 995px;
        width: 100%;
    }
    .banner__content{
        font-size: 17px;
        color: #5C4141;
        max-width: 405px;
        width: 100%;
        line-height: 25px;
        margin-bottom: 10.8%;
    }
    .home__banner{
        position: relative;
    }
    .banner__actions{
        display: flex;
        li{
            max-width: 248px;
            width: 100%;
            background: #57814F;
            flex:0 0 auto;
            text-align: center;  
            margin-right:12.5%;   
            background: #57814F url('../assets/images/right-arrow.svg') no-repeat;
            background-position:91% center;       
            a{
                display: inline-block;
                color:#ffffff;
                font-size: 14px;
                padding: 18px 0;
            }
        }
    }
    .home__branding{
        border-bottom: 1px solid #dfdfdf;
        padding: 53px 0 45px 0;
        .container{
            max-width: 1035px;
        }
        .title{
            font-size: 24px;
            color:#5C4141;
            text-align: center;
        }
        .brand__listing{
            display: flex;
            align-items: center;
            padding-top: 20px;
            .brand{
                flex: 0 0 auto;
                margin-right:13%;
                &:last-child{
                    margin-right:0; 
                }
            }
        }
    }
    .home__networthy-container{
        display: flex;
        max-width: 1265px;
        width: 100%;
        margin: 0 auto;
        flex-wrap: wrap;
        padding: 6% 0;
        .networthy-list{
            display: flex;
            flex: 3;
            .title{
                display: block;
                text-align: center;
                padding-top: 19px;
                font-size: 24px;
                color: #5C4141;
            }
            .networthy-section{
                width: 27.3%;
                margin-right: 8%;  
                &:last-child{
                    margin-right:0; 
                } 
            }
        }
        .networthy__header{
            flex: 1;
            margin-right: 3%;
            padding-top: 3%;
            .title{
                font-size: 42px;
                font-family: 'GothamHTF-Book';
                color: #5C4141;
                line-height:47px;
                margin-bottom: 13%;
                span{
                    display: block;
                }
            }
            .content{
                color: #5C4141;
                font-size: 14px;
            }
        }
    }
    .myhavtorn-container{
        background: #F5F5F9;
        &.home__aboutAyla{
            background: #5C4141;
            .myhavtorn__banner .myhavtorn__banner-content{
                .title,.long-desc{
                    color: #fff;
                }
                .long-desc{
                    padding-bottom: 20px;
                }
                .home__aboutAyla-action{
                    background: #C9BE9E;
                    max-width: 137px;
                    width: 100%;
                    color: #5C4141;
                    line-height: 36px;
                    display: block;
                    font-size: 14px;
                    text-align: center;
                    margin-top: 17%;
                }
            }
        }
    }
    .myhavtorn__banner{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .myhavtorn__banner-img{
            width: 50%;
            .title{
                color: #5C4141;
                font-size: 29px;
                font-weight: normal;
                padding-bottom: 30px;
                text-align: center;
                padding: 20px 0;
            }
        }
        .myhavtorn__banner-content{
            width: 50%;
            padding: 0 8%;
            .title{
                color: #5C4141;
                font-size: 42px;
                font-weight: normal;
                padding-bottom: 30px;
            }
            .small-desc{
                color: #5C4141;
                font-size: 29px;
                display: block;
                border-bottom: 1px solid #5C4141;
                padding-bottom: 20px;
                margin-bottom: 25px; 
                max-width: 405px;   
            }
            .long-desc{
                color: #5C4141;
                font-size: 14px;
                line-height:22px;
                max-width: 405px;   
            }
        }
    }
    .myhavtorn__products{
        max-width: 1085px;
        padding: 0 20px;
        margin: 4.3% auto 0 auto;
        .title{
            font-size: 24px;
            color: #5C4141;
            padding-bottom: 4%;
            display: block;
        }
        .prd-container{
            display: flex;
            align-items: center;
            flex-wrap: wrap;        
            .product{
                width: 18.4%;
                margin-right:8.8%;
                &:last-child{
                    margin-right:0;
                }
                .prd-name{
                    font-size: 14px;
                    color: #5C4141;
                    text-align: center;
                    display: block;
                    padding: 16px;
                    line-height: 18px;
                }
            }
        }
        .myhavtorn__actions{
            margin-top: 4%;
            text-align: center;
            padding-bottom: 6%;
            .primary{
                display: inline-block;
                max-width: 221px;
                width: 100%;
                margin: 0 15px;   
                button{
                    background: #C9BE9E;
                    border: 0;
                    text-align: center;
                    color: #5C4141;
                    font-size: 14px;
                    width: 100%;
                    line-height: 34px;
                }               
            }
            .secondary{
                display: inline-block;
                margin: 0 15px;                
                button{
                   color:#57814F;
                    border: 0;
                    border-bottom: 1px solid #57814F;
                    font-size: 14px; 
                    background: transparent;
                    padding: 0;
                    line-height: 27px;
                }                
            }
        } 
    }

    .home__trending-products{
        max-width: 1118px;
        margin: 0 auto;
        width: 100%;
        padding: 9% 0;
        .home__trending-product{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .prd-details,.trending__prd-img{
                width: 50%;
            }
            .trending__prd-img{
                text-align:center;
            }
            .prd-details{
                max-width: 437px;                
            }
            .prd-description{
                font-size: 29px;
                color: #5C4141;
                margin-bottom: 13%;
            }
            .author{
                font-size: 26px;
                color: #5C4141;
            }
        }
    }

    .home__blogs{
        background: #F5F5F9;
        .blog__title{
            font-size: 42px;
            color:#5C4141;
            font-weight: normal;
            text-align: center;
            padding-bottom: 4%;
        }
        .blog-title{
            font-size: 14px;
            color:#5C4141;
            display: block;
            padding: 27px 0 13px 0;
        }
        .blog-content{
            font-size:24px; 
            color:#5C4141;
            display: block;
            line-height: 27px;
            min-height: 54px;
        }
        .blog-action{
            font-size: 14px;
            color: #57814F;
            line-height: 24px;
            border-bottom:1px solid;                    
            display: inline-block; 
            margin-top: 24px;
        }
        .home__blog-action{
            background: #C9BE9E;
            max-width: 221px;
            width: 100%;
            color: #5C4141;
            line-height: 34px;
            display: block;
            font-size: 14px;
            text-align: center;
            border: 0;
            margin: 5.5% auto 0 auto;
        }
        .home__blog-list{
            display: flex;
            flex-wrap: wrap;
            .home-blog{
                width: 49%;
                &:first-child{
                    margin-right: 2%;
                }
                .blog-title{
                    
                }
            }
        }
        .home__blog-content{
            max-width: 1260px;
            margin: 0 auto;
            padding: 5.3% 0;
        }
    }

    .home__instafeed{
        padding: 3% 0;
        .home__feed-title{
            font-size: 42px;
            color: #5C4141;
            font-weight: normal;
            text-align: center;
            padding-bottom: 4.3%;
        }
    }

    .home__feed-list{
        max-width: 1258px;
        margin: 0 auto;
    }

    .home__feed-list{
        &::v-deep .VueCarousel {
            .VueCarousel-slide{
                padding: 20px;
            }  
        }
    }

    .home__feed-list,.home__trending-list,.networthy-list-mob,.prd-container{
        &::v-deep .VueCarousel {
            .VueCarousel-navigation-button{
                font-size: 0;
                height: 38px;
                width: 20px;
                &.VueCarousel-navigation-prev{
                    background: url("../assets/images/carousel-left-arrow.svg") no-repeat;
                    left: -14px;                    
                }
                &.VueCarousel-navigation-next{
                    background: url("../assets/images/carousel-right-arrow.svg") no-repeat;
                }
            }
            .VueCarousel-dot{
                background-color: transparent !important;
                border:1px solid #5C4141 !important;
                padding: 0 !important;
                margin: 5px;
                &.VueCarousel-dot--active{
                    background-color: #5C4141 !important;
                }
            }   
        }
    }    

    @media only screen and (max-width: 768px) {
        .myhavtorn__products .prd-container{
            display: block;
        }
        .home__networthy-container .networthy-list,.myhavtorn__products .prd-container.desktop-only{
            display: none;
        }
        .myhavtorn__products{
            text-align: center;
            .prd-container.mob-only{
                .product{
                    width: 100%;
                }
            }
        } 
        .myhavtorn__banner .myhavtorn__banner-content{
            .small-desc{
                padding-top: 20px;
                text-align: center;
                margin: 0 auto;
            }
            .long-desc{
                text-align: center;
                margin: 0 auto;
                padding-top:20px; 
            }
        } 
        .home__aboutAyla {
            .myhavtorn__banner-content{
                padding: 20px;
                .long-desc{
                    text-align: left;
                }
            }
            .myhavtorn__banner .myhavtorn__banner-img .title{
                color: #fff;
            }
            .home__aboutAyla-action{
                max-width: 100%;
            }
        }
        .home__blogs{
            .blog__title{
                font-size: 29px;
            }
            .home__blog-list .home-blog{
                width: 100%;
                text-align: center;
                margin-bottom: 30px;
            }
        } 
        .home__trending-products .home__trending-product{
            padding: 20px;
            text-align: center;
            .prd-details{
                width: 100%;
                max-width: 100%;
                order: 2;
            }
            .trending__prd-img{
                width: 100%;
                max-width: 100%;
                order: 1;
            }
        }
        .networthy-list-mob{
            padding: 20px;
            text-align: center;
            .title{
                display: block;
            }
        }
        .home__instafeed{
            .home__feed-title{
                font-size: 29px;
                padding: 20px 0;
            }
        } 
        .myhavtorn__banner {
            .myhavtorn__banner-img,.myhavtorn__banner-content{
                width:100%;
                text-align: center;
            }
        }
        .banner__header{
            text-align: center;
            color: #ffffff;
            font-size: 42px;
        }
        .banner__actions{
            display: block;
            width: 100%;
            padding: 20px 0;
            >li{
                max-width: 100%;    
                margin: 15px 0;
                background-position:96% center 
            }
        }
        .home__banner{
            img{
                width: 100%;
            }
        }
        .banner__content-section{
            display: flex;
            flex-wrap: wrap;
            transform: inherit;
            position:static;
            padding: 0 20px;
            .banner__header{
                order: 1;
                max-width: 100%;
                position: absolute;
                top: 42%;
                transform: translateY(-50%);
            }
            .banner__content{
                order: 3;
                max-width: 100%;
            }
            .banner__actions{
                order: 2;
            }
        }
        .home__branding{
            text-align: center;
            .title{
                font-size: 24px;
                color:#5C4141;
                text-align: center;
            }
            .brand__listing{
                flex-wrap: wrap;
                .brand{
                    margin-right:0;
                    &.new-york-times{
                        max-width: 100%;;
                        margin: 0 auto;
                        width: 100%;
                    }
                    &.goop,&.allur{
                        width: 50%;
                    }
                    &.wallpaper{
                        order: 4;
                        width: 100%;
                    }
                }
            }
        }
        .home__networthy-container{
            display: block;
            .networthy__header{
                text-align: center;
                .title{
                    font-size: 29px;
                    margin-bottom:0;
                    span{
                        display: inline-block;
                    }
                }
            }
        }
        .banner__img-cont{
            position: relative;
            .banner__header{
                position: absolute;
                transform: translate(-50%,-50%);
                -moz-transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
                top:50%;
                left: 50%;
            }
        }
        .home__feed-list,.home__trending-list,.networthy-list-mob,.prd-container{
            &::v-deep .VueCarousel {
                .VueCarousel-navigation-button{
                    &.VueCarousel-navigation-next{
                        background: url("../assets/images/carousel-right-arrow.svg") no-repeat;
                        transform: inherit;
                    }
                    &.VueCarousel-navigation-prev{
                        transform: inherit;
                        left: 0;
                    }
                }  
            }
        }
        .home__feed-list{
            &::v-deep .VueCarousel {
                .VueCarousel-slide{
                    text-align: center;
                } 
            }
        }
    }
</style>