<template>
  <div>
    <section v-if="destination" class="destination">
   <h2>{{destination.name}}</h2>
   <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name"/>
      <p>{{destination.description}}</p>
   </div>
    </section>
  </div>
</template>

<script>
import sourceData from '../../src/data.json'
export default {
    data(){
        return{
          destination:null
        }
    },
    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        destination(){
            return sourceData.destinations.find(destination => destination.id === this.destinationId)
        } 
    },
    methods:{
     async initData(){
        const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
       this.destination = await response.json()
      }
    },
   async created(){
   this.initData()
   

}

}
</script>

<style>

</style>