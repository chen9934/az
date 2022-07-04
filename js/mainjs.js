
        myFunction();
        window.onresize = myFunction;
        function myFunction() {
            var w=document.getElementById('SpanID1').innerText = document.documentElement.clientWidth;
            var h=document.getElementById('SpanID2').innerText = document.documentElement.clientHeight;

            if (w > 1070) {
                const swiper2 = new Swiper('.swiper.swiper2', {
                // Optional parameters
                loop: true,
                slidesPerView: 3,
                spaceBetween: 10,

                autoplay: true, //同下
                autoplay: {
                    delay: 2000,
                     stopOnLastSlide: false, //true:當切換到最後一個slide時停止自動切換
                     disableOnInteraction: true, //true:用戶操作swiper之後自動切換停止
                },

                 // 點
                 pagination: {
                     el: '.swiper-pagination',
                 },

                });

            }else if(w <= 1070 && w>560){
                const swiper2 = new Swiper('.swiper.swiper2', {
            // Optional parameters
            loop: true,
            slidesPerView: 2,
            spaceBetween: 5,

            autoplay: true, //同下
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false, //true:當切換到最後一個slide時停止自動切換
                disableOnInteraction: true, //true:用戶操作swiper之後自動切換停止
            },

            // 點
            pagination: {
                el: '.swiper-pagination',
            },

                });

            } else if(w<=560){
                const swiper2 = new Swiper('.swiper.swiper2', {
                    // Optional parameters
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
    
                    autoplay: true, //同下
                    autoplay: {
                        delay: 2000,
                         stopOnLastSlide: false, //true:當切換到最後一個slide時停止自動切換
                         disableOnInteraction: true, //true:用戶操作swiper之後自動切換停止
                    },
    
                     // 點
                     pagination: {
                         el: '.swiper-pagination',
                     },
    
                });
            }
        }
        //-----------------------------------------
        const swiper = new Swiper('.swiper1 .swiper', {
            // Optional parameters
            loop: true,

            autoplay: true,//等同于以下设置
            autoplay: {
                delay: 1000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },

            // 點
            pagination: {
                el: '.swiper-pagination',
            },
            // 箭頭
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });

      
        //-----------------------------------------
        
        // ----------------------------------------------



