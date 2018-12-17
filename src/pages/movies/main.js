import Vue from 'vue'
import Movies from './movies.vue'

const movies = new Vue(Movies)

//挂载当前的页面
movies.$mount()