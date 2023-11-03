<template>
    <div>
        <h1><span>Edit Savanna Animals</span></h1>
        <form v-on:submit.prevent="editSavanna">
            <p>ชื่อ: <input type="text" v-model="savanna.name_thai"></p>
            <p>name: <input type="text" v-model="savanna.name_eng"></p>
            <p>อายุ: <input type="text" v-model="savanna.age"></p>
            <p>ปีเกิด: <input type="text" v-model="savanna.birth"></p>
            <p>สุขภาพ: <input type="text" v-model="savanna.health"></p>
            <p>จำนวน: <input type="text" v-model="savanna.quantity"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ savanna.name_thai }}</a1></p>
            <p><a>name:</a> <a1>{{ savanna.name_eng }}</a1></p>
            <p><a>อายุ:</a> <a1>{{ savanna.age }}</a1></p>
            <p><a>ปีเกิด:</a> <a1>{{ savanna.birth }}</a1></p>
            <p><a>สุขภาพ:</a> <a1>{{ savanna.health }}</a1></p>
            <p><a>จำนวน:</a> <a1>{{ savanna.quantity }}</a1></p>
            <p></p>
        </div>

    </div>
</template>
<script>
import SavannaService from '@/services/SavannaService'
export default {
    data() {
        return {
            savanna: {
                name_thai: '',
                name_eng: '',
                age: '',
                birth: '',
                health: '',
                quantity: ''
            }
        }
    },
    methods: {
        async editSavanna() {
            try {
                await SavannaService.put(this.savanna)
                this.$router.push({
                    name: 'savannas'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let savannaId = this.$route.params.savannaId
            this.savanna = (await SavannaService.show(savannaId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>