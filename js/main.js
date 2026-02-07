/* AP Appliance Service - small helpers (no frameworks) */
(function(){
  const year = new Date().getFullYear();
  const y = document.getElementById("year");
  if(y) y.textContent = year;

  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav a").forEach(a => {
    const href = (a.getAttribute("href")||"").toLowerCase();
    if(href === path) a.classList.add("active");
  });

  const form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name")||"").toString().trim();
      const phone = (data.get("phone")||"").toString().trim();
      const fromEmail = (data.get("email")||"").toString().trim();
      const appliance = (data.get("appliance")||"").toString().trim();
      const message = (data.get("message")||"").toString().trim();

      const subject = encodeURIComponent("Service Request - AP Appliance Service");
      const body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + fromEmail + "\n" +
        "Appliance: " + appliance + "\n\n" +
        "Question/Issue:\n" + message
      );

      window.location.href = "mailto:service@apapplianceservice.com?subject=" + subject + "&body=" + body;
    });
  }
})();
