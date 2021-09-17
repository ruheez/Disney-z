import { mount } from '@vue/test-utils'
import Component from "../vue/components/SearchComponent.vue";

test('displays message', () => {
  const wrapper = mount(Component, {
    props: {
      msg: 'Hello world'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})