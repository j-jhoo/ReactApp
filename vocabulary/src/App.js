import Header from "./component/Header";
import DayList from "./component/DayList.tsx";
import Day from "./component/Day.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div clasName="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="*" element={<EmptyPage />} />
          {/* React V6부터는 상단에 위치하는 라우터들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 *로 처리해서 사용 가능함  */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
