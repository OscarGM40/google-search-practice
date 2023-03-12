/**
 * @returns a random string from Random-Word-Heroku-API
 */
export const getRandomWord = async () => {
  try {
    const data = await fetch("https://random-word-api.herokuapp.com/word");
    return await data.json();
  } catch (error) {
    console.log(error);
    return "";
  }
};
