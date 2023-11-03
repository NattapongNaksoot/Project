<template>
    <div>
        <h1><span>Edit Tropical animals</span></h1>
        <form v-on:submit.prevent="editTropical">
            <p>ชื่อ: <input type="text" v-model="tropical.name_thai"></p>
            <p>name: <input type="text" v-model="tropical.name_eng"></p>
            <p>อายุ: <input type="text" v-model="tropical.age"></p>
            <p>ปีเกิด: <input type="text" v-model="tropical.birth"></p>
            <p>สุขภาพ: <input type="text" v-model="tropical.health"></p>
            <p>จำนวน: <input type="text" v-model="tropical.quantity"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ tropical.name_thai }}</a1></p>
            <p><a>name:</a> <a1>{{ tropical.name_eng }}</a1></p>
            <p><a>อายุ:</a> <a1>{{ tropical.age }}</a1></p>
            <p><a>ปีเกิด:</a> <a1>{{ tropical.birth }}</a1></p>
            <p><a>สุขภาพ:</a> <a1>{{ tropical.health }}</a1></p>
            <p><a>จำนวน:</a> <a1>{{ tropical.quantity }}</a1></p>
            <p></p>
        </div>

    </div>
</template>
<script>
import TropicalService from '@/services/TropicalService'
export default {
    data() {
        return {
            tropical: {
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
        async editTropical() {
            try {
                await TropicalService.put(this.tropical)
                this.$router.push({
                    name: 'tropicals'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let tropicalId = this.$route.params.tropicalId
            this.tropical = (await TropicalService.show(tropicalId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>