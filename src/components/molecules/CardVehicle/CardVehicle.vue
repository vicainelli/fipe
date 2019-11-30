<template>
  <div class="p-3 border border-gray-100 rounded shadow-lg bg-white">
    <div>
      <span class="text-sm uppercase font-light tracking-wider text-gray-800">{{ data.marca }}</span>
    </div>
    <h2 class="font-bold text-gray-800 tracking-wide text-gray-600">{{ data.name }}</h2>
    <div class="my-3">
      <ul class="list flex">
        <li class="mr-2" v-if="data.ano_modelo">
          <span class="bg-blue-500 text-white p-1 rounded text-xs uppercase tracking-wide">{{ data.ano_modelo }}</span>
        </li>
        <li class="mr-2" v-if="data.combustivel">
          <span class="bg-blue-500 text-white p-1 rounded text-xs uppercase tracking-wide">{{ data.combustivel }}</span>
        </li>
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
