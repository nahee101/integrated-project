<template>
    <div>
        <h3>글을 작성하는 공간입니다</h3>
        <input type="text" v-model="title"> <br>
        <textarea cols="30" rows="10" v-model="memo"></textarea> <br>
        <button @click="addmemo">작성</button>

        <form action="/api/memo/writeform" method="post">
            <input type="text" v-model="title" name = "title"> <br>
            <textarea cols="30" rows="10" v-model="memo" name = "memo"></textarea> <br>
            <input type="submit" value="작성">
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "",
            memo: ""
        }
    },
    methods: {
        addmemo() {
            //post를 이용해서 서버로 값을 전달한다
            this.$http.post('/api/memo', {
                data: {
                    title: this.title,
                    memo: this.memo
                }
            }).then((response) => console.log(response.data))
            this.$router.push('/')
        }
    }
}
</script>