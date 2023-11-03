<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Add Savanna Animals</span></h1>
                <form class="register-form" v-on:submit.prevent="createSavanna">
                    <input type="text" placeholder="ชื่อ *" v-model="savanna.name_thai" required>
                    <input type="text" placeholder="name" v-model="savanna.name_eng">
                    <input type="text" placeholder="อายุ *" v-model="savanna.age" required>
                    <input type="text" placeholder="ปีเกิด" v-model="savanna.birth">
                    <input type="text" placeholder="สุขภาพ" v-model="savanna.health">
                    <input type="text" placeholder="จำนวน" v-model="savanna.quantity" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/savannas')">กลับ</button>
                </form>
            </div>
        </div>
    </div2>
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
                quantity: '',
            }
        }
    },
    methods: {
        async createSavanna() {
            try {
                await SavannaService.post(this.savanna)
                this.$router.push({
                    name: 'savannas'
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
   