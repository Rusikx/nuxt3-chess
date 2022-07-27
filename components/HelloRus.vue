<template>
    <div>count => {{ actualCount }}</div>
    <div>doubleCount => {{ doubleCount }}</div>
    
    <button @click="multiple">multiply</button>
    <button @click="increment">increment</button>

    <div><button @click="reset">reset</button></div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore  } from '~~/store/counter'

export default {
  setup() {
    const counter = useCounterStore()

    const { multiple } = counter
    const { actualCount, doubleCount } = storeToRefs(counter)

    const increment = () => counter.count++
    const reset = () => counter.$reset()
    
    return { actualCount, doubleCount, increment, multiple, reset  }
  },
}
</script>
