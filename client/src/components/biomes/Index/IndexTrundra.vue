<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Trundra Animals</span></h1>
        <p><button v-on:click="create">Add Trundra Animals</button></p>
        <div v-for="trundra in trundras" v-bind:key="trundra.id">
            <div><a>ชื่อ:</a> <a1>{{ trundra.name_thai }} {{ trundra.name_eng }}</a1></div>
            <div><a>อายุ:</a> <a1>{{ trundra.age }}</a1></div>
            <div><a>ปีเกิด:</a> <a1>{{ trundra.birth }}</a1></div>
            <div> <a>สุขภาพ:</a> <a1>{{ trundra.health }}</a1></div>
            <div> <a>จำนวน:</a> <a1>{{ trundra.quantity }}</a1></div>
            <P></P>
            <button v-on:click="navigateTo('/trundra/' + trundra.id)">ดูข้อมูลสัตว์</button>
            <button v-on:click="navigateTo('/trundra/edit/' + trundra.id)">แก้ไขข้อมูลสัตว์</button>
            <button v-on:click="deleteTrundra(trundra)">ลบข้อมูลสัตว์</button>
            <hr>
        </div>
    </div>
</template>
<script>
import TrundraService from '@/services/TrundraService'
export default {
    data() {
        return {
            trundras: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.trundras = (await TrundraService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'trundra-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteTrundra(trundra) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await TrundraService.delete(trundra)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.trundras = (await TrundraService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped></style>