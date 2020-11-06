<!--
 * @Date: 2020-11-02 16:22:08
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-05 11:29:24
-->
<template>
  <a class="dropdown-item" :class="{'disabled': isDisabled}"><slot></slot></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DropdownItem',
  props: {
    isDisabled: {
      type: Boolean
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
