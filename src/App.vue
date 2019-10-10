<template>
    <div class="container">
        <app-home></app-home>
        <app-stocks></app-stocks>
    </div>
</template>

<script>
    import Home from './components/Home'
    import Stocks from './components/stocks/Stocks'
    export default {
        components: {
            'app-home': Home,
            'app-stocks': Stocks
        }
    }
</script>

