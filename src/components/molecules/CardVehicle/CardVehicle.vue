<template>
  <div class="p-3 border border-gray-100 rounded shadow-lg">
    <div>
      <span class="text-sm uppercase font-semibold text-gray-600">{{ data.marca }}</span>
    </div>
    <h2 class="font-bold text-gray-800">{{ data.name }}</h2>
    <div class="my-3">
      <ul class="list flex">
        <li class="mr-2" v-if="data.ano_modelo">{{ data.ano_modelo }}</li>
        <li class="mr-2" v-if="data.combustivel">{{ data.combustivel }}</li>
      </ul>
    </div>
    <span class="text-xl">
      <strong>{{ data.preco }}</strong>
    </span>
  </div>
</template>

<script>
export default {
  name: 'vehicle-title',
  props: {
    data: {
      type: Object,
      default: undefined
    }
  }
}
</script>
