<template>
  <div>
    <div class="reviewer-profile">
      <div>
        <a href=""
          ><img
            src="../assets/res/UserCircle.png"
            width="45"
            height="45"
            alt="프로필"
        /></a>
      </div>
      <div class="profile-detail">
        <div class="reviewer-name">컴과송이</div>
        <div class="reviewer-major">컴퓨터과학과</div>
      </div>
    </div>
    <div>거래 감사합니다! 좋은 책 저렴하게 잘 쓰도록 하겠습니다!</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.reviewer-profile .profile-detail {
  padding-left: 10px;
}

.reviewer-profile .reviewer-name {
  font-size: 13px;
  margin-bottom: 3px;
}

.reviewer-profile .reviewer-major {
  font-size: 10px;
  color: #aaaaaa;
}
</style>
