export const formatCurrency = (num) => {
    return Number(num.toFixed(1)).toLocaleString() + " €"
};

export default formatCurrency;