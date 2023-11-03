<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Tropical Animals</span></h1>
        <p><button v-on:click="create">Add Tropical Animals</button></p>
        <div v-for="tropical in tropicals" v-bind:key="tropical.id">
            <div><a>ชื่อ:</a> <a1>{{ tropical.name_thai }} {{ tropical.name_eng }}</a1></div>
            <div><a>อายุ:</a> <a1>{{ tropical.age }}</a1></div>
            <div><a>ปีเกิด:</a> <a1>{{ tropical.birth }}</a1></div>
            <div> <a>สุขภาพ:</a> <a1>{{ tropical.health }}</a1></div>
            <div> <a>จำนวน:</a> <a1>{{ tropical.quantity }}</a1></div>
            <P></P>
            <button v-on:click="navigateTo('/tropical/' + tropical.id)">ดูข้อมูลสัตว์</button>
            <button v-on:click="navigateTo('/tropical/edit/' + tropical.id)">แก้ไขข้อมูลสัตว์</button>
            <button v-on:click="deleteTropical(tropical)">ลบข้อมูลสัตว์</button>
            <hr>
        </div>
    </div>
</template>
<script>
import TropicalService from '@/services/TropicalService'
export default {
    data() {
        return {
            tropicals: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.tropicals = (await TropicalService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'tropical-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteTropical(tropical) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await TropicalService.delete(tropical)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.tropicals = (await TropicalService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped></style>