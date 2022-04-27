<template>
    <div>
        <h1>{{memo.title}}</h1>
        <p>{{memo.memo}}</p>    
    </div>    
</template>

<script>
export default {
    created() {
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response) => {
            this.memo = response.data;
        })
        //id라는 params를 통해 전달 
        //memo.id로 구분해 -> 전체가 아닌 특정만 가져오기 위함
    },
    data() {
        return ({
            memo: {}
        })
    }
}
</script>