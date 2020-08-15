export const getQuizAPI = async (totalQ: number, level: string) => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${totalQ}&difficulty=${level}&type=multiple`
  );

  let { results } = await res.json();
  return results;
};
