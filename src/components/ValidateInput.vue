<!--
 * @Date: 2020-11-04 20:23:05
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-05 22:24:42
-->
<template>
  <div>
    <input 
      class="form-control"
      :value="inputRef.val" 
      @blur="validate" 
      @input="updateValue"
      v-bind="$attrs"
  >
  <small v-if="inputRef.error" class="form-text text-danger">{{inputRef.message}}</small>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from 'vue';
import {emitter} from '@/components/ValidateForm.vue';
const emailReg = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/
const pwdReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/ //至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符：

interface RuleProp{
  type: 'required' | 'email' | 'password';
  message: string;
}
export type RulesProp = RuleProp[]
export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: {
      type: Array as PropType<RulesProp>,
      required: true
    },
    modelValue: String,
    // placeholder: String
  },
  inheritAttrs: false,
  setup(props, context){
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })

    const validate = () => {
      if(props.rules){
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch(rule.type){
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'password':
              passed = pwdReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }

    const updateValue = (e: KeyboardEvent) => {
      const value = (e.target as HTMLInputElement).value
      inputRef.val = value
      context.emit('update:modelValue', value)
    } 

    onMounted(() => {
      emitter.emit('form-item-created', validate)
    })

    return {
      inputRef,
      validate,
      updateValue
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// .column-container{
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid #d6d6d6;
//   width: 200px;
//   img{
//     width: 40px;
//     height: 4 0px;
//     border-radius: 100%;
//   }
//   h5{
//     font-size: 8px;
//   }
//   p{
//     font-size: 6px;
//   }
//   a{
//     font-size: 4px;
//   }
// }
</style>
