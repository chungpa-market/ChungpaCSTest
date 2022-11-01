<template>
  <div id="app">
    <header class="header">
      <h1>
        <a href=""
          ><img
            src="../src/assets/res/로고3.jpg"
            width="55"
            height="51"
            alt="로고이미지"
          />청파마켓</a
        >
      </h1>
      <div class="search-box">
        <input type="text" />
        <a href="" class="icon">
          <img
            src="../src/assets/res/검색 아이콘.png"
            width="20"
            height="20"
            alt="검색 버튼 아이콘"
          />
        </a>
      </div>
      <div class="login">
        <a href="">
          <img
            src="../src/assets/res/청파톡.png"
            width="36px"
            height="33px"
            alt="채팅 아이콘"
          />
        </a>
        <a href="">
          <img
            src="../src/assets/res/내정보.png"
            width="51px"
            height="47px"
            alt="내 정보 아이콘"
          />
        </a>
        <a href="" id="login">로그인</a>
        <a href="" id="join">회원가입</a>
      </div>
    </header>
    <div>
      <nav>
        <ul class="nav">
          <li>
            <a class="category-container" href="">
              <div class="category-vector">
                <div></div>
                <div></div>
                <div></div>
              </div>
              카테고리
            </a>
            <ul class="category">
              <li>
                <a href="">도서</a>
                <ul class="submenu">
                  <li><a href="#">Service One</a></li>
                  <li><a href="#">Service Two</a></li>
                  <li><a href="#">Service Three</a></li>
                </ul>
              </li>
              <li>
                <a href="">도서</a>
                <ul class="submenu">
                  <li><a href="#">Service One</a></li>
                  <li><a href="#">Service Two</a></li>
                  <li><a href="#">Service Three</a></li>
                </ul>
              </li>
              <li><a href="">도서</a></li>
              <li><a href="">도서</a></li>
            </ul>
          </li>
          <li>
            <router-link href="" to="/sell">팔아요</router-link>
          </li>
          <li>
            <router-link href="" to="/buy">살래요</router-link>
          </li>
          <li>
            <router-link href="" to="/share">나눠요</router-link>
          </li>
        </ul>
      </nav>
      <div class="line" id="line1"></div>

</template>

<script>
    export default{
        name: 'app',
        data(){
            return{   
            }
        }
    }
</script>