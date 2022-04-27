var express = require('express');
var router = express.Router();

const memos = require("../memo.json");
let count = 2;

/* GET 을 통해 메모를 보낼 것 */
router.get('/', function(req, res, next) {
    console.log(memos);
    res.send(memos);
});

//POST를 통해 메모값을 받아옴 -axios
router.post('/', function(req, res, next) {
    const memo = req.body.data;
    count++;
    const m = {
        id: count,
        title: memo.title,
        memo: memo.memo,
        writer: '익명'
    };
    
    memos.push(m);
    res.send('ok');
});

//Form을 사용함
router.post('/writeform', function(req, res, next) {
    const memo = req.body;
    count++;
    const m = {
        id: count,
        title: memo.title,
        memo: memo.memo,
        writer: '익명'
    };

    memos.push(m);
    // 다른 주소로 화면 출력
    res.redirect('/');
});

//get을 통해 id값이 동일한 메모를 보냄
router.get("/:id", function(req, res, next) {
    const id = req.params.id;
    //m은 memos의 필터의 결과가 참인 객체를 배열한 것
    const m = memos.filter((memo) => {
        if(memo.id == id) {
            return true;
        }
    });
    res.send(m[0]);
});

module.exports = router;
