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

// describe('isEven',function() {
//     it('Should be a defined function', function() {
//         expect(typeof isEven).toBe('function');
//     });
//     it('Should return a boolean value when called', function() {
//         expect(typeof isEven).toBe('boolean');
//     });
//     it('Should return true when passed the value 10'), function() {
//         expect(isEven(10)).toBe(true);
//     }
// });