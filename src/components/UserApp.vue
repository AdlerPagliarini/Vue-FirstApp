<template>
    <div class="">
      <h1>{{title}}</h1>
       <button v-on:click="testForEach(users)">Testing foreach</button> <br />
       <form v-on:submit="addUser">
        <input type="text" v-model="newUser.name" placeholder="Name" />
        <br />
        <input type="text" v-model="newUser.email" placeholder="Email" />
        <br />
        <button type="submit" value="Submit">Add</button>
       </form>
       <h1>Users: {{users.length}} / "Testing compute: {{qtdUser}}"</h1>
       <ul>
          <li v-for="u in users">
            <input type="checkbox" v-model="u.contacted" />
            <span :class="{contacted: u.contacted}">
              {{u.name}}: {{u.email}} - <button v-on:click="deleteUser(u)">Delete</button>
            </span>            
          </li>
       </ul>
    </div>
</template>

<script>
export default {
  name: 'Userapp',
  data () {
    return {
      title: 'Users',
      newUser:{},
      usersTestParse: [],
      users: [ 
        {
          name: 'Default data',
          contacted: true
        },
        {
          name: 'Adler',
          email: 'Pagliarini',
          contacted: false
        },
        {
          name: 'Adler',
          email: 'Pagliarini 2',
          contacted: false
        },
        {
          name: 'Adler',
          email: 'Pagliarini 3',
          contacted: false
        }
      ]
    }
  },
  methods: {
    addUser: function(e){
       e.preventDefault();
       this.users.push(
         {
           name: this.newUser.name,
           email: this.newUser.email,
           contacted: false
         }
       )
    },
    deleteUser: function(user){
       this.users.splice(this.users.indexOf(user), 1);
    },
    testForEach: function(obj){
      Object.keys(obj).forEach(function(i){
         console.log(obj[i].name);
       });
       obj.forEach(function(o){
         console.log(o.name);
       });
       this.usersTestParse.forEach(function(o){
         console.log(o.name);
       });
    }
  },
  computed: {
    qtdUser: function(){      
      return Object.keys(this.users).length + this.users.length;
    }
  },
  created: function(){
    console.log("First to run");
    this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
            var data = response.data;
                        
            console.log('data');
            console.log(data);
            console.log('parse-stringify');
            console.log(JSON.parse(JSON.stringify(data)));

            /******
            //It works but I WANT to load Default data + API
               this.users = data;
                *******/

            var array = [];
            data.forEach(function(obj){
              array.push(obj);                            
              //this.users.push(obj); //not possible to access this variable
            });            
            console.log('array');
            console.log(array);
            
            Object.keys(data).forEach(function(i){
              //this.users.push(data[i]); //not possible to access this variable
            });

            //Need to use a aux array to load data, "USING foreach", from API + Default values
            this.users.push({ name: "USING forEach", contacted: true  });
            for(let i = 0; i < array.length; i++){
              this.users.push(array[i]);
            }
            /****** OR  ******/
            this.users.push({ name: "USING for", contacted: true });
            for(let i = 0; i < data.length; i++){
              this.users.push(data[i]);
            }

      });
  }
}
</script>

<style scoped>
.contacted{
  color:red;
}
</style>