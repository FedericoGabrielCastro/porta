import HomePage from "./layouts/homePage"
import ContactPage from "./layouts/contactPage"
import GamePage from "./layouts/gamePage"
import ProyectsPage from "./layouts/proyectsPage"
import ErrorPage from './layouts/errorPage'

export const routes = [
    {
        title: 'Contact Page',
        path: '/contactpage',
        component: ContactPage
    },
    {
        title: 'Game Page',
        path: '/gamepage',
        component: GamePage
    },
    {
        title: 'Proyects Page',
        path: '/proyectspage',
        component: ProyectsPage
    },
    {
        title: 'Home page',
        path: '/',
        component: HomePage,
    },
    {
        title: '404',
        path: "*",
        component: ErrorPage
    }
]