import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function DayList() {
  console.log(dummy);
  return (
    <ul className="list_day">
      {dummy.days.map((day) => (
        <li kdy={day.id}>
          <Link to="/day">Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
