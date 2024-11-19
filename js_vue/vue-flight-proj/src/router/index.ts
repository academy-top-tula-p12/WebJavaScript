import { createRouter, createWebHistory} from 'vue-router'

import Home from '../components/Home.vue'
import FlightEdit from '../components/FlightEdit.vue'
import FlightAdd from "../components/FlightAdd.vue";

const routes = [
    { path: '/', component: Home, title: "Home" },
    { path: '/edit/:id', component: FlightEdit, title : 'Edit' },
    { path: '/create', component: FlightAdd, title: 'Create' },
]

export const router = createRouter({
    history: createWebHistory("/"),
    routes
})