const galleryFolder = "../gallery-academic-year-2025-2026";

function folderImages(folder, files) {
    return files.map(function(file) {
        const folderPath = galleryFolder + "/" + encodeURIComponent(folder) + "/";
        return {
            thumbnail: folderPath + ".gallery-thumbnails/" + encodeURIComponent(file + ".webp"),
            full: folderPath + encodeURIComponent(file)
        };
    });
}

const classGallerySets = {
    "ay2025-first": {
        title: "Academic Year 2025-2026 - First Year Political Science",
        label: "2025-2026 First Year",
        images: folderImages("1st year images", ["14af5877cbc7cddd9d6357346684c696.jpeg","623b2d93c8c42db095aa9dff3855c275.jpeg","6b7d6ad07fb5246e1eace2e75a1f7702.jpeg","6ef525d70addfa831db2023d6e0c2165.jpeg","72704f818700ed203de3fd90a3bd91f6.jpeg","8d75684c5a95424b7f05f72ab0954ee8.jpeg","a8e1955e561b3e5948bf543ef6ac51fa.jpeg","d2ca251df15818763782023735bca3cd.jpeg","e1c35950e60d487066e400976f1cab2c.jpeg","e74dc03e0e4a06b80e5cbcb7c8cec35e.jpeg","ee6a02df6788baa2cc6d4db0a9d9482c.jpeg","f66158a8339cf5f155fb5edfee2e7169.jpeg","IMG_0941.jpg","IMG_0942.jpg","IMG_0943.jpg","IMG_0944.jpg","IMG_0945.jpg","IMG_1046.jpg","IMG_1047.jpg","IMG_1155.jpg","IMG_1156.jpg","IMG_1157.jpg","IMG_1158.jpg","IMG_5022.jpg","IMG_5023.jpg","IMG_5937.jpg","IMG_5939.JPG","IMG_5940.JPG","IMG_6206.PNG","IMG_6225.jpg","IMG_6226.jpg","IMG_6227.jpg","IMG_6231.jpg","IMG_6307.jpg","IMG_6308.jpg","IMG_6309.jpg","IMG_6327.jpg","IMG_6328.jpg","IMG_6459.jpg","IMG_6460.jpg","IMG_6461.jpg","IMG_6462.jpg","IMG_6463.jpg","IMG_6465.jpg","IMG_6466.jpg","IMG_6671.jpg","IMG_6700.jpg","IMG_6701.jpg","IMG_6702.jpg","IMG_6703.jpg","IMG_7100.jpg","IMG_7114.jpg","IMG_7124.jpg","IMG_7125.jpg","IMG_7126.jpg","IMG_7127.jpg","IMG_7128.jpg","IMG_7129.jpg","IMG_7130.jpg","IMG_7131.jpg","IMG_7132.jpg","IMG_7227.jpg","IMG_7432.jpg","IMG_7433.jpg","IMG_7436.jpg","IMG_7437.jpg","IMG_7438.jpg","IMG_7513.jpg","IMG_7563.jpg","IMG_9489.jpg","IMG_9499.jpg","IMG_9678.jpg","IMG_9680(1).jpg","IMG_9680.jpg","IMG_9701.jpg","IMG_9702.jpg","IMG_9703.jpg","IMG_9704.jpg","IMG_9705.jpg","IMG_9706.jpg","IMG_9720.jpg","IMG_9721.jpg","IMG_9722.jpg","IMG_9723.jpg","IMG_9724.jpg","IMG_9725.jpg"])
    },
    "ay2025-second": {
        title: "Academic Year 2025-2026 - Second Year Political Science",
        label: "2025-2026 Second Year",
        images: folderImages("2nd year images", ["2nd year.jpeg","Dinner for the film.jpeg","Dinner for the p2.jpeg","Filming for IT.jpeg","IMG_0332.JPG","IMG_0364.JPG","IMG_0665.jpg","IMG_2011.jpeg","IMG_20251022_131324_080.jpg","IMG_20251022_131330_468.jpg","IMG_2463.JPG","IMG_2464.JPG","IMG_2465.JPG","IMG_2466.JPG","IMG_2467.JPG","IMG_2470.JPG","IMG_2471.JPG","IMG_2472.JPG","IMG_2475.JPG","IMG_2476.JPG","IMG_2477.JPG","IMG_2478.JPG","IMG_2479.JPG","IMG_2480.JPG","IMG_2481.JPG","IMG_2482.JPG","IMG_2483.JPG","IMG_2496.JPG","IMG_2497.JPG","IMG_2498.JPG","IMG_2499.JPG","IMG_2500.JPG","IMG_2501.JPG","IMG_2510.JPG","IMG_2511.JPG","IMG_2512.JPG","IMG_2513.JPG","IMG_2536.JPG","IMG_2544.JPG","IMG_2596.jpg","IMG_2598.jpg","IMG_3175.jpg","IMG_3477.JPG","IMG_4407.JPG","IMG_6006.JPG","IMG_6685.JPG","IMG_6907.jpg","IMG_7095.JPG","IMG_7107.JPG","IMG_7538.JPG","IMG_7645.JPG","IMG_7661.JPG","IMG_7677.JPG","IMG_8249.jpg","preparing for the film.jpeg","received_1037623981924425.jpeg","received_1302730071965177.jpeg","received_1312825623623002.jpeg","received_1343940711129375.jpeg","received_1376791027599176.jpeg","received_1446014577276965.jpeg","received_1624105418817699.jpeg","received_1716039912752652.jpeg","received_1753223735843357.jpeg","received_1774484350180211.jpeg","received_1934919433822539.jpeg","received_2190224731795793.jpeg","received_2228375077904383.jpeg","received_2279595316179423.jpeg","received_2562703174184897.jpeg","received_3059514701049842.jpeg","received_775836098949984.jpeg","received_851884324660438.jpeg","received_878979151913125.jpeg","received_944605925243762.jpeg","received_980239441396907.jpeg","received_988795660790561.jpeg","Siriklaban (lahat ng may HEIC galing yan siriklaban).jpg","The Unbreakable bond.jpeg"])
    },
    "ay2025-third": {
        title: "Academic Year 2025-2026 - Third Year Political Science",
        label: "2025-2026 Third Year",
        images: folderImages("3rd year images", ["3BAPS BASKETBALL X VOLLEYBALL.jpeg","Basketball Men 3BAPS.jpeg","Basketball team 3BAPS.jpeg","Basketball Women 3BAPS.jpeg","Caselympics .jpg","Caselympics ‘25.jpg","Comelec ‘26.jpg","E\u0026E Seminar.jpg","F4.jpg","Group project.jpg","Mr_and_ms._Case.jpg","Paskuhan 2024.jpg","Paskuhan_1.jpg","PolSci Day ‘26.jpg","Tb.jpg","Volleyball Team 3BAPS.jpeg","Women_Basketball.jpg","Paskuhan ‘25.jpg"])
    },
    "ay2025-fourth": {
        title: "Academic Year 2025-2026 - Fourth Year Political Science",
        label: "2025-2026 Fourth Year",
        images: folderImages("4th year images", ["015e4c4898f69b9f0161697679d1265b.jpeg","1062bee529c6060abd8ab79859262be7.jpeg","1825d9857df15eed194d5266510f06e5.jpeg","1efb2042fe2e56736d157375173a49a0.jpeg","23255119535d89f43e538d65f9e7cf3f.jpeg","285c42c3460d9fd39efd317ff94dc193.jpeg","2cf65ee6ee97c7afc1d0821230188fba.jpeg","30129d6114c35a23a74184d905ca84a1.jpeg","320f22a9870d7de850e91cb5c210eb84.jpeg","32445fa9d35f924d3afd5d926a9b72b4.jpeg","35e133490f9b3b65d0ffcdaf0d6fc288.jpeg","3aa9b14ce03e0c30088e086c996d4175.jpeg","3bfcb542f983995048cf3eb995289b77.jpeg","4229af7e612cf09ec87d5ec73e4cdfae.jpeg","499ef5982a3a56b9767ecbdc93cba938.jpeg","50404eade518da232e7813f92cb1f839.jpeg","5157576a2f3be3d4c35032d0adf897d7.jpeg","560577c8f1caad814daea1e4d0abe17d.jpeg","5957aec07796bfa0b3021ef534cb638d.jpeg","5f0fc3574893f6045ae4af64a1861d5e.jpeg","60dfa914930fa711b7ed2505a9feeefe.jpeg","6620c911fa033ab44b1d435b436e10f3.jpeg","665cd32d03a81e1578da31badc10b453.jpeg","69de2922b3b4c6415715f4d43f27b233.jpeg","839b7aedf72c492bed7efb0dced8dead.jpeg","853c52a49ee7c26f1d999518912a732d.jpeg","8a96308d16076dbf2265f5846398a776.jpeg","977bac80d08f6ba52ee9f6189e457727.jpeg","9f62b2c162c5eecf0397a3b2bba584dc.jpeg","ac180d6881c993d6f2dd2f5548743d45.jpeg","ad284505a5220aa548513403794ae378.jpeg","att.CtmPzERVQttX54WYMV42upLWVicaQx3m41POHROxx1s.jpg","att.xDfCw5BoaW0A1FWuHjaD1h5YEx_GUJyaAw_JJ6b6Wy0.jpg","b3628e8160e582524f35dcf6c5cc527f.jpeg","ba21201a1d32053d4875eaecdfcac6d8.jpeg","bf8ce828d5b50e1ae432a9fa23ebc3e6.jpeg","bfc3692a01aa8582f137fe5e4960cccb.jpeg","c511c26989605e5e26f87db7b06561dd.jpeg","c702d014d9c9fbed2a927dc953bc6230.jpeg","c99730f9ed51eed8b619a5f804f2f5eb.jpeg","c9f6d9486890f2538bdd19f717616050.jpeg","cc43704f9b8aae1b6dcbf9877996c853.jpeg","d106871d5fe1a153d94114a3feb532cd.jpeg","db54faa8e3483615df8795585d708cbc.jpeg","dc742c8672cd995927261ca5a8205a48.jpeg","dd0ccfcb1181907c945be9878aa39bb2.jpeg","dffa389111dff5d88a813ce1182a50ee.jpeg","f4f73d395410a400f3fe650b931a7b8e.jpeg","f5bf1497d9aa8039ce3556bea86baf64.jpeg","IMG_0103.JPG","IMG_0105.JPG","IMG_0112.JPG","IMG_0706.jpg","IMG_0711.jpg","IMG_0718.jpg","IMG_0724.jpg","IMG_0726.jpg","IMG_0899.jpeg","IMG_0900.jpeg","IMG_0901.jpeg","IMG_0902.jpeg","IMG_0903.jpeg","IMG_1140.jpg","IMG_1490.jpg","IMG_2201.jpeg","IMG_2203.jpeg","IMG_2277.jpeg","IMG_2278.jpeg","IMG_2280.jpeg","IMG_2284.jpeg","IMG_2285.jpeg","IMG_2289.jpeg","IMG_2291.jpeg","IMG_2294.jpeg","IMG_2297.jpeg","IMG_2298.jpeg","IMG_2512.jpeg","IMG_3088.jpg","IMG_3230.jpg","IMG_3234.jpg","IMG_3265.jpg","IMG_3267.jpg","IMG_4052.JPG","IMG_4313.jpg","IMG_4355.jpeg","IMG_4381.jpeg","IMG_4406.jpeg","IMG_4407.jpeg","IMG_4408.jpeg","IMG_4575.JPG","IMG_4604.jpeg","IMG_4606.jpeg","IMG_4609.jpeg","IMG_4612.jpg","IMG_4629.JPG","IMG_4659.jpg","IMG_5322.jpg","IMG_6452.JPG","IMG_6453.JPG","IMG_7074.jpg","IMG_7081.jpg","IMG_7084.jpg","IMG_8981.jpg"])
    },
    "ay2026-first": {
        title: "Academic Year 2026-2027 - First Year Political Science",
        label: "2026-2027 First Year",
        images: [],
        comingSoon: true
    },
    "ay2026-second": {
        title: "Academic Year 2026-2027 - Second Year Political Science",
        label: "2026-2027 Second Year",
        images: [],
        comingSoon: true
    },
    "ay2026-third": {
        title: "Academic Year 2026-2027 - Third Year Political Science",
        label: "2026-2027 Third Year",
        images: [],
        comingSoon: true
    },
    "ay2026-fourth": {
        title: "Academic Year 2026-2027 - Fourth Year Political Science",
        label: "2026-2027 Fourth Year",
        images: [],
        comingSoon: true
    }
};

