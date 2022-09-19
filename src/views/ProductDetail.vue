<template>
  <main>
    <div class="selected"><span>도서</span> > <span>도서1</span></div>
    <div class="line"></div>
    <div class="product-detail-container">
      <div>
        <div class="sell-info-container">
          <div class="img-area">
            <img
              src="../assets/res/no-picture.png"
              width="367"
              height="410"
              alt="상품 사진"
            />
          </div>
          <div class="detail-area">
            <div class="product-header">
              <h2>융사글 책 팝니다</h2>
              <span>20,000원</span>
            </div>
            <div id="line2"></div>
            <div class="post-info-icon-container" id="post-info-icon-container">
              <div class="icon">
                <img
                  src="../assets/res/찜한수.png"
                  width="14"
                  height="13"
                  alt="찜한수"
                /><span>23</span>
              </div>
              <div><img src="../assets/res/세로 구분줄.png" alt="줄" /></div>
              <div class="icon">
                <img
                  src="../assets/res/조회수.png"
                  width="20"
                  height="13"
                  alt="조회수"
                /><span>60</span>
              </div>
              <div><img src="../assets/res/세로 구분줄.png" alt="줄" /></div>
              <div class="icon">
                <img
                  src="../assets/res/업로드 시간.png"
                  width="14"
                  height="14"
                  alt="업로드 시간"
                /><span>1시간 전</span>
              </div>
            </div>
            <div>
              <table>
                <tbody>
                  <tr>
                    <th><div>상품명</div></th>
                    <td><div>상품명</div></td>
                  </tr>
                  <tr>
                    <th><div>원가</div></th>
                    <td><div>20000원</div></td>
                  </tr>
                  <tr>
                    <th><div>가격 제안 받기</div></th>
                    <td>
                      <div>
                        <img
                          src="../assets/res/가격제안check.png"
                          width="18px"
                          height="18px"
                          alt="Y or N"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th><div>희망 거래 방식</div></th>
                    <td>
                      <div>
                        <span>직거래</span>
                        <span>택배 거래</span>
                        <span>사물함 거래</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th><div>거래 지역</div></th>
                    <td><div>학교</div></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="btn-container">
              <ul>
                <li>
                  <button>
                    <img
                      src="../assets/res/찜하기.png"
                      width="60px"
                      height="60px"
                      alt="찜하기"
                    />
                  </button>
                </li>
                <li>
                  <a href=""
                    ><img
                      src="../assets/res/문의하기.png"
                      width="60px"
                      height="60px"
                      alt="문의하기"
                  /></a>
                </li>
                <li>
                  <a href=""
                    ><img
                      src="../assets/res/거래btn.png"
                      width="60px"
                      height="60px"
                      alt="문의하기"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="product-detail">
          <div class="header">상품정보</div>
          <div class="line"></div>
          <div>
            <div class="product-detail-area">
              <div>#교양</div>
              <p>
                저희 학교 교양 필수인 융합적 사고와 글쓰기 책 팝니다~ 밑줄
                두어번 그은게 다입니다!
              </p>
            </div>
            <div class="seller-info-area" id="seller-info-area">
              <div class="profile" id="profile">
                <img
                  src="../assets/res/UserCircle.png"
                  width="105"
                  height="105"
                  alt="프로필"
                />
                <div class="detail">
                  <div class="name">초코송이</div>
                  <div>컴퓨터과학과</div>
                </div>
              </div>
              <div class="seller-detail-container">
                <div class="line" id="line3"></div>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <th><div>거래 횟수</div></th>
                        <td><div>50</div></td>
                      </tr>
                      <tr>
                        <th><div>신뢰 온도</div></th>
                        <td>
                          <div>
                            <progress value="80" max="100"></progress>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="line" id="line3"></div>
                <div class="deal-review-header">
                  <div>거래 후기(<span>5</span>)</div>
                  <a href=""
                    ><img
                      src="../assets/res/go.png"
                      width="7px"
                      height="14px"
                      alt=">"
                  /></a>
                </div>
                <div class="reviewers">
                  <ul>
                    <li>
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
                        <div>
                          거래 감사합니다! 좋은 책 저렴하게 잘 쓰도록
                          하겠습니다!
                        </div>
                      </div>
                    </li>
                    <div class="line" id="line3"></div>
                    <li>
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
                        <div>거래 감사합니다!</div>
                      </div>
                    </li>
                    <div class="line" id="line3"></div>
                    <li>
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
                        <div>
                          거래 감사합니다! 좋은 책 저렴하게 잘 쓰도록
                          하겠습니다!
                        </div>
                      </div>
                    </li>
                    <div class="line" id="line3"></div>
                    <li>
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
                        <div>
                          거래 감사합니다! 좋은 책 저렴하게 잘 쓰도록
                          하겠습니다!
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="line"></div>
      </div>
      <div class="other-products-container">
        <div class="header">동일 카테고리 다른 상품</div>
        <div class="other-products">
          <ul>
            <li>
              <img
                src="../assets/res/no-picture.png"
                width="190"
                height="190"
                alt="상품1"
              /><br />제목1
            </li>
            <li>
              <img
                src="../assets/res/no-picture.png"
                width="185"
                height="185"
                alt="상품2"
              /><br />제목2
            </li>
            <li>
              <img
                src="../assets/res/no-picture.png"
                width="185"
                height="185"
                alt="상품3"
              /><br />제목3
            </li>
            <li>
              <img
                src="../assets/res/no-picture.png"
                width="185"
                height="185"
                alt="상품4"
              /><br />제목4
            </li>
            <li>
              <img
                src="../assets/res/no-picture.png"
                width="185"
                height="185"
                alt="상품5"
              /><br />제목5
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
.selected {
  margin: 30px 0;
}

