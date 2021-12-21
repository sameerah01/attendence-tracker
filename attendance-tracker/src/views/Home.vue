<template>
  <div class="home">
          <input type="text" v-model="search" placeholder="search by name" class="pa-3 ml-4 mt-1"/>
          <input type="text" v-model="searchSub" placeholder="search by class" class="pa-3"/>
          <input type="text" v-model="searchDate" placeholder="search by Date" class="pa-3"/>

      <v-template class="my-5" v-if="searchDate!=''">
        <v-card flat class="pa-3 ml-3" v-for="array in filterDate" :key="array.id">
          <v-layout row wrap :class="`pa-3 detail ${array.status}`">
            <v-flex xs-2 sm2 md-1>
              <div>{{array.name}}</div>
            </v-flex>
            <v-flex xs-2 sm2 md2>
              <div>{{array.subject}}</div>
            </v-flex>
            <v-flex >
              <div >
                <v-chip>{{array.status}}</v-chip>
              </div>
            </v-flex>
          </v-layout>
        </v-card> 
      </v-template>
      

    <v-container class="my-5" v-if="searchDate==''">
      <v-card flat class="pa-3 ml-3">
        <v-layout row >
          <v-flex xs-2 sm2 md-1 >
            <div class="caption grey-text">Name</div>
          </v-flex>
          <v-flex xs-2 sm2 md2>
            <div class="caption grey-text">Class</div>
          </v-flex>
          <v-flex xs-2 sm2 md1  v-for="item in items" :key="item.date">
            <div class="caption grey-text">{{item.date}}</div>
          </v-flex>
        </v-layout>
      </v-card>

      <v-card flat class="ma-5" v-for="detail in filterData" :key="detail.id">
        <v-layout row wrap >
          <v-flex xs-2 sm2 md-1>
            <div>{{detail.name}}</div>
          </v-flex>
          <v-flex xs-2 sm2 md2>
            <div>{{detail.subject}}</div>
          </v-flex>
          <v-flex xs-2 sm2 md1  v-for="(item,index) in items" :key="item.date" >
            <div id="chips" >
              <v-chip >{{compare(arrays,detail,dateItems,index)}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card> 
      <v-layout row >
      <v-flex ma-5 pa-5 xs-2 sm2 md-1>
        <Form/>
      </v-flex>
      <v-flex ma-5 pa-5>
        <updateStatus @updateData="getTableData"/>
      </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Form from '../components/Form.vue'
import UpdateStatus from '../components/updateStatus.vue';
export default {
  name: 'Home',
  components:{Form, UpdateStatus},
  data(){
    return{
      props:['a','b','c'],
      sorted:[],
      sortedDate:[],
      search: '',
      searchSub: '',
      searchDate: '',
      newdetails:[],
      details:[],
      arrays:[],
      tableData: '',
      items:[
        {date:"2021-03-04"},
        {date:"2021-03-05"},
        {date:"2021-03-06"},
        {date:"2021-03-07"},
        {date:"2021-03-08"},
        {date:"2021-03-09"},
        {date:"2021-03-10"},
        ],

        dateItems:['2021-03-04','2021-03-05','2021-03-06','2021-03-07','2021-03-08','2021-03-09','2021-03-10']
    }
  },
    methods: {
      getTableData(e) {
              this.details = e;
              this.arrays = e;
              var grades = {};
              this.details.forEach( function( item ) {
              var grade = grades[item.name] = grades[item.name] || {};
              grade[item.subject] = true;
              });
              var outputList = [];
              for( var name in grades ) {
              for( var subject in grades[name] ){
              outputList.push({ name: name, subject: subject});
              }
              }
              this.sorted = outputList;
              },


    compare(arrays,detail,dateItems,index){
          var filteredArr = arrays.filter(subelement => subelement.name == detail.name && subelement.subject == detail.subject && subelement.date == dateItems[index]); 
          var newStatus;
          filteredArr.forEach(element => { 
          const {
            status
          } = element
          newStatus=status;
          return newStatus;
          });
          return newStatus;
    },
  },


  computed: {
      filterData: function(){
          if(this.search != '')
        {
                return this.sorted.filter((e) => {
                return e.name.match(this.search) ;
          });
        }else{
                return this.sorted.filter((detail) => {
                return detail.subject.match(this.searchSub) ;
          });
        }
    },
    filterDate: function(){
                return this.arrays.filter((array) => {
                return array.date.match(this.searchDate) ;
          });
    }
  }
}
</script>

<style scoped>

.detail.present{
  border-left: 5px solid #3cd1c2;
}

.detail.absent{
  border-left: 5px solid tomato;
}

#chips-container .v-chip.present{
  background: #3cd1c2;
}

#chips-container .v-chip.absent{
  background: tomato;
}

</style>
