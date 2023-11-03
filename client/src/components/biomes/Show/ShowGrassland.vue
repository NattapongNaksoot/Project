<template>
    <div>
        <h1><span>Tropical Animals</span></h1>
        <div>id: <a1>{{ grassland.id }}</a1></div>
        <div>ชื่อ: <a1>{{ grassland.name_thai }}{{ grassland.name_eng }}</a1></div>        
        <div>อายุ: <a1>{{ grassland.age }}</a1></div>
        <div>ปีเกิด: <a1>{{ grassland.birth }}</a1></div>
        <div>สุขภาพ: <a1>{{ grassland.health }}</a1></div>
        <div>จำนวน: <a1>{{ grassland.quantity }}</a1></div>
        <p></p>
        <button v-on:click="navigateTo('/grasslands')">กลับ</button>
        <hr>
    </div>
</template>

<script>
import GrasslandService from '@/services/GrasslandService'

export default {
    data() {
        return {
            grassland:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let grasslandId = this.$route.params.grasslandId
            this.grassland = (await GrasslandService.show(grasslandId)).data
            console.log(this.grassland)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   