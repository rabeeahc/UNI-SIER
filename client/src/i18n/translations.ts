// Real translation dictionaries for Campus Bridge's UI chrome, homepage
// journey checklists, guide list cards, campus/community categories, and
// footer. Hand-written rather than a library like react-i18next since the
// translation surface, while now large, is still static and finite.
//
// SCOPE NOTE: this covers everything EXCEPT the long-form content of the
// 6 guide pages (Residence Permit, Banking, etc). Those guides state
// legal/procedural facts (fees, deadlines, required documents), and a
// translation error there could genuinely mislead a student about their
// visa status - that content needs a native-speaking reviewer, not a
// silent machine translation. Guide pages show a visible notice in any
// non-English language explaining this (see GuideLanguageNotice.tsx).

export type LanguageCode = "en" | "tr" | "ar" | "ru";

export const languages: { code: LanguageCode; name: string; flag: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", name: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "ru", name: "Русский", flag: "🇷🇺", dir: "ltr" },
];

export type TranslationKey =
  | "nav.guides"
  | "nav.campus"
  | "nav.community"
  | "hero.badge"
  | "hero.title"
  | "hero.description"
  | "hero.badge.supporting"
  | "hero.badge.comingSoon"
  | "hero.cta.primary"
  | "hero.cta.secondary"
  | "hero.trust"
  | "journey.title"
  | "journey.subtitle"
  | "guides.badge"
  | "guides.title"
  | "guides.subtitle"
  | "campus.badge"
  | "campus.title"
  | "campus.subtitle"
  | "campus.map.title"
  | "community.badge"
  | "community.title"
  | "community.subtitle"
  | "footer.tagline"
  | "footer.rights"
  | "footer.madeBy"
  | "notfound.title"
  | "notfound.description"
  | "notfound.home"
  | "notfound.guides"
  | "guide.translationNotice"
  | "common.backToGuides"
  | "common.browseMoreGuides"
  | "common.onThisPage"
  | "common.completed"
  | "common.comingSoon"
  | "footer.section.guides"
  | "footer.section.explore"
  | "footer.link.residencePermit"
  | "footer.link.allGuides"
  | "footer.link.campus"
  | "footer.link.community"
  | "guideList.residencePermit.title"
  | "guideList.residencePermit.description"
  | "guideList.simCards.title"
  | "guideList.simCards.description"
  | "guideList.transportation.title"
  | "guideList.transportation.description"
  | "guideList.accommodation.title"
  | "guideList.accommodation.description"
  | "guideList.banking.title"
  | "guideList.banking.description"
  | "guideList.foodGrocery.title"
  | "guideList.foodGrocery.description"
  | "campus.category.buildings.title"
  | "campus.category.buildings.description"
  | "campus.category.library.title"
  | "campus.category.library.description"
  | "campus.category.intlOffice.title"
  | "campus.category.intlOffice.description"
  | "campus.category.cafes.title"
  | "campus.category.cafes.description"
  | "campus.category.groceries.title"
  | "campus.category.groceries.description"
  | "campus.category.pharmacies.title"
  | "campus.category.pharmacies.description"
  | "campus.category.atms.title"
  | "campus.category.atms.description"
  | "campus.category.mosques.title"
  | "campus.category.mosques.description"
  | "campus.category.busStops.title"
  | "campus.category.busStops.description"
  | "community.feature.qa.title"
  | "community.feature.qa.description"
  | "community.feature.discussions.title"
  | "community.feature.discussions.description"
  | "community.feature.events.title"
  | "community.feature.events.description"
  | "community.feature.groups.title"
  | "community.feature.groups.description"
  | "community.feature.recommendations.title"
  | "community.feature.recommendations.description"
  | "community.feature.marketplace.title"
  | "community.feature.marketplace.description"
  | "journey.accepted.title"
  | "journey.accepted.description"
  | "journey.accepted.item1.title"
  | "journey.accepted.item1.info"
  | "journey.accepted.item2.title"
  | "journey.accepted.item2.info"
  | "journey.accepted.item3.title"
  | "journey.accepted.item3.info"
  | "journey.accepted.item4.title"
  | "journey.accepted.item4.info"
  | "journey.accepted.item5.title"
  | "journey.accepted.item5.info"
  | "journey.accepted.item6.title"
  | "journey.accepted.item6.info"
  | "journey.preparing.title"
  | "journey.preparing.description"
  | "journey.preparing.item1.title"
  | "journey.preparing.item1.info"
  | "journey.preparing.item2.title"
  | "journey.preparing.item2.info"
  | "journey.preparing.item3.title"
  | "journey.preparing.item3.info"
  | "journey.preparing.item4.title"
  | "journey.preparing.item4.info"
  | "journey.preparing.item5.title"
  | "journey.preparing.item5.info"
  | "journey.preparing.item6.title"
  | "journey.preparing.item6.info"
  | "journey.arrived.title"
  | "journey.arrived.description"
  | "journey.arrived.item1.title"
  | "journey.arrived.item1.info"
  | "journey.arrived.item2.title"
  | "journey.arrived.item2.info"
  | "journey.arrived.item3.title"
  | "journey.arrived.item3.info"
  | "journey.arrived.item4.title"
  | "journey.arrived.item4.info"
  | "journey.arrived.item5.title"
  | "journey.arrived.item5.info"
  | "journey.arrived.item6.title"
  | "journey.arrived.item6.info"
  | "journey.studying.title"
  | "journey.studying.description"
  | "journey.studying.item1.title"
  | "journey.studying.item1.info"
  | "journey.studying.item2.title"
  | "journey.studying.item2.info"
  | "journey.studying.item3.title"
  | "journey.studying.item3.info"
  | "journey.studying.item4.title"
  | "journey.studying.item4.info"
  | "journey.studying.item5.title"
  | "journey.studying.item5.info"
  | "journey.studying.item6.title"
  | "journey.studying.item6.info"
  | "journey.graduating.title"
  | "journey.graduating.description"
  | "journey.graduating.item1.title"
  | "journey.graduating.item1.info"
  | "journey.graduating.item2.title"
  | "journey.graduating.item2.info"
  | "journey.graduating.item3.title"
  | "journey.graduating.item3.info"
  | "journey.graduating.item4.title"
  | "journey.graduating.item4.info"
  | "journey.graduating.item5.title"
  | "journey.graduating.item5.info"
  | "journey.graduating.item6.title"
  | "journey.graduating.item6.info"
;

