<template>
    <div1>
        <h1><span>All ANIMALS IN ZOO</span></h1>
        <ul>
            <!-- <li style="--clr: #00ade1;">
            <a href="#/tefals" data-text="TEFAI">TEFAI</a>
            </li>
            <li style="--clr: #ff6493;">
            <a href="#/philipss" data-text="PHILIPS">PHILIPS</a>
            </li>
            <li style="--clr: #ffdd1c;">
            <a href="#/xiaomis" data-text="XIAOMI">XIAOMI</a>
            </li> -->
            <!-- <li style="--clr: #ffffff;">
            <a href="#/electroluxs" data-text="ELECTROLUX">ELECTROLUX</a>
            </li> -->
            <li style="--clr: #ffffff;">
            <a href="#/aquatics" data-text="aquatics">Aquatic</a>
            </li>
            <li style="--clr: #ffffff;">
            <a href="#/tropicals" data-text="tropical">Tropical</a>
            </li>
            <li style="--clr: #ffffff;">
            <a href="#/savannas" data-text="savanna">Savanna</a>
            </li>
            <li style="--clr: #ffffff;">
            <a href="#/trundras" data-text="Trundra">Trundra</a>
            </li>
            <li style="--clr: #ffffff;">
            <a href="#/grasslands" data-text="Grassland">Grassland</a>
            </li>
           
            
        </ul>
    </div1>
</template>
<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    },
}
</script>
<style scoped></style>
   