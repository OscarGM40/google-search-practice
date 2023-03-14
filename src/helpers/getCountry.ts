export const getCountry = async () => {
  const resp = await fetch(
    `https://extreme-ip-lookup.com/json?key=${process.env.NEXT_PUBLIC_EXTREME_LOOKUP_API_KEY}`,
  );
  return await resp.json();
};
