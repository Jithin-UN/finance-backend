import Record from "../models/Record.js";

export const getSummary = async (req, res) => {
  const records = await Record.find();

  let income = 0, expense = 0;
  let categoryTotals = {};

  records.forEach(r => {
    if (r.type === "income") income += r.amount;
    else expense += r.amount;

    categoryTotals[r.category] =
      (categoryTotals[r.category] || 0) + r.amount;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
    categoryTotals
  });
};