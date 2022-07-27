<template>
  <div class="board">
    <template v-for="(row, i) in boardDefault">
      <TheCell
        v-for="(cell, j) in row"
        :key="`${i}-${j}`"
        :position="{i, j}"
        :figure="getFigure(i, j)"
        :is-white="cell !== 1"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheCell from "../organisms/TheCell";

export default {
  name: "TheBoard",
  components: {
    TheCell,
  },
  data() {
    return {
      COUNT_CELL: 64,
    }
  },
  computed: {
    ...mapGetters({
      boardDefault: 'board/default',
      boardActive: 'board/active',
    }),
  },
  methods: {
    move(x, y, a, b) {
      this.$store.commit('board/SET_MOVE', {x, y, a, b})
    },
    getFigure(i, j) {
      return this.boardActive[i][j]
    },
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
