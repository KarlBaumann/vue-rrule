<template>
    <div id="app">
        <recurrence rrule="FREQ=WEEKLY;COUNT=30;WKST=MO" @change="rruleChanged"></recurrence>
    </div>
</template>

<script>
    import Recurrence from './Recurrence.vue'

    export default {
        name: 'App',

        components: {
            'recurrence': Recurrence,
        },

        methods: {
            rruleChanged(value) {
                console.log(value)
            }
        }
    }
</script>
