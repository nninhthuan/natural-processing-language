import { submitForm } from "./src/client/js/submitForm";
/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
const doc = {
  getElementById: () => {},
};
test('get call api from local and external', async () => {
  const url = "https://api.meaningcloud.com/lang-4.0/identification";
  const typeLanguage = doc.getElementById("type-language");
  const inputTxt = {
    value: 'Hello, everyone'
  };

  const mockDocument = {
  };
  global.document = mockDocument;

  const formdata = new FormData();
  const result = await submitForm(url, typeLanguage, formdata, inputTxt);
  expect(result).toBe(true);
});