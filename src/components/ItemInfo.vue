<template>
  <div class="sell-info-container">
    <div class="img-area">
      <img
        src="../assets/res/no-picture.png"
        width="367"
        height="408"
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
</template>

<script>
export default {};
</script>

<style>
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
  margin-block-start: 13px;
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
  padding: 12px 10px 12px 0px;
  font-size: 13px;
}

.sell-info-container table th {
  padding-right: 70px;
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
  margin: 4px 0 10px 0;
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
</style>
