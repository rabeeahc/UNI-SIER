import type { GuideContent } from "../../types/guideContent";

export const simCardsContent: Record<"en" | "tr" | "ar" | "ru", GuideContent> = {
  "en": {
    "badgeLabel": "SIM cards guide",
    "heroTitle": "SIM cards",
    "heroDescription": "Getting connected is usually one of the first things you'll want to do after arriving. Here's what to know before you buy a SIM card in Türkiye.",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "paragraphs": [
          "Türkiye has three main mobile operators: Turkcell, Vodafone, and Türk Telekom. All three cover Kocaeli and offer prepaid plans that work well for students. You'll need your passport to buy a SIM card — it's required by law for registration."
        ]
      },
      {
        "id": "providers",
        "title": "Choosing a provider",
        "list": {
          "type": "ul",
          "items": [
            "Turkcell — generally has the strongest and widest coverage nationwide, including outside major cities. Usually the most expensive of the three.",
            "Vodafone — strong coverage in cities, competitive pricing, and plans that often include international minutes.",
            "Türk Telekom — typically the most budget-friendly option, with solid coverage in cities like Kocaeli, though somewhat less extensive in rural areas."
          ]
        },
        "paragraphs": [
          "For most students living in and around Kocaeli city and campus, any of the three will work well — price and any promotional student deals in-store are often the deciding factor."
        ]
      },
      {
        "id": "getting-sim",
        "title": "Getting your SIM",
        "list": {
          "type": "ol",
          "items": [
            "Bring your passport — you cannot register a SIM card without it.",
            "Go to an official operator store (avoid unofficial resellers) — look for Turkcell, Vodafone, or Türk Telekom branded shops in the city center, which are typically cheaper than airport kiosks.",
            "Ask about prepaid (\"faturasız\") plans aimed at monthly renewal, rather than tourist packages meant for short visits.",
            "Activation is usually quick, though it can occasionally take up to an hour depending on the store and network load."
          ]
        }
      },
      {
        "id": "imei",
        "title": "IMEI registration warning",
        "paragraphs": [
          "This is one of the most important things to know before you rely on a phone you brought from another country: Türkiye requires foreign-registered phones to be registered with the government (via the BTK/e-Devlet system) after a grace period — commonly 120 days from when you first activate a Turkish SIM in the device, sometimes extendable.",
          "After that grace period, an unregistered foreign phone is blocked from all Turkish networks entirely, regardless of which SIM card is inside it. The registration fee is substantial — it changed to roughly 54,000+ TL for 2026, and it's adjusted every year — so this isn't a minor inconvenience to plan around casually.",
          "Check your device's remaining grace period and current fees at turkiye.gov.tr (e-Devlet) well before you expect to hit the deadline."
        ]
      },
      {
        "id": "tips",
        "title": "Helpful tips",
        "list": {
          "type": "ul",
          "items": [
            "Buy in the city, not the airport — airport SIM kiosks are usually significantly more expensive.",
            "Dial *#06# on your phone to find your IMEI number if you need to check your registration status.",
            "Keep track of the date you first activated a Turkish SIM — that's when your registration clock starts.",
            "If you plan to stay long-term, weigh the IMEI registration fee against the cost of simply buying a Turkish-market phone."
          ]
        }
      },
      {
        "id": "faq",
        "title": "FAQ",
        "faq": [
          {
            "question": "Can I use an eSIM instead?",
            "answer": "All three major operators support eSIM. Some travelers use eSIM/physical SIM slot-switching to extend usable time on an unregistered phone, but this has faced tightening enforcement — don't rely on it as a long-term plan."
          },
          {
            "question": "Does my residence permit affect getting a SIM card?",
            "answer": "No — a passport is generally enough to register a prepaid SIM. You don't need your residence permit card to buy one."
          }
        ]
      }
    ],
    "sourceNoteText": "Prices, fees, and registration rules change often. Always confirm current details with the operator directly or at",
    "sourceLinks": [
      {
        "label": "btk.gov.tr",
        "href": "https://www.btk.gov.tr"
      }
    ]
  },
  "tr": {
    "badgeLabel": "SIM kart rehberi",
    "heroTitle": "SIM kartlar",
    "heroDescription": "Bağlantı kurmak genellikle geldikten sonra yapmak isteyeceğiniz ilk şeylerden biridir. Türkiye'de SIM kart almadan önce bilmeniz gerekenler.",
    "sections": [
      {
        "id": "overview",
        "title": "Genel Bakış",
        "paragraphs": [
          "Türkiye'nin üç ana mobil operatörü vardır: Turkcell, Vodafone ve Türk Telekom. Üçü de Kocaeli'yi kapsar ve öğrenciler için iyi çalışan ön ödemeli planlar sunar. SIM kart almak için pasaportunuza ihtiyacınız olacak - kayıt için yasal olarak zorunludur."
        ]
      },
      {
        "id": "providers",
        "title": "Operatör Seçimi",
        "list": {
          "type": "ul",
          "items": [
            "Turkcell — genellikle büyük şehirler dışında da ülke genelinde en güçlü ve en geniş kapsama alanına sahiptir. Genellikle üçü arasında en pahalısıdır.",
            "Vodafone — şehirlerde güçlü kapsama, rekabetçi fiyatlandırma ve genellikle uluslararası dakika içeren planlar.",
            "Türk Telekom — genellikle en uygun fiyatlı seçenektir, Kocaeli gibi şehirlerde sağlam kapsama alanına sahiptir, ancak kırsal alanlarda biraz daha sınırlıdır."
          ]
        },
        "paragraphs": [
          "Kocaeli şehri ve kampüsü çevresinde yaşayan çoğu öğrenci için üçü de iyi çalışacaktır - fiyat ve mağaza içi promosyon öğrenci fırsatları genellikle belirleyici faktördür."
        ]
      },
      {
        "id": "getting-sim",
        "title": "SIM Kartınızı Alma",
        "list": {
          "type": "ol",
          "items": [
            "Pasaportunuzu getirin - onsuz SIM kart kaydedemezsiniz.",
            "Resmi bir operatör mağazasına gidin (yetkisiz satıcılardan kaçının) - havaalanı kiosklarından genellikle daha ucuz olan şehir merkezindeki Turkcell, Vodafone veya Türk Telekom markalı mağazaları arayın.",
            "Kısa ziyaretler için tasarlanmış turist paketleri yerine aylık yenilemeye yönelik ön ödemeli (\"faturasız\") planları sorun.",
            "Aktivasyon genellikle hızlıdır, ancak mağazaya ve şebeke yüküne bağlı olarak bazen bir saate kadar sürebilir."
          ]
        }
      },
      {
        "id": "imei",
        "title": "IMEI Kayıt Uyarısı",
        "paragraphs": [
          "Başka bir ülkeden getirdiğiniz bir telefona güvenmeden önce bilmeniz gereken en önemli şeylerden biri şudur: Türkiye, yabancı kayıtlı telefonların bir sonra hükümete (BTK/e-Devlet sistemi üzerinden) kaydedilmesini gerektirir - genellikle cihazda ilk kez bir Türk SIM'i etkinleştirdiğinizden itibaren 120 gün, bazen uzatılabilir.",
          "Bu süre sonrasında, kaydedilmemiş yabancı bir telefon, içindeki SIM kart ne olursa olsun tüm Türk şebekelerinden tamamen engellenir. Kayıt ücreti önemlidir - 2026 için yaklaşık 54.000+ TL'ye değişti ve her yıl güncellenir - bu yüzden bu, gelişigüzel planlanacak küçük bir rahatsızlık değildir.",
          "Cihazınızın kalan süresini ve güncel ücretleri son tarihe gelmeden çok önce turkiye.gov.tr (e-Devlet) üzerinden kontrol edin."
        ]
      },
      {
        "id": "tips",
        "title": "Faydalı İpuçları",
        "list": {
          "type": "ul",
          "items": [
            "Havaalanında değil, şehirde satın alın - havaalanı SIM kioskları genellikle çok daha pahalıdır.",
            "Kayıt durumunuzu kontrol etmeniz gerekiyorsa IMEI numaranızı bulmak için telefonunuzda *#06#'yı arayın.",
            "Türk SIM'inizi ilk kez ne zaman etkinleştirdiğinizi takip edin - kayıt sayacınız o zaman başlar.",
            "Uzun süre kalmayı planlıyorsanız, IMEI kayıt ücretini basitçe Türkiye pazarından bir telefon satın almanın maliyetiyle karşılaştırın."
          ]
        }
      },
      {
        "id": "faq",
        "title": "Sıkça Sorulan Sorular",
        "faq": [
          {
            "question": "Bunun yerine eSIM kullanabilir miyim?",
            "answer": "Üç büyük operatör de eSIM'i destekler. Bazı gezginler, kayıtsız bir telefonda kullanılabilir süreyi uzatmak için eSIM/fiziksel SIM yuvası değiştirme yöntemini kullanır, ancak bu konuda denetim sıkılaştırılmıştır - bunu uzun vadeli bir plan olarak görmeyin."
          },
          {
            "question": "İkamet iznim SIM kart almamı etkiler mi?",
            "answer": "Hayır - ön ödemeli bir SIM kaydetmek için genellikle bir pasaport yeterlidir. Almak için ikamet izni kartınıza ihtiyacınız yoktur."
          }
        ]
      }
    ],
    "sourceNoteText": "Fiyatlar, ücretler ve kayıt kuralları sık sık değişir. Güncel detayları her zaman doğrudan operatörle veya şu adresle teyit edin:",
    "sourceLinks": [
      {
        "label": "btk.gov.tr",
        "href": "https://www.btk.gov.tr"
      }
    ]
  },
  "ar": {
    "badgeLabel": "دليل شرائح الاتصال",
    "heroTitle": "شرائح الاتصال",
    "heroDescription": "الاتصال بالإنترنت عادة من أول الأشياء التي ستريد القيام بها بعد الوصول. إليك ما يجب معرفته قبل شراء شريحة اتصال في تركيا.",
    "sections": [
      {
        "id": "overview",
        "title": "نظرة عامة",
        "paragraphs": [
          "تمتلك تركيا ثلاثة مشغلي هاتف محمول رئيسيين: Turkcell وVodafone وTürk Telekom. تغطي الثلاثة كوجالي وتقدم باقات مدفوعة مسبقاً تناسب الطلاب. ستحتاج إلى جواز سفرك لشراء شريحة اتصال - وهذا مطلوب قانونياً للتسجيل."
        ]
      },
      {
        "id": "providers",
        "title": "اختيار مزود الخدمة",
        "list": {
          "type": "ul",
          "items": [
            "Turkcell - يتمتع عموماً بأقوى وأوسع تغطية على مستوى البلاد، بما في ذلك خارج المدن الكبرى. عادة ما يكون الأغلى بين الثلاثة.",
            "Vodafone - تغطية قوية في المدن، وأسعار تنافسية، وباقات غالباً ما تشمل دقائق دولية.",
            "Türk Telekom - عادة ما يكون الخيار الأكثر ملاءمة للميزانية، مع تغطية جيدة في مدن مثل كوجالي، رغم أنه أقل انتشاراً في المناطق الريفية."
          ]
        },
        "paragraphs": [
          "بالنسبة لمعظم الطلاب الذين يعيشون في وحول مدينة كوجالي والحرم الجامعي، ستعمل أي من الثلاثة بشكل جيد - غالباً ما يكون السعر وأي عروض ترويجية للطلاب داخل المتجر هو العامل الحاسم."
        ]
      },
      {
        "id": "getting-sim",
        "title": "الحصول على شريحتك",
        "list": {
          "type": "ol",
          "items": [
            "أحضر جواز سفرك - لا يمكنك تسجيل شريحة اتصال بدونه.",
            "اذهب إلى متجر رسمي للمشغل (تجنب البائعين غير الرسميين) - ابحث عن متاجر Turkcell أو Vodafone أو Türk Telekom في وسط المدينة، والتي عادة ما تكون أرخص من أكشاك المطار.",
            "اسأل عن باقات الدفع المسبق (\"faturasız\") الموجهة للتجديد الشهري، بدلاً من الباقات السياحية المخصصة للزيارات القصيرة.",
            "التفعيل عادة سريع، رغم أنه قد يستغرق أحياناً حتى ساعة حسب المتجر وضغط الشبكة."
          ]
        }
      },
      {
        "id": "imei",
        "title": "تحذير تسجيل IMEI",
        "paragraphs": [
          "هذا أحد أهم الأشياء التي يجب معرفتها قبل الاعتماد على هاتف أحضرته من بلد آخر: تتطلب تركيا تسجيل الهواتف المسجلة في الخارج لدى الحكومة (عبر نظام BTK/e-Devlet) بعد فترة سماح - عادة 120 يوماً من أول تفعيل لشريحة تركية في الجهاز، وقد تكون قابلة للتمديد أحياناً.",
          "بعد فترة السماح هذه، يُحظر الهاتف الأجنبي غير المسجل تماماً من جميع الشبكات التركية، بغض النظر عن الشريحة الموجودة بداخله. رسوم التسجيل كبيرة - تغيرت إلى ما يقارب 54,000+ ليرة تركية لعام 2026، ويتم تعديلها كل عام - لذا فهذا ليس إزعاجاً بسيطاً يمكن التخطيط له باستهتار.",
          "تحقق من فترة السماح المتبقية لجهازك والرسوم الحالية على turkiye.gov.tr (e-Devlet) قبل الموعد النهائي المتوقع بوقت كافٍ."
        ]
      },
      {
        "id": "tips",
        "title": "نصائح مفيدة",
        "list": {
          "type": "ul",
          "items": [
            "اشترِ في المدينة، وليس في المطار - أكشاك SIM في المطار عادة ما تكون أغلى بكثير.",
            "اتصل بـ *#06# على هاتفك لمعرفة رقم IMEI الخاص بك إذا احتجت للتحقق من حالة تسجيلك.",
            "تتبع تاريخ أول تفعيل لشريحة تركية - من هذا التاريخ تبدأ عد فترة التسجيل.",
            "إذا كنت تخطط للبقاء لفترة طويلة، قارن رسوم تسجيل IMEI بتكلفة شراء هاتف من السوق التركي مباشرة."
          ]
        }
      },
      {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faq": [
          {
            "question": "هل يمكنني استخدام eSIM بدلاً من ذلك؟",
            "answer": "تدعم جميع المشغلين الثلاثة الرئيسيين eSIM. يستخدم بعض المسافرين تبديل eSIM/الشريحة الفعلية لتمديد وقت الاستخدام على هاتف غير مسجل، لكن هذا واجه تشديداً في التطبيق - لا تعتمد عليه كخطة طويلة الأمد."
          },
          {
            "question": "هل يؤثر تصريح إقامتي على الحصول على شريحة اتصال؟",
            "answer": "لا - يكفي جواز السفر عموماً لتسجيل شريحة دفع مسبق. لا تحتاج بطاقة تصريح الإقامة لشرائها."
          }
        ]
      }
    ],
    "sourceNoteText": "تتغير الأسعار والرسوم وقواعد التسجيل بشكل متكرر. تأكد دائماً من التفاصيل الحالية مباشرة من المشغل أو على",
    "sourceLinks": [
      {
        "label": "btk.gov.tr",
        "href": "https://www.btk.gov.tr"
      }
    ]
  },
  "ru": {
    "badgeLabel": "Гид по SIM-картам",
    "heroTitle": "SIM-карты",
    "heroDescription": "Подключение к связи обычно одна из первых вещей, которые вы захотите сделать по прибытии. Вот что нужно знать перед покупкой SIM-карты в Турции.",
    "sections": [
      {
        "id": "overview",
        "title": "Обзор",
        "paragraphs": [
          "В Турции есть три основных оператора связи: Turkcell, Vodafone и Türk Telekom. Все три покрывают Коджаэли и предлагают предоплатные тарифы, хорошо подходящие студентам. Вам понадобится паспорт для покупки SIM-карты — это требуется по закону для регистрации."
        ]
      },
      {
        "id": "providers",
        "title": "Выбор оператора",
        "list": {
          "type": "ul",
          "items": [
            "Turkcell — обычно самое сильное и широкое покрытие по всей стране, включая районы вне крупных городов. Обычно самый дорогой из трёх.",
            "Vodafone — хорошее покрытие в городах, конкурентные цены, тарифы часто включают международные минуты.",
            "Türk Telekom — обычно самый бюджетный вариант, с хорошим покрытием в городах вроде Коджаэли, хотя менее обширным в сельской местности."
          ]
        },
        "paragraphs": [
          "Для большинства студентов, живущих в Коджаэли и рядом с кампусом, подойдёт любой из трёх — цена и промо-предложения для студентов в магазине часто становятся решающим фактором."
        ]
      },
      {
        "id": "getting-sim",
        "title": "Получение SIM-карты",
        "list": {
          "type": "ol",
          "items": [
            "Возьмите с собой паспорт — без него зарегистрировать SIM-карту нельзя.",
            "Идите в официальный магазин оператора (избегайте неофициальных продавцов) — ищите фирменные магазины Turkcell, Vodafone или Türk Telekom в центре города, они обычно дешевле аэропортовых киосков.",
            "Спросите о предоплатных тарифах («faturasız») с ежемесячным продлением, а не о туристических пакетах для коротких визитов.",
            "Активация обычно быстрая, но иногда может занять до часа в зависимости от магазина и загрузки сети."
          ]
        }
      },
      {
        "id": "imei",
        "title": "Предупреждение о регистрации IMEI",
        "paragraphs": [
          "Это одна из самых важных вещей, которые нужно знать, прежде чем полагаться на телефон, привезённый из другой страны: Турция требует регистрации иностранных телефонов в государственной системе (через BTK/e-Devlet) после льготного периода — обычно 120 дней с момента первой активации турецкой SIM-карты в устройстве, иногда с возможностью продления.",
          "После окончания льготного периода незарегистрированный иностранный телефон полностью блокируется во всех турецких сетях, независимо от того, какая SIM-карта в нём установлена. Регистрационный сбор существенный — он изменился примерно до 54 000+ турецких лир на 2026 год и корректируется каждый год — так что это не мелкое неудобство, которое можно планировать небрежно.",
          "Проверьте оставшийся льготный период вашего устройства и текущие сборы на turkiye.gov.tr (e-Devlet) заблаговременно до ожидаемого срока."
        ]
      },
      {
        "id": "tips",
        "title": "Полезные советы",
        "list": {
          "type": "ul",
          "items": [
            "Покупайте в городе, а не в аэропорту — аэропортовые киоски SIM-карт обычно значительно дороже.",
            "Наберите *#06# на телефоне, чтобы узнать номер IMEI, если нужно проверить статус регистрации.",
            "Отслеживайте дату первой активации турецкой SIM-карты — именно с неё начинается отсчёт регистрации.",
            "Если планируете остаться надолго, сравните сбор за регистрацию IMEI со стоимостью покупки телефона турецкого рынка."
          ]
        }
      },
      {
        "id": "faq",
        "title": "Часто задаваемые вопросы",
        "faq": [
          {
            "question": "Могу ли я использовать eSIM вместо этого?",
            "answer": "Все три основных оператора поддерживают eSIM. Некоторые путешественники переключаются между eSIM и физической SIM, чтобы продлить время использования незарегистрированного телефона, но контроль за этим ужесточается — не полагайтесь на это как на долгосрочный план."
          },
          {
            "question": "Влияет ли мой вид на жительство на получение SIM-карты?",
            "answer": "Нет — обычно паспорта достаточно для регистрации предоплатной SIM-карты. Карта вида на жительство для покупки не нужна."
          }
        ]
      }
    ],
    "sourceNoteText": "Цены, сборы и правила регистрации часто меняются. Всегда уточняйте актуальные детали напрямую у оператора или на",
    "sourceLinks": [
      {
        "label": "btk.gov.tr",
        "href": "https://www.btk.gov.tr"
      }
    ]
  }
};
