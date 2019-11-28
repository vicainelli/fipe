import { shallowMount } from '@vue/test-utils'
import Home from '@/components/pages/Home'
import BaseTemplate from '@/components/templates/BaseTemplate'

describe('Home.vue', () => {
  const wrapper = shallowMount(Home)
  it('has page:home component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has base-template child component', () => {
    expect(wrapper.find(BaseTemplate).exists()).toBe(true)
  })
})
