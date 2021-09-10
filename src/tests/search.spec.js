import { mount } from "@vue/test-utils";
import "regenerator-runtime/runtime";
import Component from "../vue/components/SearchComponent.vue";

test("Trigger search", async () => {
  const wrapper = mount(Component, {
    propsData: {
      id: 1,
      value: '5',
      topic: 'Reviews',
      itemsWithFilter: 5
    }
  });
  await wrapper.find(".filters_filter_topic_checkbox").trigger("click");
  expect(wrapper.emitted()).toHaveProperty("updateShownItemsAndFilters");
});