import { intervalToDuration } from "date-fns";
import { useState } from "react";
import { useEffect } from "react";

const Countdown = (props) => {
  const { toDate, fromDate } = props;
  const [date, setDate] = useState(new Date());

  const duration = intervalToDuration({
    start: date,
    end: new Date(2022, 7, 28, 18, 55, 0),
  });

  //   useEffect(() => {
  //     setInterval(() => {
  //       setState(state + 1);
  //     }, 1000);
  //   }, []);

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <div style={{ display: "flex", gap: 10 }}>
      {duration.years > 0 && <p> {duration.years}Y, </p>}
      {duration.months > 0 && <p> {duration.months}M, </p>}
      {duration.days > 0 && <p> {duration.days}d, </p>}
      {duration.hours > 0 && <p> {duration.hours}h, </p>}
      {duration.minutes > 0 && <p> {duration.minutes}m, </p>}
      {duration.seconds > 0 && <p> {duration.seconds}s</p>}
    </div>
  );
};

export default Countdown;
