<h1><center> CSS 정리</center></h1>

<h3>목차</h2>

- 기본문법
- 박스모델
- 플렉스 박스
- 그리드
- 미디어쿼리
- 포지션
- float
- em, rem
- box-sizing

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
- block과 inline의 가운데 정렬
  - block는 남은 여백을 마진을 주기때문에  margin-right:auto, margin-left:auto로 정렬
  - inline은 text-align: 으로 정렬 / 부모 태그에 써서 안을 적용해야하나?

#### 3. 플렉서블 박스

- 플렉서블 박스란?
- 서로 다른 크기의 화면과 기기에서 HTML요소들이 자동ㄹ으로 재정렬 되어 웹페이지의 레이아웃을 유지할 수 있게 해주는 것. 반응형 웹에서 레이아웃을 유지시켜줌..

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

#### 6. 포지션

- static : 디폴트 값
  - 기본적인 요소의 배치 순서(좌측 상단)
- relative(상대위치) -> static 위치를 기준 top, bottom, left, right로 이동
- absolute(절대위치) -> 부모 태그를 기준으로 이동 -> 이동 후 기존 공간 가출
- fixed(절대 위치) -> 브라우저를 기준으로 이동

#### 7. float

- 박스모델에서 벗어나게 해줌.(배치의 흐름을 바꿔버림)
- 왼쪽이나 오른쪽으로만 갈 수 있음.
- clear로 탈출할 수 있음.

#### 8. em, rem

- em -> 상위요소를 기준으로 상대크기를 출력
- rem -> 최상위 요소인 html을 기준으로 상대크기 출력
- html 요소의 기본 크기는 16px

#### 9. box-sizing

- box-sizing은 박스의 크기를 어떤 것을 기준으로 계산할지를 정하는 속성.
- 종류
  - 기본값 : content-box -> 콘텐츠 영역을 기준으로 크기를 정합니다
  - border-box -> 테두리를 기준으로 크기를 정합니다.
  - initial : 기본값 설정
  - inherit : 부모 요소 속성값을 상속

#### 10. background

- background-attachment : 배경 이미지를 뷰포트 내에서 고정할지, 함께 스크롤 할지 결정.
  - fixed : 배경을 뷰포트에 고정. 스크롤 해도 배경 고정
  - local : 요소 컨텐츠에 고정. 스크롤이 존재하면 콘텐츠와 함께 스크롤
  - scroll : 배경을 요소 자체에 고정. 배경이 함께 스크롤 되지 않음
- background-size: 요소 배경 이미지의 크기를 설정
  - 배경 이지미로 덮이지 않은 공간은 background-color 속성으로 채워집니다.
  - 속성
    - contain : 이미지가 잘리거나 찌그러지지 않은 한도 내에서 제일 크게 설정
    - cover : 제일 크게 설정, 이미지의 가로세로비가 요소와 다르다면 이미지를 잘라내어 빈공간이 생기지 않도록 설정
    - auto : 원본 크기를 유지
    - length: 너비 높이를 주어진 값으로 늘리거나 줄임



#### 11. filter

- filter 속성은 흐림 효과나 색상 변형 등 그래픽 효과를 요소에 적용함.
  - url() -> svg 필터를 이용할 수 있음
  - blur() -> 가우시안 블러 적용
  - brightness() -> 0~100% 사이 밝기 조절 -> 100%가 원형
  - contrast() -> 대비 조정
  - drop-shadow() -> 그림자 효과 적용
  - grayscale() -> 흑백으로 변환
  - hue-rotate() -> 색조 회전
  - invert()  -> 이미지 색 반전
  - opacity() -> 불투명도
  - saturate() -> 색조
  - sepia() -> 세피아로 변환