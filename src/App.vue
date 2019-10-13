<template>
    <div class="container">
<<<<<<< HEAD
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <app-another-counter></app-another-counter>
            </div>
        </div>
=======
        <app-home></app-home>
        <app-stocks></app-stocks>
>>>>>>> 5a0cee74a91ba9cfd963f53033f25decd486665c
    </div>
</template>

<script>
<<<<<<< HEAD
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AnotherCounter from './components/AnotherCounter.vue';

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter
=======
    import Home from './components/Home'
    import Stocks from './components/stocks/Stocks'
    export default {
        components: {
            'app-home': Home,
            'app-stocks': Stocks
>>>>>>> 5a0cee74a91ba9cfd963f53033f25decd486665c
        }
    }
</script>

