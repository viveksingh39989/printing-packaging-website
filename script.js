// IMPORTANT: Replace this with your WhatsApp number including country code, digits only.
// Example for India: 919876543210 (do not include +, spaces, or dashes).
const WHATSAPP_NUMBER = "916265947857";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

const directWhatsApp = document.getElementById("whatsappDirect");
directWhatsApp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I would like to enquire about printing and packaging services.")}`;

document.getElementById("quoteForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const form = new FormData(this);
  const message = [
    "Hello, I would like a printing/packaging quote.",
    `Name: ${form.get("name")}`,
    `Phone: ${form.get("phone")}`,
    `Email: ${form.get("email") || "Not provided"}`,
    `Service: ${form.get("service")}`,
    `Project details: ${form.get("message")}`
  ].join("\n");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  document.getElementById("formHelp").textContent = "WhatsApp is opening. Please review your enquiry and press Send there.";
  window.open(url, "_blank", "noopener,noreferrer");
});
