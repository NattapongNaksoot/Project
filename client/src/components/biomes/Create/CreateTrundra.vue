<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Add Trundra Animals</span></h1>
                <form class="register-form" v-on:submit.prevent="createTrundra">
                    <input type="text" placeholder="ชื่อ *" v-model="trundra.name_thai" required>
                    <input type="text" placeholder="name" v-model="trundra.name_eng">
                    <input type="text" placeholder="อายุ *" v-model="trundra.age" required>
                    <input type="text" placeholder="ปีเกิด" v-model="trundra.birth">
                    <input type="text" placeholder="สุขภาพ" v-model="trundra.health">
                    <input type="text" placeholder="จำนวน" v-model="trundra.quantity" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/trundras')">กลับ</button>
                </form>
            </div>
        </div>
    </div2>
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
                quantity: '',
            }
        }
    },
    methods: {
        async createTrundra() {
            try {
                await TrundraService.post(this.trundra)
                this.$router.push({
                    name: 'trundras'
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
   