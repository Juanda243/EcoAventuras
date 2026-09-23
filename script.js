/* =========================================================
   MARÍA LUCÍA ECO TOURS
   SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    const bookingForm = document.getElementById("bookingForm");
    const successMessage = document.getElementById("successMessage");
    const closeMessage = document.getElementById("closeMessage");

    const dateInput = document.getElementById("date");

    const languageToggle =
        document.getElementById("languageToggle");

    const themeToggle =
        document.getElementById("themeToggle");


    /* =====================================================
       HEADER AL HACER SCROLL
    ===================================================== */

    function updateHeader() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =====================================================
       MENÚ HAMBURGUESA
    ===================================================== */

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mainNav.classList.contains("active");

        const icon =
            menuToggle.querySelector("i");

        if (isOpen) {

            closeMenu();

        } else {

            mainNav.classList.add("active");

            document.body.classList.add("no-scroll");

            icon.classList.remove("bi-list");
            icon.classList.add("bi-x");

        }

    });


    function closeMenu() {

        mainNav.classList.remove("active");

        document.body.classList.remove("no-scroll");

        const icon =
            menuToggle.querySelector("i");

        if (icon) {

            icon.classList.remove("bi-x");
            icon.classList.add("bi-list");

        }

    }


    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", closeMenu);

    });


    /* =====================================================
       CERRAR MENÚ AL TOCAR FUERA
    ===================================================== */

    document.addEventListener("click", event => {

        if (!mainNav.classList.contains("active")) {
            return;
        }

        if (
            mainNav.contains(event.target) ||
            menuToggle.contains(event.target)
        ) {
            return;
        }

        closeMenu();

    });


    /* =====================================================
       ANIMACIONES AL HACER SCROLL
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".intro-grid, " +
            ".mirada-card, " +
            ".plan-card, " +
            ".timeline-item, " +
            ".experience-image, " +
            ".gallery-item, " +
            ".location-content, " +
            ".map-box, " +
            ".booking-box"
        );


    animatedElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity .8s ease, transform .8s ease";

    });


    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12
        });


    animatedElements.forEach(element => {

        observer.observe(element);

    });


    /* =====================================================
       ANIMACIÓN ESCALONADA
    ===================================================== */

    const cardGroups = [
        ".mirada-card",
        ".plan-card",
        ".timeline-item",
        ".gallery-item"
    ];


    cardGroups.forEach(selector => {

        const elements =
            document.querySelectorAll(selector);

        elements.forEach((element, index) => {

            element.style.transitionDelay =
                `${index * 0.08}s`;

        });

    });


    /* =====================================================
       FECHA MÍNIMA
    ===================================================== */

    if (dateInput) {

        const today = new Date();

        const year =
            today.getFullYear();

        const month =
            String(today.getMonth() + 1)
                .padStart(2, "0");

        const day =
            String(today.getDate())
                .padStart(2, "0");

        dateInput.min =
            `${year}-${month}-${day}`;

    }


    /* =====================================================
       FORMULARIO
    ===================================================== */

    if (bookingForm) {

        bookingForm.addEventListener("submit", event => {

            event.preventDefault();

            const name =
                document.getElementById("name")
                    .value.trim();

            const email =
                document.getElementById("email")
                    .value.trim();

            const people =
                document.getElementById("people")
                    .value;

            const plan =
                document.getElementById("plan")
                    .value;

            const date =
                document.getElementById("date")
                    .value;


            if (
                !name ||
                !email ||
                !people ||
                !plan ||
                !date
            ) {

                alert("Please complete all fields.");

                return;

            }


            if (successMessage) {

                successMessage.classList.add("show");

                document.body.classList.add("no-scroll");

            }

            bookingForm.reset();

        });

    }


    /* =====================================================
       CERRAR MENSAJE
    ===================================================== */

    if (closeMessage && successMessage) {

        closeMessage.addEventListener("click", () => {

            successMessage.classList.remove("show");

            document.body.classList.remove("no-scroll");

        });


        successMessage.addEventListener("click", event => {

            if (event.target === successMessage) {

                successMessage.classList.remove("show");

                document.body.classList.remove("no-scroll");

            }

        });

    }


    /* =====================================================
       ESC PARA CERRAR MENÚ Y MENSAJES
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (successMessage) {
                successMessage.classList.remove("show");
            }

            mainNav.classList.remove("active");

            document.body.classList.remove("no-scroll");

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("bi-x");
                icon.classList.add("bi-list");

            }

        }

    });


    /* =====================================================
       EFECTO DE LAS TARJETAS DE PLANES
    ===================================================== */

    const planCards =
        document.querySelectorAll(".plan-card");

    planCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* =====================================================
       TRADUCCIONES
    ===================================================== */

    const translations = {

        /* =================================================
                           ESPAÑOL
        ================================================= */

        es: {

            /* NAV */

            "nav.home":
                "Inicio",

            "nav.park":
                "El parque",

            "nav.plans":
                "Tours",

            "nav.routes":
                "Características",

            "nav.gallery":
                "Galería",

            "nav.location":
                "Ubicación",

            "nav.book":
                "Reservar",


            /* HERO */

            "hero.eyebrow":
                "VILLAVICENCIO · META · COLOMBIA",

            "hero.title":
                "Eco",

            "hero.name":
                "Aventureros",

            "hero.description":
                "Descubre la naturaleza y vive la aventura en el Parque Metropolitano María Lucía.",

            "hero.explore":
                "Ver tours",

            "hero.park":
                "Explorar el parque",

            "hero.hectares":
                "para todos",

            "hero.destination":
                "espacio natural",

            "hero.experiences":
                "recreación",

            "hero.more":
                "Descubre más",


            /* INTRO */

            "intro.label":
                "SOBRE EL PARQUE",

            "intro.title":
                "¿Qué es el Parque María Lucía",

            "intro.titleEm":
                "Metropolitano?",

            "intro.text1":
                "Es un espacio natural y recreativo ubicado en Villavicencio, creado para la conservación ambiental y el disfrute de toda la familia.",

            "intro.text1b":
                ", ubicada en la vereda La Llanerita, a pocos minutos de Villavicencio.",

            "intro.text2":
                "Cuenta con senderos ecológicos, lagos, zonas verdes y una gran variedad de flora y fauna, donde puedes conectarte con la naturaleza, respirar aire fresco y aprender sobre la biodiversidad de la región.",

            "intro.explore":
                "Descubre qué puedes encontrar",


            /* CUATRO MIRADAS */

            "views.label":
                "¿QUÉ PUEDES ENCONTRAR?",

            "views.title":
                "Explora el parque.",

            "views.titleEm":
                "Descubre sus espacios naturales.",

            "views.description":
                "María Lucía ofrece espacios naturales, recreativos y educativos para toda la familia.",

            "views.nature.title":
                "Naturaleza",

            "views.nature.text":
                "Camina entre paisajes, vegetación y espacios naturales del territorio llanero.",

            "views.biodiversity.title":
                "Biodiversidad",

            "views.biodiversity.text":
                "Descubre mariposas, plantas y especies que hacen único este ecosistema.",

            "views.science.title":
                "Ciencia",

            "views.science.text":
                "Conoce el trabajo de investigación y educación ambiental que se desarrolla allí.",

            "views.adventure.title":
                "Aventura",

            "views.adventure.text":
                "Recorre el parque, toma fotografías y crea tu propia historia.",


            /* PLANES */

            "plans.label":
                "NUESTROS TOURS",

            "plans.title":
                "Elige tu",

            "plans.titleEm":
                "aventura.",

            "plans.description":
                "Cuatro opciones de tour inspiradas en los espacios naturales y recreativos del Parque Metropolitano María Lucía.",

            "plans.essential":
                "ECOLÓGICO",

            "plans.popular":
                "MARIPOSAS",

            "plans.adventure":
                "VIDA SILVESTRE",

            "plans.premium":
                "PREMIUM",

            "plans.hours2":
                "2 horas",

            "plans.hours3":
                "3 horas",

            "plans.hours4":
                "4 horas",

            "plans.hours5":
                "5 horas",

            "plans.groups":
                "Mín. 5 personas",

            "plans.photography":
                "Fotografía",

            "plans.natureRoute":
                "Recorrido Ecológico",

            "plans.butterflyWorld":
                "Tour de Mariposas",

            "plans.explorersRoute":
                "Tour de Flora y Fauna",

            "plans.premiumTitle":
                "Tour Premium",

            "plans.natureText":
                "Recorrido guiado por senderos ecológicos. Transporte de ida y vuelta y almuerzo incluidos. Mínimo 5 personas.",

            "plans.butterflyText":
                "Tour y observación de mariposas. Transporte de ida y vuelta y almuerzo incluidos. Mínimo 5 personas.",

            "plans.explorersText":
                "Senderos ecológicos, observación de fauna y flora. Transporte de ida y vuelta y almuerzo incluidos. Mínimo 5 personas.",

            "plans.premiumText":
                "Incluye lagos, mariposas, flora, fauna, senderos y todo lo que el parque tiene para ofrecer. Transporte de ida y vuelta y almuerzo incluidos. Mínimo 5 personas.",

            "plans.from":
                "Precio",

            "plans.choose":
                "Reservar",

            "plans.note":
                "* La información y los precios de los tours se basan en el folleto proporcionado y se presentan con fines académicos.",


            /* RECORRIDOS */

            "routes.label":
                "EXPERIENCIA ECOLÓGICA",

            "routes.title":
                "Conecta con",

            "routes.titleEm":
                "la naturaleza y la biodiversidad.",

            "routes.description":
                "Explora senderos ecológicos, observa flora y fauna nativa, disfruta de los lagos y descubre espacios creados para el aprendizaje ambiental y la recreación.",

            "routes.stop1":
                "CARACTERÍSTICA",

            "routes.stop2":
                "CARACTERÍSTICA",

            "routes.stop3":
                "CARACTERÍSTICA",

            "routes.stop4":
                "CARACTERÍSTICA",

            "routes.stop5":
                "CARACTERÍSTICA",

            "routes.nature":
                "Senderos ecológicos",

            "routes.natureText":
                "Recorridos guiados para caminar, observar y conectarte con la naturaleza.",

            "routes.nurseries":
                "Lagos y zonas de agua",

            "routes.nurseriesText":
                "Espacios naturales de agua para disfrutar del paisaje y de la vida que los rodea.",

            "routes.lake":
                "Miradores",

            "routes.lakeText":
                "Zonas panorámicas para la observación y la fotografía.",

            "routes.research":
                "Aprendizaje y recreación",

            "routes.researchText":
                "Actividades educativas y recreativas enfocadas en la biodiversidad.",

            "routes.butterflies":
                "Flora y fauna nativa",

            "routes.butterfliesText":
                "Descubre la variedad de plantas y fauna de la región.",


            /* EXPERIENCIA */

            "experience.title":
                "¿Por qué se llama",

            "experience.titleEm":
                "María Lucía?",


            /* GALERÍA */

            "gallery.label":
                "GALERÍA",

            "gallery.title":
                "Así se siente",

            "gallery.titleEm":
                "María Lucía.",

            "gallery.description":
                "Naturaleza, biodiversidad y paisajes de los Llanos Orientales.",

            

            /* UBICACIÓN */

            "location.label":
                "ENCUÉNTRANOS",

            "location.title":
                "Villavicencio, Meta",

            "location.titleEm":
                "Colombia.",

            "location.description":
                "El Parque Metropolitano María Lucía es un espacio natural y recreativo ubicado en Villavicencio, Meta, Colombia.",

            "location.placeLabel":
                "UBICACIÓN",

            "location.place":
                "Villavicencio, Meta",

            "location.routeLabel":
                "REGIÓN",

            "location.route":
                "Llanos Orientales de Colombia",

            "location.plan":
                "Planear mi visita",

            "location.destinationLabel":
                "DESTINO",

            "location.destination":
                "Parque Metropolitano María Lucía",


            /* RESERVA */

            "booking.label":
                "RESERVA",

            "booking.title":
                "Tu próxima",

            "booking.titleEm":
                "aventura comienza aquí.",

            "booking.description":
                "Elige uno de los tours del folleto y solicita tu visita al Parque María Lucía.",


            /* FORMULARIO */

            "form.name":
                "Nombre",

            "form.email":
                "Correo",

            "form.people":
                "Personas",

            "form.experience":
                "Tour",

            "form.date":
                "Fecha",

            "form.submit":
                "Solicitar tour",


            /* FOOTER */

            "footer.description":
                "Descubre la naturaleza, la biodiversidad y la recreación en el Parque Metropolitano María Lucía.",

            "footer.explore":
                "Explorar",

            "footer.contact":
                "Contacto",

            "footer.book":
                "Reservar tour",

            "footer.follow":
                "Síguenos",

            "footer.copyright":
                "© 2026 Eco Adventurers. Proyecto académico ficticio.",

            "footer.top":
                "Volver arriba",


            /* MENSAJE */

            "success.title":
                "¡Solicitud de tour recibida!",

            "success.text":
                "Tu solicitud fue recibida. Esta demostración es parte de un proyecto académico.",

            "success.button":
                "Continuar explorando"
,

            "hero.family":
                "Familia",

            "hero.nature":
                "Naturaleza",

            "hero.fun":
                "Diversión",

            "views.trails.title":
                "Senderos ecológicos",

            "views.trails.text":
                "Camina por senderos naturales y descubre los paisajes del parque.",

            "views.lakes.title":
                "Lagos y zonas de agua",

            "views.lakes.text":
                "Disfruta de espacios de agua y de la vida que los rodea.",

            "views.flora.title":
                "Flora y fauna nativa",

            "views.flora.text":
                "Observa la diversidad de plantas y animales de los Llanos Orientales.",

            "views.viewpoints.title":
                "Miradores y zonas de fotografía",

            "views.viewpoints.text":
                "Toma fotografías y disfruta de los paisajes del parque.",

            "views.rest.title":
                "Zonas de descanso",

            "views.rest.text":
                "Haz una pausa y disfruta del entorno natural.",

            "views.activities.title":
                "Actividades educativas y recreativas",

            "views.activities.text":
                "Aprende sobre biodiversidad mientras disfrutas actividades para toda la familia.",

            "experience.kicker":
                "DATO CURIOSO",

            "experience.text":
                "El nombre María Lucía fue elegido en honor a la señora María Lucía García Orjuela, madre de Rafael Mojica García, fundador de la Corporación Universitaria del Meta. El parque fue creado con un enfoque en conservación, investigación y protección ambiental en los Llanos Orientales de Colombia."
        },


        /* =================================================
                           ENGLISH
        ================================================= */

        en: {

            /* NAV */

            "nav.home":
                "Home",

            "nav.park":
                "The park",

            "nav.plans":
                "Tours",

            "nav.routes":
                "Park features",

            "nav.gallery":
                "Gallery",

            "nav.location":
                "Location",

            "nav.book":
                "Book now",


            /* HERO */

            "hero.eyebrow":
                "VILLAVICENCIO · META · COLOMBIA",

            "hero.title":
                "Eco",

            "hero.name":
                "Adventurers",

            "hero.description":
                "Discover nature, live the adventure at María Lucía Metropolitan Park.",

            "hero.explore":
                "View tours",

            "hero.park":
                "Explore the park",

            "hero.hectares":
                "for everyone",

            "hero.destination":
                "natural space",

            "hero.experiences":
                "recreation",

            "hero.more":
                "Discover more",


            /* INTRO */

            "intro.label":
                "ABOUT THE PARK",

            "intro.title":
                "What is María Lucía",

            "intro.titleEm":
                "Metropolitan Park?",

            "intro.text1":
                "It is a natural and recreational space located in Villavicencio, created for environmental conservation and enjoyment by the whole family.",

            "intro.text1b":
                ", located in La Llanerita, just minutes from Villavicencio.",

            "intro.text2":
                "It features ecological trails, lakes, green areas, and a great variety of flora and fauna, where you can connect with nature, breathe fresh air, and learn about the region's biodiversity.",

            "intro.explore":
                "Discover what you can find",


            /* FOUR PERSPECTIVES */

            "views.label":
                "WHAT CAN YOU FIND?",

            "views.title":
                "Explore the park.",

            "views.titleEm":
                "Discover its natural spaces.",

            "views.description":
                "María Lucía offers natural, recreational, and educational spaces for the whole family.",

            "views.trails.title":
                "Ecological trails",

            "views.trails.text":
                "Walk through natural paths and discover the park's landscapes.",

            "views.lakes.title":
                "Lakes and water areas",

            "views.lakes.text":
                "Enjoy peaceful water areas and the life around them.",

            "views.flora.title":
                "Native flora and fauna",

            "views.flora.text":
                "Observe the plant and animal diversity of the Eastern Plains.",

            "views.viewpoints.title":
                "Viewpoints and photography areas",

            "views.viewpoints.text":
                "Take photographs and enjoy scenic viewpoints throughout the park.",

            "views.rest.title":
                "Rest areas",

            "views.rest.text":
                "Take a break and enjoy the natural surroundings.",

            "views.activities.title":
                "Educational and recreational activities",

            "views.activities.text":
                "Learn about biodiversity while enjoying activities for the whole family.",

            "experience.kicker":
                "FUN FACT",

            "experience.text":
                "The name María Lucía was chosen in honor of Mrs. María Lucía García Orjuela, mother of Rafael Mojica García, founder of Corporación Universitaria del Meta. The park was created with a focus on conservation, research, and environmental protection in the Eastern Plains of Colombia.",

            "views.nature.title":
                "Nature",

            "views.nature.text":
                "Walk through landscapes, vegetation and natural spaces of the Llanos territory.",

            "views.biodiversity.title":
                "Biodiversity",

            "views.biodiversity.text":
                "Discover butterflies, plants and species that make this ecosystem unique.",

            "views.science.title":
                "Science",

            "views.science.text":
                "Learn about the research and environmental education carried out here.",

            "views.adventure.title":
                "Adventure",

            "views.adventure.text":
                "Explore the park, take photographs and create your own story.",


            /* PLANS */

            "plans.label":
                "OUR TOURS",

            "plans.title":
                "Choose your",

            "plans.titleEm":
                "adventure.",

            "plans.description":
                "Four tour options inspired by the natural and recreational spaces of María Lucía Metropolitan Park.",

            "plans.essential":
                "ECOLOGICAL",

            "plans.popular":
                "BUTTERFLY",

            "plans.adventure":
                "WILDLIFE",

            "plans.premium":
                "PREMIUM",

            "plans.hours2":
                "2 hours",

            "plans.hours3":
                "3 hours",

            "plans.hours4":
                "4 hours",

            "plans.hours5":
                "5 hours",

            "plans.groups":
                "Min. 5 people",

            "plans.photography":
                "Photography",

            "plans.natureRoute":
                "Ecological Trail",

            "plans.butterflyWorld":
                "Butterfly Tour",

            "plans.explorersRoute":
                "Flora and Fauna Tour",

            "plans.premiumTitle":
                "Premium Tour",

            "plans.natureText":
                "Guided tour through ecological trails. Round-trip transportation and lunch included. Minimum 5 people.",

            "plans.butterflyText":
                "Butterfly tour and viewing. Round-trip transportation and lunch included. Minimum 5 people.",

            "plans.explorersText":
                "Ecological trails, wildlife and flora viewing. Round-trip transportation and lunch included. Minimum 5 people.",

            "plans.premiumText":
                "Includes lakes, butterflies, flora, fauna, trails, and everything the park has to offer. Round-trip transportation and lunch included. Minimum 5 people.",

            "plans.from":
                "Price",

            "plans.choose":
                "Book",

            "plans.note":
                "* Tour information and prices are based on the provided brochure and presented for academic purposes.",


            /* ROUTES */

            "routes.label":
                "ECOLOGICAL EXPERIENCE",

            "routes.title":
                "Connect with",

            "routes.titleEm":
                "nature and biodiversity.",

            "routes.description":
                "Explore ecological trails, observe native flora and fauna, enjoy the lakes and discover spaces created for environmental learning and recreation.",

            "routes.stop1":
                "FEATURE",

            "routes.stop2":
                "FEATURE",

            "routes.stop3":
                "FEATURE",

            "routes.stop4":
                "FEATURE",

            "routes.stop5":
                "FEATURE",

            "routes.nature":
                "Ecological trails",

            "routes.natureText":
                "Guided paths where you can walk, observe and connect with nature.",

            "routes.nurseries":
                "Lakes and water areas",

            "routes.nurseriesText":
                "Natural water spaces where visitors can enjoy the landscape and surrounding life.",

            "routes.lake":
                "Viewpoints",

            "routes.lakeText":
                "Scenic areas for observation and photography.",

            "routes.research":
                "Learning and recreation",

            "routes.researchText":
                "Educational and recreational activities focused on biodiversity.",

            "routes.butterflies":
                "Native flora and fauna",

            "routes.butterfliesText":
                "Discover the variety of plants and wildlife found in the region.",


            /* EXPERIENCE */

            "experience.title":
                "Why is it called",

            "experience.titleEm":
                "María Lucía?",


            /* GALLERY */

            "gallery.label":
                "GALLERY",

            "gallery.title":
                "This is how",

            "gallery.titleEm":
                "María Lucía feels.",

            "gallery.description":
                "Nature, biodiversity, and landscapes of the Eastern Plains.",

            


            /* LOCATION */

            "location.label":
                "FIND US",

            "location.title":
                "Villavicencio, Meta",

            "location.titleEm":
                "Colombia.",

            "location.description":
                "María Lucía Metropolitan Park is a natural and recreational space located in Villavicencio, Meta, Colombia.",

            "location.placeLabel":
                "LOCATION",

            "location.place":
                "Villavicencio, Meta",

            "location.routeLabel":
                "REGION",

            "location.route":
                "Eastern Plains of Colombia",

            "location.plan":
                "Plan my visit",

            "location.destinationLabel":
                "DESTINATION",

            "location.destination":
                "María Lucía Metropolitan Park",


            /* BOOKING */

            "booking.label":
                "BOOKING",

            "booking.title":
                "Your next",

            "booking.titleEm":
                "adventure starts here.",

            "booking.description":
                "Choose one of the brochure tours and request your visit to María Lucía.",


            /* FORM */

            "form.name":
                "Name",

            "form.email":
                "Email",

            "form.people":
                "People",

            "form.experience":
                "Tour",

            "form.date":
                "Date",

            "form.submit":
                "Request tour",


            /* FOOTER */

            "footer.description":
                "Discover nature, biodiversity, and recreation at María Lucía Metropolitan Park.",

            "footer.explore":
                "Explore",

            "footer.contact":
                "Contact",

            "footer.book":
                "Book a tour",

            "footer.follow":
                "Follow us",

            "footer.copyright":
                "© 2026 Eco Adventurers. Fictional academic project.",

            "footer.top":
                "Back to top",


            /* SUCCESS */

            "success.title":
                "Tour request received!",

            "success.text":
                "Your request was received. This demonstration is part of an academic project.",

            "success.button":
                "Continue exploring"
,

            "hero.family":
                "Family",

            "hero.nature":
                "Nature",

            "hero.fun":
                "Fun"
        }

    };


    /* =====================================================
       CAMBIAR IDIOMA
    ===================================================== */

    /*
       IMPORTANTE:
       El idioma inicial ahora es INGLÉS.
    */

    let currentLanguage = localStorage.getItem("marialucia-language") || "en";


    function changeLanguage(language) {

        const dictionary =
            translations[language];

        if (!dictionary) return;


        /* CAMBIAR TODOS LOS ELEMENTOS */

        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-i18n");

                if (dictionary[key]) {

                    element.textContent =
                        dictionary[key];

                }

            });


        /* CAMBIAR OPCIONES DEL SELECT */

        document
            .querySelectorAll(
                "option[data-es][data-en]"
            )
            .forEach(option => {

                option.textContent =
                    option.getAttribute(
                        `data-${language}`
                    );

            });


        /* CAMBIAR PLACEHOLDERS */

        document
            .querySelectorAll(
                "[data-placeholder-es][data-placeholder-en]"
            )
            .forEach(input => {

                input.placeholder =
                    input.getAttribute(
                        `data-placeholder-${language}`
                    );

            });


        /* IDIOMA DEL DOCUMENTO */

        document.documentElement.lang =
            language;


        /* TÍTULO */

        document.title =
            "Eco Adventurers | María Lucía Metropolitan Park";


        /* BOTÓN DE IDIOMA */

        if (languageToggle) {

            const languageText =
                languageToggle.querySelector("span");

            if (languageText) {

                languageText.textContent =
                    language === "es"
                        ? "EN"
                        : "ES";

                languageToggle.setAttribute(
                    "aria-label",
                    language === "es"
                        ? "Cambiar a inglés"
                        : "Switch to Spanish"
                );

            }

        }


        /* GUARDAR IDIOMA */

        currentLanguage = language;

        localStorage.setItem(
            "marialucia-language",
            language
        );


        /* ACTUALIZAR COPYRIGHT */

        const footerYearElement =
            document.querySelector(".footer-bottom p");

        if (footerYearElement) {

            const year =
                new Date().getFullYear();

            footerYearElement.textContent =
                language === "es"
                    ? `© ${year} Eco Adventurers. Proyecto académico ficticio.`
                    : `© ${year} Eco Adventurers. Fictional academic project.`;

        }


        /* ACTUALIZAR TEXTO DEL MODO OSCURO */

        updateThemeIcon();

    }


    /* =====================================================
       CARGAR IDIOMA
    ===================================================== */

    changeLanguage(currentLanguage);


    /* =====================================================
       BOTÓN DE CAMBIO DE IDIOMA
    ===================================================== */

    if (languageToggle) {

        languageToggle.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                const newLanguage =
                    currentLanguage === "es"
                        ? "en"
                        : "es";

                changeLanguage(newLanguage);

            }
        );

    }


    /* =====================================================
       MODO OSCURO / CLARO
    ===================================================== */

    const savedTheme =
        localStorage.getItem("marialucia-theme");


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

    }


    function updateThemeIcon() {

        if (!themeToggle) return;

        const icon =
            themeToggle.querySelector("i");


        if (!icon) return;


        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            icon.classList.remove(
                "bi-moon-stars-fill"
            );

            icon.classList.add(
                "bi-sun-fill"
            );


            themeToggle.setAttribute(
                "aria-label",
                currentLanguage === "es"
                    ? "Cambiar a modo claro"
                    : "Switch to light mode"
            );

        } else {

            icon.classList.remove(
                "bi-sun-fill"
            );

            icon.classList.add(
                "bi-moon-stars-fill"
            );


            themeToggle.setAttribute(
                "aria-label",
                currentLanguage === "es"
                    ? "Cambiar a modo oscuro"
                    : "Switch to dark mode"
            );

        }

    }


    updateThemeIcon();


    /* =====================================================
       BOTÓN DE TEMA
    ===================================================== */

    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                document.body.classList.toggle(
                    "dark-mode"
                );


                const isDark =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                localStorage.setItem(
                    "marialucia-theme",
                    isDark
                        ? "dark"
                        : "light"
                );


                updateThemeIcon();

            }
        );

    }


    /* =====================================================
       AÑO AUTOMÁTICO DEL FOOTER
    ===================================================== */

    const footerYear =
        document.querySelector(
            ".footer-bottom p"
        );


    if (footerYear) {

        const year =
            new Date().getFullYear();


        const spanishText =
            `© ${year} María Lucía Eco Tours. Proyecto académico ficticio.`;

        const englishText =
            `© ${year} María Lucía Eco Tours. Fictional academic project.`;


        footerYear.textContent =
            currentLanguage === "es"
                ? spanishText
                : englishText;

    }

});