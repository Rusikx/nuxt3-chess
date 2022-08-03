<template>
  <div class="figure">
    <img
      v-if="code && figureImage"
      :src="`../../static/figures/${figureImage}`"
      alt=""
    >
  </div>
</template>

<script lang="ts">
import { BoardPosition } from '~/types/board'
import { figures } from '~/configs/figures'

interface Props {
  code: number,
  position: BoardPosition,
}

export default {
  name: 'BaseFigure',
  props: {
    code: Number,
    position: Object
  },
  setup (props: Props) {
    const figureImage = figures.find(s => s.index === props.code)?.image.white

    // eslint-disable-next-line vue/no-dupe-keys
    return { code: props.code, figureImage }
  }
}
</script>

<style lang="scss" scoped>
.figure {
  width: 100%;
  height: 100%;
}
</style>
