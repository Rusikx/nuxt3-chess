<template>
  <TheBoard />
</template>

<script>
import { Chess } from 'chess.ts'
import TheBoard from './components/TheBoard'
import { useBoardStore } from '~/store/board'

export default {
  components: { TheBoard },
  setup () {
    const chess = new Chess()

    const board = useBoardStore() // state

    const { setBoardActive } = board // actions

    setBoardActive(chess.board())
    while (!chess.gameOver()) {
      const moves = chess.moves()
      const move = moves[Math.floor(Math.random() * moves.length)]

      chess.move(move)
    }
    // console.log(chess.pgn())
    // console.log(chess.board())
  }
}
</script>

<style>
.test {
  width: 200px;
  height: 100px;
}
</style>
