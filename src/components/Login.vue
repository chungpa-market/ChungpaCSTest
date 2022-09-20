<template>
    <form action ="">
        <div class="login-container">
            <div class="id-field">
                <input type="text" name="id-field" id="id-field" placeholder="  아이디"
                v-model="ID">
            </div>

            <div class="password-field">
                <input type="password" name="password-field" id="password-field" placeholder="  비밀번호"
                v-model="PWD">
            </div>

            <div class="btn-container">
                <button v-on:click="login" id="login-btn" disabled>로그인</button>
            </div>

            <div class="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox">
                <label for="checkbox">로그인 상태 유지</label>
            </div>

            <div class="line" id="line1"></div>
        </div>
    </form>
</template>

<script>
    export default{
        data(){
            return {
                ID: '',
                PWD: ''
            }
        },
        methods: {
            moveToMain(){
                location.replace("./main.html");
                console.log("메인화면으로 이동");
            },
            login(){
                if(this.ID.value.length > 0 && this.PWD.value.length >5){
                    localStorage.setItem(this.ID, this.PWD);
                    loginbtn.disabled = false;
                    this.moveToMain();
                }
                else{
                    loginbtn.disabled = true;
                    this.clearInput();
                }
            },
            clearInput() {
                this.ID = '';
                this.PWD = '';
            }
        }
    }
</script>

<style>
    .id-field input, .password-field input{
        border: 0.5px solid #001F7B;
    }

    .login-container div:not(.checkbox){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 64px 0 0 0;
    }

    .login-container .id-field input, .password-field input{
        box-sizing: border-box;
        width: 635px;
        height: 54px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 17px;
    }

    .login-container .checkbox{
        width: 250px;
        margin: 10px 0 0 10px;
    }

    .checkbox input[type="checkbox"] {
        display: none;
    }

    input[type=checkbox]+label {
        cursor: pointer;
        padding-left: 23px;
        background-repeat: no-repeat;
        background-image: url('../image/check_off.png');
        color: #B5B5B5;
    }

    input[type=checkbox]:checked+label {
        background-image: url('../image/check_on.png');
        font-weight: 600;
        color: black;
    }

    input[type=checkbox]:disabled+label {
        background-image: url('../image/check_off.png');
        color: #B5B5B5;
    }

    .login-container .btn-container {
        display: flex;
        justify-content: center;
        margin: 90px 0 90px 0;
    }

    button{
        display: block;
        align-items: center;
        box-sizing: border-box;
        width: 635px;
        height: 54px;
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 700;
        background: #0035D3;
        border: 2px solid #0035D3;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 17px;
    }

    .line{
        border: 1px solid rgba(0, 0, 0, 0.3);
    }

    .line #line1{
        width: 635px;
        height: 0px;
    }
</style>