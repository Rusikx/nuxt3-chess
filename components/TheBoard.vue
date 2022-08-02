<template>
  <div class="board">
    <div v-for="(row, i) in getInitial" :key="`row-${i}`">
      <div v-for="(cell, j) in row" :key="`cell-${j}`">
        <TheCell
          :position="{x:j, y:i}"
          :figure="getFigure(getActive, {x:j, y: i})"
          :is-white="cell !== 1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import { useBoardStore } from '~/store/board'
import { BoardPosition } from '~/types/board'
import TheCell from '~/components/TheCell.vue'

export default {
  name: 'TheBoard',
  components: { TheCell },
  setup () {
    const board = useBoardStore() // state

    const { getInitial, getActive } = storeToRefs(board) // getters

    const getFigure = (list, value: BoardPosition) => {
      return list[value.x][value.y]
    }

    return { getInitial, getActive, getFigure }
  }
}
</script>

<style lang="scss" scoped>
.board {
  display: grid;
  grid-template-columns: repeat(8, 10vh);
  grid-template-rows: repeat(8, 10vh);
  width: 100%;
  height: 100%;
  background-color: aqua;
}
</style>
