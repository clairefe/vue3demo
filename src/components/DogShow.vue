<!--
 * @Date: 2020-11-02 16:22:08
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-04 11:14:45
-->
<template>
  <div class="show">
    <img :src="result.message && result.message" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'DogShow',
  async setup(){
    const raw = await axios.get('https://dog.ceo/api/breeds/image/random')

    return {
      result: raw.data
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
