import Vue from "vue";

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const commentItem = {
    template: "#comment-item",
    props: ['item'],
    components: {
        swiperSlide
    }
}

new Vue({
    el: "#comments-component",
    template: "#comments-list",
    components: {
        commentItem,
        swiper,
    },
    data: {
        comments: [],
        swiperOption: {
            slidesPerView: 2,
            spaceBetween: 50,
            navigation: {
                nextEl: '.comments__arrow--next',
                prevEl: '.comments__arrow--prev',
                disabledClass: '.comments__arrow--disabled'
            },
            breakpoints: {
                480: {
                    slidesPerView: 1,
                },
            }
        }
    },
    methods: {
        addImagePaths(comments) {
            return comments.map(el => {
                let photo = require(`../images/content/${el.photo}`);
                el.photo = photo
                return el
            })
        }
    },
    created() {
        const data = require("../data/comments.json");
        this.comments = this.addImagePaths(data);
    }
})