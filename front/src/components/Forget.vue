<template>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item label="邮箱">
      <a-input
        placeholder="请输入邮箱"
        v-decorator="['email', { rules: [{ required: true, message: '请输入邮箱!' }] }]"
      />
    </a-form-item>
    <a-form-item label="验证码">
      <a-input
        placeholder="请输入验证码"
        v-decorator="['code', { rules: [{ required: true, message: '请输入验证码!' }] }]"
      />
    </a-form-item>
      <div style="padding-left: 352px;margin-bottom:25px" class="code-box" @click="getCaptcha" v-html="code"></div>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        提交
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import {getCaptcha} from '../apis/login'
export default {
  name:'Forget',
  created () {
    this.getCaptcha();
  },
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      code:null,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    getCaptcha(){
      getCaptcha().then(res => {
        this.code = res.data.data;
      }).catch(e => {this.$message.error('请求验证码失败');})
    }
  },
};
</script>

<style lang="less" scoped>
.code-box{
  cursor: pointer;
}
.forget-pwd{
  margin-left: 25px;
  cursor: pointer;
  &:hover{
    color: #009688;
  }
}
</style>