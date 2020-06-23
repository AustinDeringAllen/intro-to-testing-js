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
})

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