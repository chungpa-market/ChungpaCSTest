<template>
    <div class="search">
        <NaviComp></NaviComp>
        <div class="text">
            <p>"융합적 사고와 글쓰기"의 검색결과 6개</p>
        </div>
        <div class="recommend_sort">
            <div class="recommend">
                <p>추천</p>
                <p>|</p>
                <p>비사토</p>
                <p>교필</p>
                <p>영교필</p>
                <p>논사소</p>
                <p>교필책</p>
            </div>
            <div class="sort">
                <p>정확도순</p>
                <p>|</p>
                <p>최신순</p>
                <p>|</p>
                <p>저가순</p>
                <p>|</p>
                <p>고가순</p>
            </div>
        </div>
        <div class="result">
            <ItemComp></ItemComp>
            <ItemComp></ItemComp>
            <ItemComp></ItemComp>
            <ItemComp></ItemComp>
        </div>
        <div class="result">
            <ItemComp></ItemComp>
            <ItemComp></ItemComp>
            <ItemComp></ItemComp>
            <ItemComp></ItemComp>
        </div>
    </div>
</template>
<script>
import NaviComp from '../components/NaviComp.vue';
import ItemComp from '@/components/ItemComp.vue';
export default{
    title: '검색결과페이지',
    components: {
        ItemComp,
        NaviComp,
    },
}
</script>
<style>
.search .result {
    display: flex;
    justify-content: space-between;
}
.search .text{
    font-size: 20px;
    font-weight: 500;
}
.search .recommend_sort{
    display: flex;
    padding-left: 30px;
    justify-content: space-between;
}
.search .recomend_sort .recommend p, 
.search .recomend_sort .sort p{
    flex-direction: row;
    display: flex;
    justify-content: space-between;
}
</style>
