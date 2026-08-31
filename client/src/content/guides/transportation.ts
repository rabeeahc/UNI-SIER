import type { GuideContent } from "../../types/guideContent";

export const transportationContent: Record<"en" | "tr" | "ar" | "ru", GuideContent> = {
  "en": {
    "badgeLabel": "Transportation guide",
    "heroTitle": "Getting around Kocaeli",
    "heroDescription": "Kocaeli has a well-connected public transport network covering buses, tram, and ferries. Here's how to get moving as soon as you arrive.",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "paragraphs": [
          "Public transport across Kocaeli — buses, the Akçaray tram in İzmit, and ferries across the Gulf of İzmit — all run on a single electronic card system. Getting that card set up should be one of your very first errands after arriving."
        ]
      },
      {
        "id": "kocaeli-kart",
        "title": "Kocaeli Kart",
        "paragraphs": [
          "Kocaeli Kart is the rechargeable smart card used across all public transport in the city — buses, the tram, and ferries all accept it, and cash generally isn't. You can buy one at ticket offices at main stops, authorized dealers, or self-service KARTOMAT machines, then top it up the same way or through the city's transit app."
        ]
      },
      {
        "id": "options",
        "title": "Getting around",
        "list": {
          "type": "ul",
          "items": [
            "Buses — the most extensive network, reaching most parts of the city. Different colored buses mark different routes; you can track live locations through the Kocaeli Mobil app.",
            "Akçaray (tram) — runs through İzmit city center, connecting the bus terminal area to key central points. Convenient for university and city-center trips.",
            "Ferries & sea buses — cross the Gulf of İzmit to districts like Gölcük, Değirmendere, and Karamürsel — often a faster and more scenic alternative to a long bus ride around the coast. Schedules vary by season, so check ahead.",
            "Minibuses — fill in routes and side streets that main buses don't cover."
          ]
        }
      },
      {
        "id": "student-discount",
        "title": "Student discount",
        "paragraphs": [
          "Like most Turkish cities, discounted student fares are available on the Kocaeli Kart once it's linked to your student status. Requirements and the exact application process can change, so check directly with Kocaeli University's International Office or the local transit authority for the current procedure and required documents."
        ]
      },
      {
        "id": "tips",
        "title": "Helpful tips",
        "list": {
          "type": "ul",
          "items": [
            "Get your Kocaeli Kart in your first few days — cash generally isn't accepted on board.",
            "Top up more than you think you'll need before a long weekend — card top-up points can have limited hours.",
            "Download the Kocaeli Mobil app for live bus tracking rather than relying on printed schedules.",
            "If you live somewhere the ferry serves, compare travel time against the bus — it's often faster during peak traffic."
          ]
        }
      },
      {
        "id": "faq",
        "title": "FAQ",
        "faq": [
          {
            "question": "Can I use one card for buses, tram, and ferry?",
            "answer": "Yes — Kocaeli Kart works across all of them, which is exactly why it's worth getting immediately."
          },
          {
            "question": "Is there a metro in Kocaeli?",
            "answer": "Kocaeli's rail transit is the Akçaray tram network in İzmit, rather than a full metro system."
          }
        ]
      }
    ],
    "sourceNoteText": "Routes and fares change periodically. Confirm current details with Ulaşım Park (Kocaeli's transit operator) or your International Office.",
    "sourceLinks": []
  },
  "tr": {
    "badgeLabel": "Ulaşım rehberi",
    "heroTitle": "Kocaeli'de Ulaşım",
    "heroDescription": "Kocaeli, otobüsleri, tramvayı ve feribotları kapsayan iyi bağlantılı bir toplu taşıma ağına sahiptir. Geldiğiniz anda nasıl hareket edeceğinizi öğrenin.",
    "sections": [
      {
        "id": "overview",
        "title": "Genel Bakış",
        "paragraphs": [
          "Kocaeli genelindeki toplu taşıma - otobüsler, İzmit'teki Akçaray tramvayı ve İzmit Körfezi'ni geçen feribotlar - hepsi tek bir elektronik kart sistemiyle çalışır. Bu kartı ayarlamak, geldikten sonra yapmanız gereken ilk işlerden biri olmalıdır."
        ]
      },
      {
        "id": "kocaeli-kart",
        "title": "Kocaeli Kart",
        "paragraphs": [
          "Kocaeli Kart, şehirdeki tüm toplu taşımada kullanılan yeniden yüklenebilir akıllı karttır - otobüsler, tramvay ve feribotların hepsi kabul eder, nakit genellikle kabul edilmez. Ana duraklardaki bilet ofislerinden, yetkili bayilerden veya self-servis KARTOMAT makinelerinden alabilir, aynı şekilde veya şehrin ulaşım uygulaması üzerinden bakiye yükleyebilirsiniz."
        ]
      },
      {
        "id": "options",
        "title": "Ulaşım Seçenekleri",
        "list": {
          "type": "ul",
          "items": [
            "Otobüsler — şehrin çoğu bölümüne ulaşan en kapsamlı ağ. Farklı renkteki otobüsler farklı güzergahları işaret eder; canlı konumları Kocaeli Mobil uygulaması üzerinden takip edebilirsiniz.",
            "Akçaray (tramvay) — İzmit şehir merkezinden geçer, otogar bölgesini önemli merkezi noktalara bağlar. Üniversite ve şehir merkezi gezileri için kullanışlıdır.",
            "Feribotlar & deniz otobüsleri — İzmit Körfezi'ni geçerek Gölcük, Değirmendere ve Karamürsel gibi ilçelere ulaşır - genellikle kıyı boyunca uzun bir otobüs yolculuğuna göre daha hızlı ve manzaralı bir alternatiftir. Programlar mevsime göre değişir, önceden kontrol edin.",
            "Minibüsler — ana otobüslerin kapsamadığı güzergahları ve ara sokakları tamamlar."
          ]
        }
      },
      {
        "id": "student-discount",
        "title": "Öğrenci İndirimi",
        "paragraphs": [
          "Çoğu Türk şehri gibi, öğrenci statünüz bağlandıktan sonra Kocaeli Kart'ta indirimli öğrenci ücretleri mevcuttur. Gereksinimler ve tam başvuru süreci değişebilir, bu yüzden güncel prosedür ve gerekli belgeler için doğrudan Kocaeli Üniversitesi Uluslararası Ofisi'ne veya yerel ulaşım idaresine danışın."
        ]
      },
      {
        "id": "tips",
        "title": "Faydalı İpuçları",
        "list": {
          "type": "ul",
          "items": [
            "İlk birkaç gün içinde Kocaeli Kart'ınızı alın - araçlarda genellikle nakit kabul edilmez.",
            "Uzun bir hafta sonundan önce ihtiyacınız olduğunu düşündüğünüzden daha fazla bakiye yükleyin - kart yükleme noktalarının sınırlı çalışma saatleri olabilir.",
            "Basılı programlara güvenmek yerine canlı otobüs takibi için Kocaeli Mobil uygulamasını indirin.",
            "Feribotun hizmet verdiği bir yerde yaşıyorsanız, seyahat süresini otobüsle karşılaştırın - yoğun trafikte genellikle daha hızlıdır."
          ]
        }
      },
      {
        "id": "faq",
        "title": "Sıkça Sorulan Sorular",
        "faq": [
          {
            "question": "Otobüs, tramvay ve feribot için tek kart kullanabilir miyim?",
            "answer": "Evet — Kocaeli Kart hepsinde çalışır, bu yüzden hemen almaya değer."
          },
          {
            "question": "Kocaeli'de metro var mı?",
            "answer": "Kocaeli'nin raylı ulaşımı, tam bir metro sistemi yerine İzmit'teki Akçaray tramvay ağıdır."
          }
        ]
      }
    ],
    "sourceNoteText": "Güzergahlar ve ücretler periyodik olarak değişir. Güncel bilgileri Ulaşım Park (Kocaeli'nin ulaşım operatörü) veya Uluslararası Ofisiniz ile teyit edin.",
    "sourceLinks": []
  },
  "ar": {
    "badgeLabel": "دليل المواصلات",
    "heroTitle": "التنقل في كوجالي",
    "heroDescription": "تمتلك كوجالي شبكة نقل عام جيدة الترابط تغطي الحافلات والترام والعبّارات. إليك كيفية التنقل بمجرد وصولك.",
    "sections": [
      {
        "id": "overview",
        "title": "نظرة عامة",
        "paragraphs": [
          "المواصلات العامة في جميع أنحاء كوجالي - الحافلات، وترام Akçaray في إزميت، والعبّارات عبر خليج إزميت - كلها تعمل بنظام بطاقة إلكترونية واحدة. الحصول على هذه البطاقة يجب أن يكون من أوائل الأمور التي تقوم بها بعد الوصول."
        ]
      },
      {
        "id": "kocaeli-kart",
        "title": "بطاقة كوجالي",
        "paragraphs": [
          "بطاقة كوجالي هي البطاقة الذكية القابلة لإعادة الشحن المستخدمة في جميع وسائل النقل العام في المدينة - تقبلها الحافلات والترام والعبّارات جميعاً، والنقد عموماً غير مقبول. يمكنك شراء واحدة من مكاتب التذاكر في المحطات الرئيسية، أو الموزعين المعتمدين، أو أجهزة KARTOMAT ذاتية الخدمة، ثم شحنها بنفس الطريقة أو عبر تطبيق النقل في المدينة."
        ]
      },
      {
        "id": "options",
        "title": "طرق التنقل",
        "list": {
          "type": "ul",
          "items": [
            "الحافلات - الشبكة الأكثر شمولاً، تصل إلى معظم أنحاء المدينة. تشير الحافلات ذات الألوان المختلفة إلى مسارات مختلفة؛ يمكنك تتبع المواقع الحية عبر تطبيق Kocaeli Mobil.",
            "ترام Akçaray - يمر عبر وسط مدينة إزميت، ويربط منطقة محطة الحافلات بالنقاط المركزية الرئيسية. مناسب لرحلات الجامعة ووسط المدينة.",
            "العبّارات وحافلات البحر - تعبر خليج إزميت إلى مناطق مثل Gölcük وDeğirmendere وKaramürsel - غالباً ما تكون بديلاً أسرع وأكثر جمالاً من رحلة حافلة طويلة على طول الساحل. تختلف المواعيد حسب الموسم، لذا تحقق مسبقاً.",
            "الحافلات الصغيرة - تغطي المسارات والشوارع الجانبية التي لا تغطيها الحافلات الرئيسية."
          ]
        }
      },
      {
        "id": "student-discount",
        "title": "خصم الطلاب",
        "paragraphs": [
          "مثل معظم المدن التركية، تتوفر أسعار مخفضة للطلاب على بطاقة كوجالي بمجرد ربطها بوضعك كطالب. قد تتغير المتطلبات وعملية التقديم الدقيقة، لذا تحقق مباشرة مع المكتب الدولي بجامعة كوجالي أو هيئة النقل المحلية للحصول على الإجراء الحالي والمستندات المطلوبة."
        ]
      },
      {
        "id": "tips",
        "title": "نصائح مفيدة",
        "list": {
          "type": "ul",
          "items": [
            "احصل على بطاقة كوجالي في أيامك الأولى - النقد عموماً غير مقبول على متن المركبات.",
            "اشحن أكثر مما تعتقد أنك ستحتاج قبل عطلة نهاية أسبوع طويلة - قد تكون لنقاط شحن البطاقات ساعات عمل محدودة.",
            "قم بتنزيل تطبيق Kocaeli Mobil لتتبع الحافلات المباشر بدلاً من الاعتماد على الجداول المطبوعة.",
            "إذا كنت تعيش في مكان تخدمه العبّارة، قارن وقت السفر بالحافلة - غالباً ما تكون أسرع خلال ساعات الذروة."
          ]
        }
      },
      {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faq": [
          {
            "question": "هل يمكنني استخدام بطاقة واحدة للحافلات والترام والعبّارة؟",
            "answer": "نعم - تعمل بطاقة كوجالي على جميعها، وهذا بالضبط سبب استحقاقها للحصول عليها فوراً."
          },
          {
            "question": "هل يوجد مترو في كوجالي؟",
            "answer": "النقل بالسكك الحديدية في كوجالي هو شبكة ترام Akçaray في إزميت، وليس نظام مترو كامل."
          }
        ]
      }
    ],
    "sourceNoteText": "تتغير المسارات والأسعار بشكل دوري. تأكد من التفاصيل الحالية مع Ulaşım Park (مشغل النقل في كوجالي) أو مكتبك الدولي.",
    "sourceLinks": []
  },
  "ru": {
    "badgeLabel": "Гид по транспорту",
    "heroTitle": "Передвижение по Коджаэли",
    "heroDescription": "В Коджаэли хорошо развита сеть общественного транспорта, включающая автобусы, трамвай и паромы. Вот как быстро начать передвигаться по прибытии.",
    "sections": [
      {
        "id": "overview",
        "title": "Обзор",
        "paragraphs": [
          "Общественный транспорт в Коджаэли — автобусы, трамвай Akçaray в Измите и паромы через залив Измит — всё работает по единой системе электронных карт. Оформление этой карты должно быть одним из первых дел после приезда."
        ]
      },
      {
        "id": "kocaeli-kart",
        "title": "Kocaeli Kart",
        "paragraphs": [
          "Kocaeli Kart — это перезаряжаемая смарт-карта, используемая во всём общественном транспорте города — автобусы, трамвай и паромы принимают её, а наличные обычно не принимаются. Купить её можно в билетных кассах на основных остановках, у авторизованных дилеров или в терминалах самообслуживания KARTOMAT, а пополнить — там же или через транспортное приложение города."
        ]
      },
      {
        "id": "options",
        "title": "Способы передвижения",
        "list": {
          "type": "ul",
          "items": [
            "Автобусы — самая обширная сеть, охватывающая большую часть города. Автобусы разных цветов обозначают разные маршруты; отслеживать их местоположение в реальном времени можно через приложение Kocaeli Mobil.",
            "Akçaray (трамвай) — проходит через центр Измита, соединяя район автовокзала с ключевыми центральными точками. Удобен для поездок в университет и центр города.",
            "Паромы и морские автобусы — пересекают залив Измит до районов Gölcük, Değirmendere и Karamürsel — часто более быстрая и живописная альтернатива долгой автобусной поездке вдоль побережья. Расписание меняется по сезону, проверяйте заранее.",
            "Маршрутки — покрывают маршруты и переулки, которые не охватывают основные автобусы."
          ]
        }
      },
      {
        "id": "student-discount",
        "title": "Студенческая скидка",
        "paragraphs": [
          "Как и в большинстве турецких городов, на Kocaeli Kart доступны льготные студенческие тарифы после привязки карты к вашему студенческому статусу. Требования и точный процесс оформления могут меняться, поэтому уточняйте актуальную процедуру и необходимые документы напрямую в Международном отделе Университета Коджаэли или у местного транспортного оператора."
        ]
      },
      {
        "id": "tips",
        "title": "Полезные советы",
        "list": {
          "type": "ul",
          "items": [
            "Оформите Kocaeli Kart в первые несколько дней — наличные в транспорте обычно не принимаются.",
            "Пополняйте баланс с запасом перед длинными выходными — пункты пополнения карт могут иметь ограниченные часы работы.",
            "Скачайте приложение Kocaeli Mobil для отслеживания автобусов в реальном времени вместо использования печатных расписаний.",
            "Если вы живёте там, куда ходит паром, сравните время в пути с автобусом — паром часто быстрее в час пик."
          ]
        }
      },
      {
        "id": "faq",
        "title": "Часто задаваемые вопросы",
        "faq": [
          {
            "question": "Могу ли я использовать одну карту для автобусов, трамвая и парома?",
            "answer": "Да — Kocaeli Kart работает везде, именно поэтому её стоит оформить сразу же."
          },
          {
            "question": "Есть ли метро в Коджаэли?",
            "answer": "Рельсовый транспорт Коджаэли — это сеть трамвая Akçaray в Измите, а не полноценная система метро."
          }
        ]
      }
    ],
    "sourceNoteText": "Маршруты и тарифы периодически меняются. Уточняйте актуальные детали у Ulaşım Park (транспортного оператора Коджаэли) или в вашем Международном отделе.",
    "sourceLinks": []
  }
};
