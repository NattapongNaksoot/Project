<template>
    <div>
        <h1><span>Aquatic Animals</span></h1>
        <div>id: <a1>{{ aquatic.id }}</a1></div>
        <div>ชื่อ: <a1>{{ aquatic.name_thai }}{{ aquatic.name_eng }}</a1></div>        
        <div>อายุ: <a1>{{ aquatic.age }}</a1></div>
        <div>ปีเกิด: <a1>{{ aquatic.birth }}</a1></div>
        <div>สุขภาพ: <a1>{{ aquatic.health }}</a1></div>
        <div>จำนวน: <a1>{{ aquatic.quantity }}</a1></div>
        <p></p>
        <button v-on:click="navigateTo('/aquatics')">กลับ</button>
        <hr>
    </div>
</template>

<script>
import AquaticService from '@/services/AquaticService'

export default {
    data() {
        return {
            aquatic:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let aquaticId = this.$route.params.aquaticId
            this.aquatic = (await AquaticService.show(aquaticId)).data
            console.log(this.aquatic)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   