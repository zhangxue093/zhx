<template>
  <div class="container">
    <!-- 登录卡片 -->
    <el-card>
      <!-- logo -->
      <img src="../../assets/logo_index.png" width="200px" alt />
      <!-- 表单 -->
      <el-form ref="loginForm" :model="loginForm" status-icon :rules="rules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            style="width:235px;margin-right:10px"
            placeholder="请输入验证码"
             @keyup.enter.native="login"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import local from '@/utils/local.js'
export default {
  data () {
    var zhengze = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号不对哦'))
      }
    }
    return {
      loginForm: {
        mobile: '15942332952',
        code: '246810'
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: zhengze, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码是六位哦', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      //       async&await
      // - 基于promise去使用
      // - await 修饰的返回promise的函数  的返回值是 promise成功的结果
      // - await 必须在 async 修饰的函数内使用
      // - await 修饰的函数是 同步执行 阻塞程序运行
      // - async 修饰的函数是异步执行
      // 获取表单组件实例==>调用校验函数
      this.$refs['loginForm'].validate(async valid => {
        if (valid) {
          // 当一段代码不能保证一定没有报错 try {} catch (e) {} 捕获异常处理异常
          try {
            const { data: { data } } = await this.$http.post('authorizations', this.loginForm)
            local.setUser(data)
            this.$router.push('/')
          } catch (e) {
            this.$message.error('手机号或验证码错误')
          }
        }
      })
    }
  }
}
</script>
<style scoped >
.container {
  width: 100%;
  height: 100%;
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  position: absolute;
  left: 0;
  top: 0;
}
.el-card {
  width: 400px;
  height: 370px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
img {
  display: block;
  margin: 0 auto 30px;
}
</style>
