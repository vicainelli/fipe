<template>
  <div>
    <div v-if="brands.length >= 1">
      <label class="text-gray-600 text-sm font-semibold tracking-wide uppercase" for>Marca</label>
      <select @change="getVehicles($event)" class="form-select w-full mt-1" name="brand" id="brand">
        <option selected value="0" disabled>Selecione</option>
        <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{ brand.fipe_name }}</option>
      </select>
    </div>

    <div v-if="vehicles.length >= 1">
      <label class="text-gray-600 text-sm font-semibold tracking-wide uppercase" for>Veículo</label>
      <select
        :disabled="vehicles.length == 0"
        @change="getModels($event)"
        class="form-select w-full mt-1"
        name="vehicle"
        id="vehicle"
      >
        <option selected value="0" disabled>Selecione</option>
        <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">{{ vehicle.fipe_name }}</option>
      </select>
    </div>

    <div v-if="models.length >= 1">
      <label class="text-gray-600 text-sm font-semibold tracking-wide uppercase" for>Modelo</label>
      <select
        :disabled="models.length == 0"
        @change="getVehicleData($event)"
        class="form-select w-full mt-1"
        name="model"
        id="model"
      >
        <option selected value="0" disabled>Selecione</option>
        <option v-for="model in models" :key="model.id" :value="model.id">{{ model.name }}</option>
      </select>
    </div>
    <Loading v-if="loading" />
    <CardVehicle class="mt-8" v-if="vehicleData" :data="vehicleData" />
  </div>
</template>

<script>
import axios from 'axios'
import CardVehicle from '@/components/molecules/CardVehicle'
import Loading from '@/components/atoms/Loading'
export default {
  name: 'form-calculate-vehicle-price',
  components: {
    CardVehicle,
    Loading
  },
  data: function() {
    return {
      loading: false,
      vehicleId: 0,
      modelId: 0,
      brands: [],
      vehicles: [],
      models: [],
      vehicleData: null
    }
  },
  created() {
    this.getBrands()
  },
  methods: {
    getBrands: function() {
      this.loading = true
      axios.get('https://fipeapi.appspot.com/api/1/carros/marcas.json').then(res => {
        this.brands = res.data
        this.loading = false
      })
    },
    getVehicles: function(event) {
      this.loading = true
      this.vehicles = []
      this.models = []
      this.vehicleData = null
      axios.get(`https://fipeapi.appspot.com/api/1/carros/veiculos/${event.target.value}.json`).then(res => {
        this.vehicles = res.data
        this.vehicleId = event.target.value
        this.loading = false
      })
    },
    getModels: function(event) {
      this.loading = true
      this.models = []
      this.vehicleData = null
      axios
        .get(`https://fipeapi.appspot.com/api/1/carros/veiculo/${this.vehicleId}/${event.target.value}.json`)
        .then(res => {
          this.models = res.data
          this.modelId = event.target.value
          this.loading = false
        })
    },
    getVehicleData: function(event) {
      this.loading = true
      this.vehicleData = null
      axios
        .get(
          `https://fipeapi.appspot.com/api/1/carros/veiculo/${this.vehicleId}/${this.modelId}/${event.target.value}.json`
        )
        .then(res => {
          this.vehicleData = res.data
          this.loading = false
        })
    }
  }
}
</script>
