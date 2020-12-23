<h1><center> CSS 정리</center></h1>

<h3>목차</h2>

- 기본문법
- 박스모델

- 플렉스 박스
- 그리드

#### 1. 기본문법

+ 구조

  + 셀렉터 (Selector, 선택자)
    + 스타일을 적용하고자 하는 HTML 요소를 선택할 수 있다.
    + 우선순위
      1. ID
      2. Class
      3. 선언위치
  + 프로퍼티 (Property, 속성)
    + HTML에 어떤 효과를 줄 것인가 선택
    + 표준 스펙으로 이미 지정되어 있음
    + 여러개의 프로퍼티를 연속해서 사용할 수 있음.
  + 값(Value / 속석값)
    + 해당 프로퍼티에 사용할 수 있는 "키워드", "크기 단위", "색상 표현 단위"

+ HTML과 연동

  + Link Style

    + 외부에 있는 CSS 파일을 HTML에 로드하는 방식

      ex) <link rel="stylesheet" href="css/style.css">

  + Embedding style

    + HTML 내부에 CSS를 포함시키는 방식

  + Inline Style

    + HTML요소의 style  프로퍼티에 CSS를 기술하는 방식

#### 2. CSS 박스모델

- 박스 모델이란?
  - HTML 태그를 하나의 박스로 취급하여 부피감을 결정하는 것.
- display
  - block level element : 박스의 크기가 화면 전체를 차지하는 태그
  - inline element : 박스의 크기가 content의 크기만큼 차지하는 태그
  - 위의 두 값은 프로퍼티 display의 value를 바꾸어서 마음대로 조정할 수 있음.
- 박스의 컨트롤
  - height, width 로 높이와 넓이 조절
  - padding, border, margin을 이용해 박스 안, 테두리, 박스 밖 사이즈를 조절.

#### 3. 플렉서블 박스

- 플렉서블 박스란?
- 서로 다른 크기의 화면과 기기에서 HTML요소들이 자동ㄹ으로 재정렬 되어 웹페이지의 레이아웃을 유지할 수 있게 해주는 것. 반응형 웹에서 레이아웃을 유지시켜줌.

```
display : flex, inline-flex 플렉서블 박스 적용
```



#### 4. 그리드

- 반응형을 가능하게 하는 2차원 레이아웃

```
그리드 컨테이너를 위한 속성
display : grid 그리드 컨테이너를 정의
grid-template-rows : 행의 크기를 정의
grid-template-columns : 열의 크기를 정의
grid-template-areas : 영역을 참조해 템플릿 생성
grid-template : grid-template-xxx 의 단축 속성
row-gap(grid-row-gap) : 행과 행 사이의 간격을(line) 정의
column-gap (grid-column-gap) : 열과 열 사이의 간격을(line) 정의
gap(grid-gap) : xxx-gap 의 단축 속성
grid-auto-rows : 행의 크기를 정의
grid-auto-columns : 열의 크기를 정의
grid-auto-flow : 자동 배치 알고리즘 방식을 정의
grid : grid-template-xxx 와 grid-auto-xxx의 단축 속성
align-content : 그리드 콘텐츠를 수직 정렬
justify-content : 그리드 콘텐츠를 수평 정렬
place-content : align-content 와 justify-content의 단축 속성
align-items : 그리드 아이템들을 수직 정렬
justify-items : 그리드 아이템들을 수평 정렬
place-items : align-items 와 justify-items의 단축 속성
```

#### 5. 미디어쿼리

- 미디어쿼리란?
  - 조건에  따라 레이아웃을 달라지게 하는 것.