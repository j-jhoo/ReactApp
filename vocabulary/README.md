# React 기초 복습

- React의 기초를 복습하기 위해서 만들어보는 앱

### 📌 구현 상황

- 목데이터를 map()을 이용하여 반복해서 만들었습니다.
- 목데이터를 filter()를 이용하여 조건에 맞는 부분들만 보이게 구현하였습니다.
- react-router-dom을 이용해서 페이지 이동 가능하게 구현하였습니다.
  <img width="739" alt="스크린샷 2022-03-19 오후 10 22 31" src="https://user-images.githubusercontent.com/89238394/159124055-0f3fa8ec-9a35-4305-afa8-e82bbda84064.png">
  ✏️ React v6부터 Switch태그로 감싸는게 아닌, Routes태그로 감싸는걸로 변경되었다.
  <br>
  <br>

<img width="664" alt="스크린샷 2022-03-19 오후 10 31 37" src="https://user-images.githubusercontent.com/89238394/159124248-0fb46a0e-7990-4474-8901-223339902955.png">
✏️ react-router에 :을 붙일 경우에 변수를 선언할 수 있다. 
<br>
<br>

- useParams hook을 사용하여 url마다 경로를 지정해주었습니다.
- 일치하는 라우트가 없는 경우, 설정한 페이지를 보여주게 구현하였습니다.
  <img width="677" alt="스크린샷 2022-03-19 오후 11 06 56" src="https://user-images.githubusercontent.com/89238394/159124519-74f3eade-9756-4827-8ab5-4e5a455b7c6a.png">
  ✏️ React V6부터는 상단에 위치하는 라우터들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 \*로 처리해서 사용 가능하다.
  <br>

- 간단한 json-server을 이용하여 Fetch를 적용시켰다.
- Day컴포넌트와 DayList 컴포넌트의 fetch함수가 공통되었고, 커스텀 훅을 사용하여 불필요하게 같은 코드를 간략하고 좀 더 간단하게 구현하였다.
