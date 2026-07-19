/* ============================================================
   Aditi Cab Service — interactions
   ============================================================ */
(function () {
  "use strict";

  // Number is base64-obfuscated so it isn't sitting in plain text on the page.
  var PHONE = atob("OTE3OTc5ODg5NzA2"); // 917979889706
  var DEFAULT_WA_MSG = "Hi Aditi Cab Service, I'd like to enquire about a cab.";

  /* ------------------------------------------------------------
     GOOGLE SHEETS LOGGING
     Paste your Apps Script Web App URL below (see
     SETUP-GOOGLE-SHEETS.md). Leave "" to disable logging — the
     booking form still works via WhatsApp either way.
  ------------------------------------------------------------ */
  var SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbx9emusgb8WHJkRqlzVA-ENcKS949_fC5LvkyIaMlP7jhe65cPx8sZuupADDUuDfR8J/exec";

  function logLead(payload) {
    if (!SHEET_ENDPOINT) return;
    try { payload.page = location.href; } catch (e) {}
    var body = JSON.stringify(payload);
    // fetch + keepalive reaches Apps Script reliably on EVERY submit (sendBeacon
    // silently drops repeat sends) and still survives the jump to WhatsApp/dialer.
    try {
      fetch(SHEET_ENDPOINT, {
        method: "POST", mode: "no-cors", keepalive: true,
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: body
      });
      return;
    } catch (e) {}
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(SHEET_ENDPOINT, new Blob([body], { type: "text/plain;charset=UTF-8" }));
      }
    } catch (e) {}
  }

  /* Small confirmation toast */
  function showToast(msg) {
    var t = document.getElementById("toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "toast";
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () { t.classList.remove("show"); }, 3200);
  }

  /* ------------------------------------------------------------
     CONTACT GATE
     Phone numbers are never shown on the page. Every Call /
     WhatsApp action must pass through this form (name + phone
     REQUIRED) so every enquiry is tracked. The visitor is only
     connected AFTER submitting. Details are remembered so a
     captured visitor connects straight away next time (still
     logged on every click).
  ------------------------------------------------------------ */
  var leadModal = document.getElementById("leadModal");
  var leadForm  = document.getElementById("leadForm");
  var leadName  = document.getElementById("leadName");
  var leadPhone = document.getElementById("leadPhone");
  var leadTitle = document.getElementById("leadTitle");
  var leadGo    = document.getElementById("leadGo");
  var pending   = null;

  function savedLead() {
    try { return JSON.parse(localStorage.getItem("aditi_lead") || "null"); }
    catch (e) { return null; }
  }
  function saveLead(d) {
    try { localStorage.setItem("aditi_lead", JSON.stringify(d)); } catch (e) {}
  }
  function prettyPhone(n) {
    var d = String(n).replace(/^91/, "");
    return d.length === 10 ? d.slice(0, 5) + " " + d.slice(5) : d;
  }
  /* Only runs AFTER the visitor's details are captured. */
  function connect(action, msg) {
    if (action === "wa") {
      window.open(waLink(msg || DEFAULT_WA_MSG), "_blank", "noopener");
    } else {
      try { window.location.href = "tel:+" + PHONE; } catch (e) {}   // dials on mobile
      showToast("Call us now: " + prettyPhone(PHONE));               // shown only post-capture
    }
  }
  function openLeadModal(p) {
    pending = p;
    var isCall = p.action === "call";
    if (leadTitle) leadTitle.textContent = isCall ? "Before we call" : "Before we chat";
    if (leadGo) leadGo.textContent = isCall ? "Continue to Call" : "Continue to WhatsApp";
    var s = savedLead();
    if (s) { if (leadName) leadName.value = s.name || ""; if (leadPhone) leadPhone.value = s.phone || ""; }
    if (leadModal) { leadModal.classList.add("open"); leadModal.setAttribute("aria-hidden", "false"); }
    setTimeout(function () { if (leadName) leadName.focus(); }, 60);
  }
  function closeLeadModal() {
    if (leadModal) { leadModal.classList.remove("open"); leadModal.setAttribute("aria-hidden", "true"); }
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-contact]") : null;
    if (!el) return;
    e.preventDefault();
    var action = el.getAttribute("data-contact") === "call" ? "call" : "wa";
    var msg = el.getAttribute("data-msg") || DEFAULT_WA_MSG;
    var type = action === "call" ? "Enquiry — Call" : "Enquiry — WhatsApp";
    var s = savedLead();
    if (s && s.name && s.phone) {           // already captured — log & connect
      logLead({ type: type, name: s.name, phone: s.phone });
      connect(action, msg);
      return;
    }
    openLeadModal({ type: type, action: action, msg: msg });
  });

  if (leadForm) {
    leadForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (leadName && leadName.value ? leadName.value : "").trim();
      var phone = (leadPhone && leadPhone.value ? leadPhone.value : "").trim();
      if (!name || !phone) return;          // both required — no bypass
      saveLead({ name: name, phone: phone });
      if (pending) logLead({ type: pending.type, name: name, phone: phone });
      closeLeadModal();
      var p = pending; pending = null;
      if (p) connect(p.action, p.msg);
    });
  }

  var leadClose = document.getElementById("leadClose");
  if (leadClose) leadClose.addEventListener("click", closeLeadModal);
  if (leadModal) leadModal.addEventListener("click", function (e) {
    if (e.target === leadModal) closeLeadModal();
  });

  /* ---------- Fleet data ---------- */
  var FLEET = [
    {
      name: "Hyundai Grand i10",
      cat: "hatchback", tag: "Hatchback",
      img: "assets/hatchback-i10.jpg",
      seats: "4+1", bags: "2 Bags", fuel: "AC",
      price: "11", unit: "/km"
    },
    {
      name: "Maruti Baleno",
      cat: "hatchback", tag: "Hatchback",
      img: "assets/hatchback-baleno.jpg",
      seats: "4+1", bags: "2 Bags", fuel: "AC",
      price: "12", unit: "/km"
    },
    {
      name: "Maruti Swift Dzire",
      cat: "sedan", tag: "Sedan",
      img: "assets/sedan-dzire.jpg",
      seats: "4+1", bags: "3 Bags", fuel: "AC",
      price: "12", unit: "/km"
    },
    {
      name: "Hyundai Verna",
      cat: "sedan", tag: "Premium Sedan",
      img: "assets/sedan-verna.jpg",
      seats: "4+1", bags: "3 Bags", fuel: "AC",
      price: "15", unit: "/km"
    },
    {
      name: "Hyundai Venue",
      cat: "suv", tag: "Compact SUV",
      img: "assets/suv-venue.jpg",
      seats: "5+1", bags: "3 Bags", fuel: "AC",
      price: "16", unit: "/km"
    },
    {
      name: "Mahindra Bolero",
      cat: "suv", tag: "SUV · 7 Seater",
      img: "assets/suv-bolero.jpg",
      seats: "7+1", bags: "4 Bags", fuel: "AC",
      price: "17", unit: "/km"
    },
    {
      name: "Mercedes-Benz GLC",
      cat: "luxury", tag: "Luxury SUV",
      img: "assets/luxury-glc.jpg",
      seats: "4+1", bags: "3 Bags", fuel: "Premium AC",
      price: "On request", unit: ""
    },
    {
      name: "Tata Marcopolo Bus",
      cat: "bus", tag: "Bus · 35+ Seater",
      img: "assets/bus-side.jpg",
      seats: "35+", bags: "Group", fuel: "AC / Non-AC",
      price: "On request", unit: ""
    },
    {
      name: "Bolero Pickup (Goods)",
      cat: "bus", tag: "Goods Carrier",
      img: "assets/goods-pickup.jpg",
      seats: "Load", bags: "1 Ton", fuel: "Commercial",
      price: "On request", unit: ""
    }
  ];

  function waLink(text) {
    return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(text);
  }

  /* ---------- Render fleet ---------- */
  var grid = document.getElementById("fleetGrid");

  function priceHTML(car) {
    if (car.unit) {
      return '<b>₹' + car.price + '<small>' + car.unit + '</small></b><span>Starting from</span>';
    }
    return '<b>' + car.price + '</b><span>Best price on call</span>';
  }

  function render(cat) {
    grid.innerHTML = "";
    var shown = 0;
    FLEET.forEach(function (car, i) {
      if (cat !== "all" && car.cat !== cat) return;
      shown++;
      var no = ("0" + shown).slice(-2);
      var msg = "Hi Aditi Cab Service, I'm interested in booking the " + car.name + " (" + car.tag + "). Please share availability and fare.";
      var el = document.createElement("article");
      el.className = "car reveal";
      el.setAttribute("data-d", String((shown % 3) + 1));
      el.innerHTML =
        '<span class="car-num">' + no + '</span>' +
        '<div class="car-media">' +
          '<span class="car-cat">' + car.tag + '</span>' +
          '<img src="' + car.img + '" alt="' + car.name + ' for rent in Ranchi" loading="lazy" />' +
        '</div>' +
        '<div class="car-body">' +
          '<h3>' + car.name + '</h3>' +
          '<div class="car-specs">' +
            '<span>' + car.seats + '</span>' +
            '<span>' + car.bags + '</span>' +
            '<span>' + car.fuel + '</span>' +
          '</div>' +
          '<div class="car-foot">' +
            '<div class="car-price">' + priceHTML(car) + '</div>' +
            '<a class="car-book" href="#" data-contact="wa" data-msg="' + msg.replace(/"/g, "&quot;") + '">Book →</a>' +
          '</div>' +
        '</div>';
      grid.appendChild(el);
    });
    observeReveals();
  }

  /* ---------- Filter chips ---------- */
  var filter = document.getElementById("fleetFilter");
  filter.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    filter.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
    chip.classList.add("active");
    render(chip.getAttribute("data-cat"));
  });

  render("all");

  /* ---------- Scroll reveal ---------- */
  var io;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { io.observe(el); });
  }
  observeReveals();

  /* ---------- Count-up stats ---------- */
  var counted = false;
  function runCounters() {
    if (counted) return;
    counted = true;
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      var start = 0, dur = 1400, t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  var heroStats = document.querySelector(".hero-stats");
  if (heroStats && "IntersectionObserver" in window) {
    new IntersectionObserver(function (e, obs) {
      if (e[0].isIntersecting) { runCounters(); obs.disconnect(); }
    }, { threshold: 0.5 }).observe(heroStats);
  } else {
    runCounters();
  }

  /* ---------- Nav scroll state ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  var close = document.getElementById("mmClose");
  function openMenu() { menu.classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeMenu() { menu.classList.remove("open"); document.body.style.overflow = ""; }
  toggle.addEventListener("click", openMenu);
  close.addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });

  /* ---------- Booking form → WhatsApp ---------- */
  var form = document.getElementById("bookForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    function v(id) { return (f[id] && f[id].value ? f[id].value : "").trim(); }

    // 1) Record the booking in Google Sheets
    logLead({
      type: "Booking",
      name: v("name"), phone: v("phone"),
      trip: v("trip"), vehicle: v("car"),
      pickup: v("pickup"), drop: v("drop"),
      date: v("date"), time: v("time")
    });

    // 2) Hand off to WhatsApp with the details pre-filled
    var lines = [
      "*New Booking — Aditi Cab Service*",
      "",
      "Name: " + (v("name") || "-"),
      "Phone: " + (v("phone") || "-"),
      "Trip type: " + v("trip"),
      "Vehicle: " + v("car"),
      "Pickup: " + (v("pickup") || "-"),
      "Drop: " + (v("drop") || "-"),
      "Date: " + (v("date") || "-"),
      "Time: " + (v("time") || "-"),
      "",
      "Please confirm availability and fare. Thank you!"
    ];
    showToast("Booking received ✓  Opening WhatsApp…");
    window.open(waLink(lines.join("\n")), "_blank");
  });

  /* ---------- Year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
