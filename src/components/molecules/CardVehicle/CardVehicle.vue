<template>
  <div class="p-3 border border-gray-100 rounded shadow-lg bg-white">
    <div>
      <span class="text-sm uppercase font-light tracking-wider text-gray-800">{{ data.marca }}</span>
    </div>
    <h2 class="font-bold text-gray-800 tracking-wide text-gray-600 mt-1">{{ data.name }}</h2>
    <div class="my-2">
      <ul class="list flex items-center">
        <li class="mr-3" v-if="data.ano_modelo">
          <span class="text-gray-600">{{ data.ano_modelo }}</span>
        </li>
        <li>
          <div class="w-px h-4 bg-gray-600"></div>
        </li>
        <li class="ml-3" v-if="data.combustivel">
          <span class="text-gray-600">{{ data.combustivel }}</span>
        </li>
      </ul>
    </div>
    <span class="text-lg text-volanty-500">
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
