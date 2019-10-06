<template>
    <div>
        <p>Number of clicks: {{ stringCounter }}</p>
        <p>Counter is: {{ doubleCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: { 
                ...mapGetters([
                    'doubleCounter',
                    'stringCounter'
            ])
        }
    }
</script>