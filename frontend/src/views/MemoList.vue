<template>
  <div>
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
      </tr>
      <tr v-for ="(memo, i) in memo" :key ="i">
        <td>{{memo.id}}</td>
        <td @click ="$router.push(`/list/${memo.id}`)">
          {{memo.title}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      memo: []
    })
  },
  created() {
    //인스턴스가 작성된 후 동기적으로 호출됨
    //인스턴스는 데이터 처리, 계산된 속성, 메소드, 감시/이벤트 콜백 등의 옵션 처리를 완료함
    //그러나 마운트가 시작되지 않았으므로 $el 속성을 사용할 수는 없음

    //서버로 접근해 데이터를 가져올 함수
    //axios(비동기)로 값을 가져온다: get
    this.$http.get('/api/memo')
    .then((response) => {
      //서버에서 어떤 값이 들어왔는지 확인하기 위해 console로 확인한다.
      console.log(response.data);
      this.memo = response.data;
    })
  }
}
</script>
