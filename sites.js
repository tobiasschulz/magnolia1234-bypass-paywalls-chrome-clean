var defaultSites = {
  "60 Millions de consommateurs": {
    domain: "60millions-mag.com",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Advance Local": {
    domain: "###_usa_adv_local",
    allow_cookies: 1,
    group: [
      "al.com",
      "cleveland.com",
      "lehighvalleylive.com",
      "masslive.com",
      "mlive.com",
      "nj.com",
      "oregonlive.com",
      "pennlive.com",
      "silive.com",
      "syracuse.com"
    ]
  },
  "Adweek (free articles only)": {
    domain: "adweek.com"
  },
  "Aftonbladet": {
    domain: "aftonbladet.se",
    allow_cookies: 1,
    useragent: "bingbot"
  },
  "Albuquerque Journal": {
    domain: "abqjournal.com",
    allow_cookies: 1,
    block_regex: /\.abqjournal\.com\/.+\/abq-pw-manager\.js/
  },
  "Algemeen Dagblad (+ regional; link to archive.is)": {
    domain: "###_nl_dpg_adr",
    allow_cookies: 1,
    group: [
      "ad.nl",
      "bd.nl",
      "bndestem.nl",
      "destentor.nl",
      "ed.nl",
      "gelderlander.nl",
      "pzc.nl",
      "tubantia.nl"
    ]
  },
  "Allgäuer Zeitung": {
    domain: "allgaeuer-zeitung.de",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Alternatives Economiques": {
    domain: "alternatives-economiques.fr",
    block_regex: /\.poool\.fr\//
  },
  "Ámbito": {
    domain: "ambito.com",
    remove_cookies_select_drop: ["TDNotesRead"]
  },
  "American Affairs": {
    domain: "americanaffairsjournal.org",
    allow_cookies: 1,
    block_regex: /\/americanaffairsjournal\.org\/wp-content\/mu-plugins\/app\/src\/paywall\/paywall\.js/
  },
  "American Banker": {
    domain: "americanbanker.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Apollo Magazine": {
    domain: "apollo-magazine.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "ARA": {
    domain: "###_cat_ara",
    group: [
      "ara.cat",
      "arabalears.cat"
    ],
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "ArcInfo.ch": {
    domain: "arcinfo.ch",
    allow_cookies: 1
  },
  "Artforum": {
    domain: "artforum.com"
  },
  "Artnet": {
    domain: "artnet.com",
    allow_cookies: 1,
    block_regex: /(\.artnet\.com\/paywall-ajax\.php|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Asia Times": {
    domain: "asiatimes.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.(m)?js/
  },
  "Atavist Magazine": {
    domain: "atavist.com"
  },
  "Atlantico.fr": {
    domain: "atlantico.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Augsburger Allgemeine": {
    domain: "augsburger-allgemeine.de",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Australia News Corp (when blocked disable Googlebot in BPC-settings)": {
    domain: "###_au_news_corp",
    group: [
      "adelaidenow.com.au",
      "codesports.com.au",
      "couriermail.com.au",
      "dailytelegraph.com.au",
      "heraldsun.com.au",
      "ntnews.com.au",
      "theaustralian.com.au",
      "themercury.com.au"
    ],
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/,
    exception: [{
        domain: "codesports.com.au",
        allow_cookies: 1,
        block_js_inline: /\.codesports\.com\.au\/.+\/news-story\//,
        block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
      }
    ],
    useragent: "googlebot"
  },
  "Australian Community Media (daily)": {
    domain: "###_au_comm_media",
    group: [
      "bendigoadvertiser.com.au",
      "bordermail.com.au",
      "canberratimes.com.au",
      "centralwesterndaily.com.au",
      "dailyadvertiser.com.au",
      "dailyliberal.com.au",
      "examiner.com.au",
      "illawarramercury.com.au",
      "newcastleherald.com.au",
      "northerndailyleader.com.au",
      "standard.net.au",
      "theadvocate.com.au",
      "thecourier.com.au",
      "westernadvocate.com.au"
    ],
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/|cdn\.cxense\.com\/)/
  },
  "Australia Nine Entertainment": {
    domain: "###_au_nine_ent",
    group: [
      "afr.com",
      "brisbanetimes.com.au",
      "smh.com.au",
      "theage.com.au",
      "watoday.com.au"
    ],
    allow_cookies: 1,
    block_regex: "(api\\.{domain}\\/graphql\\?query=.+PaywallRuleQuery|cdn\\.ampproject\\.org\\/v\\d\\/amp-subscriptions-.+\\.js)"
  },
  "Automobilwoche": {
    domain: "automobilwoche.de",
    allow_cookies: 1,
    block_regex: /\.automobilwoche\.de\/s3fs-public\/js\/js_.+\.js/
  },
  "AutoPlus.fr": {
    domain: "autoplus.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Axios": {
    domain: "axios.com",
    allow_cookies: 1,
    block_regex: "\.axios\.com\/api\/v\d\/licenses"
  },
  "Badische Neueste Nachrichten": {
    allow_cookies: 1,
    domain: "bnn.de",
    useragent: "googlebot"
  },
  "Barron's (when blocked disable Googlebot in BPC-settings)": {
    domain: "barrons.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/,
    useragent: "googlebot"
  },
  "BBC History Extra": {
    domain: "historyextra.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Belfast Telegraph": {
    domain: "belfasttelegraph.co.uk",
    allow_cookies: 1,
    block_regex: /(cdn\.flip-pay\.com\/clients\/inm\/flip-pay\.js)/
  },
  "Beobachter.ch": {
    allow_cookies: 1,
    domain: "beobachter.ch",
    useragent: "googlebot"
  },
  "Berliner Zeitung": {
    domain: "berliner-zeitung.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Berlingske": {
    domain: "berlingske.dk",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Bloomberg": {
    domain: "bloomberg.com",
    block_regex: /(\.tinypass\.com\/|assets\.bwbx\.io\/s\d\/(fence\/plug-client|javelin\/.+\/transporter)\/)/,
    remove_cookies_select_drop: ["gatehouse_id"]
  },
  "BQ Prime": {
    domain: "bqprime.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Bulletin of the Atomic Scientists": {
    domain: "thebulletin.org",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Business Insider": {
    domain: "businessinsider.com",
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Business Standard": {
    domain: "business-standard.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "California Business Journals": {
    domain: "###_usa_cbj",
    group: [
      "labusinessjournal.com",
      "ocbj.com",
      "sdbj.com",
      "sfvbj.com"
    ],
    allow_cookies: 1,
    block_regex: /\/olytics\.omeda\.com\//
  },
  "Causeur": {
    domain: "causeur.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Challenges": {
    domain: "challenges.fr",
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Charlie Hebdo": {
    domain: "charliehebdo.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Chemical & Engineering News": {
    domain: "cen.acs.org"
  },
  "Cicero.de": {
    domain: "cicero.de",
    allow_cookies: 1
  },
  "Citywire": {
    domain: "citywire.com",
    allow_cookies: 1
  },
  "Clarín": {
    domain: "clarin.com",
    allow_cookies: 1,
    block_regex: /\.clarin\.com\/.+\/auth\d\.js/
  },
  "CNBC (news only)": {
    domain: "cnbc.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Commentary Magazine": {
    domain: "commentary.org",
    block_regex: /\.commentary\.org\/.+\/js\/dg-locker-public\.js/
  },
  "CommonWealth Magazine Taiwan (free articles only)": {
    domain: "cw.com.tw"
  },
  "Condé Nast magazines": {
    domain: "###_usa_conde_nast",
    group: [
      "architecturaldigest.com",
      "bonappetit.com",
      "gq.com",
      "newyorker.com",
      "vanityfair.com",
      "vogue.com",
      "wired.com"
    ],
    remove_cookies_select_drop: ["pay_ent_smp", "pay_ent_usmp"],
    block_regex: "(journey\\.{domain}\\/(.+\\/)?build-.+\\.js|cdn\\.ampproject\\.org\\/v\\d\\/amp-subscriptions-.+\\.js)",
    useragent: "googlebot"
  },
  "Connaissance des Arts": {
    domain: "connaissancedesarts.com",
    allow_cookies: 1,
    block_regex: /\.connaissancedesarts\.com\/wp-content\/cache\/.+\.js/
  },
  "Correio da Manhã": {
    domain: "cmjornal.pt",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(subscriptions|consent)-.+\.js/
  },
  "Corriere della Sera": {
    domain: "corriere.it",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.corriereobjects\.it\/.+\/js\/_paywall\.sjs|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Corriere dello Sport": {
    domain: "corrieredellosport.it",
    remove_cookies_select_drop: ["paywall_articles"]
  },
  "Crain Communications": {
    domain: "###_usa_craincomm",
    group: [
      "adage.com",
      "autonews.com",
      "chicagobusiness.com",
      "crainscleveland.com",
      "crainsdetroit.com",
      "crainsnewyork.com",
      "modernhealthcare.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.tinypass\\.com\\/|\\.{domain}\\/.+\\/js\\/js_.+\\.js)",
    exception: [{
        domain: "autonews.com",
        block_regex: "(\\.tinypass\\.com\\/|\\.{domain}\\/.+\\/js\\/js_.+\\.js)"
      }
    ]
  },
  "Dagens ETC": {
    domain: "etc.se",
    allow_cookies: 1
  },
  "Dagens Industri": {
    domain: "di.se",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "De Limburger": {
    domain: "limburger.nl",
    allow_cookies: 1
  },
  "De Tijd": {
    domain: "tijd.be",
    referer: "google"
  },
  "Der Spiegel (link to archive.is)": {
    domain: "spiegel.de",
    allow_cookies: 1
  },
  "Der Tagesspiegel (link to archive.is/not background)": {
    domain: "tagesspiegel.de",
    allow_cookies: 1
  },
  "Diario Financiero": {
    domain: "df.cl",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Die Rheinpfalz": {
    domain: "rheinpfalz.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Die Welt (link to archive.is)": {
    domain: "welt.de",
    allow_cookies: 1
  },
  "Die Zeit": {
    domain: "zeit.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Digiday": {
    domain: "digiday.com",
    block_regex: /(cdn\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Discover Magazine": {
    domain: "discovermagazine.com"
  },
  "DN.no": {
    domain: "dn.no",
    allow_cookies: 1
  },
  "Domani": {
    domain: "editorialedomani.it",
    allow_cookies: 1,
    block_regex: /(\.editorialedomani\.it\/pelcro\.js|js\.pelcro\.com\/)/,
    useragent: "googlebot"
  },
  "DPG Media (not ADR)": {
    domain: "###_nl_dpg_media",
    group: [
      "demorgen.be",
      "humo.be",
      "parool.nl",
      "trouw.nl",
      "volkskrant.nl"
    ],
    remove_cookies_select_drop: ["TID_ID"],
    block_regex: "(\\.{domain}\\/temptation\\/resolve|temptation\\.{domain}\\/temptation\.js)"
  },
  "Eastwest.eu": {
    domain: "eastwest.eu",
    allow_cookies: 1
  },
  "El Confidencial": {
    domain: "elconfidencial.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "El Diario.es": {
    domain: "eldiario.es",
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "El Español": {
    domain: "elespanol.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/
  },
  "El Espectador": {
    domain: "elespectador.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.cxense\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "El Mercurio (+ regional/opt-in to custom sites)": {
    domain: "elmercurio.com",
    allow_cookies: 1,
    block_regex: /\.(elmercurio\.com|emol\.cl)\/(.+\/)?js\/(.+\/)?(modal|merPramV\d|PramModal\.min)\.js/,
    useragent: "googlebot"
  },
  "El País": {
    domain: "elpais.com",
    allow_cookies: 1,
    block_js_inline: /\.elpais\.com\/.+\.html/,
    block_regex: /(\/elpais\.com\/arc\/subs\/p\.min\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "El Periódico (de Catalunya)": {
    domain: "elperiodico.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "El Tiempo": {
    domain: "eltiempo.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Elle.fr": {
    domain: "elle.fr",
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Encyclopedia Britannica": {
    domain: "britannica.com"
  },
  "eNotes": {
    domain: "enotes.com",
    allow_cookies: 1
  },
  "Entrepreneur": {
    domain: "entrepreneur.com",
    allow_cookies: 1
  },
  "ESPN USA (news only; link to archive.is))": {
    domain: "espn.com",
    allow_cookies: 1
  },
  "Esprit": {
    domain: "esprit.presse.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Estado de Minas": {
    domain: "em.com.br",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "EUobserver": {
    domain: "euobserver.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Eureka Report": {
    domain: "eurekareport.com.au",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Evening Standard (UK)": {
    domain: "standard.co.uk",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Exame": {
    domain: "exame.com",
    block_regex: /\/exame\.com\/.+\/js\/pywll-dyn\.js/
  },
  "Field & Stream": {
    domain: "fieldandstream.com",
    allow_cookies: 1
  },
  "Finance.si": {
    domain: "finance.si",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Financial News (London)": {
    domain: "fnlondon.com",
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "Financial Times (not Chinese)": {
    domain: "ft.com",
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/,
    useragent: "googlebot"
  },
  "Financieele Dagblad (fd.nl)": {
    domain: "fd.nl",
    referer: "facebook",
    remove_cookies_select_drop: ["socialread"]
  },
  "First Things": {
    domain: "firstthings.com"
  },
  "Follow the Money (ftm.nl)": {
    domain: "ftm.nl",
    allow_cookies: 1,
    block_regex: /\.ftm\.nl\/js\/routing\?/
  },
  "Forbes": {
    domain: "forbes.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Foreign Affairs": {
    domain: "foreignaffairs.com",
    block_regex: /\.foreignaffairs\.com\/modules\/custom\/fa_paywall_js\/js\/paywall\.js/
  },
  "Foreign Policy": {
    domain: "foreignpolicy.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/)/
  },
  "Fortune": {
    domain: "fortune.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Franc-Tireur": {
    domain: "franc-tireur.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Frankfurter Allgemeine Zeitung": {
    domain: "faz.net",
    allow_cookies: 1
  },
  "Freie Presse": {
    domain: "freiepresse.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "Funke Mediengruppe": {
    domain: "###_de_funke_medien",
    group: [
      "abendblatt.de",
      "braunschweiger-zeitung.de",
      "morgenpost.de",
      "nrz.de",
      "otz.de",
      "thueringer-allgemeine.de",
      "tlz.de",
      "waz.de",
      "wp.de",
      "wr.de"
    ],
    allow_cookies: 1,
    useragent: "googlebot",
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Gannett Group (local USA Today)": {
    domain: "###_usa_gannett",
    group: [
      "azcentral.com",
      "cincinnati.com",
      "commercialappeal.com",
      "courier-journal.com",
      "democratandchronicle.com",
      "detroitnews.com",
      "freep.com",
      "indystar.com",
      "jsonline.com",
      "knoxnews.com",
      "news-press.com",
      "northjersey.com",
      "oklahoman.com",
      "statesman.com",
      "tennessean.com"
    ],
    allow_cookies: 1,
    amp_unhide: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "GenomeWeb": {
    domain: "###_usa_genomeweb",
    group: [
      "360dx.com",
      "genomeweb.com",
      "precisiononcologynews.com"
    ],
    allow_cookies: 1,
    block_regex: /crain-platform-.+-prod\.s3\.amazonaws\.com\/s3fs-public\/js\/js_.+\.js/
  },
  "Glassdoor (regwall)": {
    domain: "glassdoor.com"
  },
  "Globes": {
    domain: "globes.co.il",
    block_regex: /\.tinypass\.com\//
  },
  "Griffith Review": {
    domain: "griffithreview.com",
    remove_cookies_select_drop: ["issuem_lp"]
  },
  "Groene Amsterdammer": {
    domain: "groene.nl",
    remove_cookies_select_hold: ["accept-cookies", "popunder-hidden"],
    useragent: "googlebot"
  },
  "Groupe Capitales Médias (+ regional/opt-in to custom sites)": {
    domain: "###_ca_gcm",
    group: [
      "lesoleil.com"
    ],
    allow_cookies: 1,
    remove_cookies: 1
  },
  "Groupe Centre France": {
    domain: "###_fr_gcf",
    group: [
      "lamontagne.fr"
    ],
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Groupe EBRA": {
    domain: "###_fr_groupe_ebra",
    group: [
      "bienpublic.com",
      "dna.fr",
      "estrepublicain.fr",
      "lalsace.fr",
      "ledauphine.com",
      "lejsl.com",
      "leprogres.fr",
      "republicain-lorrain.fr",
      "vosgesmatin.fr"
    ],
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Groupe La Dépêche": {
    domain: "###_fr_groupe_la_depeche",
    group: [
      "centrepresseaveyron.fr",
      "ladepeche.fr",
      "lindependant.fr",
      "midi-olympique.fr",
      "midilibre.fr",
      "nrpyrenees.fr",
      "petitbleu.fr"
    ],
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "Groupe Nice-Matin": {
    domain: "###_fr_groupe_nice_matin",
    group: [
      "monacomatin.mc",
      "nicematin.com",
      "varmatin.com"
    ],
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Groupe Rossel": {
    domain: "###_fr_be_groupe_rossel",
    group: [
      "aisnenouvelle.fr",
      "courrier-picard.fr",
      "lardennais.fr",
      "lavoixdunord.fr",
      "lesoir.be",
      "lest-eclair.fr",
      "liberation-champagne.fr",
      "lunion.fr",
      "nordeclair.fr",
      "nordlittoral.fr",
      "paris-normandie.fr",
      "sudinfo.be"
    ],
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Groupe Sud Ouest": {
    domain: "###_fr_groupe_sud_ouest",
    group: [
      "sudouest.fr",
      "charentelibre.fr",
      "larepubliquedespyrenees.fr"
    ],
    allow_cookies: 1
  },
  "Grupo Abril": {
    domain: "abril.com.br",
    allow_cookies: 1,
    block_regex: /(\.abril\.com\.br\/.+\/abril-paywall\/js\/abril-paywall\.js|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Grupo El Comercio": {
    domain: "###_pe_grupo_elcomercio",
    group: [
      "diariocorreo.pe",
      "elcomercio.pe",
      "gestion.pe"
    ],
    allow_cookies: 1,
    block_regex: "(\\.tinypass\\.com\\/|\\/{domain}\\/pf\\/dist\\/engine\\/react\\.js)"
  },
  "Grupo Prensa Ibérica": {
    domain: "###_es_epiberica",
    group: [
      "diariodemallorca.es",
      "eldia.es",
      "epe.es",
      "farodevigo.es",
      "informacion.es",
      "laprovincia.es",
      "levante-emv.com",
      "lne.es",
      "mallorcazeitung.es"
    ],
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/|cdn\.cxense\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Grupo Unidad Editorial": {
    domain: "###_es_unidad",
    group: [
      "elmundo.es",
      "expansion.com",
      "marca.com"],
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/
  },
  "Grupo Vocento": {
    domain: "###_es_grupo_vocento",
    group: [
      "abc.es",
      "diariosur.es",
      "diariovasco.com",
      "elcomercio.es",
      "elcorreo.com",
      "eldiariomontanes.es",
      "elnortedecastilla.es",
      "hoy.es",
      "ideal.es",
      "larioja.com",
      "lasprovincias.es",
      "laverdad.es",
      "lavozdigital.es"
    ],
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "Gruppo GEDI.it": {
    domain: "###_it_gedi",
    group: [
      "italian.tech",
      "lescienze.it",
      "repubblica.it"
    ],
    allow_cookies: 1,
    block_regex: /(scripts\.repubblica\.it\/pw\/pw\.js|cdn\.ampproject\.org\/v\d\/amp-(access|user-notification)-.+\.js)/,
    useragent: "googlebot"
  },
  "Haaretz English": {
    domain: "haaretz.com",
    allow_cookies: 1,
    useragent: "bingbot"
  },
  "Haaretz": {
    domain: "haaretz.co.il",
    allow_cookies: 1,
    useragent: "facebookbot"
  },
  "Handelsblatt": {
    domain: "handelsblatt.com",
    allow_cookies: 1,
    useragent: "facebookbot"
  },
  "Handelszeitung.ch": {
    allow_cookies: 1,
    domain: "handelszeitung.ch",
    useragent: "googlebot"
  },
  "Harper's Magazine": {
    domain: "harpers.org"
  },
  "Harvard Business Review": {
    domain: "hbr.org",
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Harvard Business Review China": {
    domain: "hbrchina.org",
    allow_cookies: 1
  },
  "Hearst Communications (newspapers)": {
    domain: "###_usa_hearst_comm",
    group: [
      "expressnews.com",
      "houstonchronicle.com",
      "sfchronicle.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/script\\.js|\\.blueconic\\.net\\/|\\.ensighten\\.com\\/|js\\.matheranalytics\\.com\\/)"
  },
  "Hearst Communications magazines": {
    domain: "###_usa_hearst_comm_mag",
    group: [
      "bicycling.com",
      "cosmopolitan.com",
      "countryliving.com",
      "elle.com",
      "esquire.com",
      "goodhousekeeping.com",
      "hollywoodreporter.com",
      "housebeautiful.com",
      "menshealth.com",
      "popularmechanics.com",
      "prevention.com",
      "roadandtrack.com",
      "runnersworld.com",
      "townandcountrymag.com",
      "womenshealthmag.com"
    ],
    allow_cookies: 1,
    block_regex: /\.ensighten\.com\/.+\/Bootstrap\.js/
  },
  "Het Laatste Nieuws (link to archive.is)": {
    domain: "hln.be",
    allow_cookies: 1
  },
  "Hindustan Times": {
    domain: "hindustantimes.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "Honolulu Star-Advertiser": {
    domain: "staradvertiser.com",
    allow_cookies: 1,
    block_regex: /js\.matheranalytics\.com\//
  },
  "Il Fatto Quotidiano": {
    domain: "ilfattoquotidiano.it",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "Il Foglio": {
    domain: "ilfoglio.it",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "Il Manifesto": {
    domain: "ilmanifesto.it",
    allow_cookies: 1
  },
  "Il Messaggero (+ regional)": {
    domain: "###_it_ilmessaggero",
    group: [
      "corriereadriatico.it",
      "ilgazzettino.it",
      "ilmattino.it",
      "ilmessaggero.it",
      "quotidianodipuglia.it"
    ],
    block_regex: /(utils\.cedsdigital\.it\/js\/PaywallMeter\.js|cdn\.ampproject\.org\/v\d\/amp-(access|consent|subscriptions)-.+\.mjs)/
  },
  "Il Tirreno": {
    domain: "iltirreno.it"
  },
  "Iltalehti": {
    domain: "iltalehti.fi",
    allow_cookies: 1
  },
  "Inc.com": {
    domain: "inc.com",
    block_regex: /\.tinypass\.com\//
  },
  "Inc42": {
    domain: "inc42.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.(m)?js)/
  },
  "India Today": {
    domain: "indiatoday.in",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "iNews (UK)": {
    domain: "inews.co.uk",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Initium Media": {
    domain: "theinitium.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Inkl": {
    domain: "inkl.com"
  },
  "Intelligent Investor": {
    domain: "intelligentinvestor.com.au",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Internazionale.it": {
    domain: "internazionale.it",
    allow_cookies: 1,
    block_regex: /\.internazionale\.it\/templates_js_ajax\.inc\.php/
  },
  "Investors' Chronicle": {
    allow_cookies: 1,
    domain: "investorschronicle.co.uk",
    referer: "google"
  },
  "iPolitics.ca": {
    domain: "ipolitics.ca",
    allow_cookies: 1
  },
  "Irish Independent": {
    domain: "independent.ie",
    allow_cookies: 1,
    block_regex: /(cdn\.flip-pay\.com\/clients\/inm\/flip-pay\.js)/
  },
  "Italia Oggi": {
    domain: "italiaoggi.it",
    allow_cookies: 1
  },
  "Knack.be": {
    domain: "knack.be",
    allow_cookies: 1,
    block_regex: /(\.knack\.be\/js\/responsive\/rmg(Modal|Paywall)\.js|\.blueconic\.net\/)/
  },
  "Kölner Stadt-Anzeiger": {
    domain: "ksta.de",
    allow_cookies: 1
  },
  "Kölnische Rundschau": {
    domain: "rundschau-online.de",
    allow_cookies: 1
  },
  "Krant van West-Vlaanderen": {
    domain: "kw.be",
    allow_cookies: 1,
    block_regex: /\.blueconic\.net\//
  },
  "Krautreporter.de": {
    domain: "krautreporter.de"
  },
  "L'Avenir": {
    domain: "lavenir.net",
    allow_cookies: 1
  },
  "L'Écho": {
    domain: "lecho.be",
    referer: "google"
  },
  "L'Équipe": {
    domain: "lequipe.fr",
    allow_cookies: 1,
    block_regex: /\.lequipe\.fr\/commons\/lequipe-paywall\/pagePaywall\.js/
  },
  "L'Express": {
    domain: "lexpress.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\/data/
  },
  "L'Humanité": {
    domain: "humanite.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "L'Obs": {
    domain: "nouvelobs.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "L'Oeil de la Photographie": {
    domain: "loeildelaphotographie.com",
    allow_cookies: 1,
    block_regex: /cdn\.loeildelaphotographie\.com\/wp-content\/.+\/hague-child\/js\/script-.+\.js/
  },
  "L'Opinion": {
    domain: "lopinion.fr",
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "L'Usine Nouvelle": {
    domain: "usinenouvelle.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "La Croix": {
    domain: "la-croix.com",
    allow_cookies: 1,
    block_regex: /(\.la-croix\.com\/build\/.+\/paywall.+\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "La Gazzetta dello Sport": {
    domain: "gazzetta.it",
    allow_cookies: 1
  },
  "La Libre.be": {
    domain: "lalibre.be",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "La Nación (free articles only)": {
    domain: "lanacion.com.ar"
  },
  "La Nouvelle République du Centre-Ouest": {
    domain: "lanouvellerepublique.fr",
    allow_cookies: 1,
    block_regex: /(\.weborama\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "La Nuova Sardegna": {
    domain: "lanuovasardegna.it"
  },
  "La Segunda": {
    domain: "lasegunda.com",
    block_regex: /\.(lasegunda\.com|emol\.cl)\/(.+\/)?js\/(.+\/)?(modal|merPramV\d|PramModal\.min)\.js/
  },
  "La Tercera": {
    domain: "latercera.com",
    allow_cookies: 1,
    block_regex: /(\.latercera\.com\/arc\/subs\/p\.min\.js|cdn\.cxense\.com\/|\.tinypass\.com\/)/
  },
  "La Tribune": {
    domain: "latribune.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "La Vanguardia": {
    domain: "lavanguardia.com",
    allow_cookies: 1,
    block_regex: /(\.evolok\.net\/|\.lavanguardia\.com\/js\/godo-basex-)/
  },
  "La Voz del Interior": {
    domain: "lavoz.com.ar",
    allow_cookies: 1,
    block_js_inline: /\.lavoz\.com\.ar/
  },
  "Law.com (free articles only)": {
    domain: "law.com",
    allow_cookies: 1,
    remove_cookies: 1,
    referer: "facebook"
  },
  "Le Devoir": {
    domain: "ledevoir.com",
    block_regex: /\.tinypass\.com\//,
    remove_cookies_select_drop: ["pw6"]
  },
  "Le Journal du Dimanche": {
    domain: "lejdd.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Le Journal du Net": {
    domain: "journaldunet.com",
    allow_cookies: 1
  },
  "Le Nouvel Economiste": {
    domain: "lenouveleconomiste.fr",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Le Parisien": {
    domain: "leparisien.fr",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//,
    useragent: "googlebot"
  },
  "Le Télégramme": {
    domain: "letelegramme.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Le Vif.be": {
    domain: "levif.be",
    allow_cookies: 1,
    block_regex: /(\.levif\.be\/js\/responsive\/rmg(Modal|Paywall)\.js|\.blueconic\.net\/)/
  },
  "Lee Enterprises Group": {
    domain: "###_usa_lee_ent",
    group: [
      "buffalonews.com",
      "journalnow.com",
      "omaha.com",
      "richmond.com",
      "tucson.com",
      "tulsaworld.com"
    ],
    allow_cookies: 1,
    block_regex: /(api\.bntech\.io\/js\/|\.com\/shared-content\/art\/tncms\/user\/user\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Les Échos": {
    domain: "lesechos.fr",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Les Inrockuptibles": {
    domain: "lesinrocks.com",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Live Law": {
    domain: "livelaw.in",
    allow_cookies: 1
  },
  "LiveMint": {
    domain: "livemint.com",
    allow_cookies: 1,
    block_regex: /(\.livemint\.com\/__js\/lm_subscription|\.piano\.io\/api\/tinypass\.min\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Loeb Classical Library": {
    domain: "loebclassics.com"
  },
  "London Review of Books": {
    domain: "lrb.co.uk",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Los Angeles Times": {
    domain: "latimes.com",
    block_regex: /(metering\.platform\.latimes\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "Madavor Media (opt-in to custom sites)": {
    domain: "###_usa_madavor",
    group: []
  },
  "Madsack Mediengruppe": {
    domain: "###_de_madsack",
    group: [
      "haz.de",
      "kn-online.de",
      "ln-online.de",
      "lvz.de",
      "maz-online.de",
      "neuepresse.de",
      "ostsee-zeitung.de",
      "rnd.de"
    ],
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.piano\.io\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Mainichi Shimbun": {
    domain: "mainichi.jp",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Marianne.net": {
    domain: "marianne.net",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "MarketWatch": {
    domain: "marketwatch.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "McClatchy Group": {
    domain: "###_usa_mcc",
    group: [
      "bnd.com",
      "charlotteobserver.com",
      "fresnobee.com",
      "kansas.com",
      "kansascity.com",
      "kentucky.com",
      "mcclatchydc.com",
      "miamiherald.com",
      "newsobserver.com",
      "sacbee.com",
      "star-telegram.com",
      "thestate.com",
      "tri-cityherald.com"
    ],
    block_regex: /(js\.matheranalytics\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "Mediahuis Nederland Regional": {
    domain: "###_nl_mediahuis_region",
    group: [
      "gooieneemlander.nl",
      "haarlemsdagblad.nl",
      "ijmuidercourant.nl",
      "leidschdagblad.nl",
      "noordhollandsdagblad.nl"
    ],
    allow_cookies: 1
  },
  "Mediahuis Noord": {
    domain: "###_nl_mediahuis_noord",
    group: [
      "lc.nl"
    ],
    allow_cookies: 1,
    block_regex: /\.evolok\.net\//
  },
  "MediaNews Group": {
    domain: "###_usa_mng",
    group: [
      "denverpost.com",
      "eastbaytimes.com",
      "mercurynews.com",
      "ocregister.com",
      "pe.com",
      "twincities.com"
    ],
    allow_cookies: 1,
    block_regex: /(\.blueconic\.net\/|\.tinypass\.com\/|\/loader-wp\/.+\/loader\.min\.js|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Medium": {
    domain: "medium.com",
    allow_cookies: 1,
    remove_cookies: 1
  },
  "Medium custom domains (opt-in to custom sites)": {
    domain: "###_medium_custom",
    "group": [
      "betterprogramming.pub",
      "towardsdatascience.com"
    ]
  },
  "Medscape (regwall)": {
    domain: "medscape.com",
    allow_cookies: 1,
    block_regex: /\.medscapestatic\.com\/.+\/medscape-library\.js/
  },
  "Mexico News Daily": {
    domain: "mexiconewsdaily.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\/api\/tinypass\.min\.js/
  },
  "Mid-Day": {
    domain: "mid-day.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "MIT Sloan Management Review": {
    domain: "sloanreview.mit.edu",
    block_regex: /(\.tinypass\.com\/|\/sloanreview\.mit\.edu\/.+\/welcome-ad\.js)/
  },
  "MIT Technology Review": {
    domain: "technologyreview.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.mjs)/
  },
  "Mitteldeutsche Zeitung": {
    domain: "mz.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/
  },
  "Mountain View Voice": {
    domain: "mv-voice.com"
  },
  "Mundo Deportivo": {
    domain: "mundodeportivo.com",
    allow_cookies: 1,
    block_regex: /(\.evolok\.net\/|\.lavanguardia\.com\/js\/godo-basex-)/
  },
  "National Geographic USA": {
    domain: "nationalgeographic.com",
    allow_cookies: 1,
    block_regex: /\.blueconic\.net\//,
    random_ip: "eu"
  },
  "National Review": {
    domain: "nationalreview.com",
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/script\\.js|\\.blueconic\\.net\\/|cdn\\.ampproject\\.org\\/v\\d\\/amp-access-.+\\.js)"
  },
  "Nautilus": {
    domain: "nautil.us",
    allow_cookies: 1,
    block_js_inline: /\/nautil\.us\/((\w)+(\-)+){3,}/
  },
  "NOZ/MHN Mediengruppe": {
    domain: "###_de_noz_mhn",
    group: [
      "noz.de",
      "shz.de",
      "svz.de"
    ],
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "Neue Westfälische": {
    domain: "nw.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "Neue Zürcher Zeitung (+ regional/CH Media; opt-in to custom sites)": {
    domain: "nzz.ch",
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/|(ens\.nzz\.ch|\.ensighten\.com)\/.+\/Bootstrap\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/,
    useragent: "googlebot"
  },
  "New Left Review": {
    domain: "newleftreview.org",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "New Scientist": {
    domain: "newscientist.com",
    allow_cookies: 1
  },
  "New York Magazine (+ Curbed, Grub Street, The Cut & Vulture)": {
    domain: "###_usa_nymag",
    group: [
      "curbed.com",
      "grubstreet.com",
      "nymag.com",
      "thecut.com",
      "vulture.com"
    ],
    remove_cookies_select_drop: ["nymcid", "first-nymcid"]
  },
  "New Zealand Herald": {
    domain: "nzherald.co.nz",
    allow_cookies: 1
  },
  "Newsday": {
    domain: "newsday.com",
    allow_cookies: 1,
    block_regex: /(loader-cdn\.azureedge\.net\/|js\.matheranalytics\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Newsweek": {
    domain: "newsweek.com",
    block_regex: /(js\.pelcro\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "NHST Media Group": {
    domain: "###_no_nhst_media",
    group: [
      "europower-energi.no",
      "fiskeribladet.no",
      "intrafish.com",
      "intrafish.no",
      "rechargenews.com",
      "tradewindsnews.com",
      "upstreamonline.com"
    ],
    allow_cookies: 1,
    referer: "facebook"
  },
  "Nikkei Asian Review (do not block Piano.io-script externally)": {
    domain: "asia.nikkei.com",
    remove_cookies_select_drop: ["xbc"]
  },
  "NK News (free articles only)": {
    domain: "nknews.org",
    remove_cookies_select_drop: ["issuem_lp"]
  },
  "Nordwest Zeitung": {
    domain: "nwzonline.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "NRC Handelsblad": {
    domain: "nrc.nl",
    remove_cookies_select_drop: ["counter"],
    block_regex: /\.nrc\.nl\/paywall-api\/api\/zephr/
  },
  "NyTeknik": {
    domain: "nyteknik.se",
    allow_cookies: 1,
    block_regex: /\.nyteknik\.se\/.+\/static\/js\/site\.min\.js/
  },
  "O Estado de S. Paulo": {
    domain: "estadao.com.br",
    block_regex: /(acesso\.estadao\.com\.br\/paywall\/.+\/.+\.js|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "O Globo (& Valor Econômico; cached articles only)": {
    domain: "globo.com",
    block_regex: /\.tinypass\.com\//
  },
  "Observador.pt": {
    domain: "observador.pt",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.cxense\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Outdoor Life": {
    domain: "outdoorlife.com",
    allow_cookies: 1,
    block_regex: /js\.pelcro\.com\//
  },
  "Outlook Business": {
    domain: "outlookbusiness.com",
    allow_cookies: 1
  },
  "Outlook India": {
    domain: "outlookindia.com",
    allow_cookies: 1
  },
  "Outside magazines": {
    domain: "###_usa_outside_mag",
    group: [
      "backpacker.com",
      "betamtb.com",
      "betternutrition.com",
      "cleaneatingmag.com",
      "climbing.com",
      "cyclingtips.com",
      "gymclimber.com",
      "outsideonline.com",
      "oxygenmag.com",
      "pelotonmagazine.com",
      "podiumrunner.com",
      "rockandice.com",
      "skimag.com",
      "trailrunnermag.com",
      "triathlete.com",
      "vegetariantimes.com",
      "velonews.com",
      "womensrunning.com",
      "yogajournal.com"
    ],
    allow_cookies: 1,
    block_regex: "\\.{domain}\\/.+\\/scripts\\/contentGate.+\\.js"
  },
  "Palo Alto Online": {
    domain: "paloaltoonline.com"
  },
  "Paris Match": {
    domain: "parismatch.com",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "PEI Media (opt-in to custom sites)": {
    domain: "###_usa_pei",
    group: [],
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Penske Media Corporation": {
    domain: "###_usa_penske_media",
    allow_cookies: 1,
    group: [
      "billboard.com",
      "rollingstone.com",
      "sportico.com",
      "variety.com",
      "wwd.com"
    ],
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "PhiloMag.com": {
    domain: "philomag.com",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "PhiloMag.de": {
    domain: "philomag.de",
    allow_cookies: 1
  },
  "Philosophy Now": {
    domain: "philosophynow.org"
  },
  "Piqd.de": {
    domain: "piqd.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Pittsburgh Post Gazette": {
    domain: "post-gazette.com",
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/)/
  },
  "Política Exterior": {
    domain: "politicaexterior.com",
    allow_cookies: 1
  },
  "Popular Science": {
    domain: "popsci.com",
    allow_cookies: 1,
    block_regex: /js\.pelcro\.com\//
  },
  "Postmedia Network": {
    domain: "###_ca_postmedia",
    group: [
      "calgaryherald.com",
      "financialpost.com",
      "nationalpost.com",
      "theprovince.com",
      "torontosun.com",
      "vancouversun.com"
    ],
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Private Equity News": {
    domain: "penews.com",
    useragent: "googlebot"
  },
  "Project Syndicate (link to archive.is)": {
    domain: "project-syndicate.org",
    allow_cookies: 1
  },
  "Prospect Magazine": {
    domain: "prospectmagazine.co.uk",
    allow_cookies: 1
  },
  "Public.fr": {
    domain: "public.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Puck.news": {
    domain: "puck.news",
    allow_cookies: 1
  },
  "Quartz": {
    domain: "qz.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Quora (regwall)": {
    domain: "quora.com",
    useragent: "googlebot"
  },
  "Quotidiano.net (+ regional)": {
    domain: "###_it_quotidiano",
    group: [
      "ilgiorno.it",
      "ilrestodelcarlino.it",
      "iltelegrafolivorno.it",
      "lanazione.it",
      "quotidiano.net"
    ],
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Record.pt": {
    domain: "record.pt",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(subscriptions|consent)-.+\.js/
  },
  "Republic.ru": {
    domain: "republic.ru",
    allow_cookies: 1,
    useragent: "facebookbot"
  },
  "Reuters": {
    domain: "reuters.com",
    allow_cookies: 1,
    block_regex: /\.reuters\.com\/(arc\/subs\/p\.min|pf\/resources\/dist\/reuters\/js\/index)\.js/
  },
  "Rhein-Zeitung": {
    domain: "rhein-zeitung.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Rheinische Post Mediengruppe": {
    domain: "###_de_rp_medien",
    group: [
      "aachener-nachrichten.de",
      "aachener-zeitung.de",
      "ga.de",
      "rp-online.de",
      "saarbruecker-zeitung.de",
      "volksfreund.de"
    ],
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "RugbyPass": {
    domain: "rugbypass.com",
    allow_cookies: 1,
    block_js_inline: /\.rugbypass\.com\/plus\//,
    block_regex: /\.tinypass\.com\//
  },
  "S&P Global": {
    domain: "spglobal.com",
    allow_cookies: 1,
    block_regex: /\.blueconic\.net\//
  },
  "Saltwire Network": {
    domain: "saltwire.com",
    allow_cookies: 1,
    block_regex: /\/loader-cdn\.azureedge\.net\//
  },
  "San Diego Union Tribune": {
    domain: "sandiegouniontribune.com",
    block_regex: /(metering\.platform\.sandiegouniontribune\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "Science (free articles only)": {
    domain: "science.org",
    allow_cookies: 1
  },
  "Science & Vie": {
    domain: "science-et-vie.com",
    block_regex: /\.qiota\.com\//
  },
  "Sciences et Avenir": {
    domain: "sciencesetavenir.fr",
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Scientific American": {
    domain: "scientificamerican.com",
    allow_cookies: 1,
    remove_cookies: 1
  },
  "Seeking Alpha": {
    domain: "seekingalpha.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org(\/.+)?\/v\d\/amp-(access|loader)-.+\.js)/
  },
  "Slate": {
    domain: "slate.com",
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "SlideShare": {
    domain: "slideshare.net",
    allow_cookies: 1
  },
  "SOFREP": {
    domain: "sofrep.com",
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "South China Morning Post": {
    domain: "scmp.com",
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Southern Weekly": {
    domain: "infzm.com",
    allow_cookies: 1
  },
  "Sports Illustrated": {
    domain: "si.com",
    allow_cookies: 1,
    block_regex: /\.blueconic\.net\//
  },
  "Star Tribune": {
    domain: "startribune.com",
    allow_cookies: 1,
    block_regex: /\.startribune\.com\/vendor\/js\//
  },
  "Statista": {
    domain: "statista.com",
    referer: "google"
  },
  "Stock News": {
    domain: "stocknews.com",
    allow_cookies: 1
  },
  "Stratfor": {
    domain: "stratfor.com",
    allow_cookies: 1,
    useragent: "bingbot"
  },
  "StuDocu (no downloads)": {
    domain: "studocu.com",
    allow_cookies: 1
  },
  "Substack (paywall-content only)": {
    domain: "substack.com",
    useragent: "googlebot"
  },
  "Substack custom domains (paywall-content only; opt-in to custom sites)": {
    domain: "###_substack_custom",
    group: [],
    useragent: "googlebot"
  },
  "Süddeutsche Zeitung (link to archive.is)": {
    domain: "sueddeutsche.de",
    allow_cookies: 1
  },
  "Suomen Sotilas": {
    domain: "suomensotilas.fi",
    allow_cookies: 1,
    block_regex: /\/suomensotilas\.fi\/wp-content\/plugins\/epflpw\/js\/pw\.js/
  },
  "Tampa Bay Times": {
    domain: "tampabay.com",
    allow_cookies: 1,
    block_regex: /(loader-cdn\.azureedge\.net\/|js\.matheranalytics\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Tech in Asia": {
    domain: "techinasia.com",
    allow_cookies: 1
  },
  "Telegraaf": {
    domain: "telegraaf.nl",
    allow_cookies: 1
  },
  "Télérama": {
    domain: "telerama.fr",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Tes Magazine": {
    domain: "tes.com",
    remove_cookies_select_drop: ["tg_paywall"]
  },
  "The (New Orleans) Advocate": {
    domain: "###_usa_theadvocate",
    group: [
      "nola.com",
      "theadvocate.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/script\\.js|\\.blueconic\\.net\\/|\\.com\\/shared-content\\/art\\/tncms\\/user\\/user\\.js|js\\.matheranalytics\\.com\\/)"
  },
  "The American Interest": {
    domain: "the-american-interest.com",
    allow_cookies: 1
  },
  "The Art Newspaper": {
    domain: "theartnewspaper.com",
    allow_cookies: 1,
    block_regex: /\.amazonaws.com\/production-website-scripts\/bouncer\.js/
  },
  "The Athletic": {
    domain: "###_usa_theathletic",
    group: [
      "theathletic.com"
    ],
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/
  },
  "The Atlanta Journal-Constitution": {
    domain: "ajc.com",
    allow_cookies: 1,
    block_regex: /(loader-cdn\.azureedge\.net\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Atlantic": {
    domain: "theatlantic.com",
    block_regex: /cdn\.theatlantic\.com\/_next\/static\/chunks\/[567].+\.js/,
    remove_cookies_select_drop: ["articleViews"]
  },
  "The Australian Financial Review": {
    domain: "afr.com",
    allow_cookies: 1,
    block_regex: /api\.afr\.com\/graphql\?query=.+PaywallRuleQuery/
  },
  "The Banker": {
    domain: "thebanker.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "The Boston Globe": {
    domain: "bostonglobe.com",
    allow_cookies: 1,
    block_regex: /(\.blueconic\.net\/|meter\.bostonglobe\.com\/js\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "The Business Journals (free articles only)": {
    domain: "bizjournals.com",
    block_regex: /(assets\.bizjournals\.com\/static\/js\/app\/cxense\.js|cdn\.cxense\.com\/)/
  },
  "The Business of Fashion": {
    domain: "businessoffashion.com",
    allow_cookies: 1,
    block_regex: /(\.businessoffashion\.com\/zephr\/feature|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Caravan": {
    domain: "caravanmagazine.in",
    allow_cookies: 1
  },
  "The Christian Science Monitor": {
    domain: "csmonitor.com",
    allow_cookies: 1
  },
  "The Chronicle of Higher Education (& Philanthropy)": {
    domain: "###_usa_chronicle",
    group: [
      "chronicle.com",
      "philanthropy.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/script\\.js|\\.blueconic\\.net\\/)"
  },
  "The Critic": {
    domain: "thecritic.co.uk",
    block_regex: /\.hadrianpaywall\.com\//
  },
  "The Daily Beast": {
    domain: "thedailybeast.com",
    block_regex: /\.tinypass\.com\//
  },
  "The Daily Wire (news only)": {
    domain: "dailywire.com",
    allow_cookies: 1
  },
  "The Dallas Morning News": {
    domain: "dallasnews.com",
    allow_cookies: 1,
    block_regex: /(\.blueconic\.net\/|js\.matheranalytics\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/,
    useragent: "googlebot"
  },
  "The Diplomat": {
    domain: "thediplomat.com",
    block_regex: /\/thediplomat\.com\/.+\/js\/angular-cookies\.min\.js/,
    remove_cookies_select_drop: ["dpl-pw"]
  },
  "The Economic Times (ET Prime)": {
    domain: "###_economictimes",
    group: [
      "economictimes.com",
      "economictimes.indiatimes.com"
    ],
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "The Economist": {
    domain: "economist.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Financial Express": {
    domain: "financialexpress.com",
    allow_cookies: 1,
    block_regex: /(\.financialexpress\.com\/.+\/min\/premiumStoryContent\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Globe and Mail": {
    domain: "theglobeandmail.com",
    block_js_inline: /\.theglobeandmail\.com\/.+\/article-.+\?rel=premium/,
    block_regex: /smartwall\.theglobeandmail\.com\//
  },
  "The Hill": {
    domain: "thehill.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "The Hill Times": {
    domain: "hilltimes.com",
    allow_cookies: 1,
    block_regex: /\.hilltimes\.com\/.+\/js\/loadingoverlay\/loadingoverlay\.min\.js/,
    useragent: "googlebot"
  },
  "The Hindu": {
    domain: "thehindu.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "The Hindu BusinessLine": {
    domain: "thehindubusinessline.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Independent": {
    domain: "independent.co.uk",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Indian Express": {
    domain: "indianexpress.com",
    allow_cookies: 1,
    block_regex: /(\/indianexpress\.com\/.+\/(evolok\/.+|premiumContent)\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Intercept": {
    domain: "theintercept.com",
    allow_cookies: 1,
    block_regex: /\.theintercept\.com\/api\/tinypass\.min\.js/
  },
  "The Irish Times": {
    domain: "irishtimes.com",
    allow_cookies: 1,
    block_regex: /\.irishtimes\.com\/zephr\/feature/
  },
  "The Japan Times (recent/last 2 months articles only; do not block Piano.io-script externally)": {
    domain: "japantimes.co.jp",
    block_regex: /cdn\.cxense\.com\//,
    remove_cookies_select_drop: ["xbc"]
  },
  "The Jerusalem Post": {
    domain: "jpost.com",
    allow_cookies: 1,
    block_regex: /\.jpost\.com\/js\/js_article\.min\.js/
  },
  "The Lawyer's Daily": {
    domain: "thelawyersdaily.ca",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "The Marker": {
    domain: "themarker.com",
    allow_cookies: 1,
    useragent: "facebookbot"
  },
  "The Market.ch": {
    domain: "themarket.ch",
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/|ens\.themarket\.ch\/.+\/Bootstrap\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/,
    useragent: "googlebot"
  },
  "The Nation": {
    domain: "thenation.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The New Atlantis": {
    domain: "thenewatlantis.com",
    allow_cookies: 1,
    block_regex: /\.thenewatlantis\.com\/.+\/thenewatlantis\/js\/(gate|donate)\.js/
  },
  "The New European": {
    domain: "theneweuropean.co.uk",
    allow_cookies: 1,
    block_regex: /cdn\.tinypass\.com\//
  },
  "The New Republic": {
    domain: "newrepublic.com",
    allow_cookies: 1,
    block_regex: /\/blink\.net\/.+\/blink-sdk\.js/
  },
  "The New Statesman": {
    domain: "newstatesman.com",
    allow_cookies: 1,
    block_regex: /\.newstatesman\.com\/.+\/nsmg-evolok-paywall\/.+\.js/
  },
  "The New York Post": {
    domain: "nypost.com",
    allow_cookies: 1,
    block_regex: /\.nypost\.com\/zephr\/feature/
  },
  "The New York Review of Books": {
    domain: "nybooks.com",
    allow_cookies: 1,
    block_regex: /\.nybooks\.com\/wp-admin\/admin-ajax\.php/
  },
  "The New York Sun": {
    domain: "nysun.com",
    allow_cookies: 1,
    block_regex: /\.nysun\.com\/zephr\/feature/
  },
  "The New York Times": {
    domain: "nytimes.com",
    allow_cookies: 1,
    block_regex: /(meter-svc\.nytimes\.com\/meter\.js|mwcm\.nyt\.com\/.+\.js|cooking\.nytimes\.com\/api\/.+\/access)/
  },
  "The Philadelphia Inquirer": {
    domain: "inquirer.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|js\.matheranalytics\.com\/)/
  },
  "The Point Magazine": {
    domain: "thepointmag.com",
    remove_cookies_select_drop: ["monthly_history"]
  },
  "The Saturday Paper": {
    domain: "thesaturdaypaper.com.au",
    block_regex: /\.thesaturdaypaper\.com\.au\/sites\/all\/modules\/custom\/node_meter\/pw\.js/
  },
  "The Seattle Times": {
    domain: "seattletimes.com",
    allow_cookies: 1,
    block_regex: /(\.seattletimes\.com\/wp-content\/.+\/st-(advertising|blocking)-bundle\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Scotsman": {
    domain: "scotsman.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Spectator (UK)": {
    domain: "spectator.co.uk",
    useragent: "googlebot"
  },
  "The Spectator Australia": {
    domain: "spectator.com.au",
    block_regex: /\.tinypass\.com\//
  },
  "The Spectator World": {
    domain: "spectatorworld.com",
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/)/
  },
  "The Star Malaysia": {
    domain: "thestar.com.my",
    block_regex: /(cdn\.cxense\.com\/|\.piano\.io\/)/
  },
  "The Telegraph": {
    domain: "telegraph.co.uk",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.telegraph\.co\.uk\/martech\/js\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Times (UK; link to archive.is))": {
    domain: "thetimes.co.uk",
    allow_cookies: 1
  },
  "The Times Literary Supplement": {
    domain: "the-tls.co.uk",
    referer: "google"
  },
  "The Toronto Star (+ local TorStar sites)": {
    domain: "###_ca_torstar",
    group: [
      "niagarafallsreview.ca",
      "stcatharinesstandard.ca",
      "thepeterboroughexaminer.com",
      "therecord.com",
      "thespec.com",
      "thestar.com",
      "wellandtribune.ca"
    ],
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/script\\.js|\\.blueconic\\.net\\/|cdn\\.ampproject\\.org\\/v\\d\\/amp-access-.+\\.js)"
  },
  "The Village.ru": {
    domain: "the-village.ru",
    allow_cookies: 1,
    block_regex: /\.the-village\.ru\/assets\/app\/\d.+\.js/
  },
  "The Wall Street Journal (when blocked disable Googlebot in BPC-settings)": {
    domain: "wsj.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/,
    useragent: "googlebot"
  },
  "The Washington Post": {
    domain: "washingtonpost.com",
    allow_cookies: 1,
    block_regex: /\.washingtonpost\.com\/tetro\/metering\/evaluate/
  },
  "The West Australian (+ regional/opt-in to custom sites)": {
    domain: "thewest.com.au",
    allow_cookies: 1
  },
  "The Wrap": {
    domain: "thewrap.com",
    allow_cookies: 1,
    block_regex: /\.wallkit\.net\/js\//
  },
  "Time Magazine": {
    domain: "time.com",
    allow_cookies: 1,
    block_regex: /(\/time\.com\/dist\/meter-wall-client-js\..+\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Times Higher Education": {
    domain: "timeshighereducation.com",
    allow_cookies: 1,
    block_regex: /\.timeshighereducation\.com\/sites\/default\/files\/.+\/js__.+\.js/
  },
  "Times of India": {
    domain: "###_timesofindia",
    group: [
      "timesofindia.com",
      "timesofindia.indiatimes.com"
    ],
    allow_cookies: 1,
    useragent: "googlebot",
    exception: [{
        domain: "timesofindia.indiatimes.com",
        allow_cookies: 1
      }
    ]
  },
  "Tribune Publishing Company": {
    domain: "###_usa_tribune",
    group: [
      "baltimoresun.com",
      "capitalgazette.com",
      "chicagotribune.com",
      "courant.com",
      "dailypress.com",
      "mcall.com",
      "nydailynews.com",
      "orlandosentinel.com",
      "pilotonline.com",
      "sun-sentinel.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.tribdss\\.com\\/|\\.{domain}\\/script\\.js|\\.blueconic\\.net\\/|\\.zephr\\.com\\/zephr-browser\\/.+\\/zephr-browser\\.umd\\.js)"
  },
  "UnHerd": {
    domain: "unherd.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "UOL.com.br": {
    domain: "uol.com.br",
    allow_cookies: 1,
    block_js_inline: /crusoe\.uol\.com\.br\/(diario|edicoes)\/.+/,
    block_regex: /(paywall\.folha\.uol\.com\.br\/|\.(tinypass|matheranalytics)\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/,
    useragent: "googlebot"
  },
  "USA Today": {
    domain: "usatoday.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "Valeurs Actuelles": {
    domain: "valeursactuelles.com",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "VentureBeat": {
    domain: "venturebeat.com",
    allow_cookies: 1,
    block_regex: /\.wallkit\.net\/js\//
  },
  "Vogue Business": {
    allow_cookies: 1,
    domain: "voguebusiness.com",
    useragent: "googlebot",
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "Volksstimme": {
    domain: "volksstimme.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/
  },
  "Vrij Nederland": {
    domain: "vn.nl",
    allow_cookies: 1
  },
  "Weltkunst": {
    domain: "weltkunst.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Westdeutsche Zeitung": {
    allow_cookies: 1,
    domain: "wz.de",
    useragent: "googlebot"
  },
  "Westfälische Mediengruppe": {
    domain: "###_de_westfalen_medien",
    group: [
      "muensterschezeitung.de",
      "westfalen-blatt.de",
      "wn.de"
    ],
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "Winnipeg Free Press": {
    domain: "winnipegfreepress.com",
    allow_cookies: 1,
    block_regex: /(account\.winnipegfreepress\.com\/api\/v\d\/auth\/identify|cdn\.cxense\.com\/)/
  },
  "WirtschaftsWoche": {
    domain: "wiwo.de",
    allow_cookies: 1,
    useragent: "facebookbot"
  },
  "Wonderzine": {
    domain: "wonderzine.com",
    allow_cookies: 1,
    useragent: "facebookbot"
  },
  "ZeroHedge": {
    domain: "zerohedge.com",
    allow_cookies: 1
  },
  "* Block general paywall-scripts (opt-in to custom sites to enable also for unlisted sites)": {
    domain: "###"
  },
  "Amp-access": {
    domain: "cdn.ampproject.org",
    allow_cookies: 1,
    block_regex_general: /cdn\.ampproject\.org\/.+\/amp-(access|(.+-)?ad|analytics|fx-flying-carpet|subscriptions)-.+\.(m)?js/,
    excluded_domains: ["cambridge.org"]
  },
  "Axate.io": {
    domain: "###_uk_axate.io",
    allow_cookies: 1,
    block_regex_general: /\.axate\.io\//
  },
  "AzureEdge": {
    domain: "loader-cdn.azureedge.net",
    allow_cookies: 1,
    block_regex_general: /loader-cdn\.azureedge\.net\//
  },
  "BlueConic": {
    domain: "blueconic.net",
    allow_cookies: 1,
    block_regex_general: /\.blueconic\.net\//
  },
  "Cxense": {
    domain: "cxense.com",
    allow_cookies: 1,
    block_regex_general: /cdn\.cxense\.com\//
  },
  "Ensighten": {
    domain: "ensighten.com",
    allow_cookies: 1,
    block_regex_general: /\.ensighten\.com\/.+\/Bootstrap\.js/
  },
  "Evolok": {
    domain: "evolok.net",
    allow_cookies: 1,
    block_regex_general: /\.evolok\.net\//
  },
  "Evolok WordPress": {
    domain: "###_wp_evolok",
    allow_cookies: 1,
    block_regex_general: /\/(wp-content\/.+\/ev-em|evolok\/.+\/ev-widgets)\.min\.js/
  },
  "Leaky Paywall (WordPress plugin)": {
    domain: "###_wp_leaky_paywall",
    group: [],
  },
  "MatherAnalytics": {
    domain: "matheranalytics.com",
    allow_cookies: 1,
    block_regex_general: /js\.matheranalytics.com\//
  },
  "NewsMemory": {
    domain: "newsmemory.com",
    allow_cookies: 1,
    block_regex_general: /\.newsmemory\.com\/\?meter/
  },
  "Omeda Olytics": {
    domain: "omeda.com",
    allow_cookies: 1,
    block_regex_general: /olytics\.omeda\.com\//
  },
  "OneCount": {
    domain: "onecount.net",
    allow_cookies: 1,
    block_regex_general: /\.onecount\.net\//
  },
  "Pelcro": {
    domain: "pelcro.com",
    allow_cookies: 1,
    block_regex_general: /js\.pelcro\.com\//
  },
  "Piano.io": {
    domain: "piano.io",
    allow_cookies: 1,
    block_regex_general: /\.piano\.io\//,
    excluded_domains: ["asia.nikkei.com", "japantimes.co.jp", "lkz.de"]
  },
  "Pico.tools": {
    domain: "pico.tools",
    allow_cookies: 1,
    block_regex_general: /api\.pico.tools\//
  },
  "Pigeon (WordPress plugin)": {
    domain: "###_wp_pigeon",
    allow_cookies: 1,
    block_regex_general: /\/c\/assets\/pigeon\.js/
  },
  "Poool.fr": {
    domain: "poool.fr",
    allow_cookies: 1,
    block_regex_general: /\.poool\.fr\//
  },
  "Qiota": {
    domain: "qiota.com",
    allow_cookies: 1,
    block_regex_general: /\.qiota\.com\/data/
  },
  "TinyPass": {
    domain: "tinypass.com",
    allow_cookies: 1,
    block_regex_general: /cdn\.tinypass\.com\//
  },
  "TownNews sites (Blox CMS; not encrypted)": {
    domain: "###_usa_townnews",
    block_regex_general: /\.com\/shared-content\/art\/tncms\/user\/user\.js/
  },
  "TribDss": {
    domain: "tribdss.com",
    allow_cookies: 1,
    block_regex_general: /\.tribdss\.com\//
  },
  "Weborama.fr": {
    domain: "weborama.fr",
    allow_cookies: 1,
    block_regex_general: /\.weborama\.fr\//
  },
  "Zephr": {
    domain: "zephr.com",
    allow_cookies: 1,
    block_regex_general: /(\.zephr\.com\/zephr-browser\/|\/zephr\/feature)/
  },
  "* BPC settings": {
    domain: "###"
  },
  "Show options on update": {
    domain: "#options_on_update"
  },
  "Enable new sites by default": {
    domain: "#options_enable_new_sites"
  },
  "Check for update rules at startup": {
    domain: "#options_optin_update_rules"
  },
  "Australia News Corp - no Googlebot (blocked)": {
    domain: "#options_disable_gb_au_news_corp"
  },
  "Barron's - no Googlebot (http error 500)": {
    domain: "#options_disable_gb_barrons"
  },
  "The Wall Street Journal - no Googlebot (http error 500)": {
    domain: "#options_disable_gb_wsj"
  },
}

var defaultSites_grouped_domains = Object.values(defaultSites).filter(function (value) {
    return (value.hasOwnProperty('domain') && value.domain !== '###');
  }).map(x => x.domain);
var defaultSites_groups_domains = [].concat.apply([], Object.values(defaultSites).filter(function (value) {
    return value.hasOwnProperty('group');
  }).map(x => x.group));
var defaultSites_domains = defaultSites_grouped_domains.concat(defaultSites_groups_domains);

function addCookieRules(rule, custom) {
  if (rule.hasOwnProperty('remove_cookies_select_drop') || rule.hasOwnProperty('remove_cookies_select_hold') || (custom && !rule.hasOwnProperty('allow_cookies'))) {
    rule.allow_cookies = 1;
    rule.remove_cookies = 1;
  }
}

function expandSiteRules(sites, updated = false) {
  for (let site in sites) {
    let rule = sites[site];
    if (rule.hasOwnProperty('group_rule')) {
      let rules = sites[rule.group_rule];
      for (key in rules) {
        if (key !== 'group_rule_domains')
          sites[site][key] = rules[key];
      }
      //delete sites[site].group_rule;
    }
    if (updated) {
      if (rule.hasOwnProperty('group_rule_domains')) {
        let domains = rule.group_rule_domains;
        for (let domain of domains) {
          let defaultTitle = Object.keys(defaultSites).find(key => defaultSites[key].domain === domain);
          if (defaultTitle) {
            for (key in rule) {
              if (key !== 'group_rule_domains')
                defaultSites[defaultTitle][key] = rule[key];
            }
          }
        }
      }
    }
    if (rule.hasOwnProperty('group')) {
      let domain = rule.domain;
      grouped_sites[domain] = rule.group
    }
  }
}

var grouped_sites = {};
expandSiteRules(defaultSites);

// grouped domains (background)
var au_news_corp_domains = grouped_sites['###_au_news_corp'];
var es_grupo_vocento_domains = grouped_sites['###_es_grupo_vocento'];
var it_gedi_domains = grouped_sites['###_it_gedi'];
var nl_mediahuis_region_domains = grouped_sites['###_nl_mediahuis_region'];
var no_nhst_media_domains = grouped_sites['###_no_nhst_media'];

// custom domains (background)
var custom_flex_not = {
  "###_ca_postmedia": ["canada.com", "canoe.com", "driving.ca"],
  "###_de_madsack": ["madsack.de", "madsack-medien-campus.de"],
  "###_nl_mediahuis_noord": ["dvhn.nl"],
  "###_wp_leaky_paywall": ["griffithreview.com", "nknews.org", "thewirechina.com"],
  "###_medium_custom": ["medium.com"],
  "###_substack_custom": ["substack.com"],
  "###_uk_axate.io": ["thinkofx.net"],
  "###_usa_gannett": ["usatoday.com"],
  "###_usa_hearst_comm": ["sfgate.com"],
  "###_usa_mcc": ["mcclatchy.com"],
  "###_usa_townnews": ["townnews.com", "nola.com", "theadvocate.com"]
}
var custom_flex_domains;
var custom_flex_not_domains;

function init_custom_flex_domains() {
  custom_flex_domains = [];
  custom_flex_not_domains = [].concat.apply([], Object.values(custom_flex_not)).concat(['gitlab.com']);
}
init_custom_flex_domains();

// sites with no fix (background)
var au_news_corp_nofix_domains = ['cairnspost.com.au', 'geelongadvertiser.com.au', 'goldcoastbulletin.com.au', 'thechronicle.com.au', 'townsvillebulletin.com.au', 'weeklytimesnow.com.au'];
var be_mediahuis_nofix_domains = ['gva.be', 'hbvl.be', 'nieuwsblad.be', 'standaard.be'];
var it_gedi_nofix_domains = ['gelocal.it', 'huffingtonpost.it', 'ilsecoloxix.it', 'lastampa.it', 'limesonline.com'];
var nofix_sites = ['africaintelligence.com', 'africaintelligence.fr', 'aftenposten.no', 'badische-zeitung.de', 'bild.de', 'borsen.dk', 'businesstimes.com.sg', 'caixin.com', 'caixinglobal.com', 'catalyst-journal.com', 'courrierinternational.com', 'dn.se', 'dvhn.nl', 'elordenmundial.com', 'epw.in', 'expresso.pt', 'ftchinese.com', 'golem.de', 'heise.de', 'hs.fi', 'ilsole24ore.com', 'jacobinmag.com', 'jeuneafrique.com', 'kurier.at', 'lavie.fr', 'lavozdegalicia.es', 'law360.com', 'leconomiste.com', 'lefigaro.fr', 'lemonde.fr', 'lepoint.fr', 'letemps.ch', 'liberation.fr', 'medianama.com', 'mediapart.fr', 'milanofinanza.it', 'mondediplo.com', 'moneycontrol.com', 'nationaljournal.com', 'nature.com', 'nbr.co.nz', 'nn.de', 'ouest-france.fr', 'philonomist.com', 'politicopro.com', 'politiken.dk', 'pressreader.com', 'publico.pt', 'saechsische.de', 'schwarzwaelder-bote.de', 'statnews.com', 'stern.de', 'straitstimes.com', 'stuttgarter-nachrichten.de', 'stuttgarter-zeitung.de', 'suedkurier.de', 'swp.de', 'tagesanzeiger.ch', 'techcrunch.com', 'the-ken.com', 'theinformation.com', 'themorningcontext.com', 'theparisreview.org', 'thewirechina.com', 'weser-kurier.de', 'worldpoliticsreview.com', 'ynet.co.il'].concat(au_news_corp_nofix_domains, be_mediahuis_nofix_domains, it_gedi_nofix_domains);
