<template>
    <v-dialog max-width="500px" max-height="600px" >
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="primary" @click="getData()">Add Attendance</v-btn>
        </template>

        <v-card ma-4 pa-5>
            <v-form class="ml-4">
                <label class="pa-5 pl-0 my-5" >Name</label>
                <select v-model="name" class="px-2 my-2">
                <option v-for="item in items" :key="item.date">{{item.name}}</option>
                </select>

                <label class="pa-5">class</label>
                <select v-model="subject" class="px-2 my-2 ">
                <option >science</option>
                <option >social</option>
                <option >maths</option>
                <option >english</option>
                </select>

                <label class="pa-5">status</label>
                <select v-model="status" class="px-2 my-2">
                <option>present</option>
                <option>absent</option>
                </select>

                <v-menu>
                <template v-slot:activator="{ on }">
                    <v-text-field :value="date" v-on="on" label="Date"></v-text-field>
                </template>
                <v-date-picker v-model="date"></v-date-picker>
                </v-menu>
                <v-btn
                color="success"
                class="mr-4"
                @click="addAttendance"
                >
                Submit
                </v-btn>
            </v-form>
        </v-card>
    </v-dialog>
</template>


<script>
    export default {
        data(){
        return{
            count: 0,
            name: '',
            subject:'',
            date:null,
            status:'',
            items:[],
        }
    },
    methods: {
        async addAttendance() {
            this.count=Math.floor(Math.random() * 1000);
            
        let inputData = {
            id:this.count,
            name: this.name,
            date: this.date,
            subject: this.subject,
            status: this.status,
        };

        const response = await fetch(
            "http://localhost:3001/addAttendance",
            {method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(inputData)}
        );
            const data = await response.json();
            this.$emit("updateData", data);
    },
        async getData(){
            const res = await fetch('http://localhost:3001/users/');
            const data = await res.json();
            this.items = data.users;
        }
    },
};

</script>
