<template>
    <div>
        <div class="boxes">
            <div class="panel">
                {{ stockProps.id }}
                <div class="heading">
                    {{ stockProps.name }}<span> ({{ stockProps.price }})</span>
                </div>
                <div class="content">
                    <input 
                        type="number"
                        placeholder="Quantity"
                        v-model="quantity"
                        >
                </div>
                <button
                    :disabled="quantity <=0"
                >Buy</button>
            </div>
            <div class="num">Num is: {{ num }}</div>
            <button @click="increase">Increment</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stockProps'],
    data(){
        return {
            quantity: 0
        }
    },
    methods: {
        increase(){
            this.$store.commit('plus');
        }
    },
    computed: {
        num(){
            return this.$store.getters.num;
        }
    }
}
</script>

<style scoped>
    span {
        color: green;
        font-weight: bold;
    }
</style>