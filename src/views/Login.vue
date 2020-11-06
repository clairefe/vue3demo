<!--
 * @Date: 2020-11-02 16:22:08
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-06 11:24:11
-->
<template>
  <div class="row justify-content-md-center">
    <div class="col col-sm-2">
    </div>
    <div class="col-md-auto">
      <validate-form @form-submit="onFormSubmit">
        <!-- <template> -->
          <div class="form-group">
            <label>邮箱地址</label>
            <validate-input :rules="emailRule" v-model="emailVal" type="email" placeholder="请输入邮箱" :ref="inputRef" />
          </div>
          <div class="form-group">
            <label>密码</label>
            <validate-input :rules="pwdRule" v-model="pwdVal" type="password" placeholder="请输入密码" />
          </div>
        <!-- </template> -->
        <!-- <template #button>
          <button type="submit" class="btn btn-primary">登录</button>
        </template> -->
      </validate-form>
    </div>
    <div class="col col-sm-2">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {useRouter} from "vue-router";
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue';
import ValidateForm from '@/components/ValidateForm.vue';

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup(){
    const emailVal = ref('hhhhh@163.com')
    const pwdVal = ref('111111')
    const inputRef = ref<any>(null)
    const router = useRouter()

    const emailRule: RulesProp = [{
      type: 'required',
      message: '邮箱不能为空！'
    },{
      type: 'email',
      message: '邮箱格式不正确！'
    }]

    const pwdRule: RulesProp = [{
      type: 'required',
      message: '密码不能为空！'
    }
    // ,{
    //   type: 'password',
    //   message: '密码格式不正确！'
    // }
    ]

    const onFormSubmit = (result: any) => {
      console.log(result)
      if(result){
        router.push('/detail/1')
      }
    }

    return {
      emailRule,
      pwdRule,
      emailVal,
      pwdVal,
      onFormSubmit,
      inputRef
    }
  }
});
</script>

<style scoped lang="less">
  .form-group{
    margin-bottom: 20px;
  }
</style>

