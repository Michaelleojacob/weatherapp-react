import LowHiAvg from '../../../utils/getLowHighAvg';

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const ForcastCard = ({ dt_txt, list }) => {
  // console.log(list);
  const mid = Math.floor(list.length / 2);
  const numericDay = new Date(list[mid].dt_txt).getDay();
  const dayOfWeek = weekday[numericDay];
  const rename = LowHiAvg(list);
  console.log(rename);

  return (
    <div>
      <div></div>
      <div>{dayOfWeek}</div>
    </div>
  );
};

export default ForcastCard;
