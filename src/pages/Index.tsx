import { useState } from "react";
import Icon from "@/components/ui/icon";

const GALLERY_IMAGES = [
  {
    src: "https://cdn.poehali.dev/projects/f0397fbb-8dd1-4820-8fbe-f4fdce4b4bef/bucket/c883c5ff-3487-4e40-ab0d-a89206e8d8fe.jpeg",
    alt: "Канапе ассорти",
    label: "Канапе ассорти",
  },
  {
    src: "https://cdn.poehali.dev/projects/f0397fbb-8dd1-4820-8fbe-f4fdce4b4bef/bucket/4bdcf561-8329-4d0a-bbd9-e27fb8ccb9d9.jpeg",
    alt: "Мини-тако",
    label: "Мини-тако",
  },
  {
    src: "https://cdn.poehali.dev/projects/f0397fbb-8dd1-4820-8fbe-f4fdce4b4bef/bucket/f2d8110d-e3a8-49e1-8775-d3bec8e28ed8.jpeg",
    alt: "Закусочный бокс",
    label: "Закусочный бокс",
  },
  {
    src: "https://cdn.poehali.dev/projects/f0397fbb-8dd1-4820-8fbe-f4fdce4b4bef/bucket/95676424-e9bf-4ffe-af8a-d7aabed8a3b1.jpeg",
    alt: "Праздничный буфет",
    label: "Праздничный буфет",
  },
  {
    src: "https://cdn.poehali.dev/projects/f0397fbb-8dd1-4820-8fbe-f4fdce4b4bef/bucket/405a099c-b30b-4fd0-950b-57f9d1f3c1a7.jpeg",
    alt: "Большой фуршетный стол",
    label: "Фуршетный стол",
  },
];

const PRICING = [
  {
    name: "Базовый",
    price: "от 1 500 ₽",
    perPerson: "за персону",
    description: "Классический фуршет для небольших мероприятий",
    features: [
      "Холодные закуски — 8 позиций",
      "Канапе и тарталетки",
      "Безалкогольные напитки",
      "Посуда и приборы",
      "Обслуживание 2 часа",
    ],
    highlight: false,
  },
  {
    name: "Премиум",
    price: "от 3 200 ₽",
    perPerson: "за персону",
    description: "Полное меню для корпоративных событий и свадеб",
    features: [
      "Горячие и холодные блюда — 16 позиций",
      "Авторские канапе и суши",
      "Алкогольные и безалкогольные напитки",
      "Именные карточки и декор",
      "Персональный менеджер",
      "Обслуживание 4 часа",
    ],
    highlight: true,
  },
  {
    name: "Эксклюзив",
    price: "от 5 800 ₽",
    perPerson: "за персону",
    description: "Индивидуальная концепция под ваш праздник",
    features: [
      "Меню под ключ без ограничений",
      "Живая кулинарная станция",
      "Сомелье и барный сервис",
      "Флористика и оформление",
      "Шеф-повар на мероприятии",
      "Фото сервировки в подарок",
    ],
    highlight: false,
  },
];