export const translations: Record<LanguageCode, Record<TranslationKey, string>> = {
  en: {
    "nav.guides": "Guides",
    "nav.campus": "Campus",
    "nav.community": "Community",
    "hero.badge": "Built by international students",
    "hero.title": "Everything you need to thrive as an international student.",
    "hero.description": "From your admission letter to graduation, Campus Bridge helps international students navigate university life with trusted guides, local recommendations, and a supportive student community.",
    "hero.badge.supporting": "Currently supporting Kocaeli University",
    "hero.badge.comingSoon": "More universities coming soon",
    "hero.cta.primary": "Get started",
    "hero.cta.secondary": "Explore guides",
    "hero.trust": "Trusted by students building their future abroad.",
    "journey.title": "Where are you in your journey?",
    "journey.subtitle": "Choose your current stage and we'll guide you through the next steps.",
    "guides.badge": "Student guides",
    "guides.title": "Everything you need to know.",
    "guides.subtitle": "Practical guides written for international students at Kocaeli University.",
    "campus.badge": "Campus",
    "campus.title": "Kocaeli University & around town.",
    "campus.subtitle": "Everything about your campus and the city around it - buildings, services, and everyday essentials in one place.",
    "campus.map.title": "Kocaeli University, Umuttepe Campus",
    "community.badge": "Community",
    "community.title": "Meet other international students.",
    "community.subtitle": "Campus Bridge is more than guides - it's a place to connect, ask questions, and share what you know with other students at Kocaeli University.",
    "footer.tagline": "Everything international students need to navigate life at Kocaeli University, in one place.",
    "footer.rights": "Built for Kocaeli University students.",
    "footer.madeBy": "Made by a student, for students.",
    "notfound.title": "Page not found",
    "notfound.description": "The page you're looking for doesn't exist, or may have moved.",
    "notfound.home": "Back to home",
    "notfound.guides": "Browse guides",
    "guide.translationNotice": "This guide is currently only available in English to avoid translation errors in legal/procedural information.",
    "common.backToGuides": "Back to guides",
    "common.browseMoreGuides": "Browse more guides",
    "common.onThisPage": "On this page",
    "common.completed": "completed",
    "common.comingSoon": "Coming soon",
    "footer.section.guides": "Guides",
    "footer.section.explore": "Explore",
    "footer.link.residencePermit": "Residence Permit",
    "footer.link.allGuides": "All guides",
    "footer.link.campus": "Campus",
    "footer.link.community": "Community",
    "guideList.residencePermit.title": "Residence Permit",
    "guideList.residencePermit.description": "Everything you need to know about applying for your ikamet.",
    "guideList.simCards.title": "SIM Cards",
    "guideList.simCards.description": "Choose the best mobile provider and avoid common mistakes.",
    "guideList.transportation.title": "Transportation",
    "guideList.transportation.description": "Learn how buses, trams and Kocaeli Kart work in Kocaeli.",
    "guideList.accommodation.title": "Accommodation",
    "guideList.accommodation.description": "Dormitories, apartments and finding affordable housing.",
    "guideList.banking.title": "Banking",
    "guideList.banking.description": "Opening your first Turkish bank account as a student.",
    "guideList.foodGrocery.title": "Food & Grocery",
    "guideList.foodGrocery.description": "Affordable restaurants, supermarkets and student favorites.",
    "campus.category.buildings.title": "University buildings & faculties",
    "campus.category.buildings.description": "Find your faculty, department offices, and classrooms across campus.",
    "campus.category.library.title": "Library",
    "campus.category.library.description": "Opening hours, study rooms, and how to borrow books.",
    "campus.category.intlOffice.title": "International office",
    "campus.category.intlOffice.description": "Where it is and what they help with.",
    "campus.category.cafes.title": "Cafés & restaurants",
    "campus.category.cafes.description": "Places to eat on and around campus, from cheap eats to sit-down spots.",
    "campus.category.groceries.title": "Grocery stores",
    "campus.category.groceries.description": "Supermarkets and affordable grocery options nearby.",
    "campus.category.pharmacies.title": "Pharmacies & hospitals",
    "campus.category.pharmacies.description": "Where to get medicine and healthcare near campus.",
    "campus.category.atms.title": "ATMs & banks",
    "campus.category.atms.description": "Nearby ATMs and bank branches that work with student accounts.",
    "campus.category.mosques.title": "Mosques",
    "campus.category.mosques.description": "Places of worship in and around Kocaeli.",
    "campus.category.busStops.title": "Bus stops",
    "campus.category.busStops.description": "Key stops for getting around Kocaeli and to campus.",
    "community.feature.qa.title": "Student Q&A",
    "community.feature.qa.description": "Ask questions and get answers from students who've been through it.",
    "community.feature.discussions.title": "Discussions",
    "community.feature.discussions.description": "Open threads on housing, courses, visas, and everyday student life.",
    "community.feature.events.title": "Events",
    "community.feature.events.description": "Find and share student meetups, club activities, and campus events.",
    "community.feature.groups.title": "Student groups",
    "community.feature.groups.description": "Discover clubs and communities by interest, country, or department.",
    "community.feature.recommendations.title": "Recommendations",
    "community.feature.recommendations.description": "Crowd-sourced tips on restaurants, professors, and places to go.",
    "community.feature.marketplace.title": "Student marketplace",
    "community.feature.marketplace.description": "Buy, sell, or give away furniture, books, and essentials with other students.",
    "journey.accepted.title": "Accepted",
    "journey.accepted.description": "You've received your admission letter.",
    "journey.accepted.item1.title": "Accept your university offer",
    "journey.accepted.item1.info": "Confirm your admission before the deadline so you don't lose your place.",
    "journey.accepted.item2.title": "Apply for your student visa",
    "journey.accepted.item2.info": "Prepare all required documents and schedule your visa appointment as early as possible.",
    "journey.accepted.item3.title": "Gather all required documents",
    "journey.accepted.item3.info": "Passport, admission letter, transcripts, passport photos, and any required financial documents.",
    "journey.accepted.item4.title": "Book your flight",
    "journey.accepted.item4.info": "Compare airlines and try to book early for better prices.",
    "journey.accepted.item5.title": "Join your university's student groups",
    "journey.accepted.item5.info": "Look for WhatsApp, Discord, Telegram, or Facebook groups to connect with other students.",
    "journey.accepted.item6.title": "Start looking for accommodation",
    "journey.accepted.item6.info": "Research university dorms and private apartments before arriving.",
    "journey.preparing.title": "Preparing",
    "journey.preparing.description": "Getting ready to move abroad.",
    "journey.preparing.item1.title": "Prepare your luggage",
    "journey.preparing.item1.info": "Pack according to your airline's baggage allowance and don't forget adapters and medications.",
    "journey.preparing.item2.title": "Exchange some local currency",
    "journey.preparing.item2.info": "Carry enough local cash for transportation and food during your first few days.",
    "journey.preparing.item3.title": "Learn basic local phrases",
    "journey.preparing.item3.info": "Knowing simple greetings and questions will make settling in much easier.",
    "journey.preparing.item4.title": "Download important apps",
    "journey.preparing.item4.info": "Install maps, translation apps, transportation apps, and your university's official app.",
    "journey.preparing.item5.title": "Save emergency contacts",
    "journey.preparing.item5.info": "Keep important phone numbers like your embassy, university, and family easily accessible.",
    "journey.preparing.item6.title": "Double-check your travel documents",
    "journey.preparing.item6.info": "Make sure your passport, visa, tickets, and accommodation details are all ready.",
    "journey.arrived.title": "Just Arrived",
    "journey.arrived.description": "Settling into your new city.",
    "journey.arrived.item1.title": "Buy a SIM card",
    "journey.arrived.item1.info": "Visit an official mobile provider with your passport to get connected.",
    "journey.arrived.item2.title": "Apply for your residence permit",
    "journey.arrived.item2.info": "Check your country's requirements and book your appointment as soon as possible.",
    "journey.arrived.item3.title": "Open a bank account",
    "journey.arrived.item3.info": "Most banks require your passport, student ID, and proof of address.",
    "journey.arrived.item4.title": "Get a transportation card",
    "journey.arrived.item4.info": "Apply for a student transport card to save money on buses, trains, and metros.",
    "journey.arrived.item5.title": "Visit your university campus",
    "journey.arrived.item5.info": "Find your classrooms, library, cafeteria, and student services before classes begin.",
    "journey.arrived.item6.title": "Find nearby grocery stores",
    "journey.arrived.item6.info": "Locate supermarkets and affordable stores close to your accommodation.",
    "journey.studying.title": "Studying",
    "journey.studying.description": "Make the most of university life.",
    "journey.studying.item1.title": "Find previous exam papers",
    "journey.studying.item1.info": "Ask seniors or student clubs if previous exams are available for practice.",
    "journey.studying.item2.title": "Join study groups",
    "journey.studying.item2.info": "Studying with classmates can make difficult subjects much easier.",
    "journey.studying.item3.title": "Explore the library",
    "journey.studying.item3.info": "Learn how to borrow books, reserve study rooms, and access online resources.",
    "journey.studying.item4.title": "Meet your professors",
    "journey.studying.item4.info": "Introduce yourself during office hours and don't hesitate to ask questions.",
    "journey.studying.item5.title": "Look for internships",
    "journey.studying.item5.info": "Start building experience early through internships and university career fairs.",
    "journey.studying.item6.title": "Attend university events",
    "journey.studying.item6.info": "Join workshops, networking events, and student organizations to expand your network.",
    "journey.graduating.title": "Graduating",
    "journey.graduating.description": "Plan your next chapter.",
    "journey.graduating.item1.title": "Update your CV",
    "journey.graduating.item1.info": "Include your projects, internships, volunteer work, and university achievements.",
    "journey.graduating.item2.title": "Apply for internships or jobs",
    "journey.graduating.item2.info": "Use LinkedIn, university career portals, and company websites to find opportunities.",
    "journey.graduating.item3.title": "Network with alumni",
    "journey.graduating.item3.info": "Connect with graduates who may offer advice, referrals, or career opportunities.",
    "journey.graduating.item4.title": "Prepare graduation documents",
    "journey.graduating.item4.info": "Check that all academic requirements and paperwork are completed before graduation.",
    "journey.graduating.item5.title": "Plan your future visa status",
    "journey.graduating.item5.info": "Research work visas, post-study permits, or other legal options after graduation.",
    "journey.graduating.item6.title": "Celebrate your achievements",
    "journey.graduating.item6.info": "Take time to celebrate everything you've accomplished during your journey.",
  },
  tr: {
    "nav.guides": "Rehberler",
    "nav.campus": "Kampüs",
    "nav.community": "Topluluk",
    "hero.badge": "Uluslararası öğrenciler tarafından geliştirildi",
    "hero.title": "Uluslararası bir öğrenci olarak başarılı olmak için ihtiyacın olan her şey.",
    "hero.description": "Kabul mektubundan mezuniyete kadar, Campus Bridge uluslararası öğrencilerin üniversite hayatında güvenilir rehberler, yerel öneriler ve destekleyici bir öğrenci topluluğuyla yol almasına yardımcı olur.",
    "hero.badge.supporting": "Şu anda Kocaeli Üniversitesi'ni destekliyoruz",
    "hero.badge.comingSoon": "Daha fazla üniversite yakında",
    "hero.cta.primary": "Başla",
    "hero.cta.secondary": "Rehberleri keşfet",
    "hero.trust": "Yurt dışında geleceğini inşa eden öğrenciler tarafından güveniliyor.",
    "journey.title": "Yolculuğunun neresindesin?",
    "journey.subtitle": "Mevcut aşamanı seç, sana bir sonraki adımlarda rehberlik edelim.",
    "guides.badge": "Öğrenci rehberleri",
    "guides.title": "Bilmen gereken her şey.",
    "guides.subtitle": "Kocaeli Üniversitesi'ndeki uluslararası öğrenciler için hazırlanmış pratik rehberler.",
    "campus.badge": "Kampüs",
    "campus.title": "Kocaeli Üniversitesi ve şehir.",
    "campus.subtitle": "Kampüsün ve çevresindeki şehir hakkında her şey - binalar, hizmetler ve günlük ihtiyaçlar tek bir yerde.",
    "campus.map.title": "Kocaeli Üniversitesi, Umuttepe Kampüsü",
    "community.badge": "Topluluk",
    "community.title": "Diğer uluslararası öğrencilerle tanış.",
    "community.subtitle": "Campus Bridge rehberlerden daha fazlası - Kocaeli Üniversitesi'ndeki diğer öğrencilerle bağlantı kurabileceğin, soru sorabileceğin ve bilgi paylaşabileceğin bir yer.",
    "footer.tagline": "Kocaeli Üniversitesi'nde uluslararası öğrencilerin ihtiyaç duyduğu her şey, tek bir yerde.",
    "footer.rights": "Kocaeli Üniversitesi öğrencileri için geliştirildi.",
    "footer.madeBy": "Bir öğrenci tarafından, öğrenciler için yapıldı.",
    "notfound.title": "Sayfa bulunamadı",
    "notfound.description": "Aradığın sayfa mevcut değil veya taşınmış olabilir.",
    "notfound.home": "Ana sayfaya dön",
    "notfound.guides": "Rehberlere göz at",
    "guide.translationNotice": "Yasal/prosedürel bilgilerde çeviri hatalarını önlemek için bu rehber şu anda yalnızca İngilizce olarak mevcuttur.",
    "common.backToGuides": "Rehberlere dön",
    "common.browseMoreGuides": "Daha fazla rehbere göz at",
    "common.onThisPage": "Bu sayfada",
    "common.completed": "tamamlandı",
    "common.comingSoon": "Yakında",
    "footer.section.guides": "Rehberler",
    "footer.section.explore": "Keşfet",
    "footer.link.residencePermit": "İkamet İzni",
    "footer.link.allGuides": "Tüm rehberler",
    "footer.link.campus": "Kampüs",
    "footer.link.community": "Topluluk",
    "guideList.residencePermit.title": "İkamet İzni",
    "guideList.residencePermit.description": "İkamet izni başvurusu hakkında bilmen gereken her şey.",
    "guideList.simCards.title": "SIM Kartlar",
    "guideList.simCards.description": "En iyi mobil operatörü seç ve yaygın hatalardan kaçın.",
    "guideList.transportation.title": "Ulaşım",
    "guideList.transportation.description": "Kocaeli'de otobüs, tramvay ve Kocaeli Kart nasıl çalışır öğren.",
    "guideList.accommodation.title": "Konaklama",
    "guideList.accommodation.description": "Yurtlar, daireler ve uygun fiyatlı konaklama bulma.",
    "guideList.banking.title": "Bankacılık",
    "guideList.banking.description": "Öğrenci olarak ilk Türk banka hesabını açma.",
    "guideList.foodGrocery.title": "Yemek & Market",
    "guideList.foodGrocery.description": "Uygun fiyatlı restoranlar, marketler ve öğrenci favorileri.",
    "campus.category.buildings.title": "Üniversite binaları ve fakülteler",
    "campus.category.buildings.description": "Fakülteni, bölüm ofislerini ve derslikleri kampüste bul.",
    "campus.category.library.title": "Kütüphane",
    "campus.category.library.description": "Çalışma saatleri, çalışma odaları ve kitap ödünç alma.",
    "campus.category.intlOffice.title": "Uluslararası ofis",
    "campus.category.intlOffice.description": "Nerede olduğu ve nasıl yardımcı olduğu.",
    "campus.category.cafes.title": "Kafeler & restoranlar",
    "campus.category.cafes.description": "Kampüste ve çevresinde yemek yiyebileceğin yerler.",
    "campus.category.groceries.title": "Market",
    "campus.category.groceries.description": "Yakındaki süpermarketler ve uygun fiyatlı market seçenekleri.",
    "campus.category.pharmacies.title": "Eczaneler & hastaneler",
    "campus.category.pharmacies.description": "Kampüs yakınında ilaç ve sağlık hizmeti nereden alınır.",
    "campus.category.atms.title": "ATM'ler & bankalar",
    "campus.category.atms.description": "Öğrenci hesaplarıyla çalışan yakındaki ATM'ler ve banka şubeleri.",
    "campus.category.mosques.title": "Camiler",
    "campus.category.mosques.description": "Kocaeli ve çevresindeki ibadet yerleri.",
    "campus.category.busStops.title": "Otobüs durakları",
    "campus.category.busStops.description": "Kocaeli'de ve kampüse ulaşım için önemli duraklar.",
    "community.feature.qa.title": "Öğrenci Soru-Cevap",
    "community.feature.qa.description": "Bu süreçten geçmiş öğrencilerden soru sor ve cevap al.",
    "community.feature.discussions.title": "Tartışmalar",
    "community.feature.discussions.description": "Konaklama, dersler, vizeler ve günlük öğrenci hayatı üzerine açık konular.",
    "community.feature.events.title": "Etkinlikler",
    "community.feature.events.description": "Öğrenci buluşmalarını, kulüp etkinliklerini ve kampüs etkinliklerini bul ve paylaş.",
    "community.feature.groups.title": "Öğrenci grupları",
    "community.feature.groups.description": "İlgi alanına, ülkene veya bölümüne göre kulüpleri ve toplulukları keşfet.",
    "community.feature.recommendations.title": "Öneriler",
    "community.feature.recommendations.description": "Restoranlar, hocalar ve gidilecek yerler hakkında öğrenci önerileri.",
    "community.feature.marketplace.title": "Öğrenci pazarı",
    "community.feature.marketplace.description": "Diğer öğrencilerle eşya, kitap ve ihtiyaçlarını al, sat veya bağışla.",
    "journey.accepted.title": "Kabul Edildim",
    "journey.accepted.description": "Kabul mektubunu aldın.",
    "journey.accepted.item1.title": "Üniversite teklifini kabul et",
    "journey.accepted.item1.info": "Yerini kaybetmemek için son tarihten önce kaydını onayla.",
    "journey.accepted.item2.title": "Öğrenci vizesi için başvur",
    "journey.accepted.item2.info": "Gerekli tüm belgeleri hazırla ve vize randevunu mümkün olduğunca erken al.",
    "journey.accepted.item3.title": "Gerekli tüm belgeleri topla",
    "journey.accepted.item3.info": "Pasaport, kabul mektubu, transkriptler, vesikalık fotoğraflar ve gerekli mali belgeler.",
    "journey.accepted.item4.title": "Uçak biletini al",
    "journey.accepted.item4.info": "Havayollarını karşılaştır ve daha iyi fiyatlar için erken rezervasyon yap.",
    "journey.accepted.item5.title": "Üniversitenin öğrenci gruplarına katıl",
    "journey.accepted.item5.info": "Diğer öğrencilerle bağlantı kurmak için WhatsApp, Discord, Telegram veya Facebook gruplarını ara.",
    "journey.accepted.item6.title": "Konaklama aramaya başla",
    "journey.accepted.item6.info": "Gelmeden önce üniversite yurtlarını ve özel daireleri araştır.",
    "journey.preparing.title": "Hazırlanıyorum",
    "journey.preparing.description": "Yurt dışına taşınmaya hazırlanıyorsun.",
    "journey.preparing.item1.title": "Bavulunu hazırla",
    "journey.preparing.item1.info": "Havayolunun bagaj hakkına göre paketleme yap, adaptör ve ilaçları unutma.",
    "journey.preparing.item2.title": "Biraz yerel para bozdur",
    "journey.preparing.item2.info": "İlk günlerde ulaşım ve yemek için yeterli nakit yerel para bulundur.",
    "journey.preparing.item3.title": "Temel yerel ifadeleri öğren",
    "journey.preparing.item3.info": "Basit selamlaşma ve soruları bilmek yerleşmeni çok kolaylaştıracak.",
    "journey.preparing.item4.title": "Önemli uygulamaları indir",
    "journey.preparing.item4.info": "Harita, çeviri, ulaşım uygulamalarını ve üniversitenin resmi uygulamasını yükle.",
    "journey.preparing.item5.title": "Acil durum numaralarını kaydet",
    "journey.preparing.item5.info": "Büyükelçilik, üniversite ve aile gibi önemli numaraları kolay erişilebilir tut.",
    "journey.preparing.item6.title": "Seyahat belgelerini tekrar kontrol et",
    "journey.preparing.item6.info": "Pasaport, vize, bilet ve konaklama detaylarının hazır olduğundan emin ol.",
    "journey.arrived.title": "Yeni Geldim",
    "journey.arrived.description": "Yeni şehrine yerleşiyorsun.",
    "journey.arrived.item1.title": "SIM kart al",
    "journey.arrived.item1.info": "Bağlantı için pasaportunla resmi bir mobil operatöre git.",
    "journey.arrived.item2.title": "İkamet izni için başvur",
    "journey.arrived.item2.info": "Ülkenin gereksinimlerini kontrol et ve randevunu en kısa sürede al.",
    "journey.arrived.item3.title": "Banka hesabı aç",
    "journey.arrived.item3.info": "Çoğu banka pasaport, öğrenci kimliği ve adres belgesi ister.",
    "journey.arrived.item4.title": "Ulaşım kartı al",
    "journey.arrived.item4.info": "Otobüs, tren ve metroda tasarruf etmek için öğrenci ulaşım kartına başvur.",
    "journey.arrived.item5.title": "Üniversite kampüsünü ziyaret et",
    "journey.arrived.item5.info": "Dersler başlamadan önce sınıflarını, kütüphaneyi, kafeteryayı ve öğrenci hizmetlerini bul.",
    "journey.arrived.item6.title": "Yakındaki marketleri bul",
    "journey.arrived.item6.info": "Konaklamana yakın süpermarketleri ve uygun fiyatlı mağazaları belirle.",
    "journey.studying.title": "Ders Dönemi",
    "journey.studying.description": "Üniversite hayatından en iyi şekilde yararlan.",
    "journey.studying.item1.title": "Geçmiş sınav kağıtlarını bul",
    "journey.studying.item1.info": "Geçmiş sınavların mevcut olup olmadığını kıdemli öğrencilere veya kulüplere sor.",
    "journey.studying.item2.title": "Çalışma gruplarına katıl",
    "journey.studying.item2.info": "Sınıf arkadaşlarınla çalışmak zor konuları çok kolaylaştırabilir.",
    "journey.studying.item3.title": "Kütüphaneyi keşfet",
    "journey.studying.item3.info": "Kitap ödünç almayı, çalışma odası ayırmayı ve online kaynaklara erişmeyi öğren.",
    "journey.studying.item4.title": "Hocalarınla tanış",
    "journey.studying.item4.info": "Ofis saatlerinde kendini tanıt ve soru sormaktan çekinme.",
    "journey.studying.item5.title": "Staj imkanlarına bak",
    "journey.studying.item5.info": "Stajlar ve üniversite kariyer günleri ile erken deneyim kazanmaya başla.",
    "journey.studying.item6.title": "Üniversite etkinliklerine katıl",
    "journey.studying.item6.info": "Ağını genişletmek için atölyelere, networking etkinliklerine ve öğrenci kulüplerine katıl.",
    "journey.graduating.title": "Mezun Oluyorum",
    "journey.graduating.description": "Bir sonraki bölümünü planla.",
    "journey.graduating.item1.title": "CV'ni güncelle",
    "journey.graduating.item1.info": "Projelerini, stajlarını, gönüllü çalışmalarını ve üniversite başarılarını ekle.",
    "journey.graduating.item2.title": "Staj veya iş başvurusu yap",
    "journey.graduating.item2.info": "Fırsat bulmak için LinkedIn, üniversite kariyer portalları ve şirket sitelerini kullan.",
    "journey.graduating.item3.title": "Mezunlarla bağlantı kur",
    "journey.graduating.item3.info": "Tavsiye, referans veya kariyer fırsatı sunabilecek mezunlarla iletişime geç.",
    "journey.graduating.item4.title": "Mezuniyet belgelerini hazırla",
    "journey.graduating.item4.info": "Mezuniyetten önce tüm akademik gereksinimlerin ve evrakların tamamlandığından emin ol.",
    "journey.graduating.item5.title": "Gelecekteki vize durumunu planla",
    "journey.graduating.item5.info": "Mezuniyet sonrası çalışma vizelerini veya diğer yasal seçenekleri araştır.",
    "journey.graduating.item6.title": "Başarılarını kutla",
    "journey.graduating.item6.info": "Yolculuğun boyunca başardığın her şeyi kutlamak için zaman ayır.",
  },
  ar: {
    "nav.guides": "الأدلة",
    "nav.campus": "الحرم الجامعي",
    "nav.community": "المجتمع",
    "hero.badge": "بُني بواسطة طلاب دوليين",
    "hero.title": "كل ما تحتاجه لتزدهر كطالب دولي.",
    "hero.description": "من خطاب القبول وحتى التخرج، يساعدك Campus Bridge على التنقل في الحياة الجامعية من خلال أدلة موثوقة وتوصيات محلية ومجتمع طلابي داعم.",
    "hero.badge.supporting": "ندعم حالياً جامعة كوجالي",
    "hero.badge.comingSoon": "المزيد من الجامعات قريباً",
    "hero.cta.primary": "ابدأ الآن",
    "hero.cta.secondary": "استكشف الأدلة",
    "hero.trust": "موثوق من قبل الطلاب الذين يبنون مستقبلهم في الخارج.",
    "journey.title": "أين أنت في رحلتك؟",
    "journey.subtitle": "اختر مرحلتك الحالية وسنرشدك للخطوات التالية.",
    "guides.badge": "أدلة الطلاب",
    "guides.title": "كل ما تحتاج معرفته.",
    "guides.subtitle": "أدلة عملية مكتوبة للطلاب الدوليين في جامعة كوجالي.",
    "campus.badge": "الحرم الجامعي",
    "campus.title": "جامعة كوجالي والمدينة المحيطة.",
    "campus.subtitle": "كل ما يتعلق بحرمك الجامعي والمدينة المحيطة - المباني والخدمات والاحتياجات اليومية في مكان واحد.",
    "campus.map.title": "جامعة كوجالي، حرم أوموتتبه",
    "community.badge": "المجتمع",
    "community.title": "تعرف على طلاب دوليين آخرين.",
    "community.subtitle": "Campus Bridge أكثر من مجرد أدلة - إنه مكان للتواصل وطرح الأسئلة ومشاركة ما تعرفه مع طلاب آخرين في جامعة كوجالي.",
    "footer.tagline": "كل ما يحتاجه الطلاب الدوليون للتنقل في الحياة في جامعة كوجالي، في مكان واحد.",
    "footer.rights": "صُنع لطلاب جامعة كوجالي.",
    "footer.madeBy": "صُنع بواسطة طالب، من أجل الطلاب.",
    "notfound.title": "الصفحة غير موجودة",
    "notfound.description": "الصفحة التي تبحث عنها غير موجودة، أو ربما تم نقلها.",
    "notfound.home": "العودة للرئيسية",
    "notfound.guides": "تصفح الأدلة",
    "guide.translationNotice": "هذا الدليل متوفر حالياً باللغة الإنجليزية فقط لتجنب أخطاء الترجمة في المعلومات القانونية والإجرائية.",
    "common.backToGuides": "العودة إلى الأدلة",
    "common.browseMoreGuides": "تصفح المزيد من الأدلة",
    "common.onThisPage": "في هذه الصفحة",
    "common.completed": "مكتمل",
    "common.comingSoon": "قريباً",
    "footer.section.guides": "الأدلة",
    "footer.section.explore": "استكشف",
    "footer.link.residencePermit": "تصريح الإقامة",
    "footer.link.allGuides": "كل الأدلة",
    "footer.link.campus": "الحرم الجامعي",
    "footer.link.community": "المجتمع",
    "guideList.residencePermit.title": "تصريح الإقامة",
    "guideList.residencePermit.description": "كل ما تحتاج معرفته حول التقديم على الإقامة.",
    "guideList.simCards.title": "شرائح الاتصال",
    "guideList.simCards.description": "اختر أفضل مزود خدمة وتجنب الأخطاء الشائعة.",
    "guideList.transportation.title": "المواصلات",
    "guideList.transportation.description": "تعرف على كيفية عمل الحافلات والترام وبطاقة Kocaeli Kart.",
    "guideList.accommodation.title": "السكن",
    "guideList.accommodation.description": "السكن الجامعي والشقق وإيجاد سكن بأسعار معقولة.",
    "guideList.banking.title": "الخدمات المصرفية",
    "guideList.banking.description": "فتح أول حساب بنكي تركي كطالب.",
    "guideList.foodGrocery.title": "الطعام والبقالة",
    "guideList.foodGrocery.description": "مطاعم بأسعار معقولة ومتاجر بقالة ومفضلات الطلاب.",
    "campus.category.buildings.title": "المباني الجامعية والكليات",
    "campus.category.buildings.description": "ابحث عن كليتك ومكاتب القسم والقاعات الدراسية في الحرم الجامعي.",
    "campus.category.library.title": "المكتبة",
    "campus.category.library.description": "ساعات العمل وغرف الدراسة وكيفية استعارة الكتب.",
    "campus.category.intlOffice.title": "المكتب الدولي",
    "campus.category.intlOffice.description": "أين يقع وما الذي يساعد فيه.",
    "campus.category.cafes.title": "المقاهي والمطاعم",
    "campus.category.cafes.description": "أماكن لتناول الطعام داخل الحرم الجامعي وحوله.",
    "campus.category.groceries.title": "متاجر البقالة",
    "campus.category.groceries.description": "سوبر ماركت وخيارات بقالة بأسعار معقولة قريبة.",
    "campus.category.pharmacies.title": "الصيدليات والمستشفيات",
    "campus.category.pharmacies.description": "أين تحصل على الأدوية والرعاية الصحية بالقرب من الحرم الجامعي.",
    "campus.category.atms.title": "أجهزة الصراف الآلي والبنوك",
    "campus.category.atms.description": "أجهزة صراف آلي وفروع بنوك قريبة تعمل مع حسابات الطلاب.",
    "campus.category.mosques.title": "المساجد",
    "campus.category.mosques.description": "أماكن العبادة في كوجالي وما حولها.",
    "campus.category.busStops.title": "محطات الحافلات",
    "campus.category.busStops.description": "المحطات الرئيسية للتنقل في كوجالي والوصول إلى الحرم الجامعي.",
    "community.feature.qa.title": "أسئلة وأجوبة الطلاب",
    "community.feature.qa.description": "اطرح الأسئلة واحصل على إجابات من طلاب مروا بالتجربة.",
    "community.feature.discussions.title": "النقاشات",
    "community.feature.discussions.description": "مواضيع مفتوحة حول السكن والمقررات والتأشيرات وحياة الطالب اليومية.",
    "community.feature.events.title": "الفعاليات",
    "community.feature.events.description": "اكتشف وشارك لقاءات الطلاب وأنشطة النوادي وفعاليات الحرم الجامعي.",
    "community.feature.groups.title": "مجموعات الطلاب",
    "community.feature.groups.description": "اكتشف النوادي والمجتمعات حسب الاهتمام أو البلد أو القسم.",
    "community.feature.recommendations.title": "التوصيات",
    "community.feature.recommendations.description": "نصائح من الطلاب حول المطاعم والأساتذة والأماكن التي يجب زيارتها.",
    "community.feature.marketplace.title": "سوق الطلاب",
    "community.feature.marketplace.description": "بيع وشراء أو التبرع بالأثاث والكتب والأساسيات مع طلاب آخرين.",
    "journey.accepted.title": "تم القبول",
    "journey.accepted.description": "لقد استلمت خطاب القبول.",
    "journey.accepted.item1.title": "اقبل عرض الجامعة",
    "journey.accepted.item1.info": "أكد قبولك قبل الموعد النهائي حتى لا تفقد مكانك.",
    "journey.accepted.item2.title": "تقدم بطلب تأشيرة الطالب",
    "journey.accepted.item2.info": "جهز جميع المستندات المطلوبة واحجز موعد التأشيرة في أقرب وقت ممكن.",
    "journey.accepted.item3.title": "اجمع جميع المستندات المطلوبة",
    "journey.accepted.item3.info": "جواز السفر، خطاب القبول، الشهادات، الصور الشخصية، وأي مستندات مالية مطلوبة.",
    "journey.accepted.item4.title": "احجز رحلة طيرانك",
    "journey.accepted.item4.info": "قارن شركات الطيران وحاول الحجز مبكراً للحصول على أسعار أفضل.",
    "journey.accepted.item5.title": "انضم لمجموعات طلاب جامعتك",
    "journey.accepted.item5.info": "ابحث عن مجموعات واتساب أو ديسكورد أو تيليجرام أو فيسبوك للتواصل مع طلاب آخرين.",
    "journey.accepted.item6.title": "ابدأ البحث عن سكن",
    "journey.accepted.item6.info": "ابحث عن السكن الجامعي والشقق الخاصة قبل الوصول.",
    "journey.preparing.title": "التحضير",
    "journey.preparing.description": "تستعد للانتقال إلى الخارج.",
    "journey.preparing.item1.title": "جهز أمتعتك",
    "journey.preparing.item1.info": "احزم حسب مسموحات الأمتعة لشركة الطيران ولا تنس المحولات والأدوية.",
    "journey.preparing.item2.title": "اصرف بعض العملة المحلية",
    "journey.preparing.item2.info": "احمل نقداً محلياً كافياً للمواصلات والطعام في الأيام الأولى.",
    "journey.preparing.item3.title": "تعلم بعض العبارات المحلية الأساسية",
    "journey.preparing.item3.info": "معرفة التحيات والأسئلة البسيطة ستجعل الاستقرار أسهل بكثير.",
    "journey.preparing.item4.title": "نزّل التطبيقات المهمة",
    "journey.preparing.item4.info": "ثبت تطبيقات الخرائط والترجمة والمواصلات وتطبيق جامعتك الرسمي.",
    "journey.preparing.item5.title": "احفظ أرقام الطوارئ",
    "journey.preparing.item5.info": "احتفظ بأرقام مهمة مثل السفارة والجامعة والعائلة في متناول يدك.",
    "journey.preparing.item6.title": "تأكد مرة أخرى من مستندات السفر",
    "journey.preparing.item6.info": "تأكد من جاهزية جواز السفر والتأشيرة والتذاكر وتفاصيل السكن.",
    "journey.arrived.title": "وصلت للتو",
    "journey.arrived.description": "تستقر في مدينتك الجديدة.",
    "journey.arrived.item1.title": "اشترِ شريحة اتصال",
    "journey.arrived.item1.info": "قم بزيارة مزود خدمة رسمي مع جواز سفرك للاتصال.",
    "journey.arrived.item2.title": "تقدم بطلب تصريح الإقامة",
    "journey.arrived.item2.info": "تحقق من متطلبات بلدك واحجز موعدك في أقرب وقت ممكن.",
    "journey.arrived.item3.title": "افتح حساباً بنكياً",
    "journey.arrived.item3.info": "معظم البنوك تطلب جواز السفر وهوية الطالب وإثبات العنوان.",
    "journey.arrived.item4.title": "احصل على بطاقة مواصلات",
    "journey.arrived.item4.info": "تقدم ببطاقة نقل للطلاب لتوفير المال على الحافلات والقطارات والمترو.",
    "journey.arrived.item5.title": "قم بزيارة حرم جامعتك",
    "journey.arrived.item5.info": "اعثر على قاعاتك ومكتبتك وكافتيريا وخدمات الطلاب قبل بدء الدراسة.",
    "journey.arrived.item6.title": "ابحث عن متاجر البقالة القريبة",
    "journey.arrived.item6.info": "حدد مواقع السوبر ماركت والمتاجر بأسعار معقولة قريبة من سكنك.",
    "journey.studying.title": "الدراسة",
    "journey.studying.description": "استفد أقصى استفادة من الحياة الجامعية.",
    "journey.studying.item1.title": "ابحث عن أوراق امتحانات سابقة",
    "journey.studying.item1.info": "اسأل الطلاب الأقدم أو النوادي الطلابية عن توفر امتحانات سابقة للتدرب.",
    "journey.studying.item2.title": "انضم لمجموعات دراسية",
    "journey.studying.item2.info": "الدراسة مع زملائك يمكن أن تجعل المواد الصعبة أسهل بكثير.",
    "journey.studying.item3.title": "استكشف المكتبة",
    "journey.studying.item3.info": "تعلم كيفية استعارة الكتب وحجز غرف الدراسة والوصول للموارد الإلكترونية.",
    "journey.studying.item4.title": "تعرف على أساتذتك",
    "journey.studying.item4.info": "قدم نفسك خلال الساعات المكتبية ولا تتردد في طرح الأسئلة.",
    "journey.studying.item5.title": "ابحث عن فرص التدريب",
    "journey.studying.item5.info": "ابدأ ببناء خبرتك مبكراً من خلال التدريب ومعارض التوظيف الجامعية.",
    "journey.studying.item6.title": "احضر فعاليات الجامعة",
    "journey.studying.item6.info": "انضم لورش العمل وفعاليات التواصل والمنظمات الطلابية لتوسيع شبكتك.",
    "journey.graduating.title": "التخرج",
    "journey.graduating.description": "خطط لفصلك القادم.",
    "journey.graduating.item1.title": "حدّث سيرتك الذاتية",
    "journey.graduating.item1.info": "أضف مشاريعك وتدريباتك وعملك التطوعي وإنجازاتك الجامعية.",
    "journey.graduating.item2.title": "تقدم لتدريب أو وظائف",
    "journey.graduating.item2.info": "استخدم لينكدإن وبوابات التوظيف الجامعية ومواقع الشركات لإيجاد فرص.",
    "journey.graduating.item3.title": "تواصل مع الخريجين",
    "journey.graduating.item3.info": "تواصل مع خريجين قد يقدمون نصائح أو توصيات أو فرص وظيفية.",
    "journey.graduating.item4.title": "جهز مستندات التخرج",
    "journey.graduating.item4.info": "تأكد من إكمال جميع المتطلبات الأكاديمية والأوراق قبل التخرج.",
    "journey.graduating.item5.title": "خطط لوضعك المستقبلي للتأشيرة",
    "journey.graduating.item5.info": "ابحث عن تأشيرات العمل أو تصاريح ما بعد الدراسة أو الخيارات القانونية الأخرى بعد التخرج.",
    "journey.graduating.item6.title": "احتفل بإنجازاتك",
    "journey.graduating.item6.info": "خذ وقتاً للاحتفال بكل ما أنجزته خلال رحلتك.",
  },
  ru: {
    "nav.guides": "Гиды",
    "nav.campus": "Кампус",
    "nav.community": "Сообщество",
    "hero.badge": "Создано иностранными студентами",
    "hero.title": "Всё необходимое для успешной учёбы иностранному студенту.",
    "hero.description": "От письма о зачислении до выпуска — Campus Bridge помогает иностранным студентам ориентироваться в университетской жизни с помощью надёжных гидов, местных рекомендаций и поддерживающего студенческого сообщества.",
    "hero.badge.supporting": "Сейчас поддерживаем Университет Коджаэли",
    "hero.badge.comingSoon": "Другие университеты скоро",
    "hero.cta.primary": "Начать",
    "hero.cta.secondary": "Смотреть гиды",
    "hero.trust": "Нам доверяют студенты, строящие своё будущее за рубежом.",
    "journey.title": "На каком этапе вы находитесь?",
    "journey.subtitle": "Выберите свой текущий этап, и мы проведём вас через следующие шаги.",
    "guides.badge": "Гиды для студентов",
    "guides.title": "Всё, что нужно знать.",
    "guides.subtitle": "Практические гиды для иностранных студентов Университета Коджаэли.",
    "campus.badge": "Кампус",
    "campus.title": "Университет Коджаэли и город.",
    "campus.subtitle": "Всё о вашем кампусе и городе вокруг — здания, услуги и повседневные нужды в одном месте.",
    "campus.map.title": "Университет Коджаэли, кампус Умуттепе",
    "community.badge": "Сообщество",
    "community.title": "Познакомьтесь с другими иностранными студентами.",
    "community.subtitle": "Campus Bridge — это больше, чем гиды: место для общения, вопросов и обмена знаниями с другими студентами Университета Коджаэли.",
    "footer.tagline": "Всё, что нужно иностранным студентам в Университете Коджаэли, в одном месте.",
    "footer.rights": "Создано для студентов Университета Коджаэли.",
    "footer.madeBy": "Сделано студентом для студентов.",
    "notfound.title": "Страница не найдена",
    "notfound.description": "Страница, которую вы ищете, не существует или была перемещена.",
    "notfound.home": "На главную",
    "notfound.guides": "Смотреть гиды",
    "guide.translationNotice": "Этот гид пока доступен только на английском языке, чтобы избежать ошибок перевода юридической информации.",
    "common.backToGuides": "Назад к гидам",
    "common.browseMoreGuides": "Смотреть другие гиды",
    "common.onThisPage": "На этой странице",
    "common.completed": "выполнено",
    "common.comingSoon": "Скоро",
    "footer.section.guides": "Гиды",
    "footer.section.explore": "Разделы",
    "footer.link.residencePermit": "Вид на жительство",
    "footer.link.allGuides": "Все гиды",
    "footer.link.campus": "Кампус",
    "footer.link.community": "Сообщество",
    "guideList.residencePermit.title": "Вид на жительство",
    "guideList.residencePermit.description": "Всё, что нужно знать об оформлении вида на жительство.",
    "guideList.simCards.title": "SIM-карты",
    "guideList.simCards.description": "Выберите лучшего оператора и избегайте частых ошибок.",
    "guideList.transportation.title": "Транспорт",
    "guideList.transportation.description": "Как работают автобусы, трамвай и карта Kocaeli Kart.",
    "guideList.accommodation.title": "Жильё",
    "guideList.accommodation.description": "Общежития, квартиры и поиск доступного жилья.",
    "guideList.banking.title": "Банкинг",
    "guideList.banking.description": "Открытие первого турецкого банковского счёта студентом.",
    "guideList.foodGrocery.title": "Еда и продукты",
    "guideList.foodGrocery.description": "Доступные рестораны, магазины и любимые места студентов.",
    "campus.category.buildings.title": "Здания университета и факультеты",
    "campus.category.buildings.description": "Найдите свой факультет, деканат и аудитории в кампусе.",
    "campus.category.library.title": "Библиотека",
    "campus.category.library.description": "Часы работы, учебные комнаты и как брать книги.",
    "campus.category.intlOffice.title": "Международный отдел",
    "campus.category.intlOffice.description": "Где он находится и чем помогает.",
    "campus.category.cafes.title": "Кафе и рестораны",
    "campus.category.cafes.description": "Места поесть в кампусе и рядом с ним.",
    "campus.category.groceries.title": "Продуктовые магазины",
    "campus.category.groceries.description": "Супермаркеты и доступные продуктовые варианты поблизости.",
    "campus.category.pharmacies.title": "Аптеки и больницы",
    "campus.category.pharmacies.description": "Где получить лекарства и медицинскую помощь рядом с кампусом.",
    "campus.category.atms.title": "Банкоматы и банки",
    "campus.category.atms.description": "Ближайшие банкоматы и отделения банков для студенческих счетов.",
    "campus.category.mosques.title": "Мечети",
    "campus.category.mosques.description": "Места поклонения в Коджаэли и окрестностях.",
    "campus.category.busStops.title": "Автобусные остановки",
    "campus.category.busStops.description": "Основные остановки для передвижения по Коджаэли и до кампуса.",
    "community.feature.qa.title": "Вопросы и ответы",
    "community.feature.qa.description": "Задавайте вопросы и получайте ответы от студентов, которые уже прошли через это.",
    "community.feature.discussions.title": "Обсуждения",
    "community.feature.discussions.description": "Открытые темы о жилье, курсах, визах и повседневной студенческой жизни.",
    "community.feature.events.title": "Мероприятия",
    "community.feature.events.description": "Находите и делитесь встречами студентов, активностями клубов и событиями кампуса.",
    "community.feature.groups.title": "Студенческие группы",
    "community.feature.groups.description": "Находите клубы и сообщества по интересам, стране или специальности.",
    "community.feature.recommendations.title": "Рекомендации",
    "community.feature.recommendations.description": "Советы студентов о ресторанах, преподавателях и местах для посещения.",
    "community.feature.marketplace.title": "Студенческий маркетплейс",
    "community.feature.marketplace.description": "Покупайте, продавайте или отдавайте мебель, книги и необходимые вещи другим студентам.",
    "journey.accepted.title": "Зачислен(а)",
    "journey.accepted.description": "Вы получили письмо о зачислении.",
    "journey.accepted.item1.title": "Подтвердите предложение университета",
    "journey.accepted.item1.info": "Подтвердите зачисление до дедлайна, чтобы не потерять место.",
    "journey.accepted.item2.title": "Подайте на студенческую визу",
    "journey.accepted.item2.info": "Подготовьте все документы и запишитесь на визу как можно раньше.",
    "journey.accepted.item3.title": "Соберите все необходимые документы",
    "journey.accepted.item3.info": "Паспорт, письмо о зачислении, транскрипты, фото и необходимые финансовые документы.",
    "journey.accepted.item4.title": "Забронируйте авиабилет",
    "journey.accepted.item4.info": "Сравните авиакомпании и бронируйте заранее для лучших цен.",
    "journey.accepted.item5.title": "Присоединитесь к студенческим группам университета",
    "journey.accepted.item5.info": "Ищите группы в WhatsApp, Discord, Telegram или Facebook для общения с другими студентами.",
    "journey.accepted.item6.title": "Начните искать жильё",
    "journey.accepted.item6.info": "Изучите университетские общежития и частные квартиры до приезда.",
    "journey.preparing.title": "Подготовка",
    "journey.preparing.description": "Готовитесь к переезду за границу.",
    "journey.preparing.item1.title": "Соберите багаж",
    "journey.preparing.item1.info": "Упакуйте вещи согласно нормам авиакомпании, не забудьте переходники и лекарства.",
    "journey.preparing.item2.title": "Обменяйте немного местной валюты",
    "journey.preparing.item2.info": "Возьмите достаточно наличных на транспорт и еду в первые дни.",
    "journey.preparing.item3.title": "Выучите базовые местные фразы",
    "journey.preparing.item3.info": "Знание простых приветствий и вопросов сильно облегчит адаптацию.",
    "journey.preparing.item4.title": "Скачайте важные приложения",
    "journey.preparing.item4.info": "Установите карты, переводчик, транспортные приложения и официальное приложение университета.",
    "journey.preparing.item5.title": "Сохраните контакты экстренных служб",
    "journey.preparing.item5.info": "Держите под рукой важные номера: посольство, университет, семья.",
    "journey.preparing.item6.title": "Перепроверьте документы для поездки",
    "journey.preparing.item6.info": "Убедитесь, что паспорт, виза, билеты и данные о жилье готовы.",
    "journey.arrived.title": "Только приехал(а)",
    "journey.arrived.description": "Обустраиваетесь в новом городе.",
    "journey.arrived.item1.title": "Купите SIM-карту",
    "journey.arrived.item1.info": "Посетите официального оператора с паспортом, чтобы подключиться.",
    "journey.arrived.item2.title": "Подайте на вид на жительство",
    "journey.arrived.item2.info": "Проверьте требования для вашей страны и запишитесь на приём как можно скорее.",
    "journey.arrived.item3.title": "Откройте банковский счёт",
    "journey.arrived.item3.info": "Большинству банков нужен паспорт, студенческий билет и подтверждение адреса.",
    "journey.arrived.item4.title": "Получите транспортную карту",
    "journey.arrived.item4.info": "Оформите студенческую транспортную карту для экономии на автобусах, поездах и метро.",
    "journey.arrived.item5.title": "Посетите кампус университета",
    "journey.arrived.item5.info": "Найдите аудитории, библиотеку, столовую и студенческие службы до начала занятий.",
    "journey.arrived.item6.title": "Найдите ближайшие продуктовые магазины",
    "journey.arrived.item6.info": "Определите супермаркеты и доступные магазины рядом с вашим жильём.",
    "journey.studying.title": "Учёба",
    "journey.studying.description": "Извлеките максимум из университетской жизни.",
    "journey.studying.item1.title": "Найдите прошлые экзаменационные билеты",
    "journey.studying.item1.info": "Спросите старшекурсников или клубы, есть ли доступные прошлые экзамены для практики.",
    "journey.studying.item2.title": "Присоединитесь к учебным группам",
    "journey.studying.item2.info": "Учёба с одногруппниками может значительно облегчить сложные предметы.",
    "journey.studying.item3.title": "Изучите библиотеку",
    "journey.studying.item3.info": "Узнайте, как брать книги, бронировать учебные комнаты и получать доступ к онлайн-ресурсам.",
    "journey.studying.item4.title": "Познакомьтесь с преподавателями",
    "journey.studying.item4.info": "Представьтесь на приёмных часах и не стесняйтесь задавать вопросы.",
    "journey.studying.item5.title": "Ищите стажировки",
    "journey.studying.item5.info": "Начните набираться опыта заранее через стажировки и карьерные ярмарки университета.",
    "journey.studying.item6.title": "Посещайте мероприятия университета",
    "journey.studying.item6.info": "Посещайте мастер-классы, networking-мероприятия и студенческие организации, чтобы расширить круг знакомств.",
    "journey.graduating.title": "Выпуск",
    "journey.graduating.description": "Планируйте следующую главу.",
    "journey.graduating.item1.title": "Обновите резюме",
    "journey.graduating.item1.info": "Добавьте проекты, стажировки, волонтёрство и достижения в университете.",
    "journey.graduating.item2.title": "Подайте заявки на стажировки или работу",
    "journey.graduating.item2.info": "Используйте LinkedIn, карьерные порталы университета и сайты компаний для поиска возможностей.",
    "journey.graduating.item3.title": "Наладьте контакты с выпускниками",
    "journey.graduating.item3.info": "Свяжитесь с выпускниками, которые могут дать совет, рекомендацию или предложить работу.",
    "journey.graduating.item4.title": "Подготовьте документы к выпуску",
    "journey.graduating.item4.info": "Проверьте, что все академические требования и документы выполнены до выпуска.",
    "journey.graduating.item5.title": "Спланируйте будущий визовый статус",
    "journey.graduating.item5.info": "Изучите рабочие визы, разрешения после учёбы или другие законные варианты после выпуска.",
    "journey.graduating.item6.title": "Отпразднуйте свои достижения",
    "journey.graduating.item6.info": "Найдите время, чтобы отпраздновать всё, чего вы достигли за время учёбы.",
  },
};
