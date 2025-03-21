import { fizzBuzz } from '../src/fizzbuzz';

test('returns Fizz for 3', () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});

test('returns Buzz for 5', () => {
  expect(fizzBuzz(5)).toBe("Buzz");
});

test('returns FizzBuzz for 15', () => {
  expect(fizzBuzz(15)).toBe("FizzyBuzz");
});

