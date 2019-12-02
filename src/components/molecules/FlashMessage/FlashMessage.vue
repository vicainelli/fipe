<template>
  <div
    class="p-3 bg-gray-300 border border-gray-400 rounded"
    :class="messageType == 'error' ? 'bg-orange-200 border-yellow-700 text-yellow-800' : ''"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'flash-message',
  props: {
    messageType: {
      type: String,
      default: undefined
    }
  }
}
</script>
