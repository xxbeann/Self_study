# Node.js

[백엔드 기초](https://www.youtube.com/watch?v=Tt_tKhhhJqY)

---

---

### Node.js 설치하기

→ 홈페이지 접속해서 잘 설치한다.

### What is NPM

Node package manager

필요한 툴이 있으면 검색해서 다운받아서 쓴다.

ex) express = web framework

[npm](https://www.npmjs.com/)

윈도우에서 `setup.exe`는 터미널에서 `npm install $MODULE_NAME` 과 똑같다.

- 모듈을 설치하기전
    
    `npm init` 입력→ package.json생성 → 여러 모듈을 설치하고 적용할때, 설치된 모듈들을 정리해주는 메모장 같은 역할
    
    package.json - 내용을 대략적으로 확인하기 위함
    
    package-lock.json - 내용을 상세하게 확인하기 위함
    
    - What is JSON?
        
        JSON(JavaScript Object Notation)은 데이터 교환을 위한 경량화된 형식으로, 특히 웹 환경에서 데이터를 표현하고 전송하기 위해 사용되는 텍스트 기반의 데이터 포맷입니다. 
        JSON은 사람이 읽고 쓰기 쉽고, 기계가 분석하고 생성하기도 간단한 형식을 제공합니다. 주로 다음과 같은 용도로 사용됩니다:
        
        1. **데이터 교환**: JSON은 다양한 애플리케이션 및 플랫폼 간에 데이터를 교환하는 데 사용됩니다. 웹 API에서 서버와 클라이언트 간에 데이터를 주고받을 때 자주 사용됩니다.
        2. **설정 파일**: 소프트웨어 설정 정보를 JSON 형식으로 저장하여 읽고 쓰는 것이 일반적입니다. 예를 들어, 구성 파일, 환경 설정, 애플리케이션 설정 등을 저장할 수 있습니다.
        3. **데이터 저장**: JSON은 데이터베이스에 저장되는 데이터를 표현하는 데 사용될 수 있습니다. 많은 NoSQL 데이터베이스에서는 JSON 형식으로 데이터를 저장하고 쿼리할 수 있습니다.
        4. **웹 애플리케이션**: 웹 애플리케이션에서 클라이언트와 서버 간의 데이터 교환에 사용됩니다. 웹 페이지에서 동적으로 데이터를 로드하거나 전송할 때 사용됩니다.
        
        JSON은 다음과 같은 특징을 가지고 있습니다:
        
        - **가독성**: 사람이 읽고 쓰기 쉬운 텍스트 형식입니다.
        - **기계 파싱**: JSON 데이터는 대부분의 프로그래밍 언어에서 쉽게 파싱하고 생성할 수 있습니다.
        - **키-값 쌍**: 데이터를 이름과 값의 쌍으로 구성합니다. 이를 통해 데이터 구조를 표현할 수 있습니다.
        - **배열**: 여러 값을 순서대로 나열하는 배열을 지원합니다.
        - **중첩**: 객체나 배열을 중첩하여 복잡한 데이터 구조를 표현할 수 있습니다.
        - **플랫폼 독립성**: 다양한 플랫폼 및 프로그래밍 언어에서 지원되기 때문에 플랫폼 간 데이터 교환에 적합합니다.
        
        JSON은 많은 프로그래밍 언어와 환경에서 널리 지원되며, 현대적인 웹 애플리케이션 및 데이터 교환에 필수적인 형식 중 하나입니다.
        
- figlet - ascii art

```bash
npm install figlet -g
-- g : global 프로젝트 가 아니라 컴퓨터 전체에 적용 --

npm unistall figlet
-- 사용하지 않는 모듈 지우기 --
```

### Express

웹 프레임 구조 - 요청, 응답 사이클 API

```bash
npm install express
-- 설치 명령어 --

node index.js
-- 실행 명령어 --

Ctrl + C 서버종료
```

이후 주소창에 [localhost:3000](http://localhost:3000) 결과 보기!!

```jsx
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// 몇번 포트에 대해서 리슨하고있다
// ()함수: 몇번 포트에서 리슨하고있다 메시지 출력
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
P는 대표전화번호
서비스 포트는 내선번호
각각 약속해놓은 포트가 존재한다

localhost = 내컴퓨터 ip
*/
```

- 코드리뷰
    
    `get` : HTTP 메소드- 요청의 목적, 종류를 알리는 수단
    프론트에서 백엔드로 요청을 보낼 시 전송 방식 → Get - 주소창 // Post 주소창X (바디의 내용을 전달할 때)
    서버가 리슨을 하고 있을때 get 방식으로 들어온걸 처리하겠다
    
    `‘/’` : 라우팅
    80번 포트로 들어왔을 때 
    
    `()⇒ {}` : 핸들러 함수
    
    1. **`app.get('/', (req, res) => { ... });`**: Express 애플리케이션의 **`app`** 객체를 사용하여 GET 요청을 처리하는 라우터를 설정합니다. **`'/'`** 경로는 애플리케이션의 루트 경로를 나타냅니다. 즉, 웹 사이트의 기본 주소인 **`http://localhost:3000/`**에 해당합니다.
    2. **`(req, res) => { ... }`**: 화살표 함수(arrow function)로 정의된 핸들러 함수입니다. 이 함수는 두 개의 매개변수를 받습니다.
        - **`req`**: 요청(request) 객체로, 클라이언트로부터 받은 요청 정보를 담고 있습니다.
        - **`res`**: 응답(response) 객체로, 서버가 클라이언트에게 보낼 응답을 생성하는 데 사용됩니다.
    3. **`res.send('Hello, World!');`**: **`res`** 객체의 **`send`** 메서드를 사용하여 클라이언트에게 응답을 보냅니다. 이 경우, "Hello, World!"라는 문자열을 응답으로 보내게 됩니다.
    
    종합하면, 위 코드는 루트 경로에 대한 GET 요청이 들어올 때, "Hello, World!"라는 메시지를 클라이언트에게 보내는 간단한 Express.js 핸들러 함수를 정의하고 있는 것입니다.
    
- Callback function vs Handler function
    
    핸들러 함수(handler function)와 콜백 함수(callback function)는 프로그래밍에서 비슷한 개념이지만, 약간의 차이가 있습니다.
    
    **핸들러 함수 (Handler Function):**
    
    - 핸들러 함수는 주로 이벤트나 요청에 대한 처리를 담당합니다. 이벤트가 발생하거나 특정 상황이 되면 실행되는 함수입니다.
    - 핸들러 함수는 특정한 작업을 수행하거나 이벤트에 반응하여 필요한 동작을 수행합니다.
    - 웹 프레임워크에서 라우터 핸들러 함수는 특정 URL 경로로 들어오는 요청에 대한 처리를 담당하는 예시입니다.
    
    **콜백 함수 (Callback Function):**
    
    - 콜백 함수는 다른 함수의 인수로 전달되어 나중에 호출되는 함수입니다.
    - 주로 비동기적인 작업에서 사용됩니다. 예를 들어, 파일 읽기, 데이터베이스 쿼리, 타이머 등의 작업을 수행한 후에 결과를 받아 처리하는 데에 사용됩니다.
    - 콜백 함수는 함수가 완료된 후에 호출되므로, 작업이 완료되기를 기다리지 않고 다음 코드를 실행할 수 있습니다.
    
    예를 들어, 다음과 같은 코드를 생각해보겠습니다:
    
    ```jsx
    // 콜백 함수 예제
    function doSomethingAsync(callback) {
      setTimeout(function() {
        console.log("Async operation done");
        callback();
      }, 1000);
    }
    
    function onComplete() {
      console.log("All operations complete");
    }
    
    doSomethingAsync(onComplete);
    
    ```
    
    위 코드에서 `doSomethingAsync` 함수는 비동기적으로 작업을 수행하고, 작업이 끝나면 `callback` 함수를 호출합니다. `onComplete` 함수가 이 `callback`으로 전달되어 작업이 완료된 후에 실행됩니다.
    
    핸들러 함수와 콜백 함수는 서로 다른 컨텍스트에서 주로 사용되며, 프로그래밍에서 둘 다 중요한 역할을 합니다.
    

### API 만들기

GET/dog ⇒ {’sound’:’멍멍’}

GET/cat ⇒ {’sound’:’야옹’}

get으로 html 파일도 보낼 수 있다.

```jsx
const { constants } = require('buffer')
const express = require('express')
const { link } = require('fs')
const app = express()

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
```

### CORS이슈와 프론트엔드 연결 실습

[CORS, 기본 동작 원리와 이슈 해결 방법](https://velog.io/@nemo/cors)

**CORS(Cross-Origin Resource Sharing)**

CORS(교차 출처 리소스 공유)란, 다른 출처에서 리소스 요청 시 접근 권한을 부여하는 메커니즘이다.

여기에서 출처란 프로토콜, 호스트명, 포트를 말한다. 이 중 하나라도 다르면 다른 출처로 인식한다.

**CORS 기본 동작 원리**

1. 클라이언트 HTTP 요청

요청 헤더에 Origin 정보를 담아서 보낸다.

2. Server 응답

서버에서 해당 요청에 대한 응답 시 응답 헤더에 Access-Control-Allow-Origin 정보를 담아 보낸다.

3. 비교

요청할 때 보낸 Origin 정보와 서버에서 보낸 Access-Control-Allow-Origin 정보를 비교해 서버에서 보내준 Access-Control-Allow-Origin을 차단할지 말지 클라이언트 단에서 정한다.

유효하지 않다면 해당 응답은 버린다.

> 위 방식은 아주 기본적인 동작 방식이며, 실제로는 예비 요청(preflighted request), 단순 요청(simple request), 인증된 요청(Credentialed Request)세 가지 방식으로 나뉜다.
> 
> 
> 브라우저는 다른 출처로 요청을 보낼 때 다 같은 방식으로 동작하지 않는다.
> 
> (자세한 설명은 [여기](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#CORS_%EA%B8%B0%EB%B3%B8_%EB%8F%99%EC%9E%91%EA%B3%BC%EC%A0%95))
>