const photoInput = document.getElementById("photoInput");
const preview = document.getElementById("preview");
const generateBtn = document.getElementById("generateBtn");

const uploadScreen = document.getElementById("uploadScreen");
const loadingScreen = document.getElementById("loadingScreen");
const resultScreen = document.getElementById("resultScreen");

const resultImage = document.getElementById("resultImage");
const downloadBtn = document.getElementById("downloadBtn");
const shareBtn = document.getElementById("shareBtn");
const againBtn = document.getElementById("againBtn");

let selectedImage = null;

photoInput.addEventListener("change", function () {

  const file = this.files[0];

  if (!file) return;

  selectedImage = file;

  const imageURL = URL.createObjectURL(file);

  preview.src = imageURL;
  preview.classList.remove("hidden");

  generateBtn.classList.remove("hidden");
});


generateBtn.addEventListener("click", function () {

  uploadScreen.classList.add("hidden");
  loadingScreen.classList.remove("hidden");

  /*
   * TEMPORÁRIO:
   * Aqui vamos conectar a API de geração de imagem.
   */

  setTimeout(() => {

    loadingScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    resultImage.src = preview.src;

  }, 2000);

});


downloadBtn.addEventListener("click", function () {

  const link = document.createElement("a");

  link.href = resultImage.src;
  link.download = "minha-montagem.jpg";

  link.click();

});


shareBtn.addEventListener("click", async function () {

  if (!navigator.share) {
    alert("O compartilhamento não está disponível neste navegador.");
    return;
  }

  try {

    await navigator.share({
      title: "Minha foto",
      text: "Confira minha montagem!"
    });

  } catch (error) {

    console.log(error);

  }

});


againBtn.addEventListener("click", function () {

  resultScreen.classList.add("hidden");
  uploadScreen.classList.remove("hidden");

  preview.classList.add("hidden");
  generateBtn.classList.add("hidden");

  photoInput.value = "";

});