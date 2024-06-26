import { checkInputTxt } from "./checkInputTxt";

async function submitForm(url, typeLanguage, formdata, inputTxt) {
  //Validate input
  const validInp = checkInputTxt(inputTxt.value);


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
  await fetch(`${url}?key=${formdata[0]}&txt=${validInp}`, {
    method: "POST",
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.language_list && data.language_list[0] && data.language_list[0].language === "und") {
        const typeErr = "Sorry, I can not find your language";
        typeLanguage.style.color = "red";
        typeLanguage.innerHTML = typeErr;
      } else if (data.language_list && data.language_list[0]) {
        const formText = `The type of language you have just type is: ${data.language_list[0].name}`;
        typeLanguage.innerHTML = formText;
      }
    })
    .catch((error) => console.log("error", error));
  return true;
}
export { submitForm };
