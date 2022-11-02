const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ForcastCard = ({ dt_txt, list }) => {
  const mid = Math.floor(list.length / 2);
  const numericDay = new Date(list[mid].dt_txt).getDay();
  const dayOfWeek = weekday[numericDay];

  return (
    <div>
      <div></div>
      <div>{dayOfWeek}</div>
    </div>
  );
};

export default ForcastCard;
