<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Add Grassland Animals</span></h1>
                <form class="register-form" v-on:submit.prevent="createGrassland">
                    <input type="text" placeholder="ชื่อ *" v-model="grassland.name_thai" required>
                    <input type="text" placeholder="name" v-model="grassland.name_eng">
                    <input type="text" placeholder="อายุ *" v-model="grassland.age" required>
                    <input type="text" placeholder="ปีเกิด" v-model="grassland.birth">
                    <input type="text" placeholder="สุขภาพ" v-model="grassland.health">
                    <input type="text" placeholder="จำนวน" v-model="grassland.quantity" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/grasslands')">กลับ</button>
                </form>
            </div>
        </div>
    </div2>
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
                quantity: '',
            }
        }
    },
    methods: {
        async createGrassland() {
            try {
                await GrasslandService.post(this.grassland)
                this.$router.push({
                    name: 'grasslands'
                })
            } catch (err) {
                console.log(err)
            }
        },
        navigateTo(route){
            this.$router.push(route)
        }
    },
}
</script>
<style scoped></style>
   