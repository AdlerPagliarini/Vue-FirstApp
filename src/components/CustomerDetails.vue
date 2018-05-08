<template>
    <div class="details container">
      <h1 class="page-header">{{title}}</h1>
      <Alert v-if="alert" v-bind:message="alert" />
      <form v-on:submit="updateCustomer">
                <div class="well">
            <h4>Customer Info</h4>
            <input type="hidden" class="form-control" placeholder="id" v-model="customer._id">
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" v-model="customer.last_name">
            </div>
        </div>
        <div class="well">
            <h4>Customer Contact</h4>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" placeholder="Phone" v-model="customer.phone">
            </div>
        </div>

        <div class="well">
            <h4>Customer Location</h4>
            <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
            </div>
            <div class="form-group">
                <label>City</label>
                <input type="text" class="form-control" placeholder="City" v-model="customer.city">
            </div>
            <div class="form-group">
                <label>State</label>
                <input type="text" class="form-control" placeholder="State" v-model="customer.state">
            </div>
        </div>
        <button type="submit" class="btn btn-success">Update</button>
        <button v-on:click="deleteCustomer(customer._id)" class="btn btn-danger">Delete</button>
        <button v-on:click="cancelRequest()" class="btn btn-primary right">Cancel</button>
      </form>
      <br/>
      <br/>
      <br/>
    </div>
</template>

<script>
import AlertMsg from './Alert';
export default {
  name: 'CustomerDetails',
  data () {
    return {
        title: 'Customer Details',
        alert: '',
        customer: [] // or ''
        }
    },
    methods: {
        fetchCustomer(id){
            console.log(id);
            this.$http.get('http://localhost:3000/api/customer/'+id)
           .then(function(response){
              console.log(response.data);
              this.customer = JSON.parse(JSON.stringify(response.data));
           });
        },
        updateCustomer(e){
            console.log("update");
            if(!this.customer._id || !this.customer.first_name || !this.customer.last_name || !this.customer.email){
                this.alert = 'Please fill in all required fields';
            } else {
                let newCustomer = {
                    first_name: this.customer.first_name,
                    last_name: this.customer.last_name,
                    phone: this.customer.phone,
                    email: this.customer.email,
                    address: this.customer.address,
                    city: this.customer.city,
                    state: this.customer.state
                }
                this.$http.put('http://localhost:3000/api/customer/' + this.customer._id, newCustomer)
                    .then(function(response){
                        console.log(response.data);
                        this.$router.push({path: '/customers', query: {alert: 'Customer Updated'}});
                    });
                e.preventDefault();
            }
            e.preventDefault();
        },
        deleteCustomer(id){
             this.$http.delete('http://localhost:3000/api/customer/' + this.customer._id)
                 .then(function(response){
                    console.log(response.data);
                    this.$router.push({path: '/customers', query: {alert: 'Customer Deleted'}});
            });
        },
        cancelRequest(){
             this.$router.push({path: '/customers', query: {alert: 'Request Canceled'}});
        }
    },
    created: function(){
        this.fetchCustomer(this.$route.params.id);
    },
    components: {
        AlertMsg
    }
}
</script>

<style scoped>
.right{
    float:right;
}
</style>