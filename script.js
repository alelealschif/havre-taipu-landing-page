if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.addEventListener("load", () => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
window.addEventListener("pageshow", () => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));

const translations = {
  pt: {
    skip:"Pular para o conteúdo",navApartment:"O refúgio",navGallery:"Galeria",navDestination:"Taipu de Fora",
    heroOverline:"TAIPU DE FORA • BAHIA",heroTitle:"Seu refúgio em Taipu de Fora",heroText:"Aluguel de temporada a poucos passos das piscinas naturais, com conforto, privacidade e tudo o que você precisa para viver dias inesquecíveis na Bahia.",heroCta:"Reservar agora",scroll:"Explore",bookingPrompt:"Seu refúgio em Taipu de Fora espera por você.",bookingCta:"Reserve aqui",
    introOverline:"Seu santuário particular",introTitle:"Arquitetura tropical, conforto contemporâneo.",introLead:"No Havre Taipu, madeira, luz e paisagismo se encontram em uma atmosfera naturalmente elegante.",introBody:"Os espaços se abrem para o jardim e a piscina, criando uma experiência fluida entre interior e exterior — um convite ao descanso em um dos cenários mais especiais da Bahia.",imageNote:"Design que deixa a paisagem entrar.",
    amenitiesOverline:"Essenciais do bem-estar",amenitiesTitle:"Detalhes que transformam a estadia.",amenitiesNote:"Tudo pensado para uma estadia confortável.",amenity1:"Piscina ao ar livre",amenity1Text:"Água e jardim compondo um cenário reservado.",amenity2:"Cozinha equipada",amenity2Text:"Um espaço funcional integrado à área social.",amenity3:"Varanda com rede",amenity3Text:"Para tardes lentas sob a arquitetura de madeira.",amenity4:"Ambientes climatizados",amenity4Text:"Conforto nos quartos em todas as estações.",
    galleryOverline:"Galeria",galleryTitle:"Uma casa que respira Bahia.",galleryText:"Texturas naturais, espaços generosos e a calma de um jardim tropical.",galleryMore:"Ver mais ambientes ↗",galleryLess:"Ver menos",
    tourOverline:"Tour virtual",tourTitle:"Sinta o ritmo da casa.",tourText:"Percorra os ambientes e descubra a conexão entre arquitetura, jardim e água.",tourPrev:"Anterior",tourNext:"Próximo",
    destinationOverline:"O destino",destinationTitle:"Taipu de Fora, natureza em estado de encanto.",destinationText:"Na Península de Maraú, Taipu de Fora encanta pelas piscinas naturais formadas entre os recifes na maré baixa, pelas águas cristalinas ideais para snorkel e pela extensa faixa de areia branca cercada por coqueiros. Gastronomia baiana, passeios de barco, praias reservadas e o pôr do sol sobre os corais completam a experiência — um encontro singular entre biodiversidade, tranquilidade e autenticidade.",
    faqTitle:"Antes de fazer as malas.",q1:"O que a casa oferece?",a1:"O Havre Taipu é uma casa de temporada completa, ideal para famílias e grupos de amigos. A propriedade conta com:",amenitySuite:"2 suítes",amenityBathrooms:"3 banheiros",amenityLiving:"Sala de estar",amenityKitchen:"Cozinha totalmente equipada",amenityVeranda:"Varanda",amenityPool:"Piscina privativa",amenityVolley:"Quadra de vôlei",amenityGarden:"Jardim tropical",amenityParking:"Estacionamento",q2:"Qual a localização?",a2:"O Havre Taipu está localizado em Taipu de Fora, na Península de Maraú, um dos destinos mais bonitos do litoral baiano.",a2Distance:"A propriedade fica aproximadamente:",a2Pool:"15 minutos das piscinas naturais de Taipu de Fora;",a2Barra:"cerca de 7 km de Barra Grande (aproximadamente 15 minutos de carro).",q3:"Como chegar?",a3:"O aeroporto mais utilizado por quem visita a região é o Aeroporto Jorge Amado (Ilhéus - BA).",a3Route:"A partir de Ilhéus, o trajeto até Taipu de Fora leva aproximadamente entre 2h30 e 3h de carro, dependendo das condições da estrada.",q4:"Há restaurantes e mercados por perto?",a4:"Sim.",a4Nearby:"Nas proximidades é possível encontrar restaurantes, bares de praia, mercados, padarias e serviços essenciais, permitindo aproveitar a estadia com conforto sem precisar percorrer grandes distâncias.",q5:"Como faço minha reserva?",a5:"As reservas são realizadas pelo Airbnb.",a5Booking:"Clique no botão “Reservar agora” presente no site para consultar disponibilidade, valores e concluir sua reserva com total segurança.",q6:"As fotos representam exatamente a propriedade?",a6:"Sim.",a6Photos:"Todas as fotografias exibidas neste site são reais e representam os ambientes da propriedade, permitindo que você conheça cada detalhe antes da sua chegada.",
  },
  en: {
    skip:"Skip to content",navApartment:"The retreat",navGallery:"Gallery",navDestination:"Taipu de Fora",
    heroOverline:"TAIPU DE FORA • BAHIA",heroTitle:"Your retreat in Taipu de Fora",heroText:"A vacation rental just steps from the natural pools, with comfort, privacy and everything you need for unforgettable days in Bahia.",heroCta:"Book now",scroll:"Explore",bookingPrompt:"Your retreat in Taipu de Fora is waiting for you.",bookingCta:"Book here",
    introOverline:"Your private sanctuary",introTitle:"Tropical architecture, contemporary comfort.",introLead:"At Havre Taipu, wood, light and landscaping meet in a naturally elegant atmosphere.",introBody:"Spaces open onto the garden and pool, creating a fluid experience between indoors and outdoors — an invitation to unwind in one of Bahia's most special settings.",imageNote:"Design that lets the landscape in.",
    amenitiesOverline:"Wellbeing essentials",amenitiesTitle:"Details that transform a stay.",amenitiesNote:"Everything designed for a comfortable stay.",amenity1:"Outdoor pool",amenity1Text:"Water and garden in a private setting.",amenity2:"Equipped kitchen",amenity2Text:"A functional space integrated into the social area.",amenity3:"Veranda and hammock",amenity3Text:"For slow afternoons beneath timber architecture.",amenity4:"Air-conditioned rooms",amenity4Text:"Bedroom comfort in every season.",
    galleryOverline:"Gallery",galleryTitle:"A home that breathes Bahia.",galleryText:"Natural textures, generous spaces and the calm of a tropical garden.",galleryMore:"See more spaces ↗",galleryLess:"See less",
    tourOverline:"Virtual tour",tourTitle:"Feel the rhythm of the house.",tourText:"Walk through its spaces and discover the connection between architecture, garden and water.",tourPrev:"Previous",tourNext:"Next",
    destinationOverline:"The destination",destinationTitle:"Taipu de Fora, nature in a state of wonder.",destinationText:"On the Maraú Peninsula, Taipu de Fora captivates with natural pools formed among the reefs at low tide, crystal-clear waters ideal for snorkelling and a long stretch of white sand framed by palm trees. Bahian cuisine, boat trips, secluded beaches and sunsets over the coral complete the experience — a singular blend of biodiversity, tranquility and authenticity.",
    faqTitle:"Before packing your bags.",q1:"What does the house offer?",a1:"Havre Taipu is a complete vacation home, ideal for families and groups of friends. The property includes:",amenitySuite:"2 suites",amenityBathrooms:"3 bathrooms",amenityLiving:"Living room",amenityKitchen:"Fully equipped kitchen",amenityVeranda:"Veranda",amenityPool:"Private pool",amenityVolley:"Volleyball court",amenityGarden:"Tropical garden",amenityParking:"Parking",q2:"Where is it located?",a2:"Havre Taipu is located in Taipu de Fora, on the Maraú Peninsula, one of the most beautiful destinations on the Bahia coast.",a2Distance:"The property is approximately:",a2Pool:"15 minutes from the natural pools of Taipu de Fora;",a2Barra:"around 7 km from Barra Grande (approximately 15 minutes by car).",q3:"How do I get there?",a3:"The airport most commonly used by visitors to the region is Jorge Amado Airport (Ilhéus, Bahia).",a3Route:"From Ilhéus, the journey to Taipu de Fora takes approximately 2.5 to 3 hours by car, depending on road conditions.",q4:"Are there restaurants and markets nearby?",a4:"Yes.",a4Nearby:"Nearby you will find restaurants, beach bars, markets, bakeries and essential services, allowing you to enjoy a comfortable stay without travelling long distances.",q5:"How do I book?",a5:"Reservations are made through Airbnb.",a5Booking:"Click the “Book now” button on the website to check availability and prices and complete your booking securely.",q6:"Do the photos accurately represent the property?",a6:"Yes.",a6Photos:"All photographs shown on this website are real and represent the property’s spaces, allowing you to discover every detail before you arrive.",
  },
  fr: {
    skip:"Aller au contenu",navApartment:"Le refuge",navGallery:"Galerie",navDestination:"Taipu de Fora",
    heroOverline:"TAIPU DE FORA • BAHIA",heroTitle:"Votre refuge à Taipu de Fora",heroText:"Une location de vacances à quelques pas des piscines naturelles, avec confort, intimité et tout ce qu’il faut pour vivre des journées inoubliables à Bahia.",heroCta:"Réserver maintenant",scroll:"Explorer",bookingPrompt:"Votre refuge à Taipu de Fora vous attend.",bookingCta:"Réservez ici",
    introOverline:"Votre sanctuaire privé",introTitle:"Architecture tropicale, confort contemporain.",introLead:"À Havre Taipu, le bois, la lumière et le paysage se rencontrent dans une atmosphère naturellement élégante.",introBody:"Les espaces s’ouvrent sur le jardin et la piscine, créant une expérience fluide entre intérieur et extérieur — une invitation au repos dans l’un des plus beaux décors de Bahia.",imageNote:"Un design qui laisse entrer le paysage.",
    amenitiesOverline:"L’essentiel du bien-être",amenitiesTitle:"Des détails qui transforment le séjour.",amenitiesNote:"Tout est pensé pour un séjour confortable.",amenity1:"Piscine extérieure",amenity1Text:"L’eau et le jardin composent un cadre intime.",amenity2:"Cuisine équipée",amenity2Text:"Un espace fonctionnel intégré à la pièce de vie.",amenity3:"Véranda et hamac",amenity3Text:"Pour de lentes après-midi sous l’architecture en bois.",amenity4:"Chambres climatisées",amenity4Text:"Un confort agréable en toute saison.",
    galleryOverline:"Galerie",galleryTitle:"Une maison qui respire Bahia.",galleryText:"Textures naturelles, espaces généreux et calme d’un jardin tropical.",galleryMore:"Voir plus d’espaces ↗",galleryLess:"Voir moins",
    tourOverline:"Visite virtuelle",tourTitle:"Ressentez le rythme de la maison.",tourText:"Parcourez les espaces et découvrez le lien entre architecture, jardin et eau.",tourPrev:"Précédent",tourNext:"Suivant",
    destinationOverline:"La destination",destinationTitle:"Taipu de Fora, la nature à l’état d’émerveillement.",destinationText:"Sur la péninsule de Maraú, Taipu de Fora séduit par ses piscines naturelles formées entre les récifs à marée basse, ses eaux cristallines idéales pour le snorkeling et sa longue plage de sable blanc bordée de cocotiers. Cuisine bahianaise, sorties en bateau, plages préservées et couchers de soleil sur les coraux complètent l’expérience — une rencontre unique entre biodiversité, sérénité et authenticité.",
    faqTitle:"Avant de faire vos valises.",q1:"Que propose la maison ?",a1:"Havre Taipu est une maison de vacances complète, idéale pour les familles et les groupes d’amis. La propriété comprend :",amenitySuite:"2 suites",amenityBathrooms:"3 salles de bain",amenityLiving:"Salon",amenityKitchen:"Cuisine entièrement équipée",amenityVeranda:"Véranda",amenityPool:"Piscine privée",amenityVolley:"Terrain de volley",amenityGarden:"Jardin tropical",amenityParking:"Parking",q2:"Où se trouve la propriété ?",a2:"Havre Taipu se situe à Taipu de Fora, sur la péninsule de Maraú, l’une des plus belles destinations du littoral bahianais.",a2Distance:"La propriété se trouve à environ :",a2Pool:"15 minutes des piscines naturelles de Taipu de Fora ;",a2Barra:"environ 7 km de Barra Grande (approximativement 15 minutes en voiture).",q3:"Comment venir ?",a3:"L’aéroport le plus utilisé pour visiter la région est l’aéroport Jorge Amado (Ilhéus, Bahia).",a3Route:"Depuis Ilhéus, le trajet jusqu’à Taipu de Fora dure environ 2 h 30 à 3 h en voiture, selon l’état de la route.",q4:"Y a-t-il des restaurants et des commerces à proximité ?",a4:"Oui.",a4Nearby:"À proximité, vous trouverez des restaurants, des bars de plage, des marchés, des boulangeries et des services essentiels, pour profiter confortablement de votre séjour sans parcourir de longues distances.",q5:"Comment réserver ?",a5:"Les réservations sont effectuées via Airbnb.",a5Booking:"Cliquez sur le bouton « Réserver maintenant » du site pour consulter les disponibilités et les tarifs, puis finaliser votre réservation en toute sécurité.",q6:"Les photos représentent-elles fidèlement la propriété ?",a6:"Oui.",a6Photos:"Toutes les photographies présentées sur ce site sont réelles et représentent les espaces de la propriété, afin que vous puissiez en découvrir chaque détail avant votre arrivée.",
  }
};

