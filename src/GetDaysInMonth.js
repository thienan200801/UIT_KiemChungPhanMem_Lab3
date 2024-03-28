function GetDaysInMonth(month, year) {
    if(typeof(month) !== "number" || typeof(year) !== "number") return "input must be a number"
    if(1000>year || year>3000) return "year must be in range [1000, 3000]";
    else if (month>12 || month<1) return "month must be in range [1, 12]";
    else if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return 29; 
        } else {
            return 28; 
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30; 
    } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        return 31; 
    } else return "input must be a number";
}

export default GetDaysInMonth;
