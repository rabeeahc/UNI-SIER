import type { GuideContent } from "../../types/guideContent";

export const foodGroceryContent: Record<"en" | "tr" | "ar" | "ru", GuideContent> = {
  "en": {
    "badgeLabel": "Food & grocery guide",
    "heroTitle": "Eating well on a student budget",
    "heroDescription": "Türkiye has a strong discount-grocery culture, which is great news for students trying to stretch a budget.",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "paragraphs": [
          "Most Turkish shoppers, students included, don't rely on a single grocery store — they mix discount chains, local markets, and small neighborhood shops depending on what they're buying. Once you learn the pattern, it's an easy and genuinely affordable way to eat well."
        ]
      },
      {
        "id": "grocery-stores",
        "title": "Grocery stores",
        "list": {
          "type": "ul",
          "items": [
            "BİM — the largest discount chain by store count, very low prices, smaller selection, and mostly store-brand products.",
            "A101 — similar discount model to BİM with a bit more variety in brands.",
            "Şok — another major discount chain, often noted for a decent fresh produce selection.",
            "Migros — a full-size supermarket with a much wider selection, including international products, at higher prices than the discount chains."
          ]
        },
        "paragraphs": [
          "Note: BİM, A101, and Şok generally don't sell alcohol or pork, since they operate on a halal model — if you're looking for either, larger supermarkets like Migros or Carrefour are the better option."
        ]
      },
      {
        "id": "markets",
        "title": "Local markets",
        "paragraphs": [
          "Nearly every neighborhood in Türkiye has a weekly outdoor market (pazar) with fresh produce that's often cheaper and fresher than supermarket equivalents. Ask other students or your neighbors which day and location your area's pazar runs — it's one of the best ways to save on fruits and vegetables."
        ]
      },
      {
        "id": "tips",
        "title": "Helpful tips",
        "list": {
          "type": "ul",
          "items": [
            "Compare a few staples across BİM, A101, and Şok near you — prices and freshness can differ store to store even within the same chain.",
            "Watch for weekly \"special day\" discount racks at discount chains — often the best deals of the week.",
            "Use the weekly pazar for fresh produce rather than relying only on supermarkets.",
            "Several major chains (Migros, Şok, A101) offer app-based delivery if you don't want to carry groceries back to your dorm or apartment."
          ]
        }
      },
      {
        "id": "faq",
        "title": "FAQ",
        "faq": [
          {
            "question": "Which store is cheapest overall?",
            "answer": "BİM is generally considered the cheapest for basics, though exact prices shift often with inflation — comparing a couple of stores near you is worth the five minutes."
          },
          {
            "question": "Where can I find non-Turkish/international ingredients?",
            "answer": "Larger supermarkets like Migros or Carrefour tend to carry the widest range of international products, though selection varies by branch."
          }
        ]
      }
    ],
    "sourceNoteText": "",
    "sourceLinks": []
  },
  "tr": {
    "badgeLabel": "Yemek & market rehberi",
    "heroTitle": "Öğrenci Bütçesiyle İyi Beslenmek",
    "heroDescription": "Türkiye'nin güçlü bir indirimli market kültürü var, bu da bütçesini zorlayan öğrenciler için harika bir haber.",
    "sections": [
      {
        "id": "overview",
        "title": "Genel Bakış",
        "paragraphs": [
          "Çoğu Türk alışverişçisi, öğrenciler dahil, tek bir markete güvenmez - ne satın aldıklarına bağlı olarak indirim zincirlerini, yerel pazarları ve küçük mahalle dükkanlarını karıştırırlar. Örüntüyü öğrendiğinizde, iyi beslenmenin kolay ve gerçekten uygun fiyatlı bir yoludur."
        ]
      },
      {
        "id": "grocery-stores",
        "title": "Marketler",
        "list": {
          "type": "ul",
          "items": [
            "BİM — mağaza sayısına göre en büyük indirim zinciri, çok düşük fiyatlar, daha küçük seçenek yelpazesi ve çoğunlukla kendi markalı ürünler.",
            "A101 — BİM'e benzer indirim modeli, biraz daha fazla marka çeşitliliği ile.",
            "Şok — bir diğer büyük indirim zinciri, genellikle iyi bir taze ürün seçkisiyle bilinir.",
            "Migros — çok daha geniş bir seçenek yelpazesine sahip tam boy bir süpermarket, uluslararası ürünler dahil, indirim zincirlerine göre daha yüksek fiyatlarla."
          ]
        },
        "paragraphs": [
          "Not: BİM, A101 ve Şok genellikle alkol veya domuz eti satmaz, çünkü helal modelde çalışırlar - ikisinden birini arıyorsanız, Migros veya Carrefour gibi daha büyük süpermarketler daha iyi bir seçenektir."
        ]
      },
      {
        "id": "markets",
        "title": "Yerel Pazarlar",
        "paragraphs": [
          "Türkiye'de neredeyse her mahallenin, süpermarket eşdeğerlerinden genellikle daha ucuz ve daha taze taze ürünlerin bulunduğu haftalık bir açık hava pazarı vardır. Diğer öğrencilere veya komşularınıza bölgenizin pazarının hangi gün ve nerede kurulduğunu sorun - meyve ve sebzelerden tasarruf etmenin en iyi yollarından biridir."
        ]
      },
      {
        "id": "tips",
        "title": "Faydalı İpuçları",
        "list": {
          "type": "ul",
          "items": [
            "Yakınınızdaki BİM, A101 ve Şok arasında birkaç temel ürünü karşılaştırın - fiyatlar ve tazelik aynı zincir içinde bile mağazadan mağazaya farklılık gösterebilir.",
            "İndirim zincirlerindeki haftalık \"özel gün\" indirim raflarını takip edin - genellikle haftanın en iyi fırsatlarıdır.",
            "Sadece süpermarketlere güvenmek yerine taze ürünler için haftalık pazarı kullanın.",
            "Bazı büyük zincirler (Migros, Şok, A101) marketleri yurdunuza veya dairenize taşımak istemiyorsanız uygulama üzerinden teslimat sunar."
          ]
        }
      },
      {
        "id": "faq",
        "title": "Sıkça Sorulan Sorular",
        "faq": [
          {
            "question": "Genel olarak hangi market en ucuz?",
            "answer": "BİM genellikle temel ürünler için en ucuz olarak kabul edilir, ancak tam fiyatlar enflasyonla sık sık değişir - yakınınızdaki birkaç marketi karşılaştırmak beş dakikanıza değer."
          },
          {
            "question": "Türk olmayan/uluslararası malzemeleri nerede bulabilirim?",
            "answer": "Migros veya Carrefour gibi daha büyük süpermarketler genellikle en geniş uluslararası ürün yelpazesini taşır, ancak seçenek şubeye göre değişir."
          }
        ]
      }
    ],
    "sourceNoteText": "",
    "sourceLinks": []
  },
  "ar": {
    "badgeLabel": "دليل الطعام والبقالة",
    "heroTitle": "الأكل الجيد بميزانية طالب",
    "heroDescription": "تمتلك تركيا ثقافة قوية لمتاجر البقالة المخفضة، وهذا خبر رائع للطلاب الذين يحاولون توفير ميزانيتهم.",
    "sections": [
      {
        "id": "overview",
        "title": "نظرة عامة",
        "paragraphs": [
          "معظم المتسوقين الأتراك، بما فيهم الطلاب، لا يعتمدون على متجر بقالة واحد - بل يمزجون بين سلاسل الخصم والأسواق المحلية والمتاجر الصغيرة في الحي حسب ما يشترونه. بمجرد أن تتعلم النمط، تصبح طريقة سهلة وميسورة التكلفة فعلاً لتناول طعام جيد."
        ]
      },
      {
        "id": "grocery-stores",
        "title": "متاجر البقالة",
        "list": {
          "type": "ul",
          "items": [
            "BİM - أكبر سلسلة خصم من حيث عدد المتاجر، أسعار منخفضة جداً، تشكيلة أصغر، ومعظم المنتجات بعلامتها التجارية الخاصة.",
            "A101 - نموذج خصم مشابه لـ BİM مع تنوع أكبر قليلاً في العلامات التجارية.",
            "Şok - سلسلة خصم رئيسية أخرى، غالباً ما تُذكر بتشكيلة جيدة من المنتجات الطازجة.",
            "Migros - سوبر ماركت بحجم كامل مع تشكيلة أوسع بكثير، تشمل منتجات دولية، بأسعار أعلى من سلاسل الخصم."
          ]
        },
        "paragraphs": [
          "ملاحظة: عادة لا تبيع BİM وA101 وŞok الكحول أو لحم الخنزير، حيث تعمل بنموذج حلال - إذا كنت تبحث عن أي منهما، فإن المتاجر الكبرى مثل Migros أو Carrefour هي الخيار الأفضل."
        ]
      },
      {
        "id": "markets",
        "title": "الأسواق المحلية",
        "paragraphs": [
          "يوجد في كل حي تقريباً في تركيا سوق أسبوعي في الهواء الطلق (pazar) بمنتجات طازجة غالباً ما تكون أرخص وأطزج من المكافئات في السوبر ماركت. اسأل طلاباً آخرين أو جيرانك عن اليوم والمكان الذي يقام فيه سوق منطقتك - إنها إحدى أفضل الطرق لتوفير المال على الفواكه والخضروات."
        ]
      },
      {
        "id": "tips",
        "title": "نصائح مفيدة",
        "list": {
          "type": "ul",
          "items": [
            "قارن بعض السلع الأساسية بين BİM وA101 وŞok القريبة منك - قد تختلف الأسعار والطزاجة من متجر لآخر حتى ضمن نفس السلسلة.",
            "راقب رفوف خصم \"اليوم الخاص\" الأسبوعية في سلاسل الخصم - غالباً ما تكون أفضل عروض الأسبوع.",
            "استخدم السوق الأسبوعي للمنتجات الطازجة بدلاً من الاعتماد فقط على السوبر ماركت.",
            "تقدم عدة سلاسل كبرى (Migros وŞok وA101) توصيلاً عبر التطبيق إذا لم ترغب في حمل مشترياتك إلى سكنك الجامعي أو شقتك."
          ]
        }
      },
      {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faq": [
          {
            "question": "أي متجر هو الأرخص بشكل عام؟",
            "answer": "يُعتبر BİM عموماً الأرخص للأساسيات، رغم أن الأسعار الدقيقة تتغير كثيراً مع التضخم - مقارنة متجرين قريبين منك تستحق خمس دقائق من وقتك."
          },
          {
            "question": "أين يمكنني إيجاد مكونات غير تركية/دولية؟",
            "answer": "تميل المتاجر الكبرى مثل Migros أو Carrefour لحمل أوسع تشكيلة من المنتجات الدولية، رغم أن التشكيلة تختلف حسب الفرع."
          }
        ]
      }
    ],
    "sourceNoteText": "",
    "sourceLinks": []
  },
  "ru": {
    "badgeLabel": "Гид по еде и продуктам",
    "heroTitle": "Правильное питание на студенческий бюджет",
    "heroDescription": "В Турции сильно развита культура дискаунтеров, и это отличная новость для студентов, которые пытаются растянуть бюджет.",
    "sections": [
      {
        "id": "overview",
        "title": "Обзор",
        "paragraphs": [
          "Большинство турецких покупателей, включая студентов, не полагаются на один продуктовый магазин — они сочетают сети дискаунтеров, местные рынки и небольшие магазины по соседству в зависимости от того, что покупают. Как только вы освоите эту схему, это станет простым и по-настоящему доступным способом хорошо питаться."
        ]
      },
      {
        "id": "grocery-stores",
        "title": "Продуктовые магазины",
        "list": {
          "type": "ul",
          "items": [
            "BİM — крупнейшая сеть дискаунтеров по числу магазинов, очень низкие цены, меньший ассортимент, в основном товары собственной марки.",
            "A101 — похожая на BİM модель дискаунтера с немного большим разнообразием брендов.",
            "Şok — ещё одна крупная сеть дискаунтеров, часто отмечается за неплохой выбор свежих продуктов.",
            "Migros — полноразмерный супермаркет с гораздо более широким ассортиментом, включая импортные товары, по более высоким ценам, чем в дискаунтерах."
          ]
        },
        "paragraphs": [
          "Примечание: BİM, A101 и Şok обычно не продают алкоголь или свинину, так как работают по халяльной модели — если вам нужно то или другое, крупные супермаркеты вроде Migros или Carrefour — лучший вариант."
        ]
      },
      {
        "id": "markets",
        "title": "Местные рынки",
        "paragraphs": [
          "Почти в каждом районе Турции есть еженедельный уличный рынок (pazar) со свежими продуктами, которые часто дешевле и свежее, чем в супермаркете. Спросите других студентов или соседей, в какой день и где проходит рынок в вашем районе — это один из лучших способов сэкономить на фруктах и овощах."
        ]
      },
      {
        "id": "tips",
        "title": "Полезные советы",
        "list": {
          "type": "ul",
          "items": [
            "Сравните несколько основных товаров между BİM, A101 и Şok рядом с вами — цены и свежесть могут отличаться от магазина к магазину даже в пределах одной сети.",
            "Следите за еженедельными стеллажами скидок «специального дня» в сетях дискаунтеров — часто это лучшие предложения недели.",
            "Используйте еженедельный рынок для свежих продуктов вместо того, чтобы полагаться только на супермаркеты.",
            "Несколько крупных сетей (Migros, Şok, A101) предлагают доставку через приложение, если не хотите нести продукты до общежития или квартиры."
          ]
        }
      },
      {
        "id": "faq",
        "title": "Часто задаваемые вопросы",
        "faq": [
          {
            "question": "Какой магазин самый дешёвый в целом?",
            "answer": "BİM обычно считается самым дешёвым для базовых товаров, хотя точные цены часто меняются из-за инфляции — сравнить пару магазинов рядом с вами стоит потраченных пяти минут."
          },
          {
            "question": "Где найти нетурецкие/импортные продукты?",
            "answer": "Более крупные супермаркеты, такие как Migros или Carrefour, обычно предлагают самый широкий выбор импортных товаров, хотя ассортимент зависит от филиала."
          }
        ]
      }
    ],
    "sourceNoteText": "",
    "sourceLinks": []
  }
};
