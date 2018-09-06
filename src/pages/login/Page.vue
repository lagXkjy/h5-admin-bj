<template>
  <fade>
    <div class="loginPage">
      <div class="svgPage" :style="bgStyle2">
        <div class="loginCard">
          <div class="loginLogo" :style="bgStyle"></div>
          <div class="adminName">好享瘦</div>
          <div class="adminName">智能健身房后台</div>
          <div class="enName">SMART GYM BACKSTAGE</div>
        </div>
        <div class="loginInputBox shadow">
          <div class="loginTitle">登录</div>
          <div class="loginUserName">
            <el-input v-model="userNameInput" placeholder="请输入用户名" clearable @keyup.enter.native="userLogin" :autofocus="true"></el-input>
          </div>
          <div class="loginPassword">
            <el-input v-model="passwordInput" type="password" placeholder="请输入密码" clearable @keyup.enter.native="userLogin"></el-input>
          </div>
          <div class="loginButton">
            <el-button type="primary" @click="userLogin">登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </fade>
</template>

<script>
import Fade from 'components/transitions/Fade';

import Logo_svg from './logo.svg';
import Logo_svg2 from './logo2.svg';

import Logo from 'components/Logo';

import { mapMutations, mapActions } from 'vuex';

import { setToken } from 'common/utils';

export default { 
  data() {
    return {
      userNameInput: '',
      passwordInput: '',
      bgStyle: {
        backgroundImage: `url(${Logo_svg})`,
        backgroundSize: '100% 100%'
      },
      bgStyle2: {
        // backgroundColor: 'rgba(0,0,0,0.1)',
        backgroundImage: `url(${Logo_svg2})`,
        backgroundSize: '100% 100%',

      }
    };
  },
  components: {
    Fade,
    Logo
  },
  methods: {
    ...mapMutations(['setLogin']),
    ...mapActions(['login']),
    userLogin() {
      let params = {
        username: this.userNameInput,
        password: this.passwordInput
      };
      this.$message.warning('正在登陆...');
      this.login(params)
        .then(res => {
          // 本地存储
          localStorage.setItem('userInformation', JSON.stringify(res.userManager));
          this.loginSuccess();
          this.$router.push({ path: '/home', replace: true });
          window.location.reload();
          // window.location.href = window.location.href;
        })
        .catch(error => {
          this.loginFail(error);
        });
    },
    loginSuccess() {
      this.$message({
        message: '登录成功',
        type: 'success'
      });
    },
    loginFail(error) {
      this.$message.error(
        error ? error : '您输入的账号或密码不正确, 请重新输入'
      );
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/style/utils';

.loginPage {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 100px;
  position: relative;
  background-color: #515151;
}
.svgPage {
  width: 100%;
  height: 100%;
}
.loginCard {
  width: 70%;
  height: 300px;
  background-color: #1f52f1;
  position: absolute;
  top: 200px;
  left: 15%;
  opacity: 0.8;
  color: #ffffff;
  box-sizing: border-box;
  padding: {
    top: 30px;
    left: 30px;
    right: 25px;
    bottom: 20px;
  }
}
.loginLogo {
  width: 60px;
  height: 40px;
}
.adminName {
  font-size: 40px;
}
.enName {
  font-weight: 100;
  padding: {
    top: 70px;
  }
}
.loginTitle {
  text-align: center;
  font-size: 30px;
  line-height: 50px;
  font-weight: 200;
}
.loginInputBox {
  width: 400px;
  height: 400px;
  box-sizing: border-box;
  // border: 1px solid black;
  position: absolute;
  left: 50%;
  top: 150px;
  padding: {
    top: 40px;
  }
  background-color: #ffffff;
  @include flexbox;
  // @include justify-content(center);
  // @include align-items(center);
  @include flex-direction(column);
}

.loginUserName,
.loginPassword {
  margin: {
    top: 10px;
    bottom: 5px;
  }
  padding: {
    left: 20px;
    right: 20px;
  }
}
.loginButton {
  margin: 0 auto;
  margin: {
    top: 40px;
  }
}
</style>
