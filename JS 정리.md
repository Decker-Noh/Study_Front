<h1><center> JS 정리</h1>

#### 목차



#### 1. JS란?

- 자바스크립트는 HTML, CSS로 구성된 정적인 페이지를 동적인 페이지로 만드는 언어이다.

#### 2. JS 선언 위치와 asyn, defer

- head -> js가size가 크고 인터넷이 느리다면 사용자가 오랜 시간 기다려야함
- body 끝 -> 기본 HTML을 빨리 볼 수 있지만, js의존도가 크다면 정상적인 페이지를 볼때까지 오랜 시간이 걸릴 수 있음
- script + asyn -> html과 fetching이 병렬로 실행되고 fetching이 완료되면 html 파싱을 멈추고 executing이 시작됨. js가 html이 파싱되기전에 실행되버릴 수 있기 때문에 위험할 수 있음.
- script + defer -> 병렬로 실행되고 html 파싱을 완료한 후 자바스크립트를 실행함.(best)

#### 3. Use strict

- 제일 윗부분에 'use strict'를 선언해주는 것이 좋음

```
'use strict'
```

- why : js는 매우 자유로운 언어. 하지만 use strict를 선언하게 되면 ECMA에 따라 비상식적인 코드에 오류를 발생시켜줌.

#### 4. JS 문법

##### 4.1 변수

- 변수 -> 메모리를 할당하여 데이터를 저장하는 것.

- block scope

  - 블록 안에 선언한 변수들은 블록 밖에서 사용할 수 없음.

  ```
  {
  let name = "soon";
  console.log(name); <- 나옴
  }
  console.log(name); <- 안나옴
  ```

  

- global scope

  - 어느 곳에서나 사용 가능
  - 계속 할당되어 있기때문에 많이 안쓰는 것이 좋음

- 변수의 종류

  - ES6는 let만 사용
  - 그 이전에는 var만 사용했다. 하지만 var 호이스팅을 일으킨다
    - 호이스팅(hoisting)이란? 어디에 선언하든 선언을 가장 위로 끌어 올려주는 것.
  - var를 사용하면 안되는 이유
    - var hoisting
    - no block scope <- 대규모 프로젝트로 가면 문제가 발생함
  - mutable data type -> 선언 후 값이 바꿀 수 있는 데이터 타입
    - let
    - all objects
  - immutable data type -> 선언 후 값이 바꿀 수 없는 데이터 타입
    - const
    - premitive types, frozen objects
    - why immutable data type?
      - security -> 해커들이 데이터 값을 바꾸는 것을 방지
      - thread safety
      - reduce human mistakes

- Variable types
  - first-class function -> 함수도 변수에 할당이 가능하다는 것.

  - Number

    - js는 숫자는 number type로 할당됨
    - speical number type
      - infinity -> 1/0 을 할당하면 무한대가 할당
      - negativeInfinity -> -1 /0을 할당하면 -무한대가 할당
      - nAn -> 'not a number' / 2 숫자가 아닌 값을 숫자와 함께 할당하면 nAn을 할당
      - BinInt -> js는 2의 53승까지만 지원. 하지만 뒤에 n을 할당하면 Bin int로 할당

  - String

    - 문자는 모두 string type으로 분류

    - template literals도 많이 쓰임

      ```
      const name = "soon";
      const hello =`hi ${name}`;
      출력값 : hi soon
      ```

  - Boolean

    - 참과 거짓
    - false : 0, null, undefine, nAn, ''
    - true : any other value

  - null and undefined

    - null -> 비어저 있는 경우
    - undefined -> 선언은 되었지만 값이 할당되어있지 않은 경우

  - symbol

    - 고유한 식별자를 만들 때 사용.

      ```
      const symbol1 = Symbol('id')
      const symbol2 = Symbol('id')
      symbol1 === symbol2 -> false
      같게 하고 싶다면?
      const symbol1 = Symbol.for('id')
      const symbol2 = Symbol.for('id')
      symbol1 === symbol2 -> true
      ```

  - Dynamic typing

    - 프로그램이 동작할 때 할당된 type이 변할 수 있는 언어

      ```
      예제
      let text ='hello';
      console.log(`value: ${text}, tyle: ${typeof text}`);
      출력값 : string
      let text = 1;
      console.log(`value: ${text}, tyle: ${typeof text}`);
      출력값 : number
      let text = '7' + 5;
      console.log(`value: ${text}, tyle: ${typeof text}`);
      출력값 : string
      let text = '7' / '5';
      console.log(`value: ${text}, tyle: ${typeof text}`);
      출력값 : number
      ```

  - object

```
object -> 데이터 모음집? 파이썬의 딕셔너리?
const soon = {name: 'soon', age: 28};
```

##### 4.2 operator

- String concatenation -> + 기호를 사용해서 문자열을 연결해서 사용할 수 있음

```
console.log('my' + ' cat');
console.log('1' + 2);
```

- Numeric operators -> 숫자 연산

```
console.log(1+1);
```



- Increment and decrement oprators -> ++,-- 

```
let counter = 2;
const preIncrement = ++counter;
: 1 + counter
const preIncrement = counter ++;
: counter + 1
```

- Assignment operators -> 할당해서 계산하는 것

- Comparison operators -> 비교 연산

- Logical operators: ||(or), &&(and), !(not)

  - ||(or) -> 하나라도 true라면 true 출력. ture가 나오면 true 출력
    - 무거운 연산을 뒤로 두자(효율 up, 신경 안쓰면 회사에서 쿠사리 먹음) 
  - &&(and) -> 하나라도 fals라면 false
    - 이것 또한 무거운 연산일수록 뒤에 배치
    - null check할때도 많이 쓰임.
  - !(not) -> 값을 반대로 바꿔줌.

- Equality operators

  - == -> loose equlity
  - === => strict equality -> type의 차이도 구분

- 조건문

  - if () {}

  - else if() {}

  - else{}

  - Ternary operator: ? -> 조건문 단축

    - console.log(name === 'ellie' ? 'yes' : 'no')
    - 가독성이 좀 떨어짐

  - Switch statement

    ```
    const browser = 'tf';
    switch (browser) {
    	case 'IE':
    		console.log('go away!');
    		break
    	case 'chrome':
    	case 'Firefox':
    		console.log('love you!');
    		break;
    	default:
    		console.log('same all!');
    		break;
    }
    ```

- 반복문

