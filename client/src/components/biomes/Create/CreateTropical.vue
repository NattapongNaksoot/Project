<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Add Tropical Animals</span></h1>
                <form class="register-form" v-on:submit.prevent="createTropical">
                    <input type="text" placeholder="ชื่อ *" v-model="tropical.name_thai" required>
                    <input type="text" placeholder="name" v-model="tropical.name_eng">
                    <input type="text" placeholder="อายุ *" v-model="tropical.age" required>
                    <input type="text" placeholder="ปีเกิด" v-model="tropical.birth">
                    <input type="text" placeholder="สุขภาพ" v-model="tropical.health">
                    <input type="text" placeholder="จำนวน" v-model="tropical.quantity" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/tropicals')">กลับ</button>
                </form>
            </div>
        </div>
    </div2>
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
                quantity: '',
            }
        }
    },
    methods: {
        async createTropical() {
            try {
                await TropicalService.post(this.tropical)
                this.$router.push({
                    name: 'tropicals'
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
   