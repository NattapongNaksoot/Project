<template>
    <div>
        <h1><span>Edit Trundra Animals</span></h1>
        <form v-on:submit.prevent="editTrundra">
            <p>ชื่อ: <input type="text" v-model="trundra.name_thai"></p>
            <p>name: <input type="text" v-model="trundra.name_eng"></p>
            <p>อายุ: <input type="text" v-model="trundra.age"></p>
            <p>ปีเกิด: <input type="text" v-model="trundra.birth"></p>
            <p>สุขภาพ: <input type="text" v-model="trundra.health"></p>
            <p>จำนวน: <input type="text" v-model="trundra.quantity"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ trundra.name_thai }}</a1></p>
            <p><a>name:</a> <a1>{{ trundra.name_eng }}</a1></p>
            <p><a>อายุ:</a> <a1>{{ trundra.age }}</a1></p>
            <p><a>ปีเกิด:</a> <a1>{{ trundra.birth }}</a1></p>
            <p><a>สุขภาพ:</a> <a1>{{ trundra.health }}</a1></p>
            <p><a>จำนวน:</a> <a1>{{ trundra.quantity }}</a1></p>
            <p></p>
        </div>

    </div>
</template>
<script>
import TrundraService from '@/services/TrundraService'
export default {
    data() {
        return {
            trundra: {
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
        async editTrundra() {
            try {
                await TrundraService.put(this.trundra)
                this.$router.push({
                    name: 'trundras'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let trundraId = this.$route.params.trundraId
            this.trundra = (await TrundraService.show(trundraId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>