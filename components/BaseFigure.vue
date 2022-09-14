<template>
  <div class="figure">
    <img
      v-if="figureImage"
      :src="`../../static/figures/${figureImage}`"
      alt=""
    >
  </div>
</template>

<script lang="ts">
import { BoardPosition } from '~/types/board'
import { FigureActive } from '~/types/figure'
import { figures } from '~/configs/figures'

interface Props {
  figure: FigureActive,
  position: BoardPosition,
}

export default {
  name: 'BaseFigure',
  props: {
    figure: Object,
    position: Object
  },
  setup (props: Props) {
    const figureImages = figures.find(s => s.key === props.figure.type)?.image
    let figureImage = figureImages.black

    if (props.figure.color === 'w') {
      figureImage = figureImages.white
    }

    // eslint-disable-next-line vue/no-dupe-keys
    return { figureImage }
  }
}
</script>

<style lang="scss" scoped>
.figure {
  width: 100%;
  height: 100%;
}
</style>
