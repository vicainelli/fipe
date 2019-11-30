<template>
  <div>
    <label class="text-gray-600 text-sm font-semibold tracking-wide uppercase" for>Marca</label>
    <select @change="getVehicles($event)" class="form-select w-full mt-1" name id>
      <option selected value="0" disabled>Selecione</option>
      <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{ brand.fipe_name }}</option>
    </select>
    <label class="text-gray-600 text-sm font-semibold tracking-wide uppercase" for>Veículo</label>
    <select @change="getModels($event)" class="form-select w-full mt-1" name id>
      <option selected value="0" disabled>Selecione</option>
      <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">{{ vehicle.fipe_name }}</option>
    </select>
    <label class="text-gray-600 text-sm font-semibold tracking-wide uppercase" for>Modelo</label>
    <select class="form-select w-full mt-1" name id>
      <option value></option>
    </select>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'form-calculate-vehicle-price',
  data: function() {
    return {
      brands: [],
      vehicles: [],
      vehicleId: 0,
      models: []
    }
  },
  created() {
    this.getBrands()
  },
  methods: {
    getBrands: function() {
      axios.get('https://fipeapi.appspot.com/api/1/carros/marcas.json').then(res => {
        this.brands = res.data
      })
    },
    getVehicles: function(event) {
      axios.get(`https://fipeapi.appspot.com/api/1/carros/veiculos/${event.target.value}.json`).then(res => {
        this.vehicles = res.data
        this.vehicleId = event.target.value
      })
    },
    getModels: function(event) {
      axios
        .get(`https://fipeapi.appspot.com/api/1/carros/veiculos/${this.vehicleId}/${event.target.value}.json`)
        .then(res => {
          this.models = res.data
        })
    }
  }
}
</script>
