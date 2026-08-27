/**
 * Style Kish / Persian Luxe - Product Catalog Dataset
 */

const DEFAULT_PRODUCTS = [
  {
    id: "kimia-silk-dress",
    sku: "KMY-BLK-01",
    name: "پیراهن ابریشمی مدل کیمیا",
    subtitle: "زنانه - ابریشم خالص با برش هندسی",
    category: "women",
    subCategory: "dress",
    gender: "women",
    price: 12500000,
    originalPrice: 12500000,
    discountPercent: 0,
    isNew: true,
    isSale: false,
    inStock: true,
    stockCount: 18,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEzADUZc4DsnjQhmVa8YUFniqeMTuVMkguHuJ-KeQSVUGsEbaFj64SVpdji7rRbxo_e_pI8KDBh8do2AyMaHpVU6GQ205Uvvthbo_-3gmzh8F8u9EKmsETIufHMJ5Qp_jQd6WfxrPJ5mtUXApUo-yW_o4quB4ozP_BTQ3CdkfElL_2Q6FL2BEYf9HVQwTjdMryIrEVAOipNP1qI_SWa0BtF9GrOoEguCBsCbwr-zPvJeVskId_abdl",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACy4WGW19ETDfEHaAL0aNfSOpv1gfkWvYj8OSzsmGzZTnQXohbzgDYqIPBJ31we00HWD8pg7YgcclY_XWdMxI6m6GmQy9VCarhc7FHbzK4AlFKdYysbZR6c0yhXO0AKT26FgcCjZrbwBiU_Cxc1lbrFN0bcwkor5f8MdbqR_FjACunZW5XZBipYl4ljDHz3hm1zJOz-QPi-rOTY_5GivLDFfdlQb6GDfvViBtoYCi8u9gAhl0Ki71H",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmt_TED7nWt1nNdfDv99zc5VnW320kKgluHKDXjSiQXpsp4oMSy6s7SE8FS-DXrQ_uQw2r-aXdC9W_Ri8G08EJ32Fpj_lq-VPS_oSq7E4CiYPpSw5zI_HBcnjbyihpoBUsqez51-Krf5_Qxv5x0VbQ95JtgoPNx6fcjzvMAwDtoDn2OVbtUT7Ax0yeYOruSKPaSRcfILYPetZEAXmkD3wWChwP_2FGVJYN6Oq_1S2PsZN7CDG89fhz",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCg2zWDa85vFCzLuV5KEcDOGo2Sw1xNlQdCpJHs7BYgJiPkgxVYWY5zDvuZrmTJRpWEltF2TF4yxK2Z_M8nbbhTQef5WAaP2UmvOF32mrp630FlCa2JhYouobYzKmS-8QYyvBAHgqIw0RxxpmmBkmfzMoO1SQM0TCUywtlEPj3mfYJXM07FxYdfDmmYbmb2udDGC3KpoNDvw8VMKMvYhhJ2CzpAoBDBkF774hnNJ0WF6dTygPxmDpgK"
    ],
    colors: [
      { name: "مشکی نیمه‌شب", hex: "#000000", bgClass: "bg-black" },
      { name: "عاجی", hex: "#fffff0", bgClass: "bg-[#fffff0]" },
      { name: "سبز زمردی", hex: "#046307", bgClass: "bg-[#046307]" }
    ],
    sizes: ["۳۶", "۳۸", "۴۰", "۴۲"],
    description: "این پیراهن ابریشمی با الهام از خطوط هندسی معماری ایرانی و مینیمالیسم معاصر طراحی شده است. استفاده از پارچه صد در صد ابریشم طبیعی توت، حس سبکی و لطافت بی‌نظیری به ارمغان می‌آورد. برشی آزاد و مینیمال برای استایلی مجلل در رویدادهای خاص.",
    careInstructions: "تنها خشکشویی شود. از اتوکشی با حرارت بالا خودداری کنید. در جای خشک و دور از نور مستقیم نگهداری شود."
  },
  {
    id: "lotus-silk-blouse",
    sku: "LTS-SLK-02",
    name: "شومیز ابریشم لوتوس",
    subtitle: "زنانه - ابریشم خالص، کرم و زغالی",
    category: "women",
    subCategory: "blouse",
    gender: "women",
    price: 4800000,
    originalPrice: 6000000,
    discountPercent: 20,
    isNew: false,
    isSale: true,
    inStock: true,
    stockCount: 12,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_aBlhiN5s97uzx8zJMsZUo-HanC8HTrtdmrQ1jxNzreufRptnDoDIvoWG1B-nGWhiIYSy6LvVrFKrlaAK2Ur0m0L0q7fGvzn-ZfxG2n0QqUosZ-kDh1MyyqgezTtWaEWmdL1jB8GAshEeMqoj7OoXpBMwM6lb-Wha-Pu7ikK5Gi8muVjRyo66u8eoujawoV-ecRK-EMJikwS3p36jAS8Wff_xan-Hp-9F75ohDCZmhMU5vqgFIX5B",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_aBlhiN5s97uzx8zJMsZUo-HanC8HTrtdmrQ1jxNzreufRptnDoDIvoWG1B-nGWhiIYSy6LvVrFKrlaAK2Ur0m0L0q7fGvzn-ZfxG2n0QqUosZ-kDh1MyyqgezTtWaEWmdL1jB8GAshEeMqoj7OoXpBMwM6lb-Wha-Pu7ikK5Gi8muVjRyo66u8eoujawoV-ecRK-EMJikwS3p36jAS8Wff_xan-Hp-9F75ohDCZmhMU5vqgFIX5B",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBj1LwGBbFABvjf2iZLV-PuhPefL2NDIcKvcrFS8Dn6EgPFpDRcNfvh1Gimt9-gAF93O8J--9saMa_9SaJbexB8JoRh7knZ9eRBYdHEvmDh9MpvN1glEIxXX-PFwfNyg4AUzmHL9LfljmrMVllrv_Aa-zYmxxPwZs4ud5hZy9ai5yoTXDOm5PtEeNAsRmHYXuIeZnyJJH7vjtz3PaydkFFU6o9Js9xpVlidg6KiXipJ7h6bz4vbg-PW"
    ],
    colors: [
      { name: "زغالی متالیک", hex: "#2b2b2b", bgClass: "bg-[#2b2b2b]" },
      { name: "کرم شیری", hex: "#f5f0e6", bgClass: "bg-[#f5f0e6]" }
    ],
    sizes: ["S", "M", "L"],
    description: "شومیز لوتوس با برش یقه گرد خاص و آستین‌های افتاده، تلفیقی از متانت و مدرنیته را در کنار درخشش مات ابریشم زغالی به نمایش می‌گذارد.",
    careInstructions: "شستشوی دستی با آب سرد و مایع مخصوص ابریشم. اتوکشی پشت پارچه با درجه ملایم."
  },
  {
    id: "classic-linen-trousers",
    sku: "TR-LIN-03",
    name: "شلوار کتان کلاسیک",
    subtitle: "طراحی یونیسکس - کتان اعلا",
    category: "men",
    subCategory: "pants",
    gender: "men",
    price: 3150000,
    originalPrice: 4500000,
    discountPercent: 30,
    isNew: false,
    isSale: true,
    inStock: true,
    stockCount: 25,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwCiMEiHXtdA2ZPL774mMJVX8Xxqp_HYAIh8eP9anFiTpkpqrRZjuZj8zI6vgqaGkGguh1o7kLWB-vlo5sUY-VMzov8RurXzmzJybgZyl-xlpgJSziZL9ewlHnXtwTIOGCwRbcG9kf08RssiTn8UBMBpNjuyj8jpIuVeEiva_qpyk-Y1dgjY3d98A54HlHE2YPGhOSvZEcuI6dENJVHxWja9uoDrbrfVv3QX0I63hEYewB3o1N8lHd",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwCiMEiHXtdA2ZPL774mMJVX8Xxqp_HYAIh8eP9anFiTpkpqrRZjuZj8zI6vgqaGkGguh1o7kLWB-vlo5sUY-VMzov8RurXzmzJybgZyl-xlpgJSziZL9ewlHnXtwTIOGCwRbcG9kf08RssiTn8UBMBpNjuyj8jpIuVeEiva_qpyk-Y1dgjY3d98A54HlHE2YPGhOSvZEcuI6dENJVHxWja9uoDrbrfVv3QX0I63hEYewB3o1N8lHd",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfpFVjch78xpLnAGfnJoZaS9hpqCFyXAIof93sJcCwh5jz712OKtCl2UZBI_r2j0I4-VTjiBTYBf3UHJYnFj6w5F1X2WgSV_M_lHZJSkmn7Gh3RW_M2Mosdvm9B0PotJk82fYT5_nUWnNUxMcXh4oAfRt31XPoGc8jk7IfQJKTNrLpdzBxfP4Gw0Yqbd39MWp4r0PoDKlD4fGWjilXqIHempmP8q4P9siL_sAEZYC4EDmXr-RDpjDo"
    ],
    colors: [
      { name: "کرم خاکی", hex: "#e5e2dd", bgClass: "bg-[#e5e2dd]" },
      { name: "سرمه‌ای تیره", hex: "#1c2e4a", bgClass: "bg-[#1c2e4a]" },
      { name: "مشکی", hex: "#000000", bgClass: "bg-black" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "شلوار راسته کتان با خط اتوی برجسته و دمپای دوبل. طراحی شده با الهام از شلوارهای کلاسیک ایتالیایی و پارچه طبیعی تنفس‌پذیر.",
    careInstructions: "شستشو با ماشین در دمای ۳۰ درجه. اتوکشی در حالت نمدار."
  },
  {
    id: "cashmere-pattern-scarf",
    sku: "SCF-CSH-04",
    name: "شال کشمیر طرح‌دار",
    subtitle: "اکسسوری - الیاف کشمیر با نقوش سنتی",
    category: "accessories",
    subCategory: "scarf",
    gender: "women",
    price: 2975000,
    originalPrice: 3500000,
    discountPercent: 15,
    isNew: false,
    isSale: true,
    inStock: true,
    stockCount: 14,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx-zq6RgBLqezyQd_WS97l9t9EvrNphGrgK7hriSL7RVyUMwD4CtxMwIcITZOlWGf8ECfHisUyuiaRNG3xJkS_5XK8A3Ho5Qmr6d-8s3gZgvRPp-26ElMZ-Fkob9nN6NgRv1xg1k8inQjC9vbdKQShBsu5fqOgG-YDjObjcmIRDu17RRH6kLpD5KUJnrCmlCinC-wH2e7h-Qnb6SpBPXHfZSN2frhF9-aP8mhqr09t9iANte8HJWsY",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBx-zq6RgBLqezyQd_WS97l9t9EvrNphGrgK7hriSL7RVyUMwD4CtxMwIcITZOlWGf8ECfHisUyuiaRNG3xJkS_5XK8A3Ho5Qmr6d-8s3gZgvRPp-26ElMZ-Fkob9nN6NgRv1xg1k8inQjC9vbdKQShBsu5fqOgG-YDjObjcmIRDu17RRH6kLpD5KUJnrCmlCinC-wH2e7h-Qnb6SpBPXHfZSN2frhF9-aP8mhqr09t9iANte8HJWsY"
    ],
    colors: [
      { name: "سرمه‌ای و بژ", hex: "#1a2c42", bgClass: "bg-[#1a2c42]" }
    ],
    sizes: ["تک سایز (۲۰۰×۷۰)"],
    description: "بافته شده از لطیف‌ترین کشمیر کوهستانی با ترنج و بته‌جقه‌های محو شاه‌عباسی، گرمابخش و وقارآفرین.",
    careInstructions: "خشکشویی اختصاصی کشمیر یا شستشوی ملایم با شامپو بچه در آب ولرم."
  },
  {
    id: "yalda-wool-coat",
    sku: "COT-WLD-05",
    name: "پالتو پشمی یلدا",
    subtitle: "زنانه - دوخت دستی و پشم اعلا",
    category: "women",
    subCategory: "coat",
    gender: "women",
    price: 12500000,
    originalPrice: 12500000,
    discountPercent: 0,
    isNew: true,
    isSale: false,
    inStock: true,
    stockCount: 8,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqnqzVlw7oFtMSE1DeLoywdw8f8DcjqgZYyHlqhJiTiTYW0NbRXXXVLtoew5dW-YYbo0mKyAe0osRLivNpNMdyq1CtP3Nv0jTrwuvMzre3_m77aVGmIX0jBYZMUFgfyP4oJ3I1Af8LGFd8jobzR7c9S5sKtizJcgUrxRRlZPxIqHtxiG1VnRTovXzFFzigHhEke9dnWEOHQz3YMJWWzBNju_swpulAoAySCUYGdDiIRVpo9BCbrIXT",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqnqzVlw7oFtMSE1DeLoywdw8f8DcjqgZYyHlqhJiTiTYW0NbRXXXVLtoew5dW-YYbo0mKyAe0osRLivNpNMdyq1CtP3Nv0jTrwuvMzre3_m77aVGmIX0jBYZMUFgfyP4oJ3I1Af8LGFd8jobzR7c9S5sKtizJcgUrxRRlZPxIqHtxiG1VnRTovXzFFzigHhEke9dnWEOHQz3YMJWWzBNju_swpulAoAySCUYGdDiIRVpo9BCbrIXT"
    ],
    colors: [
      { name: "زغالی گرافیتی", hex: "#383b3d", bgClass: "bg-[#383b3d]" }
    ],
    sizes: ["۳۸", "۴۰", "۴۲"],
    description: "پالتوی اوورسایز با یقه ایستاده ظریف و مغزی‌دوزی‌های دست‌ساز سنتی در سرآستین‌ها. گرمای پشم طبیعی همراه با وقار اصیل ایرانی.",
    careInstructions: "خشکشویی حرفه‌ای."
  },
  {
    id: "aria-blazer-jacket",
    sku: "JKT-ARA-06",
    name: "کت بلیزر آریا",
    subtitle: "مردانه - کتان اعلا و برش اسلیم فیت",
    category: "men",
    subCategory: "blazer",
    gender: "men",
    price: 9800000,
    originalPrice: 9800000,
    discountPercent: 0,
    isNew: true,
    isSale: false,
    inStock: true,
    stockCount: 15,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrWaQHneJA_N2PuyFBQ4DJUys5-NunaYwnFaqcPIiHGvFfa4YY27czzuyJ3rP-ciZXgwHScTKuL_3c7mNuybS70Uc4G7NDQIYfhYENXuxl8o45w0zjJK6Xzmv9QkjcqtQXU4FkV-IjowkmEIGco413f2IC0ifrVEOFXto-_C1VKgspxsFjw2DNaeAewf0imVymJAETK9AV0rV62Ycs8hJ1CCGYXtaqE8pm7vk51xFg7jByBwkZOd13",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrWaQHneJA_N2PuyFBQ4DJUys5-NunaYwnFaqcPIiHGvFfa4YY27czzuyJ3rP-ciZXgwHScTKuL_3c7mNuybS70Uc4G7NDQIYfhYENXuxl8o45w0zjJK6Xzmv9QkjcqtQXU4FkV-IjowkmEIGco413f2IC0ifrVEOFXto-_C1VKgspxsFjw2DNaeAewf0imVymJAETK9AV0rV62Ycs8hJ1CCGYXtaqE8pm7vk51xFg7jByBwkZOd13"
    ],
    colors: [
      { name: "مشکی مات", hex: "#111111", bgClass: "bg-[#111111]" },
      { name: "سرمه‌ای درباری", hex: "#152238", bgClass: "bg-[#152238]" }
    ],
    sizes: ["48", "50", "52", "54"],
    description: "کت تک دکمه تک‌چاک با سرشانه‌های طبیعی و آستر ساتن ابریشمی، مناسب مراسم‌های تشریفاتی و محیط‌های حرفه‌ای.",
    careInstructions: "خشکشویی با بخار ملایم."
  },
  {
    id: "kashan-silk-scarf",
    sku: "SCF-KSH-07",
    name: "شال ابریشم کاشان",
    subtitle: "زنانه - ابریشم خالص با حاشیه طلایی",
    category: "accessories",
    subCategory: "scarf",
    gender: "women",
    price: 3200000,
    originalPrice: 3200000,
    discountPercent: 0,
    isNew: true,
    isSale: false,
    inStock: true,
    stockCount: 30,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuujt880UInIsK8m7S2kWD32rSzPLsDKBj4RL4E9Gjb3fmCDiWxvES4mX4SExkH-IimyavfYuX_GbQQ6x8_mglYPfAV4Wh7uZ63yYSWbdIAIldEoDghXgheGZ9CsKkcmKD2h9Gz7wV1-RRIrgA3aj1Oz8pjzU9k6BxsVqNsT1M5MOnKwp2e7J83hFh-T1fyL1eMxE8NGfC85pD27i0a_WEjY2q1rq-s-znvimhOETJTumO8NTfpQ4D",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuujt880UInIsK8m7S2kWD32rSzPLsDKBj4RL4E9Gjb3fmCDiWxvES4mX4SExkH-IimyavfYuX_GbQQ6x8_mglYPfAV4Wh7uZ63yYSWbdIAIldEoDghXgheGZ9CsKkcmKD2h9Gz7wV1-RRIrgA3aj1Oz8pjzU9k6BxsVqNsT1M5MOnKwp2e7J83hFh-T1fyL1eMxE8NGfC85pD27i0a_WEjY2q1rq-s-znvimhOETJTumO8NTfpQ4D",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMrt-ZLRLYLUnglceJsu0FGTmYp3MtMVHsTh78uQYyCAS8fi-GFdCjv87zXlTb0I6S3LCIhLnCAcNBq9hwALXKe_F0kkBW6xSWufYDAs_evOe0Aw30N89_98HmlDEYpwIZJbbyZKy0pDlKSAPCgJh6Y_7YntHb1P0fztLRDKDH08Du8gFGsFwO503FvsxZSkaJTZEp8u747lqhZw7DyNnYyN50br-7uKOReqdIcsUplqYTTHOr5hs-"
    ],
    colors: [
      { name: "سرمه‌ای نیلی", hex: "#1c2e4a", bgClass: "bg-[#1c2e4a]" },
      { name: "خاکی هلویی", hex: "#d8a892", bgClass: "bg-[#d8a892]" }
    ],
    sizes: ["تک سایز (۱۹۰×۷۰)"],
    description: "بافت سنتی با ابریشم مرغوب کاشان و چاپ دستی باتیک، تلفیقی چشم‌نواز از رنگ‌های کویری و آبگینه‌ای.",
    careInstructions: "شستشوی خشک یا با آب سرد."
  },
  {
    id: "oxford-leather-shoes",
    sku: "SH-OXF-08",
    name: "کفش چرم آکسفورد",
    subtitle: "مردانه - چرم طبیعی دست‌دوز تبریز",
    category: "men",
    subCategory: "shoes",
    gender: "men",
    price: 7500000,
    originalPrice: 7500000,
    discountPercent: 0,
    isNew: true,
    isSale: false,
    inStock: true,
    stockCount: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwcIGmEkJfKXwKMcqXS43Frgl5LBdZ96gc6avkOvUd815_ft1UfuqbjSycx1GnHMg3dlyqassqR8FB7zYU1eiYzogKUJgEKXjbkvVWmuvaJrf2TJkCSAUJUDn5_rJXAaReKTuCTC6IRYPzouWuo78GrduDRk0fSZRsBzongVgS7BkTWXu99HGZyQrkZ4iaTgyTwUJRoOrmWUjzPD_ce7jWzmBHcAamEoWW1XtXKFrdRgMKO7suFG7f",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwcIGmEkJfKXwKMcqXS43Frgl5LBdZ96gc6avkOvUd815_ft1UfuqbjSycx1GnHMg3dlyqassqR8FB7zYU1eiYzogKUJgEKXjbkvVWmuvaJrf2TJkCSAUJUDn5_rJXAaReKTuCTC6IRYPzouWuo78GrduDRk0fSZRsBzongVgS7BkTWXu99HGZyQrkZ4iaTgyTwUJRoOrmWUjzPD_ce7jWzmBHcAamEoWW1XtXKFrdRgMKO7suFG7f"
    ],
    colors: [
      { name: "مشکی براق", hex: "#000000", bgClass: "bg-black" },
      { name: "قهوه‌ای تیره", hex: "#4a3525", bgClass: "bg-[#4a3525]" }
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "چرم صد در صد گاوی اعلای دباغی گیاهی تبریز با زیره چرم طبیعی و پاشنه لاستیکی ضدلغزش.",
    careInstructions: "واکس مخصوص موم زنبور عسل و استفاده از قالب چوبی کفش."
  },
  {
    id: "tabriz-leather-bag",
    sku: "BAG-TBZ-09",
    name: "کیف چرم تبریز",
    subtitle: "زنانه - چرم ساختاریافته مینیمال",
    category: "accessories",
    subCategory: "bag",
    gender: "women",
    price: 4800000,
    originalPrice: 4800000,
    discountPercent: 0,
    isNew: false,
    isSale: false,
    inStock: true,
    stockCount: 6,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYPSBzemx1-M5DoVsiLRc8ieJndcU1TqlT5fOkSY2qXwbYb-fzi7ngfb8xN0mu_RZZGzRAvvZG7EVWDgDfWyE68g0sY3lKYFXs25IkmCyHcfdiqCyiqpMrhvTLXUw8E5E1R-d-tMXHTFPAPLbBXLGMLv7V0zuL7gtRudGy56WbKxkvkTFXQtmYYHIla_mcEuvENx86NqBQpS7Fv6pVw_X1StFbJfVNB-AgIejJPDqroE5BJkPs-Y-M",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYPSBzemx1-M5DoVsiLRc8ieJndcU1TqlT5fOkSY2qXwbYb-fzi7ngfb8xN0mu_RZZGzRAvvZG7EVWDgDfWyE68g0sY3lKYFXs25IkmCyHcfdiqCyiqpMrhvTLXUw8E5E1R-d-tMXHTFPAPLbBXLGMLv7V0zuL7gtRudGy56WbKxkvkTFXQtmYYHIla_mcEuvENx86NqBQpS7Fv6pVw_X1StFbJfVNB-AgIejJPDqroE5BJkPs-Y-M"
    ],
    colors: [
      { name: "زغالی گرافیتی", hex: "#222222", bgClass: "bg-[#222222]" }
    ],
    sizes: ["استاندارد (۲۸×۲۰×۱۰)"],
    description: "فرم هندسی قاطع با یراق‌آلات برنجی مات ضد زنگ و بند دوشی قابل تنظیم.",
    careInstructions: "تمیز کردن با پارچه میکروفیبر نرم و لوسیون مخصوص چرم طبیعی."
  },
  {
    id: "mina-gold-bracelet",
    sku: "JW-MNA-10",
    name: "دستبند طلا طرح مینا",
    subtitle: "جواهرات - دست‌ساز با حکاکی خط نستعلیق",
    category: "accessories",
    subCategory: "jewelry",
    gender: "women",
    price: 18500000,
    originalPrice: 18500000,
    discountPercent: 0,
    isNew: false,
    isSale: false,
    inStock: true,
    stockCount: 4,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb15wJ2YOnMRlC1jNxF9IQjWPsPB9KKx1AVm5K_I6405iEEe1Whn7BUySWE8iN_k7NhiHRFMbhtuoT1lXiyB6soXGHJwFvm-JMZcohjADznh1whCXZ_rzlBE91Jgc5ZfyaSXcO6GRLhrrldgriDgj0XWjLNx0pmmaxNEQZ4fNn61GsDdtPf-HZB4tCGjZIutzJW7xAyGYCQeC8vMtTlWI3365izjWPZQ1iYpXZjOD67iFS_ZYdNUSS",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBb15wJ2YOnMRlC1jNxF9IQjWPsPB9KKx1AVm5K_I6405iEEe1Whn7BUySWE8iN_k7NhiHRFMbhtuoT1lXiyB6soXGHJwFvm-JMZcohjADznh1whCXZ_rzlBE91Jgc5ZfyaSXcO6GRLhrrldgriDgj0XWjLNx0pmmaxNEQZ4fNn61GsDdtPf-HZB4tCGjZIutzJW7xAyGYCQeC8vMtTlWI3365izjWPZQ1iYpXZjOD67iFS_ZYdNUSS"
    ],
    colors: [
      { name: "طلای ۱۸ عیار مات", hex: "#d4af37", bgClass: "bg-[#d4af37]" }
    ],
    sizes: ["تک سایز با قابلیت تنظیم"],
    description: "دستبند النگویی باز با بیت زیبای 'عشق و هنر' حکاکی شده با دست توسط استادکاران قلم‌زنی اصفهان.",
    careInstructions: "جلوگیری از برخورد با مواد شوینده، عطر و اسپری."
  },
  {
    id: "artemis-structural-manteau",
    sku: "MAN-ART-11",
    name: "مانتو ساختاری آرتمیس",
    subtitle: "زنانه - طراحی مینیمال، مشکی زغالی",
    category: "women",
    subCategory: "manteau",
    gender: "women",
    price: 4500000,
    originalPrice: 4500000,
    discountPercent: 0,
    isNew: true,
    isSale: false,
    inStock: true,
    stockCount: 16,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiqyAry9F5Y7DG473ynslau61ilLqgkYIPFUo1RiOHtcJ15opM9knBPHITHAvFcLX5YpeTfLklrkB-HPg7srl0QdilW7dDxHk8e7uHXytPbK6TiVMZBIkK9Y9gGHH26BjJnm7SMXtjZpJAcaU0ZCodL9p1SRrn1cG8lWs2T_DInuatAu6QElV6BBilo-71TvOVNdbzmPcuAvD7rzx3nPIv3bcwUqRdhO43oq5x7JjAdg13i76DiVUM",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiqyAry9F5Y7DG473ynslau61ilLqgkYIPFUo1RiOHtcJ15opM9knBPHITHAvFcLX5YpeTfLklrkB-HPg7srl0QdilW7dDxHk8e7uHXytPbK6TiVMZBIkK9Y9gGHH26BjJnm7SMXtjZpJAcaU0ZCodL9p1SRrn1cG8lWs2T_DInuatAu6QElV6BBilo-71TvOVNdbzmPcuAvD7rzx3nPIv3bcwUqRdhO43oq5x7JjAdg13i76DiVUM"
    ],
    colors: [
      { name: "مشکی زغالی", hex: "#1f1f1f", bgClass: "bg-[#1f1f1f]" }
    ],
    sizes: ["S", "M", "L"],
    description: "مانتو با ساختار ژئومتریک و آستین‌های فرم‌دار، دوخته شده از کرپ ابریشم درجه یک، بدون چروک‌پذیری.",
    careInstructions: "خشکشویی یا شستشوی ملایم."
  },
  {
    id: "parmida-wide-pants",
    sku: "TR-PRM-12",
    name: "شلوار واید پارمیدا",
    subtitle: "زنانه - دوخت سفارشی، خاکی",
    category: "women",
    subCategory: "pants",
    gender: "women",
    price: 3200000,
    originalPrice: 3200000,
    discountPercent: 0,
    isNew: false,
    isSale: false,
    inStock: true,
    stockCount: 19,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs4Zsg7slhju6qUMLwX7HSQdPIwgBUIa_bU7KwS7fW25WtccmBl0wsFtG3GdOQa9mugBQXcJbIQ3e31zw3TBx_oPw3uZ5wz4LTt6UP6-CxxAJh2OXGIb_f1hkuMM28o-72vPeuLe1cPawprf-xEfB0LtTdSRkKLn6HLn1Zlj06BclmRxecpc8GjuB-XAGgCO9xUVKefZAukvNG-zUTzpbdQ5aUfPie2I8sdU_fYOrV7jnqQ-7YGzrD",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCs4Zsg7slhju6qUMLwX7HSQdPIwgBUIa_bU7KwS7fW25WtccmBl0wsFtG3GdOQa9mugBQXcJbIQ3e31zw3TBx_oPw3uZ5wz4LTt6UP6-CxxAJh2OXGIb_f1hkuMM28o-72vPeuLe1cPawprf-xEfB0LtTdSRkKLn6HLn1Zlj06BclmRxecpc8GjuB-XAGgCO9xUVKefZAukvNG-zUTzpbdQ5aUfPie2I8sdU_fYOrV7jnqQ-7YGzrD"
    ],
    colors: [
      { name: "خاکی زیتونی", hex: "#9f9988", bgClass: "bg-[#9f9988]" },
      { name: "مشکی", hex: "#000000", bgClass: "bg-black" }
    ],
    sizes: ["۳۶", "۳۸", "۴۰"],
    description: "شلوار واید لگ با فاق بلند و پل کمربند ظریف، کشیدگی اندام و راحتی فوق‌العاده در طول روز.",
    careInstructions: "شستشو با ماشین در آب ولرم."
  },
  {
    id: "diplomat-wool-blazer",
    sku: "JKT-DPL-13",
    name: "کت پشمی دیپلمات",
    subtitle: "مردانه - پارچه راه‌راه پشمی با دوخت ایتالیایی",
    category: "men",
    subCategory: "blazer",
    gender: "men",
    price: 14500000,
    originalPrice: 14500000,
    discountPercent: 0,
    isNew: false,
    isSale: false,
    inStock: true,
    stockCount: 7,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-pDkqb3WHgTsjCa01GILlV09U6zyuNJg7iMB30Ly1W4gUkS8CrxSqTeD-nDgFnzEyOj2p7bnE0ZZPh9OPPjn0iKuu82vhlvzgpBmXleFkAz0I4Bkqy4GV7-0z58rR9OTWCLZVk0cep7bKceShz6HfkLC4bOX0K8LjhPkL_aipiIoTT7WBZz57mdBF2Rq1cQPFQD-3_UsRbH6-N0QhKvSZoTD_FPsfqnFKUGCK2xjtZ15inn8HuAFO",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-pDkqb3WHgTsjCa01GILlV09U6zyuNJg7iMB30Ly1W4gUkS8CrxSqTeD-nDgFnzEyOj2p7bnE0ZZPh9OPPjn0iKuu82vhlvzgpBmXleFkAz0I4Bkqy4GV7-0z58rR9OTWCLZVk0cep7bKceShz6HfkLC4bOX0K8LjhPkL_aipiIoTT7WBZz57mdBF2Rq1cQPFQD-3_UsRbH6-N0QhKvSZoTD_FPsfqnFKUGCK2xjtZ15inn8HuAFO"
    ],
    colors: [
      { name: "خاکستری زغالی راه‌راه", hex: "#444444", bgClass: "bg-[#444444]" }
    ],
    sizes: ["48", "50", "52", "54"],
    description: "پارچه پشمی سوپر ۱۲۰ با خطوط دیپلمات نامحسوس، خوش‌دوخت و مقاوم در برابر چروک.",
    careInstructions: "خشکشویی تخصصی."
  },
  {
    id: "oxford-cotton-shirt",
    sku: "SHR-OXF-14",
    name: "پیراهن پنبه‌ای آکسفورد",
    subtitle: "مردانه - پنبه خالص مصری، سفید کریستالی",
    category: "men",
    subCategory: "shirt",
    gender: "men",
    price: 3200000,
    originalPrice: 3200000,
    discountPercent: 0,
    isNew: false,
    isSale: false,
    inStock: true,
    stockCount: 35,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhY8fd0YLJrqW_AA4TmPgpBzqEIPdQ85-73DO2QzjbTAVFehr6DAINuvLSZyCN4BNuOk0zxCRN6GIJ507SSXJSrDGKT9w9dHeuI0QCzJcQ65NSbXMvaaYSiAHISW77tU64_esbFXcCu7CWY0jfJ9z0_WajS-DJwzu-4r9B29KV50BZdHICaHeb9t6zJ7lKnTgpU7JxpJguG-B6cZT-tfqhdKgC_u4QE9MtaumrJuvarGCS3pKIetKy",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhY8fd0YLJrqW_AA4TmPgpBzqEIPdQ85-73DO2QzjbTAVFehr6DAINuvLSZyCN4BNuOk0zxCRN6GIJ507SSXJSrDGKT9w9dHeuI0QCzJcQ65NSbXMvaaYSiAHISW77tU64_esbFXcCu7CWY0jfJ9z0_WajS-DJwzu-4r9B29KV50BZdHICaHeb9t6zJ7lKnTgpU7JxpJguG-B6cZT-tfqhdKgC_u4QE9MtaumrJuvarGCS3pKIetKy"
    ],
    colors: [
      { name: "سفید خالص", hex: "#ffffff", bgClass: "bg-white" },
      { name: "آبی آسمانی", hex: "#cce0ff", bgClass: "bg-[#cce0ff]" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "پیراهن کلاسیک با بافت آکسفورد متراکم، دکمه‌های صدف طبیعی و ایستایی بی‌نظیر یقه.",
    careInstructions: "شستشو با دمای ۴۰ درجه و اتوکشی بخار."
  },
  {
    id: "navy-sport-blazer",
    sku: "JKT-NVY-15",
    name: "کت تک اسپرت سرمه‌ای",
    subtitle: "مردانه - کتان کش با آستر نیمه",
    category: "men",
    subCategory: "blazer",
    gender: "men",
    price: 12000000,
    originalPrice: 12000000,
    discountPercent: 0,
    isNew: false,
    isSale: false,
    inStock: true,
    stockCount: 11,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU2QA4MiSgScwwOMDPPicNfLUNPWM5SA-3qj7ArucveOOoap1gJI5h4He4TWt3SMUI5ICDJYvLUFq-6YBS54BEJYq7Le0X-kgl6wyL4d_wMtaZDl8SHhdJoKHfvveF91noxNCqk5R2wFUGS0eqE4FBhzC13g_xQ4tuBP7pyUDD1zTseEM8YPIUVJNW-hDS9fsOXUeD6aN4VdsBG9l3rcCC16mEY6bxQ4zch1Q7tSGGZHa8xrE4FLi2",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU2QA4MiSgScwwOMDPPicNfLUNPWM5SA-3qj7ArucveOOoap1gJI5h4He4TWt3SMUI5ICDJYvLUFq-6YBS54BEJYq7Le0X-kgl6wyL4d_wMtaZDl8SHhdJoKHfvveF91noxNCqk5R2wFUGS0eqE4FBhzC13g_xQ4tuBP7pyUDD1zTseEM8YPIUVJNW-hDS9fsOXUeD6aN4VdsBG9l3rcCC16mEY6bxQ4zch1Q7tSGGZHa8xrE4FLi2"
    ],
    colors: [
      { name: "سرمه‌ای سیر", hex: "#111f36", bgClass: "bg-[#111f36]" }
    ],
    sizes: ["48", "50", "52", "54"],
    description: "کت تک همه‌کاره مناسب استایل کژوال با شلوار کتان یا استایل رسمی با شلوار پارچه‌ای.",
    careInstructions: "خشکشویی."
  },
  {
    id: "white-structured-blazer",
    sku: "JKT-WHT-16",
    name: "کت ساختاریافته سفید",
    subtitle: "زنانه - کرپ سنگین با خطوط معماری",
    category: "women",
    subCategory: "blazer",
    gender: "women",
    price: 8900000,
    originalPrice: 8900000,
    discountPercent: 0,
    isNew: true,
    isSale: false,
    inStock: true,
    stockCount: 9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA0KTXIoEPseEAGMIlmDiAJxZjWw3Fx1jfzVHQkqKZLCb6MNPHLOCnZ7DPmdiVkqxGdeN2RUtv49YmuzMFCLKnLs-_H4DXdInfqSgGRy6Y6sQ7ainTVKaYp_a5F4YQDxthkMxvb_l1dHSiHHmsTMOahCyuMQ7-Zl1t3awmlB8CxgpXGZRVXhQyeo0QKvrb_LzNoz7EQ5pMXbP03qJRpkdMsskeWd1hiOf1qtuf-8VTZPsr7pf1CIc9",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDA0KTXIoEPseEAGMIlmDiAJxZjWw3Fx1jfzVHQkqKZLCb6MNPHLOCnZ7DPmdiVkqxGdeN2RUtv49YmuzMFCLKnLs-_H4DXdInfqSgGRy6Y6sQ7ainTVKaYp_a5F4YQDxthkMxvb_l1dHSiHHmsTMOahCyuMQ7-Zl1t3awmlB8CxgpXGZRVXhQyeo0QKvrb_LzNoz7EQ5pMXbP03qJRpkdMsskeWd1hiOf1qtuf-8VTZPsr7pf1CIc9"
    ],
    colors: [
      { name: "سفید استخوانی", hex: "#faf8f5", bgClass: "bg-[#faf8f5]" }
    ],
    sizes: ["۳۶", "۳۸", "۴۰"],
    description: "کت خوش‌برش با لبه‌های دالبردار محو و برش کمر اسلیم، چشم‌نواز و شیک.",
    careInstructions: "خشکشویی تخصصی."
  },
  {
    id: "long-beige-wool-coat",
    sku: "COT-BGE-17",
    name: "پالتو پشمی بلند",
    subtitle: "زنانه - فوتر کوبیده اعلا، شتری و کرم",
    category: "women",
    subCategory: "coat",
    gender: "women",
    price: 18000000,
    originalPrice: 18000000,
    discountPercent: 0,
    isNew: false,
    isSale: false,
    inStock: true,
    stockCount: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSKDNVWDWYdWg2it2Z6XXpgFcPbO9_VJbBSWoaQ3iA7ag0Alv1bmPIUAyByHgLf7DdUXL5J2rkIL2wCYWawJZVe2oGreFJ_gN2lAoxnHlNEkXI2X9VQHu-qDXe0G2E_mLRNhzMcJmMWs-buAYGhtSMSJVo9RTdLz4JGRvHo2mhfrLd5asMdiJuiSA7NvGsCB17L7W393U0fPARwI58Vjg9hiCK6vSL4ZU6E8a3rfGjhRyPbcu9WiR-",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSKDNVWDWYdWg2it2Z6XXpgFcPbO9_VJbBSWoaQ3iA7ag0Alv1bmPIUAyByHgLf7DdUXL5J2rkIL2wCYWawJZVe2oGreFJ_gN2lAoxnHlNEkXI2X9VQHu-qDXe0G2E_mLRNhzMcJmMWs-buAYGhtSMSJVo9RTdLz4JGRvHo2mhfrLd5asMdiJuiSA7NvGsCB17L7W393U0fPARwI58Vjg9hiCK6vSL4ZU6E8a3rfGjhRyPbcu9WiR-"
    ],
    colors: [
      { name: "بژ شتری", hex: "#c3a887", bgClass: "bg-[#c3a887]" }
    ],
    sizes: ["۳۸", "۴۰", "۴۲"],
    description: "پالتوی کلوش ماکسی با کمربند چرمی و یقه آرشال پهن، گرما و ابهتی بی‌بدیل.",
    careInstructions: "خشکشویی."
  },
  {
    id: "burgundy-minimal-leather-bag",
    sku: "BAG-BRG-18",
    name: "کیف چرم مینیمال",
    subtitle: "زنانه - چرم طبیعی زرشکی عتیق",
    category: "accessories",
    subCategory: "bag",
    gender: "women",
    price: 6500000,
    originalPrice: 6500000,
    discountPercent: 0,
    isNew: false,
    isSale: false,
    inStock: true,
    stockCount: 7,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrnDLpcfyzyhJTeqgzENp7c8KtdP0-c7KYlYlEWAN71c0eXTQuBwxV6ESgiwAsAWFPkwcBd23uLiBeF_xjDXPPKzHvfWle_TIQq4XtUdwMlNUiPfbWYuLEDplTzoLE-XD7lWRJFNjl1PijvDSNqCkWV_TPfQ_-IDmihAAvATES1zAcdL-Jt7cQgLPyax3r1HA4QO-RIY33ambkaf1oZZyJ2goHit6xwJU5NpOHQ54aZCq_yk39MM1M",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrnDLpcfyzyhJTeqgzENp7c8KtdP0-c7KYlYlEWAN71c0eXTQuBwxV6ESgiwAsAWFPkwcBd23uLiBeF_xjDXPPKzHvfWle_TIQq4XtUdwMlNUiPfbWYuLEDplTzoLE-XD7lWRJFNjl1PijvDSNqCkWV_TPfQ_-IDmihAAvATES1zAcdL-Jt7cQgLPyax3r1HA4QO-RIY33ambkaf1oZZyJ2goHit6xwJU5NpOHQ54aZCq_yk39MM1M"
    ],
    colors: [
      { name: "زرشکی عمیق", hex: "#5a1827", bgClass: "bg-[#5a1827]" }
    ],
    sizes: ["استاندارد"],
    description: "کیف دستی دسته کوتاه با قفل فلزی آبکاری طلا و دوخت ریز دستی هنرمندان چرم تبریز.",
    careInstructions: "محافظت از تماس با الکل و مواد شیمیایی."
  }
];

