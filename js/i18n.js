(function(){
  const dict={
    en:{
      brand:"Freedge",
      nav_browse:"Browse",
      nav_donate:"Donate",
      choose_lang_label:"Choose language",
      quote:"“Those who share their food share their future — the biggest hearts light the brightest path.”",

      start_how_title:"How it works",
      start_browse_title:"Browse",
      start_browse_text:"Take a look at today’s fridge inventory near you. No sign‑up needed.",
      start_donate_title:"Donate",
      start_donate_text:"Drop fresh food, label with a best‑by date, and share a smile.",
      cta_browse:"Browse",
      cta_donate:"Donate",
      start_map_title:"Map",
      start_map_hint:"Select a fridge pin to view details.",

      browse_title:"Browse Food",
      search_ph:"Search fridges…",
      nearest:"Nearest listings",

      food_listings:"Food listings",

      donate_title:"Donate Food",
      f_what_label:"What are you donating?",
      f_what_ph:"e.g., 6 apples 🍎",
      f_qty_label:"Amount or servings",
      f_qty_ph:"e.g., 2 bags",
      f_desc_label:"Description",
      f_desc_ph:"Ingredients, allergy info…",
      f_exp_label:"Best‑by date",
      f_exp_ph:"YYYY-MM-DD",
      f_exp_help:"Format: YYYY-MM-DD",
      f_fridge_label:"Fridge location",
      f_img_label:"Add image (optional)",
      f_submit:"Donate Food",

      thanks_h2:"THANK YOU!",
      thanks_text:"YOUR FOOD IS NOW AVAILABLE",
      thanks_add:"Add new donation",
      thanks_home:"Back to homepage",
    },
    is:{
      brand:"Freedge",
      nav_browse:"Fletta",
      nav_donate:"Gefa",
      choose_lang_label:"Veldu tungumál",
      quote:"„Þeir sem deila matnum deila framtíðinni — stærstu hjörtun lýsa bjartasta veginn.“",

      start_how_title:"Hvernig virkar þetta",
      start_browse_title:"Fletta",
      start_browse_text:"Skoðaðu ísskápa nálægt þér. Engin skráning.",
      start_donate_title:"Gefa",
      start_donate_text:"Skilaðu ferskum mat, merktu dagsetningu og deildu brosi.",
      cta_browse:"Fletta",
      cta_donate:"Gefa",
      start_map_title:"Kort",
      start_map_hint:"Veldu pinna til að sjá nánar.",

      browse_title:"Skoða mat",
      search_ph:"Leita að ísskápum…",
      nearest:"Næstu færslur",

      food_listings:"Færslur",

      donate_title:"Gefa mat",
      f_what_label:"Hvað ertu að gefa?",
      f_what_ph:"t.d. 6 epli 🍎",
      f_qty_label:"Magn eða skammtar",
      f_qty_ph:"t.d. 2 pokar",
      f_desc_label:"Lýsing",
      f_desc_ph:"Innihald, ofnæmi…",
      f_exp_label:"Síðasti notkunardagur",
      f_exp_ph:"YYYY-MM-DD",
      f_exp_help:"Snið: YYYY-MM-DD",
      f_fridge_label:"Staðsetning ísskáps",
      f_img_label:"Mynd (valkvætt)",
      f_submit:"Senda gjöf",

      thanks_h2:"Takk!",
      thanks_text:"MATURINN ÞINN ER NÚ AÐGENGILEGUR",
      thanks_add:"Bæta við nýrri gjöf",
      thanks_home:"Til baka á forsíðu",
    },
    pl:{
      brand:"Freedge",
      nav_browse:"Przeglądaj",
      nav_donate:"Przekaż dar",
      choose_lang_label:"Wybierz język",
      quote:"„Ci, którzy dzielą się jedzeniem, dzielą się przyszłością — największe serca rozświetlają najjaśniejszą drogę.”",

      start_how_title:"Jak to działa",
      start_browse_title:"Przeglądaj",
      start_browse_text:"Zobacz dzisiejszą zawartość lodówek w pobliżu. Bez rejestracji.",
      start_donate_title:"Przekaż",
      start_donate_text:"Oddaj świeże jedzenie, dodaj datę ważności i uśmiech.",
      cta_browse:"Przeglądaj",
      cta_donate:"Przekaż",
      start_map_title:"Mapa",
      start_map_hint:"Wybierz pinezkę, aby zobaczyć szczegóły.",

      browse_title:"Przeglądaj jedzenie",
      search_ph:"Szukaj lodówek…",
      nearest:"Najbliższe ogłoszenia",

      food_listings:"Lista produktów",

      donate_title:"Przekaż jedzenie",
      f_what_label:"Co przekazujesz?",
      f_what_ph:"np. 6 jabłek 🍎",
      f_qty_label:"Ilość lub porcje",
      f_qty_ph:"np. 2 torby",
      f_desc_label:"Opis",
      f_desc_ph:"Składniki, alergeny…",
      f_exp_label:"Data przydatności",
      f_exp_ph:"RRRR-MM-DD",
      f_exp_help:"Format: RRRR-MM-DD",
      f_fridge_label:"Lokalizacja lodówki",
      f_img_label:"Dodaj zdjęcie (opcjonalnie)",
      f_submit:"Wyślij dar",

      thanks_h2:"DZIĘKUJEMY!",
      thanks_text:"TWÓJ DAR JEST JUŻ DOSTĘPNY",
      thanks_add:"Dodaj nowy dar",
      thanks_home:"Powrót na stronę główną",
    }
  };

  const langSel=document.getElementById('lang');
  const saved=localStorage.getItem('fx_lang')||'en';
  if(langSel) langSel.value=saved;

  function apply(lang){
    const d=dict[lang]||dict.en;
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k=el.getAttribute('data-i18n'); if(d[k]) el.textContent=d[k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const k=el.getAttribute('data-i18n-placeholder'); if(d[k]) el.setAttribute('placeholder', d[k]);
    });
  }
  apply(saved);
  if(langSel){
    langSel.addEventListener('change',()=>{
      const v=langSel.value; localStorage.setItem('fx_lang',v); apply(v);
    });
  }
})();