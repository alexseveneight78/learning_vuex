<template>
    <div>
        <app-panel></app-panel>
        <app-stock v-for="stock in stocks" :key="stock.id" :stockProps="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock';
    import Panel from './Panel'
    export default {
        components: {
            'app-stock': Stock,
            'app-panel': Panel
        },
        data(){
            return {
                stocks: [
                    { id: 1, name: 'BMW', price: 110 },
                    { id: 2, name: 'Google', price: 200 },
                    { id: 3, name: 'Apple', price: 250 },
                    { id: 4, name: 'Twitter', price: 8 }                
    ]
            }
        }
    }
</script>