const galleryKey = document.body.dataset.galleryKey;
const gallery = classGallerySets[galleryKey] || classGallerySets["ay2025-first"];
const title = document.getElementById("class-gallery-title");
const subtitle = document.getElementById("class-gallery-subtitle");
const count = document.getElementById("class-gallery-count");
const grid = document.getElementById("class-gallery-grid");
const batchSize = 7;
const initialVisibleImages = window.matchMedia("(max-width: 720px)").matches ? 3 : 7;
const maxConcurrentLoads = 2;
let renderedCount = 0;
let loadSentinel = null;
let observer = null;
let imageObserver = null;
let activeImageLoads = 0;
const imageLoadQueue = [];
let lightbox = null;
let lightboxImage = null;
let lockedScrollPosition = 0;

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.removeAttribute("src");
    document.body.classList.remove("gallery-lightbox-open");
    document.documentElement.classList.remove("gallery-lightbox-open");
    document.body.style.removeProperty("top");
    window.scrollTo(0, lockedScrollPosition);
}

function setupLightbox() {
    lightbox = document.createElement("div");
    lightbox.className = "gallery-lightbox";
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.innerHTML = '<button class="gallery-lightbox-close" type="button" aria-label="Close full image">&times;</button><div class="gallery-lightbox-stage"><img alt=""></div>';
    lightboxImage = lightbox.querySelector("img");

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox || event.target.classList.contains("gallery-lightbox-stage") || event.target.closest(".gallery-lightbox-close")) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });

    document.body.appendChild(lightbox);
}

