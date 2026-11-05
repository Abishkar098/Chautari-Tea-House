/* Chautari Tea House: the only menu file.
   The homepage and the photo menu both read this, so change a price or a name here and both pages update.

   Top banner on both pages. Put text between the quotes, leave empty to hide it:
   NOTICE = "Live music this Friday, 6 PM"

   Dish photos go in images/menu/. The file names are listed in menu-photo-names.txt.
*/
(function () {
  const PHONE = "9779821878239";
  const SITE = "https://www.chautariteahouse.com.np";
  const MAPS = "https://www.google.com/maps/search/?api=1&query=Chautari+Tea+House,+NGO+Road,+Bharatpur,+Chitwan,+Nepal";
  const NOTICE = "";

  const UI = {
    offerOn: "Hookah offer, every Friday and Saturday",
    offerOff: "Back this Friday and Saturday",
    offerKicker: "Hookah offer on now",
    hkOn: "Hookah is half price today: Normal Rs. 175, Kaloud Rs. 250. The prices below are the offer prices.",
    hkOff: "Hookah is half price every Friday and Saturday: Normal Rs. 175, Kaloud Rs. 250.",
    nothing: "Nothing on the menu matches that.",
    veg: "Vegetarian",
    nonveg: "Non-vegetarian",
    pick: "Our pick",
    allCategories: "All categories",
    openUntil: "Open now until 9 PM",
    closedOpens: "Closed now, opens at 7 AM",
    closingIn: "Closing in {n} min",
    opensIn: "Opens in {n} min",
    openShort: "Open",
    closedShort: "Closed"
  };

  const TABS = [
    { id: "tea", en: "Tea", subEn: "Milk, black and herbal", emoji: "🍵" },
    { id: "brews", en: "Hot brews", subEn: "Herbal and fruity cups", emoji: "🌿" },
    { id: "coffee", en: "Coffee", subEn: "Hot and cold", emoji: "☕" },
    { id: "cold", en: "Cold drinks", subEn: "Cool and refreshing", emoji: "🧊" },
    { id: "snacks", en: "Snacks", subEn: "Light bites and momos", emoji: "🥟" },
    { id: "hookah", en: "Hookah", subEn: "Hukka and smoke", emoji: "💨" }
  ];

  const ITEMS = {
    "milk-plain": { en: "Plain tea", price: 40, diet: "veg", descEn: "Classic hot milk tea, strong and comforting." },
    "milk-ginger": { en: "Ginger tea", price: 45, diet: "veg", descEn: "Milk tea with a warm ginger bite." },
    "milk-masala": { en: "Masala tea", price: 50, diet: "veg", pick: true, descEn: "Spiced chai with a fragrant kick." },
    "milk-matka": { en: "Matka tea", price: 70, diet: "veg", pick: true, descEn: "Chai served in a clay pot for an earthy taste." },
    "black-plain": { en: "Plain tea", price: 30, diet: "veg", descEn: "Light and clean, no milk." },
    "black-ginger": { en: "Ginger tea", price: 35, diet: "veg", descEn: "Black tea with a ginger bite." },
    "black-lemon": { en: "Lemon tea", price: 40, diet: "veg", descEn: "Black tea with a squeeze of lemon." },
    "black-masala": { en: "Masala tea", price: 40, diet: "veg", descEn: "Spiced black tea, no milk." },
    "black-ginger-lemon": { en: "Ginger lemon tea", price: 45, diet: "veg", descEn: "Ginger and lemon, soothing on a cool evening." },
    "green": { en: "Green tea", price: 60, diet: "veg", descEn: "Light, fresh and gentle." },
    "chamomile": { en: "Chamomile tea", price: 80, diet: "veg", descEn: "A calming floral cup." },
    "peach": { en: "Peach tea", price: 80, diet: "veg", descEn: "Sweet, fruity and smooth." },
    "jasmine": { en: "Jasmine tea", price: 80, diet: "veg", descEn: "Fragrant and floral." },
    "hibiscus": { en: "Hibiscus tea", price: 80, diet: "veg", descEn: "Tangy, ruby-red herbal cup." },
    "honey-lemon": { en: "Hot lemon with honey", price: 120, diet: "veg", descEn: "Warm, sweet and soothing." },
    "coffee-black": { en: "Black coffee", price: 70, diet: "veg", descEn: "Strong, simple and no milk." },
    "coffee-milk": { en: "Milk coffee", price: 90, diet: "veg", descEn: "Smooth, creamy hot coffee." },
    "iced-black": { en: "Iced black coffee", price: 120, diet: "veg", photo: "cold-coffee-iced-black-coffee.jpg", descEn: "Bold black coffee over ice." },
    "iced-coffee": { en: "Iced coffee", price: 150, diet: "veg", photo: "cold-coffee-iced-coffee.jpg", descEn: "Cold, smooth coffee over ice." },
    "lemonade": { en: "Lemonade", price: 70, diet: "veg", descEn: "Fresh, tangy and ice cold." },
    "cold-lemon": { en: "Cold lemon", price: 100, diet: "veg", descEn: "A sharp, refreshing lemon cooler." },
    "lassi": { en: "Plain lassi", price: 100, diet: "veg", descEn: "Thick, creamy and cooling." },
    "iced-peach": { en: "Iced peach tea", price: 150, diet: "veg", pick: true, descEn: "Chilled tea with a peachy sweetness." },
    "cookies": { en: "Cookies", price: 100, diet: "veg", descEn: "A sweet crunch to go with your tea." },
    "pakoda": { en: "Veg pakoda", price: 100, diet: "veg", descEn: "Crispy fried vegetable fritters." },
    "noodle": { en: "Noodle sadeko", price: 110, diet: "veg", descEn: "Spicy Nepali-style noodle salad." },
    "periperi": { en: "PeriPeri fries", price: 150, diet: "veg", pick: true, descEn: "Fries tossed in peri-peri spice." },
    "spiral": { en: "Spicy spiral fries", price: 150, diet: "veg", descEn: "Curly fries with a spicy kick." },
    "aalu": { en: "Aalu chop", price: 120, diet: "veg", descEn: "Spiced potato fritter, a Nepali favourite." },
    "peanuts": { en: "Peanuts sadeko", price: 130, diet: "veg", descEn: "Crunchy peanuts with onion, chilli and lime." },
    "buff-momo": { en: "Buff momo", price: 140, diet: "nonveg", pick: true, descEn: "Steamed dumplings with buff filling." },
    "chicken-momo": { en: "Chicken momo", price: 140, diet: "nonveg", pick: true, descEn: "Steamed dumplings with chicken filling." },
    "sausages": { en: "Fried sausages", price: 200, diet: "nonveg", descEn: "Golden fried sausages, great to share." },
    "shikar": { en: "Shikar Ice", price: 25 },
    "surya": { en: "Surya", price: 30 },
    "coal-normal": { en: "Additional coal normal", price: 50 },
    "coal-kaloud": { en: "Additional coal Kaloud", price: 80 },
    "hukka-normal": { en: "Normal hukka", price: 350, offer: 175 },
    "hukka-kaloud": { en: "Kaloud hukka", price: 499, offer: 250 }
  };

  const SECTION_DEFS = [
    { id: "milk-tea", tab: "tea", en: "Milk tea", prefix: true, ids: ["milk-plain", "milk-ginger", "milk-masala", "milk-matka"] },
    { id: "black-tea", tab: "tea", en: "Black tea", prefix: true, ids: ["black-plain", "black-ginger", "black-lemon", "black-masala", "black-ginger-lemon"] },
    { id: "coffee", tab: "coffee", en: "Coffee", groups: [
      { en: "Hot coffee", ids: ["coffee-black", "coffee-milk"] },
      { en: "Cold coffee", ids: ["iced-black", "iced-coffee"] }
    ]},
    { id: "hot-brews", tab: "brews", en: "Hot brews", ids: ["green", "chamomile", "peach", "jasmine", "hibiscus", "honey-lemon"] },
    { id: "cold-cups", tab: "cold", en: "Cold cups", ids: ["lemonade", "cold-lemon", "lassi", "iced-black", "iced-coffee", "iced-peach"] },
    { id: "quick-bites", tab: "snacks", en: "Quick bites", ids: ["cookies", "pakoda", "noodle", "periperi", "spiral"] },
    { id: "heavy-hitters", tab: "snacks", en: "Heavy hitters", ids: ["aalu", "peanuts", "buff-momo", "chicken-momo", "sausages"] },
    { id: "hukka-and-smoke", tab: "hookah", en: "Hukka and smoke", ids: ["shikar", "surya", "coal-normal", "coal-kaloud", "hukka-normal", "hukka-kaloud"] }
  ];

  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  function copyItem(id, section, group) {
    const src = ITEMS[id];
    if (!src) throw new Error("Missing menu item " + id);
    return Object.assign({ id: id }, src, { sectionId: section.id, groupEn: group ? group.en : "" });
  }

  const sections = SECTION_DEFS.map(function (def) {
    const section = {
      id: def.id, tab: def.tab, en: def.en, prefix: !!def.prefix,
      emoji: (TABS.filter(function (t) { return t.id === def.tab; })[0] || {}).emoji || ""
    };
    if (def.groups) {
      section.groups = def.groups.map(function (g) {
        return { en: g.en, items: g.ids.map(function (id) { return copyItem(id, section, g); }) };
      });
      section.items = section.groups.reduce(function (all, g) { return all.concat(g.items); }, []);
    } else {
      section.items = def.ids.map(function (id) { return copyItem(id, section, null); });
    }
    return section;
  });

  function ui(key) { return UI[key] || key; }
  function offerOn() {
    const day = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kathmandu", weekday: "short" }).format(new Date());
    return day === "Fri" || day === "Sat";
  }
  function price(item) { return offerOn() && item.offer ? item.offer : item.price; }
  function money(n) {
    const v = Number(n);
    return "Rs. " + (Number.isInteger(v) ? v : v.toFixed(2));
  }
  function status() {
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kathmandu", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
    const now = (+parts.find(function (x) { return x.type === "hour"; }).value % 24) * 60 + +parts.find(function (x) { return x.type === "minute"; }).value;
    const on = now >= 420 && now < 1260;
    return { on: on, left: 1260 - now, wait: (420 - now + 1440) % 1440 };
  }
  function statusText() {
    const s = status();
    if (s.on && s.left <= 60) return { long: ui("closingIn").replace("{n}", s.left), short: ui("closingIn").replace("{n}", s.left) };
    if (s.on) return { long: ui("openUntil"), short: ui("openShort") };
    if (s.wait <= 60) return { long: ui("opensIn").replace("{n}", s.wait), short: ui("opensIn").replace("{n}", s.wait) };
    return { long: ui("closedOpens"), short: ui("closedShort") };
  }
  function paintStatus() {
    const el = document.querySelector("#status");
    if (!el) return;
    const s = status();
    const text = statusText();
    el.classList.toggle("on", s.on);
    const label = el.querySelector("span") || el.lastElementChild;
    if (label) {
      label.textContent = text.long;
      label.dataset.s = text.short;
    }
  }
  function find(id) {
    for (let i = 0; i < sections.length; i++) {
      const item = sections[i].items.find(function (x) { return x.id === id; });
      if (item) return item;
    }
  }
  function sectionById(id) { return sections.find(function (s) { return s.id === id; }); }
  function photo(item) {
    if (item.photo) return "images/menu/" + item.photo;
    const base = item.groupEn ? slug(item.groupEn) : item.sectionId;
    return "images/menu/" + base + "-" + slug(item.en) + ".jpg";
  }
  function placeName(item) {
    if (item.groupEn) return item.groupEn;
    const section = sectionById(item.sectionId);
    return section ? section.en : "";
  }
  function search(q) {
    const query = String(q || "").trim().toLowerCase();
    if (!query) return [];
    const seen = Object.create(null);
    const out = [];
    sections.forEach(function (section) {
      section.items.forEach(function (item) {
        if (seen[item.id]) return;
        const hay = [item.en, item.descEn, section.en, item.groupEn].join(" ").toLowerCase();
        if (hay.indexOf(query) !== -1) {
          seen[item.id] = true;
          out.push(item);
        }
      });
    });
    return out;
  }
  function mountNotice() {
    const el = document.querySelector("#promo");
    document.body.classList.toggle("has-notice", !!NOTICE);
    document.documentElement.classList.toggle("has-notice", !!NOTICE);
    if (!el) return;
    el.hidden = !NOTICE;
    el.textContent = NOTICE;
  }

  // Shown in the Visit section. To add one, copy a line and change the name, stars and text.
  const reviews = [
    { name: "Prabin Kafle", stars: 4, text: "Such a cozy little spot. Calm, clean, and the tea was flavorful, served just right." },
    { name: "Guest on Google", stars: 5, text: "Tea is top notch. I love the ambience and the local snack is really good. I recommend alu chop." }
  ];

  function schema() {
    const seen = Object.create(null);
    return {
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      name: "Chautari Tea House",
      url: SITE,
      telephone: "+9779821878239",
      image: SITE + "/images/IMG_1399.jpg",
      servesCuisine: ["Tea", "Nepali", "Cafe"],
      priceRange: "Rs",
      address: {
        "@type": "PostalAddress",
        streetAddress: "NGO Road",
        addressLocality: "Bharatpur",
        addressRegion: "Chitwan",
        postalCode: "44200",
        addressCountry: "NP"
      },
      geo: { "@type": "GeoCoordinates", latitude: 27.699398, longitude: 84.423901 },
      openingHours: "Mo-Su 07:00-21:00",
      sameAs: [
        "https://www.facebook.com/chautariteahouse",
        "https://www.instagram.com/chautariteahouse/",
        "https://www.tiktok.com/@chautariteahouse"
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "33", bestRating: "5" },
      review: reviews.map(function (r) {
        return {
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          reviewRating: { "@type": "Rating", ratingValue: String(r.stars), bestRating: "5" },
          reviewBody: r.text
        };
      }),
      hasMenu: {
        "@type": "Menu",
        hasMenuSection: sections.map(function (section) {
          return {
            "@type": "MenuSection",
            name: section.en,
            hasMenuItem: section.items.filter(function (item) {
              if (seen[item.id]) return false;
              seen[item.id] = true;
              return true;
            }).map(function (item) {
              const desc = item.descEn ? item.descEn : item.en;
              return {
                "@type": "MenuItem",
                name: item.en,
                description: item.offer ? desc + " Half price every Friday and Saturday: Rs. " + item.offer + "." : desc,
                offers: { "@type": "Offer", price: String(item.price), priceCurrency: "NPR" }
              };
            })
          };
        })
      }
    };
  }

  window.CH = {
    phone: PHONE,
    email: "chautaritea@gmail.com",
    maps: MAPS,
    tabs: TABS,
    sections: sections,
    reviews: reviews,
    ui: ui,
    offerOn: offerOn,
    price: price,
    money: money,
    statusText: statusText,
    paintStatus: paintStatus,
    find: find,
    sectionById: sectionById,
    photo: photo,
    placeName: placeName,
    search: search,
    mountNotice: mountNotice
  };

  function bootShared() {
    mountNotice();
    paintStatus();
    const node = document.createElement("script");
    node.type = "application/ld+json";
    node.text = JSON.stringify(schema());
    document.head.appendChild(node);
    if ("serviceWorker" in navigator && location.protocol !== "file:") {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("sw.js").catch(function () {});
      });
    }
    let deferred;
    window.addEventListener("beforeinstallprompt", function (e) {
      e.preventDefault();
      deferred = e;
      const b = document.querySelector("#install");
      if (!b) return;
      b.hidden = false;
      b.addEventListener("click", async function () {
        if (!deferred) return;
        deferred.prompt();
        await deferred.userChoice;
        b.hidden = true;
        deferred = null;
      });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bootShared);
  else bootShared();
  setInterval(paintStatus, 60000);
})();
