import React, { Fragment, useState, useEffect, useMemo } from "react";

import axios from "axios";
import Content from "../Content/Content";
import WatchList from "../WatchList/WatchList";
export let KnowContext = React.createContext();

const Home = () => {
  let [load, setLoad] = useState(true);
  let urlApi =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1";
  const [date, setDate] = useState([]);
  const [failed, setFailed] = useState(false);
  const [destroyed, setDestroye] = useState(false);
  useEffect(() => {
    let id = setInterval(
      axios
        .get(urlApi)
        .then((e) => {
          const data = e.data;
          setDate(data);
          setLoad(false);
          // console.log(data);
          setDestroye(true);
        })
        .catch(() => {
          setFailed(true);
          setDestroye(true);
        }),
      10000
    );
    clearInterval(id);
  }, [date]);
  let memoizationCon = useMemo(() => {
    return <Content date={date} failed={failed} des={destroyed} />;
  });
  let memeoization = useMemo(() => {
    return <WatchList date={date} failed={failed} des={destroyed} />;
  });
  return (
    <Fragment>
      {memoizationCon}
      <KnowContext.Provider value={load}>{memeoization}</KnowContext.Provider>
    </Fragment>
  );
};

export default Home;
