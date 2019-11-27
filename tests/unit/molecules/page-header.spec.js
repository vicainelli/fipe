import { shallowMount } from '@vue/test-utils'
import PageHeader from '@/components/molecules/PageHeader'
import VolantyLogo from '@/components/atoms/VolantyLogo'

describe('PageHeader.vue', () => {
  const wrapper = shallowMount(PageHeader)
  it('has page-header component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has volanty logo child component', () => {
    expect(wrapper.find(VolantyLogo).exists()).toBe(true)
  })
})
