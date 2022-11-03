import ForcastCard from './forcastCards/forcastCards';

const Forcast = ({ forcast, isImperial }) => {
  return (
    <div className='forcast-container'>
      {forcast instanceof Map
        ? [...forcast.entries()].map(([dt_txt, list]) =>
            list.length > 5 ? (
              <ForcastCard
                dt_txt={dt_txt}
                list={list}
                key={list[0].dt}
                isImperial={isImperial}
              />
            ) : (
              ''
            )
          )
        : ''}
    </div>
  );
};

export default Forcast;
