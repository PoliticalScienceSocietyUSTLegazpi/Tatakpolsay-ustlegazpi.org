document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {
        const menuBtn = document.createElement("button");
        menuBtn.className = "mobile-menu-btn";
        menuBtn.setAttribute("aria-label", "Toggle Navigation");
        menuBtn.innerHTML = "<span></span><span></span><span></span>";

        navbar.appendChild(menuBtn);

        function closeMenu() {
            navLinks.classList.remove("active");
            menuBtn.classList.remove("open");
        }

        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinks.classList.toggle("active");
            menuBtn.classList.toggle("open");
        });

        navLinks.addEventListener("click", (e) => e.stopPropagation());

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", closeMenu);
        window.addEventListener("resize", closeMenu);

        const currentPath = window.location.pathname;
        const currentPage = currentPath.split("/").pop() || "index.html";

const pageGroups = {
    "accomplishments.html": [
        "accomplishments.html",
        "accomplishments-2025-2026.html",
        "accomplishments-2026-2027.html",
        "onsite-activities.html",
        "social-media-engagement.html",
        "fact-or-fiction.html",
        "usapang-polsay.html",
        "polscibles-unfiltered.html",
        "case-digest.html",
        "poli-connect.html",
        "siriklaban2026.html"
    ],

    "resources.html": [
    "resources.html",
    "political-wisdom.html",
    "favorite-quotes.html",
    "saved-quotes.html",
    "political-science-trivia.html",
    "saved-facts.html",
    "political-dictionary.html",
    "saved-terms.html",
    "constitution-hub.html",
    "references.html"
    ],

    "gallery.html": [
        "gallery.html"
    ],

    "about.html": [
        "about.html"
    ],

    "officers.html": [
        "officers.html"
    ],

    "concern.html": [
        "concern.html"
    ],

    "index.html": [
        "",
        "index.html"
    ]
};

// Highlight Officers for every profile page
if (currentPath.includes("/profiles/")) {
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href").includes("officers")) {
            link.classList.add("active-page");
        }
    });
}

document.querySelectorAll(".nav-links a").forEach(link => {

    const linkPage = link.getAttribute("href").split("/").pop();

    if (
        pageGroups[linkPage] &&
        pageGroups[linkPage].includes(currentPage)
    ) {
        link.classList.add("active-page");
    }

});
    }

    document.querySelectorAll(".info-box").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

    document.querySelectorAll(".section").forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.transform = "translateY(-5px)";
        });

        section.addEventListener("mouseleave", () => {
            section.style.transform = "translateY(0)";
        });
    });

    // ==========================
    // IMAGE MODAL / VIEWER
    // ==========================

    const modal = document.createElement("div");
    modal.className = "image-modal";
    modal.innerHTML = `
        <button class="image-modal-close">×</button>
        <img src="" alt="Expanded image">
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector("img");
    const modalClose = modal.querySelector(".image-modal-close");

    const clickableImages = document.querySelectorAll(`
    .clickable-image,
    .polsay-image-row img,
    .fof-image-row img,
    .case-photo-card img,
    .poli-main-image,
    .case-main-image
`);

    clickableImages.forEach(img => {
        img.classList.add("clickable-image");

        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    function closeImageModal() {
        modal.classList.remove("active");
        modalImg.src = "";
        document.body.style.overflow = "";
    }

    modalClose.addEventListener("click", closeImageModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeImageModal();
        }
    });

    // ==========================
    // BACK TO TOP BUTTON
    // ==========================

    const backTopBtn = document.createElement("button");
    backTopBtn.className = "back-to-top";
    backTopBtn.innerHTML = "↑";
    backTopBtn.setAttribute("aria-label", "Back to top");
    document.body.appendChild(backTopBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backTopBtn.classList.add("show");
        } else {
            backTopBtn.classList.remove("show");
        }
    });

    backTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    
// ==========================
// IMAGE LOADING OPTIMIZATION
// ==========================

const preloadImage = (href, options = {}) => {
    if (!href || document.querySelector(`link[rel="preload"][href="${href}"]`)) {
        return;
    }

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = href;

    if (options.media) {
        link.media = options.media;
    }

    link.setAttribute("fetchpriority", options.priority || "high");
    document.head.appendChild(link);
};

const isNestedPage = window.location.pathname.includes("/pages/");
const isProfilePage = window.location.pathname.includes("/profiles/");
const imageRoot = isProfilePage ? "../../images/" : isNestedPage ? "../images/" : "images/";

preloadImage(`${imageRoot}logo.png`);
preloadImage(`${imageRoot}background1.png`);

if (document.body.classList.contains("home-page")) {
    preloadImage("images/home-portal-bg.png", { media: "(min-width: 721px)" });
    preloadImage("images/home-mobile-bg.jpg", { media: "(max-width: 720px)" });
}

document.querySelectorAll("img").forEach(img => {
    img.setAttribute("decoding", "async");
    img.setAttribute("loading", "eager");
    img.setAttribute("fetchpriority", "high");

    if (img.currentSrc || img.src) {
        const warmImage = new Image();
        warmImage.src = img.currentSrc || img.src;
    }
});

});
