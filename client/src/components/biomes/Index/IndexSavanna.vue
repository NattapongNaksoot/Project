<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Savanna Animals</span></h1>
        <p><button v-on:click="create">Add Savanna Animals</button></p>
        <div v-for="savanna in savannas" v-bind:key="savanna.id">
            <div><a>ชื่อ:</a> <a1>{{ savanna.name_thai }} {{ savanna.name_eng }}</a1></div>
            <div><a>อายุ:</a> <a1>{{ savanna.age }}</a1></div>
            <div><a>ปีเกิด:</a> <a1>{{ savanna.birth }}</a1></div>
            <div> <a>สุขภาพ:</a> <a1>{{ savanna.health }}</a1></div>
            <div> <a>จำนวน:</a> <a1>{{ savanna.quantity }}</a1></div>
            <P></P>
            <button v-on:click="navigateTo('/savanna/' + savanna.id)">ดูข้อมูลสัตว์</button>
            <button v-on:click="navigateTo('/savanna/edit/' + savanna.id)">แก้ไขข้อมูลสัตว์</button>
            <button v-on:click="deleteSavanna(savanna)">ลบข้อมูลสัตว์</button>
            <hr>
        </div>
    </div>
</template>
<script>
import SavannaService from '@/services/SavannaService'
export default {
    data() {
        return {
            savannas: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.savannas = (await SavannaService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'savanna-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteSavanna(savanna) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await SavannaService.delete(savanna)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.savannas = (await SavannaService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped></style>