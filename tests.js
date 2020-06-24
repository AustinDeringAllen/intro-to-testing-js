// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!"', function() {
       expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" if no argument is passed in', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" if an empty string is passed in', function() {
        expect(sayHello('')).toBe("Hello, World!");
    });
    it('should return "Hello, World!" if a non-string is passed in', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" if a string with a number is passed in', function() {
        expect(sayHello('42')).toBe("Hello, World!");
    });
});

describe('isFive',function() {
    it('should be a defined function',function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean',function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5',function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5"',function() {
        expect(isFive("5")).toBe(true);
    });
    it('should return false when passed 4',function() {
        expect(isFive(4)).toBe(false);
    });
});

describe('isEven',function() {
    it('should be a defined function',function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value when called',function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed the value 2',function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed the value -4',function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the value -3',function() {
        expect(isEven(-3)).toBe(false);
    });
    it('should return false when passed the value "banana"',function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed the value 8',function() {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when passed the value Infinity',function() {
       expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed the boolean value true',function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed the boolean value false',function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called without an argument',function() {
        expect(isEven()).toBe(false);
    });
    it('should return false when passed the value null',function() {
        expect(isEven(null)).toBe(false);
    });
    it('should return false when passed the value NaN',function() {
        expect(isEven(NaN)).toBe(false);
    });
});

describe('isVowel',function() {
    it('should be a defined function',function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean',function() {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true for a',function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true for A',function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false for y',function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false for 4',function() {
       expect(isVowel(4)).toBe(false);
    });
    it('should return false for true',function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false for false',function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false for banana',function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false if the argument is left empty',function() {
        expect(isVowel()).toBe(false);
    });
    it('should return true for e',function() {
       expect(isVowel('e')).toBe(true);
    });
});

describe('add',function() {
    it('should be a defined function',function() {
        expect(typeof add).toBe('function');
    });
    it('should return a number',function() {
        expect(typeof add()).toBe('number');
    });
    it('should return the number 4 when passed in 2 and 2',function() {
        expect(add(2,2)).toBe(4);
    });
    it('should return the number 6 when passed in 4 and 2',function() {
        expect(add(4,2)).toBe(6);
    });
    it('should return the number 8 when passed in 4 and "4"',function() {
        expect(add(4,"4")).toBe(8);
    });
    it('should return NaN if passed in strings with no number',function() {
       expect(isNaN(add("banana","split"))).toBe(isNaN(NaN));
    });
    it('should return 6 if passed in -4 and 10',function() {
        expect(add(-4,10)).toBe(6);
    });
    it('should return NaN if passed in a string and a number',function() {
        expect(isNaN(add(2,"apples"))).toBe(isNaN(NaN));
    });
    it('should return NaN if no arguments are passed in',function() {
        expect(isNaN(add())).toBe(isNaN(NaN));
    });
});