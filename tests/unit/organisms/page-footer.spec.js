import { shallowMount } from '@vue/test-utils'
import PageFooter from '@/components/organisms/PageFooter'

describe('PageFooter.vue', () => {
  const wrapper = shallowMount(PageFooter)
  it('has page-footer component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
