import { shallowMount } from '@vue/test-utils'
import BaseTemplate from '@/components/templates/BaseTemplate'
import PageHeader from '@/components/organisms/PageHeader'

describe('BaseTemplate.vue', () => {
  const wrapper = shallowMount(BaseTemplate)
  it('has base-template component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has page-header child component', () => {
    expect(wrapper.find(PageHeader).exists()).toBe(true)
  })
})
