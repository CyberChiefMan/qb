<template>
    <div id="HomePage">
      <h1>{{ttt}}</h1>
      <h1>{{user.firstName}} is a {{user.lastName}}</h1>
      <p v-if="showName" style="color:firebrick">{{user.firstName}} </p>
      <p v-if="!showName" style="color:darkblue">{{user.lastName}} </p>
    </div>
</template>

<script>
    export default{
        name: 'HomePage',
        data(){
            return {
            ttt:'Hello World  ',
              user:{
                firstName:'mehdi',
                lastName:'mahmoudi',
                age:'29'
              },
              showName:true,

            }
        }
    }
</script>
