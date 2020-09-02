<template>
    <div>   
        <b-nav>
            <b-nav-item>
                <router-link active-class="active" exact to="/">Home</router-link>     
            </b-nav-item>
            <b-nav-item>
                <router-link active-class="active" to="/my-projects">My projects</router-link> 
            </b-nav-item>
            <b-nav-item>
                <router-link active-class="active" to="/contacts">Contacts</router-link> 
            </b-nav-item>         
        </b-nav>    
    </div>
</template>

<script>
export default {
    name: 'Header'   
} 

</script>

<style scoped>

b-nav-item {
    padding: 5px;
}
a {
    color: rebeccapurple;
    font-style: italic;
    font-weight: bold;
}
.active {
    text-decoration: underline;
    color: #0056b3;
}

</style>


