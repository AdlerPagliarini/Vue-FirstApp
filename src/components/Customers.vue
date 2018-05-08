<template>
    <div class="costumers container">
      <Alert v-if="alert" v-bind:message="alert" />
      <h1 class="page-header">{{title}}</h1>
      <div class="row">
        <div class="col-md-8">
          <router-link to="/add-customer" class="btn btnAdd btn-success">Add Customers</router-link>
        </div>
        <div class="col-md-4">
          <input class="form-control" v-model="filterInput" type="text" placeholder="Search" aria-label="Search">
        </div>
      </div>
      <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#{{qtdUser}}#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in filterBy(customers, filterInput)" :key='index'>
              <th scope="row">{{index+1}}</th>
              <td>{{data.first_name}}</td>
              <td>{{data.last_name}}</td>
              <td>{{data.email}}</td>
              <td><router-link class="btn btn-success" v-bind:to="'/customer/'+data._id">Details</router-link></td>
            </tr>
          </tbody>
        </table>

    </div>
</template>

<script>
import Alert from './Alert';
export default {
  name: 'costumers',
  data () {
    return {
      title: 'Manage Customers',      
      customers: [],
      alert:'',
      filterInput:''
    }
  },
  methods: {
    fetchCutomers: function(){
       console.log('response.data');
       this.$http.get('http://localhost:3000/api/customers')
           .then(function(response){
              console.log(response.data);
              this.customers = JSON.parse(JSON.stringify(response.data));
           });
    },
    deleteUser: function(user){
    },
    testForEach: function(obj){
      Object.keys(obj).forEach(function(i){
         console.log(obj[i].name);
       });
       obj.forEach(function(o){
         console.log(o.name);
       });
    },
    filterBy(list, value){
      return list.filter(function(customer){
        value = value.toUpperCase();
        return (customer.first_name.toUpperCase().indexOf(value) > -1 || customer.last_name.toUpperCase().indexOf(value) > -1) ? customer : '' ;
      });
    }
  },
  computed: {
    qtdUser: function(){      
      return this.customers.length;
    }
  },
  created: function(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert;
    }
    this.fetchCutomers();
  },
  updated: function(){
    //this.fetchCutomers(); consume muito
  },
  components: {
      Alert
  }
}
</script>

<style scoped>
.costumers .btnAdd{
  margin:7px 0 15px 0;
}
.right{
  float:right;
}
</style>