export default function Index() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-xl font-light tracking-widest uppercase text-foreground">
            Буфет
          </span>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Главная", href: "#hero" },
              { label: "Галерея", href: "#gallery" },
              { label: "Цены", href: "#prices" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-wider text-foreground/65 hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <button className="text-sm tracking-wider px-5 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
              Заказать
            </button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
            {[
              { label: "Главная", href: "#hero" },
              { label: "Галерея", href: "#gallery" },
              { label: "Цены", href: "#prices" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-wider text-foreground/65 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="text-sm tracking-wider px-5 py-2 border border-foreground text-foreground w-fit">
              Заказать
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative pt-16 min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={GALLERY_IMAGES[0].src}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.3em] uppercase text-white/70 font-medium mb-6 opacity-0-init animate-fade-up delay-100">
              Изысканный фуршет
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.1] text-white mb-8 opacity-0-init animate-fade-up delay-200">
              Каждый праздник
              <br />
              <em className="italic font-light">заслуживает</em>
              <br />
              большего
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-md opacity-0-init animate-fade-up delay-300">
              Профессиональный фуршет для корпоративных мероприятий, свадеб и
              частных праздников. Авторское меню, безупречная сервировка,
              полное сопровождение.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0-init animate-fade-up delay-400">
              <button className="px-8 py-3.5 bg-white text-foreground text-sm tracking-wider hover:opacity-90 transition-opacity duration-200">
                Рассчитать стоимость
              </button>
              <button className="px-8 py-3.5 border border-white text-white text-sm tracking-wider hover:bg-white hover:text-foreground transition-all duration-300">
                Смотреть меню
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg opacity-0-init animate-fade-up delay-500">
            {[
              { num: "8+", label: "лет опыта" },
              { num: "500+", label: "мероприятий" },
              { num: "98%", label: "довольных клиентов" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-display text-3xl font-semibold text-white">
                  {num}
                </div>
                <div className="text-sm tracking-wider text-white/65 mt-1 uppercase font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-16 border-y border-border bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                icon: "ChefHat",
                title: "Авторское меню",
                desc: "Шеф-повар разрабатывает меню индивидуально под ваш формат и вкусы гостей",
              },
              {
                icon: "Users",
                title: "От 20 до 1000 гостей",
                desc: "Организуем фуршет любого масштаба — от камерного ужина до масштабного приёма",
              },
              {
                icon: "Truck",
                title: "Полный выезд",
                desc: "Привозим всё необходимое: оборудование, посуду, декор и команду профессионалов",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center">
                  <Icon name={icon as "ChefHat" | "Users" | "Truck"} size={20} className="text-foreground/70" />
                </div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="text-base text-foreground/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-sm tracking-[0.3em] uppercase text-foreground/65 font-medium mb-3">
              Наши работы
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Галерея блюд
              <br />
              <em className="italic font-light">и сервировки</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden cursor-pointer group ${
                  i === 0 ? "col-span-2 row-span-2" : "col-span-1"
                }`}
                onClick={() => setActiveImage(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs tracking-wider text-white/90 uppercase bg-foreground/60 px-3 py-1">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="text-sm tracking-wider text-foreground/65 border-b border-foreground/40 pb-0.5 font-medium hover:text-foreground hover:border-foreground transition-colors duration-200">
              Смотреть все фотографии
            </button>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-foreground/65 font-medium mb-3">
              Пакеты услуг
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Прозрачные цены
            </h2>
            <p className="mt-4 text-base text-foreground/70 max-w-md mx-auto">
              Цена зависит от количества гостей и выбранного меню. Точный расчёт — бесплатно и без обязательств.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-foreground text-background"
                    : "bg-background border border-border"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-8 text-xs tracking-[0.2em] uppercase bg-accent text-foreground px-3 py-1">
                    Популярный
                  </span>
                )}
                <div className="mb-6">
                  <h3
                    className={`font-display text-2xl font-semibold mb-1 ${
                      plan.highlight ? "text-background" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      plan.highlight ? "text-background/80" : "text-foreground/70"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div
                    className={`font-display text-3xl font-semibold ${
                      plan.highlight ? "text-background" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </div>
                  <div
                    className={`text-sm tracking-wider mt-0.5 ${
                      plan.highlight ? "text-background/70" : "text-foreground/65"
                    }`}
                  >
                    {plan.perPerson}
                  </div>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Icon
                        name="Check"
                        size={14}
                        className={`mt-0.5 shrink-0 ${
                          plan.highlight ? "text-background/90" : "text-foreground/70"
                        }`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          plan.highlight ? "text-background/95" : "text-foreground"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 text-sm tracking-wider border transition-all duration-300 ${
                    plan.highlight
                      ? "border-background/50 text-background hover:bg-background hover:text-foreground"
                      : "border-foreground text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  Выбрать пакет
                </button>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-foreground/65">
            Минимальный заказ — 20 персон. Выезд в Москве и Подмосковье.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-foreground/65 font-medium mb-4">
            Готовы к сотрудничеству?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Обсудим ваш
            <br />
            <em className="italic">праздник</em>
          </h2>
          <p className="text-base text-foreground/70 mb-10 leading-relaxed">
            Оставьте заявку — свяжемся в течение часа, обсудим детали и рассчитаем стоимость бесплатно.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className="flex-1 px-5 py-3.5 border border-border bg-background text-sm outline-none focus:border-foreground transition-colors"
            />
            <button className="px-8 py-3.5 bg-foreground text-background text-sm tracking-wider hover:opacity-80 transition-opacity whitespace-nowrap">
              Получить расчёт
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-light tracking-widest uppercase text-foreground">
            Буфет
          </span>
          <div className="flex items-center gap-6 text-sm text-foreground/65 tracking-wider">
            <span>+7 (495) 000-00-00</span>
            <span>info@furshet.ru</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {activeImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-background"
            onClick={() => setActiveImage(null)}
          >
            <Icon name="X" size={24} />
          </button>
          <img
            src={GALLERY_IMAGES[activeImage].src}
            alt={GALLERY_IMAGES[activeImage].alt}
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-background/60 text-sm tracking-wider">
            {GALLERY_IMAGES[activeImage].label}
          </p>
        </div>
      )}
    </div>
  );
}