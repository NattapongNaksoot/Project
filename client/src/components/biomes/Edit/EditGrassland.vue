<template>
    <div>
        <h1><span>Edit Grassland Animals</span></h1>
        <form v-on:submit.prevent="editGrassland">
            <p>ชื่อ: <input type="text" v-model="grassland.name_thai"></p>
            <p>name: <input type="text" v-model="grassland.name_eng"></p>
            <p>อายุ: <input type="text" v-model="grassland.age"></p>
            <p>ปีเกิด: <input type="text" v-model="grassland.birth"></p>
            <p>สุขภาพ: <input type="text" v-model="grassland.health"></p>
            <p>จำนวน: <input type="text" v-model="grassland.quantity"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ grassland.name_thai }}</a1></p>
            <p><a>name:</a> <a1>{{ grassland.name_eng }}</a1></p>
            <p><a>อายุ:</a> <a1>{{ grassland.age }}</a1></p>
            <p><a>ปีเกิด:</a> <a1>{{ grassland.birth }}</a1></p>
            <p><a>สุขภาพ:</a> <a1>{{ grassland.health }}</a1></p>
            <p><a>จำนวน:</a> <a1>{{ grassland.quantity }}</a1></p>
            <p></p>
        </div>

    </div>
</template>
<script>
import GrasslandService from '@/services/GrasslandService'
export default {
    data() {
        return {
            grassland: {
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
        async editGrassland() {
            try {
                await GrasslandService.put(this.grassland)
                this.$router.push({
                    name: 'grasslands'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let grasslandId = this.$route.params.grasslandId
            this.grassland = (await GrasslandService.show(grasslandId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>