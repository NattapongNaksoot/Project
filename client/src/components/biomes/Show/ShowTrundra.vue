<template>
    <div>
        <h1><span>Trundra Animals</span></h1>
        <div>id: <a1>{{ trundra.id }}</a1></div>
        <div>ชื่อ: <a1>{{ trundra.name_thai }}{{ trundra.name_eng }}</a1></div>        
        <div>อายุ: <a1>{{ trundra.age }}</a1></div>
        <div>ปีเกิด: <a1>{{ trundra.birth }}</a1></div>
        <div>สุขภาพ: <a1>{{ trundra.health }}</a1></div>
        <div>จำนวน: <a1>{{ trundra.quantity }}</a1></div>
        <p></p>
        <button v-on:click="navigateTo('/trundras')">กลับ</button>
        <hr>
    </div>
</template>

<script>
import TrundraService from '@/services/TrundraService'

export default {
    data() {
        return {
            trundra:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let trundraId = this.$route.params. trundraId
            this.trundra = (await  TrundraService.show(trundraId)).data
            console.log(this.trundra)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   