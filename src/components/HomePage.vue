<template>
    <div id="HomePage">

      <h1>{{user.firstName}} is a {{user.lastName}}</h1>
     <!-- <p v-if="showName" style="color:firebrick">{{user.firstName}} </p>
      <p v-if="!showName" style="color:darkblue">{{user.lastName}} </p>-->
      <input type="text" v-model="title">

      <button @click="greet"> Say greating</button>
      <br>
      <label>firstName</label><input type="text" v-model="user.firstName">
      <br>
      <label>lastName</label><input type="text" v-model="user.lastName">

      <h3>{{fullName}}</h3>
    </div>
</template>

<script>
    export default{
        name: 'HomePage',
        data(){
            return {
            title:'Hello World  ',
              user:{
                firstName:'mehdi',
                lastName:'mahmoudi',
                age:'29'
              },
              showName:true,


            }
        },
      methods:{
            greet() {
              alert( 'greeting');
            },

      },
      computed:{
         fullName(){
             return this.user.firstName + ' ' + this.user.lastName ;

         }
      }
    }
</script>
