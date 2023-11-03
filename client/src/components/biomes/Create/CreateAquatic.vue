<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Add Aqatic Animals</span></h1>
                <form class="register-form" v-on:submit.prevent="createAquatic">
                    <input type="text" placeholder="ชื่อ *" v-model="aquatic.name_thai" required>
                    <input type="text" placeholder="name" v-model="aquatic.name_eng">
                    <input type="text" placeholder="อายุ *" v-model="aquatic.age" required>
                    <input type="text" placeholder="ปีเกิด" v-model="aquatic.birth">
                    <input type="text" placeholder="สุขภาพ" v-model="aquatic.health">
                    <input type="text" placeholder="จำนวน" v-model="aquatic.quantity" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/aquatics')">กลับ</button>
                </form>
            </div>
        </div>
    </div2>
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
                quantity: '',
            }
        }
    },
    methods: {
        async createAquatic() {
            try {
                await AquaticService.post(this.aquatic)
                this.$router.push({
                    name: 'aquatics'
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
   