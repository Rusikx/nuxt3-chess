<template>
  <div
    class="cell"
    :class="{'cell--white': isWhite, 'cell--black': !isWhite}"
  >
    <BaseFigure :code="figure" :position="position" />
  </div>
</template>

<script lang="ts">
import { SymbolKind } from 'vscode-languageserver-types'
import BaseFigure from '~/components/BaseFigure.vue'
import { BoardPosition } from '~/types/board'
import Object = SymbolKind.Object

interface Props {
  position: BoardPosition,
  figure: number,
  isWhite: boolean,
}

export default {
  name: 'TheCell',
  components: { BaseFigure },
  props: {
    position: Object,
    figure: Number,
    isWhite: Boolean
  },
  setup (props: Props) {
    return { props }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  display: block;
  width: 10vh;
  height: 10vh;

  &--white {
    background-color: white;
  }

  &--black {
    background-color: cornflowerblue;
  }
}
</style>
