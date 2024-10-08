# 마인즈 에이아이 과제

### 과제 링크

https://mind-ai-assignment.netlify.app

### 요구사항

Todo 리스트를 구현한다.

1. 외부 API에서 초기 To-Do 리스트 데이터를 가져오는 기능

   - API 정보: GET https://jsonplaceholder.typicode.com/todos?_limit=5
   - 페이지가 로드될 때 이 API를 사용하여 초기 To-Do 리스트 데이터를 가져오세요.

2. 할 일을 추가하는 기능

   - 사용자가 새로운 할 일을 입력하고 추가할 수 있는 기능을 구현하세요.

3. 할 일을 완료 처리하는 기능

   - 사용자가 할 일 항목을 클릭하여 완료 상태로 변경할 수 있는 기능을 구현하세요.

4. 할 일을 삭제하는 기능

   - 사용자가 특정 할 일 항목을 삭제할 수 있는 기능을 구현하세요.

5. 로컬 스토리지를 사용하여 데이터를 저장하고 앱이 다시 로드될 때 데이터를 불러오는 기능

   - 사용자가 추가, 수정, 삭제한 데이터가 로컬 스토리지에 저장되고, 페이지가 다시 로드될 때 저장된 데이터를 불러올 수 있도록 하세요.

6. 기본적인 CSS-in-JS 스타일링
   - CSS-in-JS 방식을 사용하여 앱의 스타일을 구현하세요.

<br />

### 설치 방법

#### 레포지토리 복사

```git
git clone https://github.com/dlsxody1/minds-ai-assignment.git
```

#### 폴더로 이동

```bash
cd /minds-ai-assignment
```

#### 의존성 설치

```npm
npm install
```

#### 환경변수 주입

```bash
루트에 .env 를 만듭니다.
VITE_API = 위의 API를 적습니다.
```

### 프로젝트 시작

```bash
npm run dev
```
