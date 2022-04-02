export const fetchQuestions = async (amount = 5) => {
  try {
    const res = await fetch(`https://opentdb.com/api.php?amount=${amount}`);
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCategories = async () => {
  try {
    const res = await fetch(`https://opentdb.com/api_category.php`);
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
