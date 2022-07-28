<template>
  <div class="board">
    <template :key="`row-${i}`" v-for="(row, i) in getInitial">
      <template :key="`cell-${j}`" v-for="(cell, j) in row">
        <TheCell
          :position="{x:i, y:j}"
          :figure="getFigure({x:i, y:j})"
          :is-white="cell !== 1"
        />
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import {useBoardStore} from "~/store/board";
import {storeToRefs} from "pinia";
import { BoardPosition } from "~/types/board";
import TheCell from "~/components/TheCell.vue";

export default {
  name: "TheBoard",
  components: {TheCell},
  setup() {
    const board = useBoardStore() // state

    const { getInitial, getActive } = storeToRefs(board) // getters

    const getFigure = (value: BoardPosition) => {
      return getActive.value[value.x][value.y]
    }

    return { getInitial, getFigure }
  },
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
