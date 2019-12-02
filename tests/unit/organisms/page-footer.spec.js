import { shallowMount } from '@vue/test-utils'
import PageFooter from '@/components/organisms/PageFooter'

const msg = 'By Vinicius Cainelli, hosted on Netflify, code on GitHub'

describe('PageFooter.vue', () => {
  const wrapper = shallowMount(PageFooter)
  it('has page-footer component', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('it should render the message', () => {
    expect(wrapper.text()).toMatch(msg)
  })
})
