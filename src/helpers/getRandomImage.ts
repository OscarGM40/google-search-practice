export const getRandomImage = () => {
  const rnd = Math.floor(Math.random() * 2);
  return rnd === 1 ? "/images/google-logo.png" : "/images/google-logo-2.png";
};