let language = "pt";
const BOOKING_URL = "https://www.airbnb.fr/rooms/1634186480901718296?unique_share_id=cfcbe2fb-032a-4b93-9132-f1d2f625d0a5&viralityEntryPoint=1&s=76&source_impression_id=p3_1786095350_P3sDckGN043fC0so";
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  const tryPlayHeroVideo = () => {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.playsInline = true;
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) playPromise.catch(() => {});
  };

  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.setAttribute("muted", "");
  heroVideo.setAttribute("playsinline", "");
  heroVideo.setAttribute("webkit-playsinline", "");
  document.addEventListener("DOMContentLoaded", tryPlayHeroVideo, { once: true });
  heroVideo.addEventListener("loadedmetadata", tryPlayHeroVideo, { once: true });
  heroVideo.addEventListener("loadeddata", tryPlayHeroVideo, { once: true });
  heroVideo.addEventListener("canplay", tryPlayHeroVideo, { once: true });
  window.addEventListener("load", tryPlayHeroVideo, { once: true });
  window.addEventListener("pageshow", tryPlayHeroVideo);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") tryPlayHeroVideo();
  });
  tryPlayHeroVideo();
}

function closeMenu() {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});
document.querySelectorAll(".site-nav a").forEach(link => link.addEventListener("click", closeMenu));
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 30), { passive: true });

