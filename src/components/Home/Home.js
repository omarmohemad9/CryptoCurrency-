import React, { useState, useEffect } from "react";
import ImgHome from "../../images/home.png";
import "./Home.css";

function Home() {
  const [BlogDate, setBlogDate] = useState(false);
  const [notifi, setNotifi] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5500/src/components/Home/Blog.json")
      .then((data) => data.json())
      .then((e) => {
        setBlogDate(e);
      })
      .catch((e) => {
        // console.log(e);
        setBlogDate(null);
        setNotifi(true);
      });
  }, []);

  return (
    <div className="Home">
      <div className="container">
        <img src={ImgHome} />
        {BlogDate &&
          BlogDate.map((e, i) => {
            return (
              <div className="text-blog" key={i}>
                <h1>{e.title}</h1>
                <p>{e.propare}</p>
                <p>{e.description}</p>
              </div>
            );
          })}
        {!BlogDate && !notifi && <div>loading...</div>}
        {notifi && <div>Not Found.</div>}
      </div>
    </div>
  );
}

export default Home;
