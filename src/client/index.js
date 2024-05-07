import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/remember-me.scss";
import { submitForm } from "./js/submitForm";

const url = "https://api.meaningcloud.com/lang-4.0/identification";
const typeLanguage = document.getElementById("type-language");
const formdata = new FormData();
const inputTxt = document.getElementById("user-name");

const localServer = "http://127.0.0.1:8000";

//Get API key from Server
fetch(`${localServer}/api-key`, { method: "GET" })
  .then((res) => res.text())
  .then((apiKey) => {
    formdata.append("key", apiKey);
  });

inputTxt.addEventListener("keyup", () => (typeLanguage.innerHTML = ""));

const form = document.getElementById("Next");
form.addEventListener("click", function(event) {
  event.preventDefault();

  submitForm(url, typeLanguage, formdata, inputTxt)
});