document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => {
  language = button.dataset.lang;
  document.documentElement.lang = language === "pt" ? "pt-BR" : language;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.dataset.i18n;
    if (translations[language][key]) node.textContent = translations[language][key];
  });
  document.querySelectorAll("[data-lang]").forEach(item => {
    const active = item.dataset.lang === language;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  document.title = language === "pt" ? "Havre Taipu | Casa de Temporada em Taipu de Fora - Bahia" : language === "fr" ? "Havre Taipu | Maison de vacances à Taipu de Fora - Bahia" : "Havre Taipu | Vacation Home in Taipu de Fora - Bahia";
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

const faqItems = [...document.querySelectorAll(".faq-item")];
const faqCloseTimers = new WeakMap();
function closeFaq(item) {
  window.clearTimeout(faqCloseTimers.get(item));
  item.classList.remove("is-open");
  item.querySelector("summary").setAttribute("aria-expanded", "false");
  faqCloseTimers.set(item, window.setTimeout(() => { item.open = false; }, 400));
}
faqItems.forEach(item => {
  const summary = item.querySelector("summary");
  summary.addEventListener("click", event => {
    event.preventDefault();
    if (item.classList.contains("is-open")) {
      closeFaq(item);
      return;
    }
    faqItems.filter(other => other !== item && other.open).forEach(closeFaq);
    window.clearTimeout(faqCloseTimers.get(item));
    item.open = true;
    void item.offsetHeight;
    item.classList.add("is-open");
    summary.setAttribute("aria-expanded", "true");
  });
});

const moreImages = ["02","03","04","07","09","14","16","19","20"];
const moreImageAlts = {
  "02":"Varanda coberta do Havre Taipu com mesas, rede e cozinha",
  "03":"Varanda de madeira do Havre Taipu com vista para a piscina",
  "04":"Piscina privativa do Havre Taipu cercada por jardim tropical",
  "07":"Casa com piscina em Taipu de Fora Bahia",
  "09":"Área externa do Havre Taipu com piscina e jardim",
  "14":"Sala integrada à cozinha e à varanda do Havre Taipu",
  "16":"Banheiro do Havre Taipu com acabamento contemporâneo",
  "19":"Suíte climatizada da casa de temporada em Taipu de Fora",
  "20":"Banheiro da suíte do Havre Taipu"
};
const moreContainer = document.querySelector("#gallery-more");
const moreGrid = moreContainer.querySelector(".gallery-more-grid");
const showMore = document.querySelector("#show-more");
let galleryExpanded = false;
let galleryCollapseTimer;
showMore.addEventListener("click", () => {
  const opening = !galleryExpanded;
  window.clearTimeout(galleryCollapseTimer);
  if (opening && !moreGrid.children.length) {
    moreImages.forEach((number, index) => {
      const button = document.createElement("button");
      button.className = "gallery-item";
      button.dataset.full = `assets/images/havre-${number}.jpg`;
      button.setAttribute("aria-label", `Ampliar foto ${index + 7}`);
      button.innerHTML = `<img src="assets/images/havre-${number}.jpg" alt="${moreImageAlts[number]}" loading="lazy">`;
      moreGrid.append(button);
    });
  }
  galleryExpanded = opening;
  showMore.dataset.i18n = opening ? "galleryLess" : "galleryMore";
  showMore.textContent = translations[language][showMore.dataset.i18n];
  showMore.setAttribute("aria-expanded", String(opening));
  if (opening) {
    moreContainer.hidden = false;
    moreContainer.setAttribute("aria-hidden", "false");
    void moreContainer.offsetHeight;
    moreContainer.classList.add("open");
  } else {
    moreContainer.classList.remove("open");
    moreContainer.setAttribute("aria-hidden", "true");
    galleryCollapseTimer = window.setTimeout(() => { moreContainer.hidden = true; }, 500);
  }
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
let activeIndex = 0;
function galleryButtons() { return [...document.querySelectorAll(".gallery-item")]; }
function openLightbox(button) {
  const buttons = galleryButtons();
  activeIndex = buttons.indexOf(button);
  lightboxImage.src = button.dataset.full;
  lightboxImage.alt = button.querySelector("img").alt;
  lightbox.showModal();
  document.body.classList.add("lightbox-open");
}
document.addEventListener("click", event => {
  const item = event.target.closest(".gallery-item");
  if (item) openLightbox(item);
});
function stepLightbox(direction) {
  const buttons = galleryButtons();
  activeIndex = (activeIndex + direction + buttons.length) % buttons.length;
  lightboxImage.src = buttons[activeIndex].dataset.full;
  lightboxImage.alt = buttons[activeIndex].querySelector("img").alt;
}
lightbox.querySelector(".prev").addEventListener("click", () => stepLightbox(-1));
lightbox.querySelector(".next").addEventListener("click", () => stepLightbox(1));
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
lightbox.addEventListener("close", () => document.body.classList.remove("lightbox-open"));
document.addEventListener("keydown", event => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") stepLightbox(-1);
  if (event.key === "ArrowRight") stepLightbox(1);
});

const tourPlayer = document.querySelector("[data-tour-player]");
if (tourPlayer) {
  const tourStage = tourPlayer.querySelector(".tour-stage");
  const tourVideo = tourPlayer.querySelector(".tour-main-video");
  const tourItems = [...tourPlayer.querySelectorAll(".tour-thumbnail")];
  const tourCounter = tourPlayer.querySelector(".tour-counter");
  const tourProgress = tourPlayer.querySelector(".tour-progress");
  let tourIndex = 0;
  let touchStartX = 0;

  const keepTourSilent = () => {
    tourVideo.muted = true;
    tourVideo.volume = 0;
  };

  const selectTourVideo = index => {
    tourIndex = (index + tourItems.length) % tourItems.length;
    const item = tourItems[tourIndex];
    tourVideo.pause();
    tourStage.classList.add("is-switching");
    tourItems.forEach((thumbnail, position) => {
      const active = position === tourIndex;
      thumbnail.classList.toggle("active", active);
      thumbnail.setAttribute("aria-pressed", String(active));
    });
    tourCounter.textContent = `${String(tourIndex + 1).padStart(2, "0")} / 04`;
    window.setTimeout(() => {
      tourVideo.src = item.dataset.src;
      tourVideo.poster = item.dataset.poster;
      keepTourSilent();
      tourVideo.load();
      tourVideo.play().catch(() => {});
      tourStage.classList.remove("is-switching");
    }, 220);
  };

  tourItems.forEach((item, index) => item.addEventListener("click", () => selectTourVideo(index)));
  tourPlayer.querySelector(".tour-prev").addEventListener("click", () => selectTourVideo(tourIndex - 1));
  tourPlayer.querySelector(".tour-next").addEventListener("click", () => selectTourVideo(tourIndex + 1));
  tourVideo.addEventListener("ended", () => selectTourVideo(tourIndex + 1));
  tourVideo.addEventListener("volumechange", keepTourSilent);
  tourVideo.addEventListener("play", keepTourSilent);
  tourVideo.addEventListener("click", () => tourVideo.paused ? tourVideo.play() : tourVideo.pause());
  tourVideo.addEventListener("timeupdate", () => {
    const progress = tourVideo.duration ? (tourVideo.currentTime / tourVideo.duration) * 100 : 0;
    tourProgress.querySelector("span").style.width = `${progress}%`;
  });
  tourProgress.addEventListener("click", event => {
    const bounds = tourProgress.getBoundingClientRect();
    if (tourVideo.duration) tourVideo.currentTime = ((event.clientX - bounds.left) / bounds.width) * tourVideo.duration;
  });
  tourPlayer.querySelector(".tour-fullscreen").addEventListener("click", () => {
    if (tourStage.requestFullscreen) tourStage.requestFullscreen();
    else if (tourVideo.webkitEnterFullscreen) tourVideo.webkitEnterFullscreen();
  });
  tourStage.addEventListener("touchstart", event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  tourStage.addEventListener("touchend", event => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 50) selectTourVideo(tourIndex + (distance < 0 ? 1 : -1));
  }, { passive: true });
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) tourVideo.play().catch(() => {});
      else tourVideo.pause();
    });
  }, { threshold: .35 }).observe(tourPlayer);
  keepTourSilent();
}
document.querySelectorAll("[data-booking-link]").forEach(link => {
  if (BOOKING_URL) {
    link.href = BOOKING_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();
