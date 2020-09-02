import Home from './components/Home.vue'
import MyProjects from './components/MyProjects.vue'
import Contacts from './components/Contacts.vue'

export const routes = [
    {
        path: '', component: Home
    },
    {
        path: '/my-projects', component: MyProjects
    },
    {
        path: '/contacts', component: Contacts
    }
]