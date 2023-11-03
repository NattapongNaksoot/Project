<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Aquatic Animals</span></h1>
        <p><button v-on:click="create">Add Aqatic Animals</button></p>
        <div v-for="aquatic in aquatics" v-bind:key="aquatic.id">
            <div><a>ชื่อ:</a> <a1>{{ aquatic.name_thai }} {{ aquatic.name_eng }}</a1></div>
            <div><a>อายุ:</a> <a1>{{ aquatic.age }}</a1></div>
            <div><a>ปีเกิด:</a> <a1>{{ aquatic.birth }}</a1></div>
            <div><a>สุขภาพ:</a> <a1>{{ aquatic.health }}</a1></div>
            <div><a>จำนวน:</a> <a1>{{ aquatic.quantity }}</a1></div>
            <P></P>
            <button v-on:click="navigateTo('/aquatic/' + aquatic.id)">ดูข้อมูลสัตว์</button>
            <button v-on:click="navigateTo('/aquatic/edit/' + aquatic.id)">แก้ไขข้อมูลสัตว์</button>
            <button v-on:click="deleteAquatic(aquatic)">ลบข้อมูลสัตว์</button>
            <hr>
        </div>
    </div>
</template>

<script>
import AquaticService from '@/services/AquaticService'
export default {
    data() {
        return {
            aquatics: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.aquatics = (await AquaticService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'aquatic-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteAquatic(aquatic) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await AquaticService.delete(aquatic)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.aquatics = (await AquaticService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped></style>