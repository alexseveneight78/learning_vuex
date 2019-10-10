<template>
    <div>
        <div class="boxes">
            <div class="panel">
                <div class="heading">
                    NAME<span>PRICE</span>
                </div>
                <div class="content">
                    <input 
                        type="number"
                        placeholder="Quantity"
                        v-model="quantity"
                        >
                </div>
                <button></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            quantity: 0
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>