const PHOTO_CATEGORIES = [
  { name: "Portraits",     desc: "Natural and professional portraits that capture personality and character.", img: "image/portrait.jpg" },
  { name: "Events",        desc: "Authentic moments captured as they happen.", img: "image/events.jpg" },
  { name: "Graduation",    desc: "Milestones transformed into lasting memories.", img: "image/graduations.jpg" },
  { name: "Weddings",      desc: "Emotional moments and meaningful details captured with care.", img: "image/wedding.jpg" },
  { name: "Birthday",       desc: "Clean visuals designed to present products professionally.", img: "image/birthday.jpg" },
  { name: "Corporate",     desc: "Professional imagery for businesses and organizations.", img: "image/corporate.jpg" },
];


const VIDEOS = [
  { title: "Event Videography", embedUrl: null },
  { title: "Cinematic Reel",    embedUrl: null },
];

const SOCIAL_LINKS = [
  { label: "Facebook",  url: "https://www.facebook.com/carlo.johncordero17" },
  { label: "Instagram", url: "https://www.instagram.com/theceej.17?igsh=MWJoMXh6a2N1Z2kyeg==" },
  { label: "TikTok",    url: null },
  { label: "YouTube",   url: null },
  { label: "GitHub",    url: null },
];

/* ---------- 2. RENDER GALLERY ---------- */

const galleryEl = document.getElementById("photoGallery");
PHOTO_CATEGORIES.forEach((cat) => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.setAttribute("role", "button");
  item.setAttribute("tabindex", "0");
  item.setAttribute("aria-label", `View ${cat.name} gallery`);

  const thumb = document.createElement("div");
  thumb.className = "gallery-thumb";
  if (cat.img) {
    const img = document.createElement("img");
    img.src = cat.img;
    img.alt = cat.name;
    img.loading = "lazy";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    thumb.appendChild(img);
  } else {
    thumb.innerHTML = `<span class="gallery-placeholder-text">[ ADD ${cat.name.toUpperCase()} PHOTO ]</span>`;
  }

  item.innerHTML = `
    <span class="bracket tl"></span><span class="bracket tr"></span>
    <span class="bracket bl"></span><span class="bracket br"></span>
    <div class="gallery-cat">
      <h3>${cat.name}</h3>
      <p>${cat.desc}</p>
    </div>
  `;
  item.prepend(thumb);

  const openHandler = () => openLightbox(cat.img
    ? `<img src="${cat.img}" alt="${cat.name}" style="width:100%;height:100%;object-fit:contain;">`
    : `[ ADD ${cat.name.toUpperCase()} PHOTO ]`);

  item.addEventListener("click", openHandler);
  item.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openHandler(); } });

  galleryEl.appendChild(item);
});

/* ---------- 3. RENDER VIDEOS ---------- */

const videoEl = document.getElementById("videoGallery");
VIDEOS.forEach((v) => {
  const item = document.createElement("div");
  item.className = "video-item";
  item.setAttribute("role", "button");
  item.setAttribute("tabindex", "0");
  item.setAttribute("aria-label", `Play ${v.title}`);
  item.innerHTML = `<div class="play-btn"></div><h3>${v.title}</h3>`;

  const openHandler = () => openLightbox(v.embedUrl
    ? `<iframe src="${v.embedUrl}" style="width:100%;height:100%;border:0;" allow="autoplay; fullscreen" allowfullscreen title="${v.title}"></iframe>`
    : `[ ADD ${v.title.toUpperCase()} — PASTE YOUTUBE/VIMEO EMBED LINK ]`);

  item.addEventListener("click", openHandler);
  item.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openHandler(); } });

  videoEl.appendChild(item);
});

/* ---------- 4. RENDER SOCIAL LINKS ---------- */

const socialEl = document.getElementById("socialRow");
SOCIAL_LINKS.forEach((s) => {
  const a = document.createElement("a");
  a.className = "social-pill";
  a.textContent = s.label;
  a.href = s.url || "#contact";
  if (s.url) { a.target = "_blank"; a.rel = "noopener"; }
  socialEl.appendChild(a);
});

/* ---------- 5. LIGHTBOX ---------- */

const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightboxContent");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(html) {
  lightboxContent.innerHTML = html;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  lightboxClose.focus();
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxContent.innerHTML = "";
  document.body.style.overflow = "";
}
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

/* ---------- 6. NAV: scroll state + mobile toggle ---------- */

const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function setNavOpen(open) {
  navLinks.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
}

navToggle.addEventListener("click", () => {
  setNavOpen(!navLinks.classList.contains("is-open"));
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => setNavOpen(false))
);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1025 && navLinks.classList.contains("is-open")) {
    setNavOpen(false);
  }
}, { passive: true });

/* ---------- 7. SCROLL REVEAL ---------- */

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => revealObserver.observe(el));