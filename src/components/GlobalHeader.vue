<!--
 * @Date: 2020-11-04 20:23:05
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-05 15:25:38
-->
<template>
  <nav class="navbar navbar-dark bg-dark justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">
      VUE3DEMO
    </a>
    <ul class="list-inline mb-0" v-if="!user.isLogin">
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2" href="#">登录</router-link>
      </li>
      <li class="list-inline-item">
        <router-link to="/register" class="btn btn-outline-light my-2" href="#">注册</router-link>
      </li>
    </ul>
    <ul class="list-inline mb-0" v-else>
      <li class="list-inline-item">
        <drop-down :title="`你好 ${user.name}`">
          <dropdown-item>新建专栏</dropdown-item>
          <dropdown-item>编辑资料</dropdown-item>
          <dropdown-item>退出登录</dropdown-item>
        </drop-down>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';
import DropDown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';

export interface UserProps{
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  components: {
    DropDown,
    DropdownItem
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
