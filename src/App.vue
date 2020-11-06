<!--
 * @Date: 2020-11-02 16:22:08
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-06 10:23:15
-->
<template>
  <div class="container">
    <global-header :user="currentUser" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlobalHeader, {UserProps} from "@/components/GlobalHeader.vue";
import 'bootstrap/dist/css/bootstrap.min.css';

const currentUser: UserProps = {
  isLogin: false
}

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader
  },
  setup(){
    return {
      currentUser
    }
  }
});
</script>