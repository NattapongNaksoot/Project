<template>
    <div>
        <h1><span>Tropical Animals</span></h1>
        <div>id: <a1>{{ tropical.id }}</a1></div>
        <div>ชื่อ: <a1>{{ tropical.name_thai }}{{ tropical.name_eng }}</a1></div>        
        <div>อายุ: <a1>{{ tropical.age }}</a1></div>
        <div>ปีเกิด: <a1>{{ tropical.birth }}</a1></div>
        <div>สุขภาพ: <a1>{{ tropical.health }}</a1></div>
        <div>จำนวน: <a1>{{ tropical.quantity }}</a1></div>
        <p></p>
        <button v-on:click="navigateTo('/tropicals')">กลับ</button>
        <hr>
    </div>
</template>

<script>
import TropicalService from '@/services/TropicalService'

export default {
    data() {
        return {
            tropical:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let tropicalId = this.$route.params.tropicalId
            this.tropical = (await TropicalService.show(tropicalId)).data
            console.log(this.tropical)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   