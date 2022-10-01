<template>
    <div class="write">
        <form action="">
            <div class="info-container">
                <ul class="type-container">
                    <li>
                        <input type="radio" name="type" id="sell" checked="checked">
                        <label for="sell">팔아요</label>
                    </li>
                    <li>
                        <input type="radio" name="type" id="buy">
                        <label for="buy">살래요</label>
                    </li>
                    <li>
                        <input type="radio" name="type" id="share">
                        <label for="share">나눠요</label>
                    </li>
                </ul>
                <div class="title">
                    <label for="title">제목</label>
                    <input type="text" name="title" id="title">
                </div>

                <div class="name">
                    <label for="name">상품명</label>
                    <input type="text" name="name" id="name">
                </div>

                <div class="category-box">
                    <select name="category" id="category">
                        <option value="카테고리">카테고리</option>
                    </select>
                    <input type="text" name="price" id="price" placeholder="   희망 가격(선택 사항)">

                    <div class="checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox">
                        <label for="checkbox" style="padding-left: 30px; padding-top: 3px;">가격 제안 받기</label>
                    </div>
                </div>

                <div class="line" id="line2"></div>

                <div class="description">
                    <label for="description">상품 설명</label>
                    <input type="text" name="description" id="description">
                </div>

                <div class="line" id="line3"></div>

                <div class="image">
                    <label for="image">상품 이미지</label>
                    <img src="../assets/res/no-picture.png" alt="">
                    <input type="file" required name="image" id="image">
                </div>

                <div class="line" id="line4"></div>

                <div class="transaction-way">
                    <div id="transaction-way" style="margin-left: 0px">희망 거래 방식</div>
                    <div class="direct">
                        <input type="checkbox" id="direct">
                        <label for="direct" style="padding-left: 30px; padding-top: 3px;">직거래</label>
                    </div>

                    <div class="deliver">
                        <input type="checkbox" id="deliver">
                        <label for="deliver" style="padding-left: 30px; padding-top: 3px;">택배 거래</label>
                    </div>

                    <div class="locker">
                        <input type="checkbox" id="locker">
                        <label for="locker" style="padding-left: 30px; padding-top: 3px;">사물함 거래</label>
                    </div>
                </div>

                <div class="line" id="line5"></div>

                <div class="transaction-area">
                    <label for="area">거래 가능 지역</label>
                    <select name="area" id="area">
                        <option value="지역 선택">지역 선택</option>
                    </select>
                </div>

                <div class="btn-container">
                    <button type="submit">등록</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {};
</script>
<style>
.write {
    font-weight: 400;
    font-size: 18px;
}

.write .type-container button {
    border-radius: 17px;
}

.type-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 210px;
    margin-top: -20px;
    list-style-type: none;
}

.type-container li {
    margin-right: 25px;
}

.type-container label,
.type-container input {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 130px;
    height: 60px;
    color: #969696;
    font-weight: 700;
    font-size: 28px;
    background: #e9e9e9;
    border-radius: 17px;
}

.type-container input[type="radio"] {
    opacity: 0.01;
    z-index: 100;
}

.type-container input[type="radio"]:checked+label,
.Checked+label {
    color: white;
    background: #0035D3;
}

.type-container label {
    padding: 25px;
    cursor: pointer;
    z-index: 90;
}

.type-container label:hover {
    background: #DDD;
}

.info-container div:not(.btn-container) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px;
}

.title input,
.name input {
    box-sizing: border-box;
    width: 859px;
    height: 44px;
    background: #FFFFFF;
    border: 0.5px solid #001F7B;
}

.category-box select,
.transaction-area select {
    width: 196px;
    height: 48px;
    filter: drop-shadow(-2px 4px 15px rgba(0, 7, 69, 0.15));
}

.info-container .category-box {
    position: relative;
    padding-left: 160px;
}

.category-box input[type=text] {
    box-sizing: border-box;
    width: 600px;
    height: 45.29px;
    background: #FFFFFF;
    border: 0.5px solid #001F7B;
}

.checkbox {
    position: absolute;
    width: 170px;
    height: 40px;
    top: -40px;
    right: -60px;
}

input[type="checkbox"] {
    position: relative;
    display: none;
    top: -1.5px;
}

input[type=checkbox]+label {
    cursor: pointer;
    padding-left: 23px;
    color: #B5B5B5;
    background-repeat: no-repeat;
    background-image: url('../assets/res/Check-off.png');
}

input[type=checkbox]:checked+label {
    background-image: url('../assets/res/Check-on.png');
    color: #0035d3;
    font-weight: 400;
}

input[type=checkbox]:disabled+label {
    background-image: url('../assets/res/Check-off.png');
    color: #B5B5B5;
    font-weight: 400;
}

.info-container .description input {
    box-sizing: border-box;
    width: 859px;
    height: 537px;
    background: #FFFFFF;
    border: 0.5px solid #001F7B;
}

.image img {
    padding-right: 600px;
}

.image input {
    display: none;
}

.transaction-way {
    padding-right: 190px;
}

.transaction-way div {
    width: 130px;
    height: 24px;
}

.transaction-area {
    padding-right: 660px;
}

.info-container .btn-container {
    display: flex;
    justify-content: center;
    margin: 100px 0 90px 0;
}

.btn-container button {
    display: block;
    align-items: center;
    box-sizing: border-box;
    width: 130px;
    height: 60px;
    color: white;
    font-weight: 700;
    font-size: 28px;
    background: #0035D3;
    border-radius: 17px;
}

.btn-container button:hover {
    background: #001f7b;
}
</style>