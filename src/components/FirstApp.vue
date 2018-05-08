<template>
    <div class="firstapp">
      <h1>{{title}}</h1><h2>{{msg}}</h2>
       <p v-if="showName">{{user.firstName}}</p>
       <p v-else>noone</p>
       <p v-text="user.firstName"></p>

       <ul>
          <li v-for="i in items">{{i.title}}</li>
       </ul>
       <br/>
       <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit" placeholder="look console log and write here"/>
       <br/><br/>
       <label>First Name</label>
        <input type="text" v-model="user.firstName" /><br/>
        <label>Last Name</label>
        <input type="text" v-model="user.lastName" /><br/>
        <button v-on:click="greet(user.firstName)">Say Hi</button>
        {{fullName}}
    </div>
</template>

<script>
export default {
  name: 'Firstapp',
  props: {
    msg:{
      type: String,
      default: 'Foobar'
    }
  },
  data () {
    return {
      title: 'First Vue.js App',
      user: {
          firstName: 'Adler',
          lastName: 'Pagliarini'
      },
      showName: true,
      items: [
        {title: 'Item1'},
        {title: 'Item2'},
        {title: 'Item3'}
      ]
    }
  },
  methods: {
    greet: function(name){
       alert('Hello ' + name + ' ' + this.user.lastName);
    },
    pressKey: function(e){
      console.log(e.target.value);
    },
    enterHit: function(e){
      console.log('<Enter> ' + e.target.value);
    }
  },
  computed: {
    fullName: function(){
      return this.user.firstName + ' ' + this.user.lastName + ' ' + this.msg;
    }
  }
}
</script>

<style scoped>
.firstapp {
  text-align:center;
}
.firstapp button{
  padding: 3px 10px;
}
.firstapp input[type='text']{
  border:1px solid green;
  margin:0px auto;
  width: 250px;
  display:table;
}
</style>