function openLightbox(item, index) {
    if (!lightbox) setupLightbox();
    lockedScrollPosition = window.scrollY;
    lightboxImage.alt = gallery.title + " photo " + (index + 1);
    lightboxImage.src = item.full;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.top = "-" + lockedScrollPosition + "px";
    document.body.classList.add("gallery-lightbox-open");
    document.documentElement.classList.add("gallery-lightbox-open");
    lightbox.querySelector(".gallery-lightbox-close").focus();
}

function loadQueuedImages() {
    while (activeImageLoads < maxConcurrentLoads && imageLoadQueue.length) {
        const image = imageLoadQueue.shift();
        const src = image.dataset.src;

        if (!src || image.src) continue;

        activeImageLoads += 1;
        delete image.dataset.src;

        const finish = function() {
            activeImageLoads -= 1;
            image.classList.add("is-loaded");
            loadQueuedImages();
        };

        image.addEventListener("load", finish, { once: true });
        image.addEventListener("error", finish, { once: true });
        image.src = src;
    }
}

function queueImage(image) {
    if (!image.dataset.src || image.dataset.queued === "true") return;
    image.dataset.queued = "true";
    imageLoadQueue.push(image);
    loadQueuedImages();
}

function createPhotoCard(item, index) {
    const button = document.createElement("button");
    button.className = "gallery-photo-card";
    button.type = "button";
    button.setAttribute("aria-label", gallery.title + " photo " + (index + 1));

    const image = document.createElement("img");
    image.alt = gallery.title + " photo " + (index + 1);
    image.decoding = "async";
    image.loading = index < initialVisibleImages ? "eager" : "lazy";
    image.fetchPriority = index < initialVisibleImages ? "high" : "low";
    image.dataset.src = item.thumbnail;

    if (index < initialVisibleImages) {
        queueImage(image);
    } else if (imageObserver) {
        imageObserver.observe(image);
    }

    const label = document.createElement("span");
    label.textContent = "Photo " + String(index + 1).padStart(2, "0");

    button.append(image, label);
    button.addEventListener("click", function() {
        openLightbox(item, index);
    });
    return button;
}

