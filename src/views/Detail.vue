<!--
 * @Date: 2020-11-02 16:22:08
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-06 13:14:01
-->
<template>
  <div class="todo-list text-center mg20">
    <h3 class="mg10">专栏详情</h3>
    <div class="media">
      <div class="media-body">
        <h5 class="mt-0">这个是我的专栏</h5>
        呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, getCurrentInstance } from "vue";
import {useRoute} from "vue-router";

export default defineComponent({
  name: "Detail",
  components: {
  },
  setup() {
    const route = useRoute()
    return {
      route
    };
  },
});
</script>