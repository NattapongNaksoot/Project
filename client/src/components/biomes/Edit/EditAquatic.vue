<template>
    <div>
        <h1><span>Edit Aqatic Animals</span></h1>
        <form v-on:submit.prevent="editAquatic">
            <p>ชื่อ: <input type="text" v-model="aquatic.name_thai"></p>
            <p>name: <input type="text" v-model="aquatic.name_eng"></p>
            <p>อายุ: <input type="text" v-model="aquatic.age"></p>
            <p>ปีเกิด: <input type="text" v-model="aquatic.birth"></p>
            <p>สุขภาพ: <input type="text" v-model="aquatic.health"></p>
            <p>จำนวน: <input type="text" v-model="aquatic.quantity"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ aquatic.name_thai }}</a1></p>
            <p><a>name:</a> <a1>{{ aquatic.name_eng }}</a1></p>
            <p><a>อายุ:</a> <a1>{{ aquatic.age }}</a1></p>
            <p><a>ปีเกิด:</a> <a1>{{ aquatic.birth }}</a1></p>
            <p><a>สุขภาพ:</a> <a1>{{ aquatic.health }}</a1></p>
            <p><a>จำนวน:</a> <a1>{{ aquatic.quantity }}</a1></p>
            <p></p>
        </div>

    </div>
</template>
<script>
import AquaticService from '@/services/AquaticService'
export default {
    data() {
        return {
            aquatic: {
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
        async editAquatic() {
            try {
                await AquaticService.put(this.aquatic)
                this.$router.push({
                    name: 'aquatics'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let aquaticId = this.$route.params.aquaticId
            this.aquatic = (await AquaticService.show(aquaticId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>