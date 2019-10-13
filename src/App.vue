<template>
    <div class="container">
        <app-stocks></app-stocks>
    </div>
</template>

<script>
    import Stocks from './components/stocks/Stocks'
    export default {
        components: {
            appStocks: Stocks
        }   
    }
</script>

