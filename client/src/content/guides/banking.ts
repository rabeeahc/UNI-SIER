import type { GuideContent } from "../../types/guideContent";

export const bankingContent: Record<"en" | "tr" | "ar" | "ru", GuideContent> = {
  "en": {
    "badgeLabel": "Banking guide",
    "heroTitle": "Opening a bank account",
    "heroDescription": "A local bank account makes everyday life in Türkiye much easier — from paying rent to receiving money from home.",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "paragraphs": [
          "International students can open a Turkish bank account, and many everyday things — rent payments, phone bills, receiving money — are far easier with a local IBAN than without one. You generally don't need to wait for your residence permit to arrive; the application receipt is often enough."
        ]
      },
      {
        "id": "documents",
        "title": "What you'll need",
        "list": {
          "type": "ul",
          "items": [
            "Your passport",
            "Your student residence permit, or the application receipt if it hasn't arrived yet",
            "A Turkish tax identification number (vergi kimlik numarası) — free to get at any tax office",
            "Your university acceptance letter or student certificate",
            "Proof of address, such as a rental contract or dormitory registration (some banks request this, some don't)"
          ]
        }
      },
      {
        "id": "banks",
        "title": "Choosing a bank",
        "paragraphs": [
          "Banks that are generally considered more accustomed to working with foreign students and expats include:"
        ],
        "list": {
          "type": "ul",
          "items": [
            "Ziraat Bankası — state-owned, widely available branches, often cited as one of the more straightforward options for foreigners.",
            "İş Bankası — strong English-language mobile banking support.",
            "Garanti BBVA — known for accessible online/mobile banking and English support.",
            "VakıfBank, Yapı Kredi, Akbank — also commonly used by foreign students, though policies can vary by branch."
          ]
        }
      },
      {
        "id": "steps",
        "title": "Opening an account",
        "list": {
          "type": "ol",
          "items": [
            "Get your tax identification number from any tax office (free, usually quick).",
            "Gather your documents (see above).",
            "Visit a branch in person — most banks still require this for a first account.",
            "Ask specifically for a student or foreign-national account, since requirements can differ from a standard account.",
            "Activate mobile/online banking once your account and card are issued."
          ]
        }
      },
      {
        "id": "tips",
        "title": "Helpful tips",
        "list": {
          "type": "ul",
          "items": [
            "Bring more documents than you think you'll need — requirements vary by branch even within the same bank.",
            "Ask about a multi-currency account if you'll regularly receive money in a foreign currency.",
            "Set up mobile banking immediately — most day-to-day bill payments in Türkiye run through banking apps.",
            "Keep a copy of your account opening documents in case you need to open a second account later (e.g. for a scholarship or part-time work)."
          ]
        }
      },
      {
        "id": "faq",
        "title": "FAQ",
        "faq": [
          {
            "question": "Do I need my residence permit card in hand?",
            "answer": "Not always — many students open an account using their e-ikamet application receipt while the physical card is still being processed. Confirm with your chosen branch."
          },
          {
            "question": "Can I receive international transfers into a Turkish account?",
            "answer": "Yes, Turkish banks generally support SWIFT transfers, though fees and exchange rates vary by bank — compare a couple before committing if you'll do this often."
          }
        ]
      }
    ],
    "sourceNoteText": "Banking requirements and fees change and vary by branch. Confirm current requirements directly with your chosen bank before visiting.",
    "sourceLinks": []
  },
  "tr": {
    "badgeLabel": "Bankacılık rehberi",
    "heroTitle": "Banka Hesabı Açma",
    "heroDescription": "Yerel bir banka hesabı, Türkiye'de günlük hayatı çok kolaylaştırır - kira ödemekten evden para almaya kadar.",
    "sections": [
      {
        "id": "overview",
        "title": "Genel Bakış",
        "paragraphs": [
          "Uluslararası öğrenciler Türk banka hesabı açabilir ve kira ödemeleri, telefon faturaları, para alma gibi birçok günlük işlem yerel bir IBAN ile çok daha kolaydır. Genellikle ikamet izninizin gelmesini beklemenize gerek yoktur; başvuru makbuzu genellikle yeterlidir."
        ]
      },
      {
        "id": "documents",
        "title": "İhtiyacınız Olanlar",
        "list": {
          "type": "ul",
          "items": [
            "Pasaportunuz",
            "Öğrenci ikamet izniniz veya henüz gelmediyse başvuru makbuzunuz",
            "Türk vergi kimlik numarası - herhangi bir vergi dairesinden ücretsiz alınır",
            "Üniversite kabul mektubunuz veya öğrenci belgeniz",
            "Adres belgesi, örneğin kira sözleşmesi veya yurt kaydı (bazı bankalar bunu ister, bazıları istemez)"
          ]
        }
      },
      {
        "id": "banks",
        "title": "Banka Seçimi",
        "paragraphs": [
          "Yabancı öğrenciler ve göçmenlerle çalışmaya genellikle daha alışkın kabul edilen bankalar şunları içerir:"
        ],
        "list": {
          "type": "ul",
          "items": [
            "Ziraat Bankası — devlete ait, yaygın şubeler, yabancılar için genellikle daha kolay seçeneklerden biri olarak gösterilir.",
            "İş Bankası — güçlü İngilizce mobil bankacılık desteği.",
            "Garanti BBVA — erişilebilir online/mobil bankacılık ve İngilizce desteğiyle bilinir.",
            "VakıfBank, Yapı Kredi, Akbank — yabancı öğrenciler tarafından da yaygın olarak kullanılır, ancak politikalar şubeye göre değişebilir."
          ]
        }
      },
      {
        "id": "steps",
        "title": "Hesap Açma",
        "list": {
          "type": "ol",
          "items": [
            "Herhangi bir vergi dairesinden vergi kimlik numaranızı alın (ücretsiz, genellikle hızlı).",
            "Belgelerinizi toplayın (yukarıya bakın).",
            "Şahsen bir şubeye gidin - çoğu banka ilk hesap için hala bunu ister.",
            "Standart bir hesaptan farklı gereksinimler olabileceğinden, özellikle öğrenci veya yabancı uyruklu hesabı isteyin.",
            "Hesabınız ve kartınız verildikten sonra mobil/online bankacılığı etkinleştirin."
          ]
        }
      },
      {
        "id": "tips",
        "title": "Faydalı İpuçları",
        "list": {
          "type": "ul",
          "items": [
            "İhtiyacınız olacağını düşündüğünüzden daha fazla belge getirin - gereksinimler aynı banka içinde bile şubeye göre değişir.",
            "Düzenli olarak yabancı para birimi alacaksanız çok para birimli hesap hakkında bilgi alın.",
            "Mobil bankacılığı hemen kurun - Türkiye'deki günlük fatura ödemelerinin çoğu bankacılık uygulamaları üzerinden yapılır.",
            "Daha sonra ikinci bir hesap açmanız gerekebileceği için (örneğin bir burs veya yarı zamanlı iş için) hesap açma belgelerinizin bir kopyasını saklayın."
          ]
        }
      },
      {
        "id": "faq",
        "title": "Sıkça Sorulan Sorular",
        "faq": [
          {
            "question": "İkamet izni kartım elimde olmalı mı?",
            "answer": "Her zaman değil - birçok öğrenci fiziksel kart hala işlenirken e-ikamet başvuru makbuzunu kullanarak hesap açar. Seçtiğiniz şubeyle teyit edin."
          },
          {
            "question": "Türk hesabına uluslararası transfer alabilir miyim?",
            "answer": "Evet, Türk bankaları genellikle SWIFT transferlerini destekler, ancak ücretler ve döviz kurları bankaya göre değişir - bunu sık yapacaksanız taahhüt etmeden önce birkaçını karşılaştırın."
          }
        ]
      }
    ],
    "sourceNoteText": "Bankacılık gereksinimleri ve ücretleri değişir ve şubeye göre farklılık gösterir. Ziyaret etmeden önce güncel gereksinimleri doğrudan seçtiğiniz bankayla teyit edin.",
    "sourceLinks": []
  },
  "ar": {
    "badgeLabel": "دليل الخدمات المصرفية",
    "heroTitle": "فتح حساب بنكي",
    "heroDescription": "الحساب البنكي المحلي يجعل الحياة اليومية في تركيا أسهل بكثير - من دفع الإيجار إلى استلام الأموال من الوطن.",
    "sections": [
      {
        "id": "overview",
        "title": "نظرة عامة",
        "paragraphs": [
          "يمكن للطلاب الدوليين فتح حساب بنكي تركي، والعديد من الأمور اليومية - دفع الإيجار وفواتير الهاتف واستلام الأموال - أسهل بكثير مع IBAN محلي منه بدونه. عموماً لا تحتاج للانتظار حتى يصل تصريح إقامتك؛ إيصال الطلب غالباً ما يكون كافياً."
        ]
      },
      {
        "id": "documents",
        "title": "ما ستحتاجه",
        "list": {
          "type": "ul",
          "items": [
            "جواز سفرك",
            "تصريح إقامتك كطالب، أو إيصال الطلب إذا لم يصل بعد",
            "رقم تعريف ضريبي تركي - يُحصل عليه مجاناً من أي مكتب ضرائب",
            "خطاب قبول جامعتك أو شهادة الطالب",
            "إثبات العنوان، مثل عقد إيجار أو تسجيل سكن جامعي (بعض البنوك تطلب هذا، وبعضها لا يطلبه)"
          ]
        }
      },
      {
        "id": "banks",
        "title": "اختيار بنك",
        "paragraphs": [
          "من البنوك التي تُعتبر عموماً أكثر اعتياداً على التعامل مع الطلاب الأجانب والمغتربين:"
        ],
        "list": {
          "type": "ul",
          "items": [
            "Ziraat Bankası - مملوك للدولة، فروع منتشرة على نطاق واسع، وغالباً ما يُذكر كأحد الخيارات الأكثر سهولة للأجانب.",
            "İş Bankası - دعم قوي للخدمات المصرفية عبر الهاتف باللغة الإنجليزية.",
            "Garanti BBVA - معروف بسهولة الخدمات المصرفية عبر الإنترنت/الهاتف ودعم اللغة الإنجليزية.",
            "VakıfBank وYapı Kredi وAkbank - تُستخدم أيضاً بشكل شائع من قبل الطلاب الأجانب، رغم أن السياسات قد تختلف حسب الفرع."
          ]
        }
      },
      {
        "id": "steps",
        "title": "فتح حساب",
        "list": {
          "type": "ol",
          "items": [
            "احصل على رقمك الضريبي من أي مكتب ضرائب (مجاني، وعادة سريع).",
            "اجمع مستنداتك (انظر أعلاه).",
            "قم بزيارة فرع شخصياً - لا تزال معظم البنوك تتطلب ذلك للحساب الأول.",
            "اطلب تحديداً حساب طالب أو مواطن أجنبي، حيث قد تختلف المتطلبات عن الحساب القياسي.",
            "فعّل الخدمات المصرفية عبر الهاتف/الإنترنت بمجرد إصدار حسابك وبطاقتك."
          ]
        }
      },
      {
        "id": "tips",
        "title": "نصائح مفيدة",
        "list": {
          "type": "ul",
          "items": [
            "أحضر مستندات أكثر مما تعتقد أنك ستحتاجه - تختلف المتطلبات حسب الفرع حتى داخل نفس البنك.",
            "اسأل عن حساب متعدد العملات إذا كنت ستستلم أموالاً بعملة أجنبية بانتظام.",
            "قم بإعداد الخدمات المصرفية عبر الهاتف فوراً - معظم دفعات الفواتير اليومية في تركيا تتم عبر تطبيقات البنوك.",
            "احتفظ بنسخة من مستندات فتح حسابك في حال احتجت لفتح حساب ثانٍ لاحقاً (مثلاً لمنحة دراسية أو عمل بدوام جزئي)."
          ]
        }
      },
      {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faq": [
          {
            "question": "هل أحتاج لبطاقة تصريح الإقامة بيدي؟",
            "answer": "ليس دائماً - يفتح العديد من الطلاب حساباً باستخدام إيصال طلب e-ikamet بينما لا تزال البطاقة الفعلية قيد المعالجة. تأكد من الفرع الذي اخترته."
          },
          {
            "question": "هل يمكنني استلام تحويلات دولية في حساب تركي؟",
            "answer": "نعم، تدعم البنوك التركية عموماً تحويلات SWIFT، رغم أن الرسوم وأسعار الصرف تختلف حسب البنك - قارن بين عدة بنوك قبل الالتزام إذا كنت ستفعل هذا بشكل متكرر."
          }
        ]
      }
    ],
    "sourceNoteText": "تتغير متطلبات ورسوم الخدمات المصرفية وتختلف حسب الفرع. تأكد من المتطلبات الحالية مباشرة مع البنك الذي اخترته قبل الزيارة.",
    "sourceLinks": []
  },
  "ru": {
    "badgeLabel": "Гид по банкингу",
    "heroTitle": "Открытие банковского счёта",
    "heroDescription": "Местный банковский счёт сильно упрощает повседневную жизнь в Турции — от оплаты аренды до получения денег из дома.",
    "sections": [
      {
        "id": "overview",
        "title": "Обзор",
        "paragraphs": [
          "Иностранные студенты могут открыть турецкий банковский счёт, и многие повседневные вещи — оплата аренды, счета за телефон, получение денег — намного проще с местным IBAN, чем без него. Обычно не нужно ждать получения вида на жительство; часто достаточно квитанции о подаче заявки."
        ]
      },
      {
        "id": "documents",
        "title": "Что вам понадобится",
        "list": {
          "type": "ul",
          "items": [
            "Паспорт",
            "Студенческий вид на жительство или квитанцию о заявке, если он ещё не пришёл",
            "Турецкий налоговый идентификационный номер — бесплатно оформляется в любой налоговой инспекции",
            "Письмо о зачислении в университет или студенческую справку",
            "Подтверждение адреса, например договор аренды или регистрация в общежитии (некоторые банки требуют это, некоторые нет)"
          ]
        }
      },
      {
        "id": "banks",
        "title": "Выбор банка",
        "paragraphs": [
          "Банки, которые обычно считаются более привычными к работе с иностранными студентами и экспатами:"
        ],
        "list": {
          "type": "ul",
          "items": [
            "Ziraat Bankası — государственный банк, широко доступные отделения, часто упоминается как один из более простых вариантов для иностранцев.",
            "İş Bankası — хорошая поддержка мобильного банкинга на английском языке.",
            "Garanti BBVA — известен доступным онлайн/мобильным банкингом и поддержкой на английском.",
            "VakıfBank, Yapı Kredi, Akbank — также часто используются иностранными студентами, хотя политика может отличаться в зависимости от отделения."
          ]
        }
      },
      {
        "id": "steps",
        "title": "Открытие счёта",
        "list": {
          "type": "ol",
          "items": [
            "Получите налоговый идентификационный номер в любой налоговой инспекции (бесплатно, обычно быстро).",
            "Соберите документы (см. выше).",
            "Посетите отделение лично — большинству банков это всё ещё требуется для первого счёта.",
            "Спросите именно про студенческий счёт или счёт для иностранных граждан, так как требования могут отличаться от стандартного счёта.",
            "Активируйте мобильный/онлайн-банкинг после получения счёта и карты."
          ]
        }
      },
      {
        "id": "tips",
        "title": "Полезные советы",
        "list": {
          "type": "ul",
          "items": [
            "Возьмите с собой больше документов, чем думаете, что понадобится — требования отличаются даже между отделениями одного банка.",
            "Спросите про мультивалютный счёт, если будете регулярно получать деньги в иностранной валюте.",
            "Настройте мобильный банкинг сразу же — большинство повседневных платежей в Турции проходят через банковские приложения.",
            "Сохраните копию документов об открытии счёта на случай, если понадобится открыть второй счёт позже (например, для стипендии или подработки)."
          ]
        }
      },
      {
        "id": "faq",
        "title": "Часто задаваемые вопросы",
        "faq": [
          {
            "question": "Нужна ли мне карта вида на жительство на руках?",
            "answer": "Не всегда — многие студенты открывают счёт по квитанции заявки e-ikamet, пока физическая карта ещё обрабатывается. Уточните в выбранном отделении."
          },
          {
            "question": "Могу ли я получать международные переводы на турецкий счёт?",
            "answer": "Да, турецкие банки обычно поддерживают SWIFT-переводы, хотя комиссии и курсы обмена отличаются в зависимости от банка — сравните несколько вариантов, если будете делать это часто."
          }
        ]
      }
    ],
    "sourceNoteText": "Требования и комиссии банков меняются и отличаются в зависимости от отделения. Уточняйте актуальные требования напрямую в выбранном банке перед визитом.",
    "sourceLinks": []
  }
};
