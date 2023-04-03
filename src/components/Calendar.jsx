import Date from "./Date";
import calendarDate from "../calendarDate.json";

function Calendar() {
  return (
    <div className="bg-white w-1/2 rounded-lg shadow-2xl p-8">
      <div className="pd-8 text-4xl font-bold">2023, 04</div>
      <ul className="grid grid-cols-7 gap-4">
        {calendarDate.map((v, i) => {
          console.log(`${i + 1} ${v}`);
          return <Date key={i} date={v.date} day={v.day} todos={v.todos} />;
        })}
      </ul>
    </div>
  );
}

export default Calendar;
