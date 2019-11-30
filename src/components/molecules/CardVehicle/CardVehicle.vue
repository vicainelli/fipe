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

// ano_modelo:"2013"
// combustivel:"Gasolina"
// fipe_codigo:"009159-6"
// id:"2013"
// key:"118ia-2013"
// marca:"BMW"
// name:"118iA/ Urban/Sport 1.6 TB 16V 170cv 5p"
// preco:"R$ 65.520,00"
// referencia:"novembro de 2019"
// time:0.01999999999998181
// veiculo:"118iA/ Urban/Sport 1.6 TB 16V 170cv 5p"
