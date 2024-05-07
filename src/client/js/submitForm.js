import { checkInputTxt } from "./checkInputTxt";

async function submitForm(url, typeLanguage, formdata, inputTxt) {
  //Validate input
  const validInp = checkInputTxt(inputTxt.value);

  //Add body to post method
  formdata.append("txt", validInp);

  async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  await fetch(url, {
    method: "POST",
    redirect: "follow",
    body: formdata,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.language_list[0].name === "und") {
        const typeErr = "Sorry, I can not find your language";
        typeLanguage.style.color = "red";
        typeLanguage.innerHTML = typeErr;
      }

      const formText = `The type of language you have just type is: ${data.language_list[0].name}`;
      typeLanguage.innerHTML = formText;
    })
    .catch((error) => console.log("error", error));
  return true;
}
export { submitForm };
