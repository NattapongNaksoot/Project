<template>
    <div>
        <h1><span>Tefal</span></h1>
        <div>id: <a1>{{ savanna.id }}</a1></div>
        <div>ชื่อ: <a1>{{ savanna.name_thai }} {{ savanna.name_eng }}</a1></div>
        <div>รุ่น: <a1>{{ savanna.model }}</a1></div>
        <div>ประเภท: <a1>{{ savanna.category }}</a1></div>
        <div>รายละเอียด: <a1>{{ savanna.detail }}</a1></div>
        <div>ราคา: <a1>{{ savanna.price }}</a1></div>
        <p></p>
        <div><button v-on:click="navigateTo('/savannas')">กลับ</button></div>
        <hr>
    </div>
</template>
<script>
import SavannaService from '@/services/SavannaService'

export default {
    data() {
        return {
            tefal:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let savannaId = this.$route.params.savannaId
            this.savanna = (await SavannaService.show(savannaId)).data
            console.log(this.savanna)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   