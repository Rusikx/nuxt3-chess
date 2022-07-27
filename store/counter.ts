import { defineStore } from 'pinia'

interface State {
  count: number
}

export const useCounterStore = defineStore({
  id: 'counter-store',
  state: (): State => {
    return {
      count: 0
    }
  },
  actions: {
    multiple() {
      console.log('multple')
      this.count = this.count * 2
    }
  },
  getters: {
    actualCount: state => state.count,
    doubleCount() {
      return this.count * 2
    }
  }
})
