<template>
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="grey--text">
                <span class="font-weight-light">Attendance</span>
                <span class="text-uppercase ">Tracker</span>
            </v-app-bar-title>
        </v-app-bar>
        
    </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer:false
        }
    }
}
</script>