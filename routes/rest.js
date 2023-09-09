let express = require('express');
let router = express.Router();



// 회원가입
// router.post('/join', function(req, res, next) {
    
//     // request body

//     // model query - insert

//     // seq return 되면 ok

    
//     res.send('respond with a resource');
// });

// 로그인
// router.post('/login', function(req, res, next) {
//   res.send('respond with a resource');
// });

// 조회
router.get('/', function(req, res, next) {

    let testQuery = 'select * from user';

    
    
    res.send('respond with a resource');
});


module.exports = router;
