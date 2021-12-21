<template>
  <v-dialog max-width="600px" class="ma-4">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" class="primary">Add new student</v-btn>
    </template>
    <v-card ma-4 pa-4>
      <v-form class="ml-4" ref="form" v-model="valid" >
        <v-text-field
          v-model="name"
          label="Name"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="addStudent"
        >
          Submit
        </v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
      data() {
    return {
      valid: true,
      name: '',
      date:'',
      subject: '',
      select: null,
      items: [
        'present',
        'absent',
      ],
      selected: '',
      insertForm: false,
    };
  },
  
  methods: {
    async addStudent() {
      let inputData = {
        name: this.name,
      };
      const response = await fetch(
        "http://localhost:3001/users",
        {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData)
        }
      );
        const data = await response.json();
        console.log(data)
        this.$emit("updateData", data);
    },
  },

};

</script>
