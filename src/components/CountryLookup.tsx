// fijate que en el momento en que use useState | useEffect,etc necesito decirle a Next que es client side rendering
"use client";

import { getCountry } from "@/helpers/getCountry";
import { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    getCountry()
      .then((data) => setCountry(data.country))
      .catch(console.log);
  }, []);

  return <div>{country}</div>;
};
export default CountryLookup;
