

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// === CONFIGURACIÓN (rellena cuando quieras) ===
const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf6OGrJh-bAhJz-VxgOyAl7189_SV2--llf_CYy9WqfMBLhzg/viewform?usp=header";
const WHATSAPP_NUMBER_E164 = "34675790393"; // Ej: "34600111222"
const EMAIL = "ovalderramabarreto@gmail.com";

// Mensaje pre-escrito para WhatsApp
const WA_TEXT = encodeURIComponent(
  "Hola, he visto el proyecto DentalConnect y me gustaría conocer mejor el piloto de validación para clínicas dentales. ¿Podemos hablar cuando te venga bien?"
);

// Botones de encuesta (hay 2)
const surveyBtn = document.getElementById("surveyBtn");
const surveyBtn2 = document.getElementById("surveyBtn2");

[surveyBtn, surveyBtn2].forEach((btn) => {
  if (!btn) return;
  btn.href = GOOGLE_FORMS_URL;
});

// Botón WhatsApp
const waBtn = document.getElementById("waBtn");
if (waBtn) {
  waBtn.href = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${WA_TEXT}`;
}

// Botón Email
const mailBtn = document.getElementById("mailBtn");
if (mailBtn) {
  mailBtn.href = `mailto:${EMAIL}?subject=${encodeURIComponent("DentalConnect | Contacto")}&body=${encodeURIComponent(
    "Hola, he visto DentalConnect y me interesa conocer el piloto/estudio. ¿Podemos hablar?"
  )}`;
}
