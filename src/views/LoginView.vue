<template>
  <div class="login">
    <LoginComp></LoginComp>
    <nav class="option-list">
      <ul class="nav">
          <li>
              <a href="">아이디 찾기</a>
          </li>
          <div class="line" id="line2"></div>
          <li>
              <a href="">비밀번호 찾기</a>
          </li>
          <div class="line" id="line3"></div>
          <li>
              <a href="@/views/RegistrationView.vue">회원가입</a>
          </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import LoginComp from '@/components/LoginComp.vue';
  export default {
    name: 'LoginComp',
    components: {
      LoginComp,
    },
  };
</script>

<style>
.login .option-list ul{
  list-style: none;
  display: flex;
  margin-left: -30px;
  justify-content: space-evenly;
  font-size: 20px;
}

.login .option-list a{
    text-decoration-line: none;
    font-size: 18px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.3);
}

.login .option-list a:hover {
    color: #0035d3;
}

.login #line2, #line3{
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: 0px;
    height: 22px;
    border-left: 1px thick solid rgba(0, 0, 0, 0.3);
}
</style>