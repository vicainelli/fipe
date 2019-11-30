<template>
  <div class="loading-bg fixed w-screen h-screen top-0 left-0 right-0 bottom-0 z-10 text-white">
    <div class="flex justify-center items-center border h-full w-full">
      <img class="h-20" src="@/assets/images/loading.gif" alt="carregando dados" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style scoped>
.loading-bg {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