function renderNextBatch() {
    if (!grid || !gallery.images || renderedCount >= gallery.images.length) {
        if (loadSentinel) loadSentinel.remove();
        if (observer) observer.disconnect();
        return;
    }

    const fragment = document.createDocumentFragment();
    const nextCount = Math.min(renderedCount + batchSize, gallery.images.length);

    for (let index = renderedCount; index < nextCount; index += 1) {
        fragment.appendChild(createPhotoCard(gallery.images[index], index));
    }

    renderedCount = nextCount;
    grid.insertBefore(fragment, loadSentinel);

    if (renderedCount >= gallery.images.length) {
        if (loadSentinel) loadSentinel.remove();
        if (observer) observer.disconnect();
    }
}

function setupProgressiveLoading() {
    renderedCount = 0;
    grid.textContent = "";

    loadSentinel = document.createElement("div");
    loadSentinel.className = "gallery-load-sentinel";
    loadSentinel.textContent = "Loading more photos...";
    grid.appendChild(loadSentinel);

    if ("IntersectionObserver" in window) {
        imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (!entry.isIntersecting) return;
                imageObserver.unobserve(entry.target);
                queueImage(entry.target);
            });
        }, { rootMargin: "160px 0px" });
    }

    renderNextBatch();

    if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(function(entries) {
            if (entries.some(entry => entry.isIntersecting)) {
                observer.unobserve(loadSentinel);
                renderNextBatch();
                if (renderedCount < gallery.images.length) {
                    requestAnimationFrame(function() {
                        observer.observe(loadSentinel);
                    });
                }
            }
        }, { rootMargin: "180px 0px" });
        observer.observe(loadSentinel);
    } else {
        grid.querySelectorAll("img[data-src]").forEach(queueImage);
        const loadRest = function() {
            renderNextBatch();
            grid.querySelectorAll("img[data-src]").forEach(queueImage);
            if (renderedCount >= gallery.images.length) {
                window.removeEventListener("scroll", loadRest);
            }
        };
        window.addEventListener("scroll", loadRest, { passive: true });
    }
}

if (title && subtitle && count && grid) {
    title.textContent = gallery.title;
    subtitle.textContent = gallery.label;
    count.textContent = gallery.comingSoon ? "Coming soon" : gallery.images.length + " photos";

    if (gallery.comingSoon) {
        grid.innerHTML = '<div class="gallery-coming-soon-card"><span>Gallery Coming Soon</span><p>Photos for this year level will be added soon.</p></div>';
    } else {
        setupProgressiveLoading();
    }
}
