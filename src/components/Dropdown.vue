<!--
 * @Date: 2020-11-02 16:22:08
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-05 13:43:49
-->
<template>
  <div class="dropdown" ref="dropdownRef">
    <button type="button" class="btn btn-secondary dropdown-toggle" @click="toggleVisible">
      {{title}}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" :style="{display: visible ? 'block' : 'none'}">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import useClickOutside from '@/hooks/useClickOutside';

export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props, context){
    const visible = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleVisible = () => {
      visible.value = !visible.value
    }

    const { isClickOutside } = useClickOutside(dropdownRef)

    watch(isClickOutside, () => {
      if(visible.value && isClickOutside.value){
        visible.value = false
      }
    })

    return {
      visible,
      toggleVisible,
      dropdownRef
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
