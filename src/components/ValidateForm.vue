<!--
 * @Date: 2020-11-04 20:23:05
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-06 09:38:34
-->
<template>
  <form class="validate-form-container">
    <slot></slot>
    <div class="form-group" @click.prevent="submit">
      <slot name="button">
        <button type="submit" class="btn btn-primary">登录</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, onMounted, onUnmounted } from 'vue';
import mitt from 'mitt'
export const emitter = mitt() //vue3已经把事件监听的逻辑剔除了，可以自己写发布监听模式，也可以使用框架 譬如 mitt

type ValidateFunc = () => boolean

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup(props, context){
    let funcArr: ValidateFunc[] = []
    const submit = () => {
      const result = funcArr.map(func => func()).every(result => result)
      context.emit('form-submit',result )
    }
    
    const onEmitterListener = (func?: ValidateFunc) => {
      if(func){
        funcArr.push(func)
      }
    }
    
    emitter.on("form-item-created",  onEmitterListener)

    onUnmounted(() => {
      emitter.off('form-item-created',  onEmitterListener)
      funcArr = []
    })

    return {
      submit
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.validate-form-container{
  border: 1px solid #d6d6d6;
  padding: 50px;
  margin-top: 100px;
}
</style>
