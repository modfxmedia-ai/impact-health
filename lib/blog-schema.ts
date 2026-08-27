import type { JsonLdSchema } from "@/components/page/JsonLd";

// Yoast Article/WebPage/ImageObject/BreadcrumbList/WebSite/Organization/Person schema
// graphs captured verbatim from each live post, with the BreadcrumbList extended to
// include the "Blog" listing level (the live site had no /blog/ index to link from).
export const blogPostSchemas: Record<string, JsonLdSchema> = {
  "peptides-for-muscle-building": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/peptides-for-muscle-building/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/peptides-for-muscle-building/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "Peptides for Muscle Building: Unlocking Your Potential",
      datePublished: "2024-12-16T21:26:04+00:00",
      dateModified: "2024-12-16T21:27:36+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/peptides-for-muscle-building/",
      },
      wordCount: 1614,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/peptides-for-muscle-building/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/12/Peptides-for-Muscle-Building.webp",
      articleSection: [
        "Wellness",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/peptides-for-muscle-building/",
      url: "https://impacthealthoh.com/blog/peptides-for-muscle-building/",
      name: "Muscle Building with Peptides: Impact Health's Guide",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/peptides-for-muscle-building/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/peptides-for-muscle-building/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/12/Peptides-for-Muscle-Building.webp",
      datePublished: "2024-12-16T21:26:04+00:00",
      dateModified: "2024-12-16T21:27:36+00:00",
      description: "Maximize muscle growth, speed up recovery, and accelerate fat loss with peptide therapy at Impact Health & Wellness in Westerville, OH. Book your consult!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/peptides-for-muscle-building/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/peptides-for-muscle-building/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/peptides-for-muscle-building/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/12/Peptides-for-Muscle-Building.webp",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/12/Peptides-for-Muscle-Building.webp",
      width: 1000,
      height: 667,
      caption: "Image of a man lifting weights at the gym, emphasizing muscle building and strength gains, representing the benefits of peptide treatments for muscle growth and performance.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/peptides-for-muscle-building/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Peptides for Muscle Building: Unlocking Your Potential",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "how-to-improve-prostate-health": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/how-to-improve-prostate-health/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/how-to-improve-prostate-health/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "How to Improve Prostate Health: The Importance of Bloodwork, Hormone Balance, and Lifestyle Choices",
      datePublished: "2024-11-08T21:46:50+00:00",
      dateModified: "2026-04-10T10:52:42+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/how-to-improve-prostate-health/",
      },
      wordCount: 1567,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/how-to-improve-prostate-health/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/11/why-prostate-health-matters.webp",
      articleSection: [
        "Wellness",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/how-to-improve-prostate-health/",
      url: "https://impacthealthoh.com/blog/how-to-improve-prostate-health/",
      name: "Improve Prostate Health: Tips for Bloodwork & Balance (2025)",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/how-to-improve-prostate-health/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/how-to-improve-prostate-health/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/11/why-prostate-health-matters.webp",
      datePublished: "2024-11-08T21:46:50+00:00",
      dateModified: "2026-04-10T10:52:42+00:00",
      description: "Prioritize your prostate health! Get expert advice on bloodwork, hormone balance, and lifestyle changes at Impact Health & Wellness. Schedule an exam today!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/how-to-improve-prostate-health/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/how-to-improve-prostate-health/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/how-to-improve-prostate-health/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/11/why-prostate-health-matters.webp",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/11/why-prostate-health-matters.webp",
      width: 1000,
      height: 667,
      caption: "The image shows an elderly man engaging in a serious conversation with a healthcare professional, who is seated across from him. The man is wearing a blue plaid shirt and appears to be explaining or discussing something with a focused expression. His hands are gesturing as he speaks, conveying engagement and sincerity. The healthcare professional, seen from behind, is listening attentively, dressed in a white coat, indicating a clinical or consultative setting. The interaction suggests a discussion about health-related topics, potentially emphasizing the importance of issues like prostate health for older men. The setting is professional and caring, reflecting a supportive environment for open conversation about personal health concerns.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/how-to-improve-prostate-health/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Improve Prostate Health: The Importance of Bloodwork, Hormone Balance, and Lifestyle Choices",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "healthy-blood-glucose-levels": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/healthy-blood-glucose-levels/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/healthy-blood-glucose-levels/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "The Importance of Maintaining Healthy Blood Glucose Levels: Understanding Insulin Resistance and the Impact of High-Sugar Foods",
      datePublished: "2024-10-09T16:02:01+00:00",
      dateModified: "2024-10-09T16:05:12+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/healthy-blood-glucose-levels/",
      },
      wordCount: 1553,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/healthy-blood-glucose-levels/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/10/Blood-Glucose-Levels.jpg",
      articleSection: [
        "Weight-loss",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/healthy-blood-glucose-levels/",
      url: "https://impacthealthoh.com/blog/healthy-blood-glucose-levels/",
      name: "Healthy Blood Glucose: Tips from Impact Health & Wellness",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/healthy-blood-glucose-levels/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/healthy-blood-glucose-levels/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/10/Blood-Glucose-Levels.jpg",
      datePublished: "2024-10-09T16:02:01+00:00",
      dateModified: "2024-10-09T16:05:12+00:00",
      description: "Take control of your blood glucose levels with Impact Health & Wellness. Learn how to reverse insulin resistance and protect your health. Book an exam today!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/healthy-blood-glucose-levels/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/healthy-blood-glucose-levels/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/healthy-blood-glucose-levels/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/10/Blood-Glucose-Levels.jpg",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/10/Blood-Glucose-Levels.jpg",
      width: 1000,
      height: 667,
      caption: "A woman seated at a table holding a fork with a vegetable skewer while someone offers her a plate of colorful donuts. The woman appears to be making a healthy choice, looking at the vegetables instead of the donuts.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/healthy-blood-glucose-levels/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "The Importance of Maintaining Healthy Blood Glucose Levels: Understanding Insulin Resistance and the Impact of High-Sugar Foods",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "hormone-therapy-for-menopause": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/hormone-therapy-for-menopause/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/hormone-therapy-for-menopause/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "Hormone Therapy for Menopause: Benefits, Types, and Risks",
      datePublished: "2024-09-11T22:41:51+00:00",
      dateModified: "2026-04-10T10:51:55+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/hormone-therapy-for-menopause/",
      },
      wordCount: 1004,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/hormone-therapy-for-menopause/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/09/Hormone-Therapy-for-Menopause.jpg",
      articleSection: [
        "Wellness",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/hormone-therapy-for-menopause/",
      url: "https://impacthealthoh.com/blog/hormone-therapy-for-menopause/",
      name: "Hormone Therapy for Menopause: Impact Health's Guide",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/hormone-therapy-for-menopause/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/hormone-therapy-for-menopause/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/09/Hormone-Therapy-for-Menopause.jpg",
      datePublished: "2024-09-11T22:41:51+00:00",
      dateModified: "2026-04-10T10:51:55+00:00",
      description: "Reclaim your comfort with expert Hormone Therapy for menopause at Impact Health & Wellness in Westerville, OH. Improve your quality of life. Schedule now!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/hormone-therapy-for-menopause/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/hormone-therapy-for-menopause/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/hormone-therapy-for-menopause/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/09/Hormone-Therapy-for-Menopause.jpg",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/09/Hormone-Therapy-for-Menopause.jpg",
      width: 1000,
      height: 667,
      caption: "Hormone therapy for menopause",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/hormone-therapy-for-menopause/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hormone Therapy for Menopause: Benefits, Types, and Risks",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "umbilical-cord-stem-cell-injections": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/umbilical-cord-stem-cell-injections/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/umbilical-cord-stem-cell-injections/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "Umbilical Cord Stem Cell Injections: A Revolutionary Approach to Joint Pain and Soft Tissue Injuries",
      datePublished: "2024-07-24T14:41:27+00:00",
      dateModified: "2024-07-24T14:43:14+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/umbilical-cord-stem-cell-injections/",
      },
      wordCount: 1282,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/umbilical-cord-stem-cell-injections/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/07/Stem-cell-injections.jpg",
      articleSection: [
        "Wellness",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/umbilical-cord-stem-cell-injections/",
      url: "https://impacthealthoh.com/blog/umbilical-cord-stem-cell-injections/",
      name: "Joint Pain Relief: Impact Health's Stem Cell Injections",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/umbilical-cord-stem-cell-injections/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/umbilical-cord-stem-cell-injections/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/07/Stem-cell-injections.jpg",
      datePublished: "2024-07-24T14:41:27+00:00",
      dateModified: "2024-07-24T14:43:14+00:00",
      description: "Stop letting joint pain hold you back. Discover the healing power of umbilical cord stem cell injections at Impact Health & Wellness. Call us to learn more!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/umbilical-cord-stem-cell-injections/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/umbilical-cord-stem-cell-injections/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/umbilical-cord-stem-cell-injections/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/07/Stem-cell-injections.jpg",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/07/Stem-cell-injections.jpg",
      width: 1000,
      height: 667,
      caption: "Umbilical Cord Stem Cell Injections: A Revolutionary Approach to Joint Pain and Soft Tissue Injuries",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/umbilical-cord-stem-cell-injections/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Umbilical Cord Stem Cell Injections: A Revolutionary Approach to Joint Pain and Soft Tissue Injuries",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "hidden-dangers-of-amazon-supplements": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/hidden-dangers-of-amazon-supplements/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/hidden-dangers-of-amazon-supplements/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "The Hidden Dangers of Amazon Supplements: Why You Should Trust Impact Health and Wellness for Your Supplement Needs",
      datePublished: "2024-05-24T21:11:32+00:00",
      dateModified: "2024-05-24T21:17:58+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/hidden-dangers-of-amazon-supplements/",
      },
      wordCount: 653,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/hidden-dangers-of-amazon-supplements/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/05/Shutterstock_2248232075-1-scaled.jpg",
      articleSection: [
        "Wellness",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/hidden-dangers-of-amazon-supplements/",
      url: "https://impacthealthoh.com/blog/hidden-dangers-of-amazon-supplements/",
      name: "Are Amazon Supplements Safe? The Hidden Dangers Revealed",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/hidden-dangers-of-amazon-supplements/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/hidden-dangers-of-amazon-supplements/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/05/Shutterstock_2248232075-1-scaled.jpg",
      datePublished: "2024-05-24T21:11:32+00:00",
      dateModified: "2024-05-24T21:17:58+00:00",
      description: "Stop guessing with online supplements. Impact Health & Wellness in Westerville, OH offers safe, medical-grade alternatives you can trust. Shop with us today!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/hidden-dangers-of-amazon-supplements/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/hidden-dangers-of-amazon-supplements/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/hidden-dangers-of-amazon-supplements/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/05/Shutterstock_2248232075-1-scaled.jpg",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/05/Shutterstock_2248232075-1-scaled.jpg",
      width: 2560,
      height: 1709,
      caption: "Dangers of amazon supplements",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/hidden-dangers-of-amazon-supplements/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "The Hidden Dangers of Amazon Supplements: Why You Should Trust Impact Health and Wellness for Your Supplement Needs",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "hrt-myths": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/hrt-myths/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/hrt-myths/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "Debunking 7 Myths of Hormone Replacement Therapy",
      datePublished: "2024-05-17T19:58:10+00:00",
      dateModified: "2026-04-10T10:53:09+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/hrt-myths/",
      },
      wordCount: 957,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/hrt-myths/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/05/HRT-Myths.jpg",
      articleSection: [
        "Wellness",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/hrt-myths/",
      url: "https://impacthealthoh.com/blog/hrt-myths/",
      name: "HRT Myths Debunked: The Real Facts About Your Health",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/hrt-myths/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/hrt-myths/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/05/HRT-Myths.jpg",
      datePublished: "2024-05-17T19:58:10+00:00",
      dateModified: "2026-04-10T10:53:09+00:00",
      description: "Stop letting myths hold you back from relief. Discover the real facts about Hormone Replacement Therapy for menopause at Impact Health & Wellness. Call today!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/hrt-myths/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/hrt-myths/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/hrt-myths/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/05/HRT-Myths.jpg",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/05/HRT-Myths.jpg",
      width: 1000,
      height: 667,
      caption: "HRT Myths",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/hrt-myths/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Debunking 7 Myths of Hormone Replacement Therapy",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "innovations-in-neuropathy-treatments": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/innovations-in-neuropathy-treatments/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/innovations-in-neuropathy-treatments/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "Innovations in Neuropathy Treatments: Laser and Shockwave Therapy",
      datePublished: "2024-04-03T13:34:46+00:00",
      dateModified: "2025-03-19T17:54:52+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/innovations-in-neuropathy-treatments/",
      },
      wordCount: 1009,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/innovations-in-neuropathy-treatments/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/04/Neuropathy.jpg",
      articleSection: [
        "Laser",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/innovations-in-neuropathy-treatments/",
      url: "https://impacthealthoh.com/blog/innovations-in-neuropathy-treatments/",
      name: "Neuropathy Relief: How Laser & Shockwave Therapy Works",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/innovations-in-neuropathy-treatments/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/innovations-in-neuropathy-treatments/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/04/Neuropathy.jpg",
      datePublished: "2024-04-03T13:34:46+00:00",
      dateModified: "2025-03-19T17:54:52+00:00",
      description: "Westerville, OH: Discover drug-free neuropathy treatments with laser & shockwave therapy at Impact Health & Wellness. Relieve tingling & numbness now.",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/innovations-in-neuropathy-treatments/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/innovations-in-neuropathy-treatments/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/innovations-in-neuropathy-treatments/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/04/Neuropathy.jpg",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/04/Neuropathy.jpg",
      width: 1000,
      height: 667,
      caption: "Neuropathy Treatment",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/innovations-in-neuropathy-treatments/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Innovations in Neuropathy Treatments: Laser and Shockwave Therapy",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "meal-planning-made-easy": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/meal-planning-made-easy/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/meal-planning-made-easy/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "Healthy Eating: Save Time, Stress &#038; Money with Meal Planning",
      datePublished: "2024-01-17T20:42:00+00:00",
      dateModified: "2024-02-12T20:42:54+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/meal-planning-made-easy/",
      },
      wordCount: 1973,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/meal-planning-made-easy/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/meal-planning-made-easy.webp",
      articleSection: [
        "Wellness",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/meal-planning-made-easy/",
      url: "https://impacthealthoh.com/blog/meal-planning-made-easy/",
      name: "Healthy Meal Planning: Save Time, Stress & Money - Tips",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/meal-planning-made-easy/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/meal-planning-made-easy/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/meal-planning-made-easy.webp",
      datePublished: "2024-01-17T20:42:00+00:00",
      dateModified: "2024-02-12T20:42:54+00:00",
      description: "Transform your diet and save time with custom meal planning at Impact Health & Wellness. Ready to eat healthier and reduce stress? Book your consult today!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/meal-planning-made-easy/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/meal-planning-made-easy/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/meal-planning-made-easy/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/02/meal-planning-made-easy.webp",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/meal-planning-made-easy.webp",
      width: 500,
      height: 394,
      caption: "meal-planning-made-easy",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/meal-planning-made-easy/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Healthy Eating: Save Time, Stress &#038; Money with Meal Planning",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "exploring-the-fundamentals-of-a-healthy-diet": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/exploring-the-fundamentals-of-a-healthy-diet/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/exploring-the-fundamentals-of-a-healthy-diet/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "Healthy Eating: Exploring the Fundamentals of a Healthy Diet",
      datePublished: "2024-01-04T20:40:00+00:00",
      dateModified: "2026-04-10T10:51:32+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/exploring-the-fundamentals-of-a-healthy-diet/",
      },
      wordCount: 1521,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/exploring-the-fundamentals-of-a-healthy-diet/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/exploring-the-fundamentals-of-a-healthy-diet.webp",
      articleSection: [
        "Wellness",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/exploring-the-fundamentals-of-a-healthy-diet/",
      url: "https://impacthealthoh.com/blog/exploring-the-fundamentals-of-a-healthy-diet/",
      name: "Healthy Diet Essentials: Impact Health's Guide to Wellness",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/exploring-the-fundamentals-of-a-healthy-diet/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/exploring-the-fundamentals-of-a-healthy-diet/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/exploring-the-fundamentals-of-a-healthy-diet.webp",
      datePublished: "2024-01-04T20:40:00+00:00",
      dateModified: "2026-04-10T10:51:32+00:00",
      description: "Fuel your body right with expert nutrition guidance from Impact Health & Wellness. Discover custom plans packed with nutrient-rich foods. Get started today!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/exploring-the-fundamentals-of-a-healthy-diet/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/exploring-the-fundamentals-of-a-healthy-diet/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/exploring-the-fundamentals-of-a-healthy-diet/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/02/exploring-the-fundamentals-of-a-healthy-diet.webp",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/exploring-the-fundamentals-of-a-healthy-diet.webp",
      width: 500,
      height: 394,
      caption: "meal-planning-made-easy",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/exploring-the-fundamentals-of-a-healthy-diet/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Healthy Eating: Exploring the Fundamentals of a Healthy Diet",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "Wonders of Laser Therapy: Experience Non-Invasive Pain Relief and Accelerated Healing",
      datePublished: "2023-12-12T20:37:00+00:00",
      dateModified: "2024-02-12T20:38:12+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness/",
      },
      wordCount: 643,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/laser-therapy-at-impact-2.webp",
      articleSection: [
        "Laser",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness/",
      url: "https://impacthealthoh.com/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness/",
      name: "Laser Therapy at Impact Health: Pain Relief & Healing",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/laser-therapy-at-impact-2.webp",
      datePublished: "2023-12-12T20:37:00+00:00",
      dateModified: "2024-02-12T20:38:12+00:00",
      description: "Find pain relief with laser therapy at Impact Health & Wellness in Westerville, OH. Non-invasive treatment for accelerated healing and minimal side effects.",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/02/laser-therapy-at-impact-2.webp",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/laser-therapy-at-impact-2.webp",
      width: 500,
      height: 394,
      caption: "laser-therapy-at-impact-2",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Wonders of Laser Therapy: Experience Non-Invasive Pain Relief and Accelerated Healing",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "the-harmony-within-a-guide-to-achieving-mind-body-balance": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "The Harmony Within: A Guide to Achieving Mind-Body Balance",
      datePublished: "2023-12-09T20:34:00+00:00",
      dateModified: "2024-02-12T20:35:11+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance/",
      },
      wordCount: 946,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/the-harmony-within.webp",
      articleSection: [
        "Wellness",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance/",
      url: "https://impacthealthoh.com/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance/",
      name: "Mind-Body Balance Guide: Impact Health & Wellness Tips",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/the-harmony-within.webp",
      datePublished: "2023-12-09T20:34:00+00:00",
      dateModified: "2024-02-12T20:35:11+00:00",
      description: "Achieve true mind-body balance with Impact Health & Wellness. Elevate your daily well-being through expert meditation, exercise, and nutrition. Start today!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/02/the-harmony-within.webp",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/the-harmony-within.webp",
      width: 500,
      height: 394,
      caption: "the-harmony-within",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "The Harmony Within: A Guide to Achieving Mind-Body Balance",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "understanding-the-role-of-social-connections": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/understanding-the-role-of-social-connections/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/understanding-the-role-of-social-connections/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "Social Connections: Understanding the Role of Social Connections",
      datePublished: "2023-12-05T20:31:00+00:00",
      dateModified: "2024-02-12T20:31:52+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/understanding-the-role-of-social-connections/",
      },
      wordCount: 710,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/understanding-the-role-of-social-connections/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/understanding-the-role-of-social-connections.webp",
      articleSection: [
        "Wellness",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/understanding-the-role-of-social-connections/",
      url: "https://impacthealthoh.com/blog/understanding-the-role-of-social-connections/",
      name: "Social Connections: Boost Your Health & Well-being",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/understanding-the-role-of-social-connections/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/understanding-the-role-of-social-connections/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/understanding-the-role-of-social-connections.webp",
      datePublished: "2023-12-05T20:31:00+00:00",
      dateModified: "2024-02-12T20:31:52+00:00",
      description: "Did you know strong social connections improve your physical health? Discover how Impact Health & Wellness can boost your happiness. Start your journey today!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/understanding-the-role-of-social-connections/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/understanding-the-role-of-social-connections/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/understanding-the-role-of-social-connections/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/02/understanding-the-role-of-social-connections.webp",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/understanding-the-role-of-social-connections.webp",
      width: 500,
      height: 394,
      caption: "understanding-the-role-of-social-connections",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/understanding-the-role-of-social-connections/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Social Connections: Understanding the Role of Social Connections",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "the-basics-of-mindful-eating": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/the-basics-of-mindful-eating/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/the-basics-of-mindful-eating/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "The Basics of Mindful Eating: Learn Awareness of Triggers That Lead to Mindless Eating",
      datePublished: "2023-11-15T20:29:00+00:00",
      dateModified: "2024-02-12T20:29:39+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/the-basics-of-mindful-eating/",
      },
      wordCount: 882,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/the-basics-of-mindful-eating/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/mindful-eating.webp",
      articleSection: [
        "Wellness",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/the-basics-of-mindful-eating/",
      url: "https://impacthealthoh.com/blog/the-basics-of-mindful-eating/",
      name: "Mindful Eating: Awareness for Better Habits – [CURRENT_YEAR]",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/the-basics-of-mindful-eating/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/the-basics-of-mindful-eating/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/mindful-eating.webp",
      datePublished: "2023-11-15T20:29:00+00:00",
      dateModified: "2024-02-12T20:29:39+00:00",
      description: "End mindless snacking for good. Discover the power of mindful eating with Impact Health & Wellness to control portions and enjoy meals more. Learn how today!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/the-basics-of-mindful-eating/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/the-basics-of-mindful-eating/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/the-basics-of-mindful-eating/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/02/mindful-eating.webp",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/mindful-eating.webp",
      width: 500,
      height: 394,
      caption: "mindful-eating",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/the-basics-of-mindful-eating/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "The Basics of Mindful Eating: Learn Awareness of Triggers That Lead to Mindless Eating",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "strength-training-by-age": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/strength-training-by-age/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/strength-training-by-age/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "Strength Training by Age: Physical Activity is an Essential Part of Everyday Life",
      datePublished: "2023-11-08T20:26:00+00:00",
      dateModified: "2026-04-10T10:55:50+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/strength-training-by-age/",
      },
      wordCount: 873,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/strength-training-by-age/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/strength-training-by-age.webp",
      articleSection: {
        "1": "Wellness",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/strength-training-by-age/",
      url: "https://impacthealthoh.com/blog/strength-training-by-age/",
      name: "Strength Training by Age: Your Health at Impact Health",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/strength-training-by-age/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/strength-training-by-age/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/strength-training-by-age.webp",
      datePublished: "2023-11-08T20:26:00+00:00",
      dateModified: "2026-04-10T10:55:50+00:00",
      description: "Unlock lifelong vitality with customized strength training at Impact Health & Wellness. Ready to boost your health at any age? Schedule your session today!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/strength-training-by-age/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/strength-training-by-age/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/strength-training-by-age/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/02/strength-training-by-age.webp",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/strength-training-by-age.webp",
      width: 500,
      height: 394,
      caption: "strength-training-by-age",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/strength-training-by-age/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Strength Training by Age: Physical Activity is an Essential Part of Everyday Life",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
  "discover-the-transformative-power-of-iv-vitamin-therapy": [
    {
      "@type": "Article",
      "@id": "https://impacthealthoh.com/blog/discover-the-transformative-power-of-iv-vitamin-therapy/#article",
      isPartOf: {
        "@id": "https://impacthealthoh.com/blog/discover-the-transformative-power-of-iv-vitamin-therapy/",
      },
      author: {
        name: "doctor_master",
        "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      },
      headline: "IV Infusion Therapy: Discover the Transformative Power of IV Vitamin TherapyIV Infusion Therapy:",
      datePublished: "2023-11-04T20:23:00+00:00",
      dateModified: "2025-04-21T13:08:17+00:00",
      mainEntityOfPage: {
        "@id": "https://impacthealthoh.com/blog/discover-the-transformative-power-of-iv-vitamin-therapy/",
      },
      wordCount: 722,
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/discover-the-transformative-power-of-iv-vitamin-therapy/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/iv-infusion-therapy-at-impact.jpeg",
      articleSection: [
        "IV Therapy",
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/blog/discover-the-transformative-power-of-iv-vitamin-therapy/",
      url: "https://impacthealthoh.com/blog/discover-the-transformative-power-of-iv-vitamin-therapy/",
      name: "Transformative IV Therapy Benefits: How to Boost Your Health",
      isPartOf: {
        "@id": "https://impacthealthoh.com/#website",
      },
      primaryImageOfPage: {
        "@id": "https://impacthealthoh.com/blog/discover-the-transformative-power-of-iv-vitamin-therapy/#primaryimage",
      },
      image: {
        "@id": "https://impacthealthoh.com/blog/discover-the-transformative-power-of-iv-vitamin-therapy/#primaryimage",
      },
      thumbnailUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/iv-infusion-therapy-at-impact.jpeg",
      datePublished: "2023-11-04T20:23:00+00:00",
      dateModified: "2025-04-21T13:08:17+00:00",
      description: "Instantly boost your energy and immunity! Discover the powerful benefits of custom IV vitamin therapy at Impact Health & Wellness in Westerville. Book today!",
      breadcrumb: {
        "@id": "https://impacthealthoh.com/blog/discover-the-transformative-power-of-iv-vitamin-therapy/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://impacthealthoh.com/blog/discover-the-transformative-power-of-iv-vitamin-therapy/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/blog/discover-the-transformative-power-of-iv-vitamin-therapy/#primaryimage",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/02/iv-infusion-therapy-at-impact.jpeg",
      contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/iv-infusion-therapy-at-impact.jpeg",
      width: 1024,
      height: 700,
      caption: "iv-infusion-therapy-at-impact",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/blog/discover-the-transformative-power-of-iv-vitamin-therapy/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://impacthealthoh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://impacthealthoh.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "IV Infusion Therapy: Discover the Transformative Power of IV Vitamin TherapyIV Infusion Therapy:",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: {
        "@id": "https://impacthealthoh.com/#organization",
      },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: {
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://impacthealthoh.com/#/schema/person/7ca24b56975745e02ccb411a14cce08d",
      name: "doctor_master",
      sameAs: [
        "http://impacthealthoh.com",
        "developer",
      ],
    },
  ],
};