/**
 * ==== اتصال به API واقعی (Cloudflare Worker + D1) ====
 * آدرس Worker خودتان را بعد از دیپلوی اینجا قرار دهید، مثلاً:
 * 'https://stylekish-api.YOUR-SUBDOMAIN.workers.dev'
 * یا اگر روی همان دامنه روت کردید: '/api'
 */
const API_BASE_URL = 'https://stylekish-api.stylekish-api.workers.dev/api';

// کش حافظه‌ای برای دسترسی سریع و همزمان (sync) از بقیه‌ی کد
let __productsCache = null;

// خواندن/نوشتن توکن ادمین (فقط در مرورگر خود ادمین ذخیره می‌شود)
function getAdminToken() {
  return localStorage.getItem('stylekish_admin_token') || '';
}
function setAdminToken(token) {
  localStorage.setItem('stylekish_admin_token', token);
}
function clearAdminToken() {
  localStorage.removeItem('stylekish_admin_token');
}

async function apiRequest(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  const token = getAdminToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE_URL}${path}`, { ...options, headers });
  let data = null;
  try { data = await res.json(); } catch (e) { /* no body */ }
  if (!res.ok) {
    const message = (data && data.error) || `خطای شبکه (${res.status})`;
    throw new Error(message);
  }
  return data;
}

/**
 * دریافت لیست محصولات به‌صورت async از API واقعی.
 * هر صفحه (index/products/product-detail) باید این تابع را در ابتدای بارگذاری صدا بزند.
 * نتیجه هم در کش حافظه و هم در localStorage (به‌عنوان fallback آفلاین) ذخیره می‌شود.
 */
async function loadProductsData() {
  try {
    const products = await apiRequest('/products', { method: 'GET' });
    __productsCache = products;
    try {
      localStorage.setItem('stylekish_products_cache', JSON.stringify(products));
    } catch (e) { /* ignore quota errors */ }
    return products;
  } catch (e) {
    console.warn('عدم دسترسی به API، استفاده از داده‌ی محلی/پیش‌فرض:', e.message);
    return getProductsData();
  }
}

/**
 * دسترسی همزمان (sync) به آخرین دیتای دریافت‌شده — برای کدهایی که نمی‌توانند async باشند
 * (مثل سبد خرید و Quick View). اگر هنوز loadProductsData صدا زده نشده باشد،
 * از کش localStorage و در نهایت از DEFAULT_PRODUCTS استفاده می‌شود.
 */
function getProductsData() {
  if (__productsCache) return __productsCache;
  try {
    const saved = localStorage.getItem('stylekish_products_cache');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('Error reading cached products', e);
  }
  return DEFAULT_PRODUCTS;
}

// ==== عملیات نوشتن (فقط ادمین) — از دیتابیس واقعی از طریق Worker ====
async function createProductAPI(product) {
  const created = await apiRequest('/products', { method: 'POST', body: JSON.stringify(product) });
  __productsCache = null; // کش را باطل کن تا در فراخوانی بعدی loadProductsData تازه شود
  return created;
}

async function updateProductAPI(id, product) {
  const updated = await apiRequest(`/products/${encodeURIComponent(id)}`, {
    method: 'PUT',
    body: JSON.stringify(product),
  });
  __productsCache = null;
  return updated;
}

async function deleteProductAPI(id) {
  const result = await apiRequest(`/products/${encodeURIComponent(id)}`, { method: 'DELETE' });
  __productsCache = null;
  return result;
}

async function verifyAdminToken(token) {
  const res = await fetch(`${API_BASE_URL}/admin/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  return res.ok;
}
