<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Grassland Animals</span></h1>
        <p><button v-on:click="create">Add Grassland Animals</button></p>
        <div v-for="grassland in grasslands" v-bind:key="grassland.id">
            <div><a>ชื่อ:</a> <a1>{{ grassland.name_thai }} {{ grassland.name_eng }}</a1></div>
            <div><a>อายุ:</a> <a1>{{ grassland.age }}</a1></div>
            <div><a>ปีเกิด:</a> <a1>{{ grassland.birth }}</a1></div>
            <div> <a>สุขภาพ:</a> <a1>{{ grassland.health }}</a1></div>
            <div> <a>จำนวน:</a> <a1>{{ grassland.quantity }}</a1></div>
            <P></P>
            <button v-on:click="navigateTo('/grassland/' + grassland.id)">ดูข้อมูลสัตว์</button>
            <button v-on:click="navigateTo('/grassland/edit/' + grassland.id)">แก้ไขข้อมูลสัตว์</button>
            <button v-on:click="deleteGrassland(grassland)">ลบข้อมูลสัตว์</button>
            <hr>
        </div>
    </div>
</template>
<script>
import GrasslandService from '@/services/GrasslandService'
export default {
    data() {
        return {
            grasslands: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.grasslands = (await GrasslandService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        
        create() {
            this.$router.push({ name: 'grassland-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteGrassland(grassland) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await GrasslandService.delete(grassland)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.grasslands = (await GrasslandService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped></style>