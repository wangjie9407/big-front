<template>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item label="账号">
      <a-input
        placeholder="请输入账号"
        v-decorator="['name', { rules: [{ required: true, message: '请输入账号!' }] }]"
      />
    </a-form-item>
    <a-form-item label="密码">
      <a-input
        type="password"
        placeholder="请输入密码"
        v-decorator="['pwd', { rules: [{ required: true, message: '请输入密码!' }] }]"
      />
    </a-form-item>
    <a-form-item label="验证码">
      <a-input
        placeholder="请输入验证码"
        v-decorator="['code', { rules: [{ required: true, message: '请输入验证码!' }, 
                                        { validator: (rule, val, callback) => {codeCheck(rule, val, callback)}}
                                       ]}]"
      />
    </a-form-item>
      <div style="padding-left: 352px;margin-bottom:25px;width:150px;" class="code-box" @click="getCaptcha" v-html="code"></div>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        提交
      </a-button>
      <span class="forget-pwd" @click="forgetPwd">忘记密码</span>
    </a-form-item>
  </a-form>
</template>

<script>
import {getCaptcha} from '../apis/login'
export default {
  name:'Login',
  created () {
    this.getCaptcha();
  },
  data() {
    return {
      formLayout: 'horizontal', // 表单布局
      form: this.$form.createForm(this, { name: 'Login' }), // 表单对象
      code:null, // 验证码图片
      codeTxt: '', // 验证码文本
    };
  },
  methods: {
    // 表单提交
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields();
    },
    // 获取一验证码
    getCaptcha(){
      getCaptcha().then(res => {
        const {data,text} = res.data
        this.code  = data;
        this.codeTxt = text;
      }).catch(e => {this.$message.error('请求验证码失败');})
    },
    // 验证码校验
    codeCheck(rule, val, callback){
      if(!val) return;
      if(val.length<4 || val.length>4) {
        callback('请确认验证码的长度')
      } 
      if(val.length==4 && (val !== this.codeTxt && val !== this.codeTxt.toLowerCase())){
        callback('您输入的验证码有误，请重输')
      }
      callback()
    },
    // 跳转至忘记密码
    forgetPwd(){
      this.$emit('forgetPwd')
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