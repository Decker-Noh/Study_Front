<h1><center>HTML</h1>

#### HTML 태그정리

## 문서의 정의

`<!DOCTYPE html>` 이 페이지를 HTML로 해석하라!
`HTML` 나는 HTML이야!

### 문서의 속성(머리)

`head` 문서의 속성, 설명은 나한테 있다!
`title` 문서의 제목. 문서의 제목에 따라 검색엔진과 사용자가 문서를 유추할 수 있다.
`meta` 웹 페이지의 보이지 않는 정보 제공, 설명 요약, 키워드, 제작자 등등
`link` 외부 파일을 연결! rel="stylesheet"는 연결한 파일이 stylesheet라는 의미
`script` 실행 가능한 코드를 웹 페이지에 포함, 참조. 보통 JS 코드를 넣을 때 사용
`base` 해당 웹 페이지의 절대경로 지정. 한 페이지에 한개만!
`style` style 정보를 넣는 태그. 3가지 방법으로 사용가능(inline, internal, external)

### 문서의 컨텐츠(몸통)

`body` 브라우저 화면에 보이는 것들이 들어감.

#### 문서의 영역

`header` 문서의 주제를 나타내는 영역을 지정할 때 쓰임
`nav` 주로 메뉴로 사용되고, 사이트 간의 링크를 담는데 쓰임.
`section` 본문의 영역을 지정할 때 쓰임.
`article` 본문의 실질적인 내용을 담는 영역
`aside` 본문의 내용이 아닌 영역을 나타내는 태그
`footer` 아래에서 본문 의외의 영역을 나타내는 태그
`main` 문서의 주 컨텐츠를 지정할 때 쓰임. main 요소는 article, aside, footer, header, nav 요소의 자손 요소가 되어서는 안 됩니다.
`div` 논시맨틱 태그

#### 문서의 내용

`h1` ~ `h6` 문단의 주제를 쓸 때 많이 쓰임. 당신이 아는 그것.
`hgroup` h1~h6를 묶는 용도의 태그
`address` 문서나 글의 저자에 대한 연락 정보를 표시할 때 사용.
`blockquote` 인용문을 적을 때 사용.
`hr` 문단과 문단을 의미적으로 분리하기 위한 수평선 생성.
`br` 줄바꿈.
`figure` 사진, 도표, 삽화, 오디오, 비디오를 담는 컨테이너 역할
`figcaption` figure의 요소를 설명하는 역할
`dl` `dt` `dd` 어떤 개념들을 설명하기 위한 구조를 구성할때 사용.
각각, `definition list` `difinition term` `definition description`을 의미함
`ol` 순서가 있는 목록
`ul` 순서가 없는 목록
`li` ol과 ul 목록의 항목들 나열
`p` 문단 내용
`pre` html에서 개행이나 공백을 표시하기 위한 Enter, Tab, Space 활용을 가능하게 해줌.
`a` 하이퍼 링크를 걸어주는 태그. 속성으로 `href` `target` `title` 있다
`abbr` 준말과 머리글자를 나타냄.
`b` 글자를 굵게 표시. `bold`
`bdi` 언어의 종류에 따라 표기 방향 자동 제어. 요런게 있었다.
`bdo` 언어 표기 방향을 지정선택 가능
`cite` 저작물의 출처표기
`code` 컴퓨터 코드를 나타내고 싶을때 사용
`data` 컴퓨터가 읽을 수 있는 값을 덧붙일 때 사용
`dfn` 현재 문장이 어떤 용어를 설명하는지 나타내기 위해 사용
`em` `strong` 강조된 텍스르 표시. em은 구어체, strong은 문장의 일부분 강조에 사용
`i` 글자를 기울여서 표시. `italic`
`kbd` 키보드 입력을 나타날 때 사용
`mark` 하이라이트 된 텍스트 정의할 때 사용
`q` 짧은 인용구 정의
`ruby` `rb` `rt` `rp` `rtc` 루비 주석, 동아시아 문자의 발음을 표기할때?(신기)
`s` `del` 텍스트에 가로 라인을 추가하여 필요 없어진 텍스트를 표현할 때 사용
`samp` 컴퓨터 프로개름의 샘플 또는 출력을 나타낼 때 사용
`small` 작은 텍스트
`span` 특별한 의미를 갖지 않은 inline 태그
`sub` 아랫첨자
`sup` 윗첨자
`time` datetime 속성을 통해 컴퓨터에게 날짜, 시간을 인식시킬 수 있음.
`u` `ins` 밑줄
`var` 변수로 설정
`wbr` 행바꿈
`map` 이미지맵 생성. 이미지 맵 : 클릭 가능한 영역을 지닌 이미지(사용할 일 없을듯?)
`area` 이미지맵의 영역 지정
`audio` 음성파일 재생
`video` 비디오 파일 재생
`img` 이미지 파일
`track` 미디어 요소(audio, video)의 자식으로서, 자막 등 시간별 텍스트 트랙(시간 기반 데이터)를 지정할 때 사용
`embed`여러가지 동영상,음악,플래시 관련파일을 재생할 수 있는 태그
`iframe` 웹문서 안에 웹문서를 넣거나 영상을 넣을 수 있음.
`object` 웹문서 안에 웹문서를 넣거나 영상을 넣을 수 있음.(요즘 안씀)
`param` object 세부항목 설정
`canvas` js로 그래픽 컨텐츠를 그릴 때 사용
`noscript` 스크립트를 사용하지 않음.
`script` 스크립트를 사용함
`caption` 이미지, 테이블의 캡션 정의
`button` 버튼 생성
`datalist` input에서 사용할 리스트들을 정의
`fieldset` form 요소에서 연관된 input을 그룹
`legend` fieldset의 이름을 붙일 때 쓰는 태그
`form` 입력양식을 감싸는 태그
`input` 입력을 위한 태그
`textarea` 여러줄을 입력할 수 있는 텍스트 입력 영역 생성
`label` 폼 양식에 이름을 붙이는 태그
`meter` 주어진 범위나 크기에서 차지하는 비율을 나타냄.
`progress` 작업의 진행률을 나타낼 때 사용
`select` 옵션메뉴를 나타내는 드롭다운 리스트를 만들 때 사용
`optgroup` 옵션 리스트들의 그룹핑할때 사용
`option` 드롭다운 리스트의 요소를 만들때 사용
`output` 액션의 결과나 스크립트의 계산결과를 출력할 때 사용
`details` 접고 닫을 수 있는 대화형 위젯 생성
`summary` 대화형 위젯의 제목
`dialog` 대화형 상자 생성
`menu` 목록이나 메뉴 만들 때 사용
`template` 후에 추가될 수 있는 HTML 요소를 작성할 때 사용. 보이지 않지만 JS 조작을 통해 복사, 추가를 할 수 있음

#### 테이블 태그

`colgroup` 테이블에서 여러 열을 묶기 위해 사용
`col` 묶어진 열의 속성 부여
`table` 테이블 생성
`thead` 테이블 헤더 셀의 묶음
`tr` 행 묶음
`th` 테이블 헤더의 셀 정의
`tbody` 컨텐츠 내용 묶음
`td` 컨텐츠 셀 요소

