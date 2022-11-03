import ForcastCard from "./forcastCards/forcastCards";

const Forcast = ({ forcast }) => {
  return (
    <div>
      {forcast instanceof Map
        ? [...forcast.entries()].map(([dt_txt, list]) =>
            list.length > 5 ? (
              <ForcastCard dt_txt={dt_txt} list={list} key={list[0].dt} />
            ) : (
              ""
            )
          )
        : ""}
    </div>
  );
};

export default Forcast;
