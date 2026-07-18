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

/* Use the Auditor's exact profile markup for every populated officer page. */
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    if (!body.classList.contains("officer-uniform-page")) {
        return;
    }

    const escapeProfileText = (value = "") => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const cleanProfileText = (value = "") => String(value)
        .replace(/\s+/g, " ")
        .trim();

    const listMarkup = (items) => items
        .map(item => `<li>${escapeProfileText(cleanProfileText(item))}</li>`)
        .join("");

    const splitQuote = (rawValue) => {
        const raw = cleanProfileText(rawValue);
        const match = raw.match(/^(.*?)(?:â€”|—)\s*([^—]+)$/);

        if (!match) {
            return { quote: raw, author: "" };
        }

        return {
            quote: cleanProfileText(match[1]),
            author: cleanProfileText(match[2])
        };
    };

    const renderExactAuditorProfile = (data) => {
        const main = document.querySelector("main.profile-container, section.profile-container");

        if (!main || !data.imageSrc || !data.name || !data.role) {
            return;
        }

        body.className = "profile-background auditor-profile-page";
        main.className = "profile-container auditor-profile";

        const details = data.details.length ? data.details : [
            { label: "Achievements", title: "Standards of Excellence", items: [] },
            { label: "Contributions", title: "Service in Action", items: [] }
        ];

        while (details.length < 2) {
            details.push({ label: "Service", title: "Leadership in Action", items: [] });
        }

        main.innerHTML = `
            <a href="../officers.html" class="back-button auditor-back-button">&larr; Back to Officers</a>

            <article class="auditor-profile-card">
                <header class="auditor-hero">
                    <div class="auditor-portrait-panel">
                        <span class="auditor-image-frame" aria-hidden="true"></span>
                        <img src="${escapeProfileText(data.imageSrc)}" alt="${escapeProfileText(data.name)}, ${escapeProfileText(data.role)}" width="1400" height="2100" loading="eager" decoding="async" fetchpriority="high">
                        <span class="auditor-photo-caption">Integrity &bull; Leadership &bull; Service</span>
                    </div>

                    <div class="auditor-intro">
                        <div class="auditor-role-row">
                            <span class="auditor-role">${escapeProfileText(data.roleLabel || `PSS ${data.role}`)}</span>
                            <span class="auditor-mark" aria-hidden="true">&#10003;</span>
                        </div>
                        <p class="auditor-eyebrow">Political Science Society</p>
                        <h1>${escapeProfileText(data.name)}</h1>
                        <p class="auditor-lead">Serving the Political Science community through responsible leadership and meaningful student participation.</p>

                        <div class="auditor-facts" aria-label="Profile details">
                            <div class="auditor-fact">
                                <span>Birthday</span>
                                <strong>${escapeProfileText(data.birthday)}</strong>
                            </div>
                            <div class="auditor-fact">
                                <span>Zodiac Sign</span>
                                <strong>${escapeProfileText(data.zodiac)}</strong>
                            </div>
                            <div class="auditor-fact">
                                <span>Year Level</span>
                                <strong>${escapeProfileText(data.yearLevel)}</strong>
                            </div>
                        </div>
                    </div>
                </header>

                <section class="auditor-motto">
                    <div class="auditor-section-icon" aria-hidden="true">&#9670;</div>
                    <div>
                        <span class="auditor-section-label">Motto</span>
                        <blockquote>${escapeProfileText(data.motto)}</blockquote>
                    </div>
                </section>

                <div class="auditor-detail-grid">
                    <section class="auditor-detail-card">
                        <span class="auditor-card-index">01</span>
                        <span class="auditor-section-label">${escapeProfileText(details[0].label)}</span>
                        <h2>${escapeProfileText(details[0].title)}</h2>
                        <ul>${listMarkup(details[0].items)}</ul>
                    </section>

                    <section class="auditor-detail-card auditor-detail-card-gold">
                        <span class="auditor-card-index">02</span>
                        <span class="auditor-section-label">${escapeProfileText(details[1].label)}</span>
                        <h2>${escapeProfileText(details[1].title)}</h2>
                        <ul>${listMarkup(details[1].items)}</ul>
                    </section>
                </div>

                <section class="auditor-quote">
                    <span class="auditor-quote-mark" aria-hidden="true">&ldquo;</span>
                    <div>
                        <span class="auditor-section-label">Favorite Political Quote</span>
                        <blockquote>${escapeProfileText(data.quote)}</blockquote>
                        ${data.author ? `<cite>&mdash; ${escapeProfileText(data.author)}</cite>` : ""}
                    </div>
                </section>
            </article>`;
    };

    const standardCard = document.querySelector(".profile-card");

    if (standardCard) {
        const directImage = standardCard.querySelector(":scope > img");
        const infoValues = [...standardCard.querySelectorAll(".info-box p")]
            .map(item => cleanProfileText(item.textContent));
        const contentSections = [...standardCard.children]
            .filter(item => item.classList.contains("section"));
        const motto = cleanProfileText(contentSections[0]?.querySelector("p")?.textContent || "");
        const politicalQuote = splitQuote(contentSections[1]?.querySelector("p")?.textContent || "");
        const achievementItems = [...(contentSections[2]?.querySelectorAll("li") || [])]
            .map(item => item.textContent);
        const contributionItems = [...(contentSections[3]?.querySelectorAll("li") || [])]
            .map(item => item.textContent);

        renderExactAuditorProfile({
            imageSrc: directImage?.getAttribute("src") || "",
            name: cleanProfileText(standardCard.querySelector(":scope > h1")?.textContent || ""),
            role: cleanProfileText(standardCard.querySelector(":scope > h2")?.textContent || ""),
            birthday: infoValues[0] || "Not provided",
            zodiac: infoValues[1] || "Not provided",
            yearLevel: infoValues[2] || "Not provided",
            motto,
            quote: politicalQuote.quote,
            author: politicalQuote.author,
            details: [
                { label: "Achievements", title: "Standards of Excellence", items: achievementItems },
                { label: "Contributions", title: "Service in Action", items: contributionItems }
            ]
        });
        return;
    }

    const presidentCard = document.querySelector(".president-profile-card");

    if (presidentCard) {
        const factValues = [...presidentCard.querySelectorAll(".president-fact strong")]
            .map(item => cleanProfileText(item.textContent));
        const interestCards = [...presidentCard.querySelectorAll(".president-interest-card")];

        renderExactAuditorProfile({
            imageSrc: presidentCard.querySelector(".president-photo-wrap img")?.getAttribute("src") || "",
            name: cleanProfileText(presidentCard.querySelector(".president-profile-intro h1")?.textContent || ""),
            role: "President",
            roleLabel: cleanProfileText(presidentCard.querySelector(".president-role")?.textContent || "PSS President"),
            birthday: factValues[0] || "Not provided",
            zodiac: factValues[1] || "Not provided",
            yearLevel: factValues[2] || "Not provided",
            motto: cleanProfileText(presidentCard.querySelector(".president-quote-card blockquote")?.textContent || ""),
            quote: cleanProfileText(presidentCard.querySelector(".president-political-quote blockquote")?.textContent || ""),
            author: cleanProfileText(presidentCard.querySelector(".president-political-quote cite")?.textContent || "").replace(/^(?:â€”|—)\s*/, ""),
            details: interestCards.slice(0, 2).map((card, index) => ({
                label: cleanProfileText(card.querySelector("h2")?.textContent || (index ? "Political Interests" : "Areas of Interest")),
                title: index ? "Political Interests" : "Areas of Interest",
                items: [...card.querySelectorAll("li")].map(item => item.textContent)
            }))
        });
    }
});

});
