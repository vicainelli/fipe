import { shallowMount } from '@vue/test-utils'
import FormCalculateVehiclePrice from '@/components/organisms/FormCalculateVehiclePrice'

describe('FormCalculateVehiclePrice.vue', () => {
  const wrapper = shallowMount(FormCalculateVehiclePrice)

  it('has form-calculate-vehicle-price component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has 3 select elements', () => {
    expect(wrapper.findAll('select').length).toBe(3)
  })
})
