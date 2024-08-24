/*
Figlet 실습

var figlet = require("figlet");
// figlet이라는 모듈을 가져와서 변수에 저장

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

------------------------------------------------------------

const express = require('express')
const { link } = require('fs')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
  res.send({'sound':'멍멍'})
  //json 오브젝트
  })

app.get('/cat', function (req, res) {
  res.json({'sound':'멍멍'})
})

app.listen(3000)

------------------------------------------------------------

const express = require('express')
const { link } = require('fs')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/user/:id', function (req, res) {
    // const q = req.params
    // console.log(q)

    const q = req.query
    console.log(q)

    res.send({'sound':'멍멍'})
    //json 오브젝트
  })

app.get('/cat', function (req, res) {
    res.json({'sound':'멍멍'})
})

app.listen(3000)

*/

const express = require('express')
const { link } = require('fs')
const app = express()
var cors = require('cors')

app.use(cors())
// 조건부 허용 가능

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params // request에서 변수를 뽑아옴
    // 중괄호 안에  key값을 입력하여 value값을 바로 뽑아옴
    // p.name 이라고 할 필요가 없음

    if(name=="dog")
    {
        res.json({'sound':'멍멍'})
    }
    else if(name=="cat")
    {
        res.json({'sound':'야옹'})
    }
    else if(name=="pig")
    {
        res.json({'sound':'꿀꿀'})
    }
  })

app.listen(3000)

/*
프론트에서 요청을 보내서 백엔드에서 처리를 해서 다시 보내는 과정
요청이 오는거에 따라서 어떤 소리를 내는지 json데이터를 돌려주는
API서버
*/