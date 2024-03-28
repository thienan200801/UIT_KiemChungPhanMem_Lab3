import GetDaysInMonth from "./GetDaysInMonth";

describe('getDaysInMonth', () => {
    it('should return error when inputs are incorrect data type', () => {
      expect(GetDaysInMonth(1, "#%*")).toEqual("input must be a number");
      expect(GetDaysInMonth(1, "asd")).toBe("input must be a number");
      expect(GetDaysInMonth(1, "")).toBe("input must be a number");
      expect(GetDaysInMonth("#%*", 1000)).toBe("input must be a number");
      expect(GetDaysInMonth("asd", 3000)).toBe("input must be a number");
      expect(GetDaysInMonth("", 1000)).toBe("input must be a number");
      expect(GetDaysInMonth(2, 999)).toBe("year must be in range [1000, 3000]");
      expect(GetDaysInMonth(1, 3001)).toBe("year must be in range [1000, 3000]");
      expect(GetDaysInMonth(-1, 3000)).toBe("month must be in range [1, 12]");
      expect(GetDaysInMonth(0, 3000)).toBe("month must be in range [1, 12]");
      expect(GetDaysInMonth(13, 3000)).toBe("month must be in range [1, 12]");
    });
    it('should return the correct number of days for February in a leap year', () => {
        expect(GetDaysInMonth(2, 2000)).toBe(29);
        expect(GetDaysInMonth(2, 1988)).toBe(29);
    });

    it('should return the correct number of days for February in a non-leap year', () => {
        expect(GetDaysInMonth(2, 1000)).toBe(28);
        expect(GetDaysInMonth(2, 3000)).toBe(28);
        expect(GetDaysInMonth(2, 1990)).toBe(28);
    });

    it('should return 30 days for April', () => {
        expect(GetDaysInMonth(4, 2024)).toBe(30);
    });

    it('should return 30 days for June', () => {
        expect(GetDaysInMonth(6, 2024)).toBe(30);
    });

    it('should return 30 days for September', () => {
        expect(GetDaysInMonth(9, 2024)).toBe(30);
    });

    it('should return 30 days for November', () => {
        expect(GetDaysInMonth(11, 2024)).toBe(30);
    });

    it('should return 31 days for January', () => {
        expect(GetDaysInMonth(1, 2024)).toBe(31);
    });

    it('should return 31 days for March', () => {
        expect(GetDaysInMonth(3, 2024)).toBe(31);
    });

    it('should return 31 days for May', () => {
        expect(GetDaysInMonth(5, 2024)).toBe(31);
    });

    it('should return 31 days for July', () => {
        expect(GetDaysInMonth(7, 2024)).toBe(31);
    });

    it('should return 31 days for August', () => {
        expect(GetDaysInMonth(8, 2024)).toBe(31);
    });

    it('should return 31 days for October', () => {
        expect(GetDaysInMonth(10, 2024)).toBe(31);
    });

    it('should return 31 days for December', () => {
        expect(GetDaysInMonth(12, 2024)).toBe(31);
    });
});
