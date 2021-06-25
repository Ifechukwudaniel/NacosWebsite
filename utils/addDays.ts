const addDays = (days, date)  => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

export default addDays