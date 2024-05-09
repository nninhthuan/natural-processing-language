import { checkInputTxt } from "./src/client/js/checkInputTxt";

test('adds value to input', () => {
  expect(checkInputTxt('abc')).toBe('abc');
});