.selector-wrapper {
  margin: 10px 50px;
}

.selector-wrapper .label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 121px;
  height: 32px;
  border: 1px solid rgb(182, 182, 182);
  border-radius: 3px;
  background: white;
  filter: drop-shadow(-2px 4px 15px rgba(0, 7, 69, 0.15));
}

.selector-wrapper ul {
  padding-left: 0px;
  width: 121px;
  border: 1px solid rgb(182, 182, 182);
}

.selector-wrapper ul li {
  height: 32px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  padding: 0px 8px;
}

.selector-wrapper ul li:hover {
  background: #0035d3;
  color: white;
}

.sell-info-container {
  display: block;
  margin-top: 32px;
}

.sell-info-container .img-area {
  float: left;
  width: 36.5%;
}

.sell-info-container .detail-area {
  height: 100%;
  float: right;
  width: 63.5%;
}

.sell-info-container .product-header h2 {
  margin-block-start: 6px;
  margin-block-end: 7px;
  font-size: 25px;
  font-weight: 600;
}

.sell-info-container .product-header span {
  font-size: 30px;
  font-weight: 600;
}

.sell-info-container table th,
td {
  text-align: left;
  padding: 10px 10px 10px 0px;
  font-size: 13px;
}

.sell-info-container table th {
  padding-right: 80px;
}

.sell-info-container .detail-area #line2 {
  border-bottom: 1px solid #dddddd;
  margin: 20px 0 18px 0;
}

.post-info-icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#post-info-icon-container {
  width: 205px;
  margin: 4px 0;
}

.post-info-icon-container .icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-info-icon-container div span {
  font-size: 11px;
  color: #cccccc;
  padding-left: 3px;
}

.btn-container ul {
  width: 280px;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding-inline-start: 0;
}

.btn-container ul li button {
  background: none;
  padding: 0;
  width: auto;
  border: 0;
}

.clear {
  clear: both;
}

.product-detail {
  margin-top: 70px;
}

.product-detail .header {
  width: 330px;
  height: 60px;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #0035d3;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.product-detail .product-detail-area {
  margin-top: 20px;
  float: left;
  width: 70%;
}

.product-detail .product-detail-area p {
  font-size: 16px;
  font-weight: 100;
}

.product-detail .seller-info-area {
  float: right;
  width: 29%;
}

.product-detail #seller-info-area {
  display: flex;
  flex-direction: column;
  border-left: 0.5px solid #bdbdbd;
  border-right: 0.5px solid #bdbdbd;
}

.product-detail .seller-info-area #profile {
  width: 60%;
  margin: 20px auto;
  margin-bottom: 0;
}

.product-detail .seller-info-area .profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-detail .seller-info-area .profile .detail {
  text-align: center;
}

.product-detail .seller-info-area .profile .detail .name {
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 5px;
}

.product-detail .seller-info-area .seller-detail-container {
  width: 87%;
  margin: auto;
}

.product-detail .seller-info-area .seller-detail-container #line3 {
  border-bottom: 1px solid #dddddd;
  margin: 30px 0;
}

.seller-detail-container th,
.seller-detail-container td,
.deal-review-header div {
  font-size: 15px;
}

.product-detail .seller-info-area .seller-detail-container tr td {
  padding-left: 30px;
}

.product-detail .seller-info-area .deal-review-header {
  display: flex;
  justify-content: space-between;
}

.reviewers .reviewer-profile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 9px;
}

.reviewers ul {
  margin-block-start: 30px;
  margin-block-end: 30px;
  margin: 20px 0 30px 0;
}

.reviewers .reviewer-profile .profile-detail {
  padding-left: 10px;
}

.reviewers .reviewer-profile .reviewer-name {
  font-size: 13px;
  margin-bottom: 3px;
}

.reviewers .reviewer-profile .reviewer-major {
  font-size: 10px;
  color: #aaaaaa;
}

.other-products-container .header {
  margin: 50px 0 30px 0;
  font-weight: 500;
  font-size: 20px;
}
.other-products-container .other-products ul {
  display: flex;
  justify-content: space-between;
}
.other-products-container .other-products ul li {
  text-align: center;
}
</style>
