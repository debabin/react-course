"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  Check,
  Gift,
  Calendar,
  Users,
  MessageCircle,
  Sparkles,
  Code,
  Layout,
  Braces,
  Zap,
  FolderKanban,
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowUpRight,
  Rocket,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { AnimatedList } from "@/components/magicui/animated-list";
import { ConfettiButton, ConfettiRef } from "@/components/magicui/confetti";

import { cn } from "@/lib/utils";
import { Tree, Folder, File } from "@/components/magicui/file-tree"

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const confettiRef = useRef<ConfettiRef>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTestimonials = (direction: "left" | "right") => {
    if (testimonialsRef.current) {
      const scrollAmount = 350
      testimonialsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleButtonClick = () => {
    confettiRef.current?.fire({});
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">

      {/* Header */}
      <header
        className={`fixed bg-white/90 backdrop-blur-md top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">SiberiaCanCode</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#curriculum" className="text-sm hover:text-primary transition-colors">
              Программа курса
            </a>
            <a href="#testimonials" className="text-sm hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">
              Стоимость
            </a>
            <ConfettiButton
              options={{
                get angle() {
                  return Math.random() * 360;
                },
              }}
              size="sm"
              variant="default"
            >
              Записаться
            </ConfettiButton>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                <a href="#home" className="py-2 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  Главная
                </a>
                <a
                  href="#curriculum"
                  className="py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Программа курса
                </a>
                <a
                  href="#testimonials"
                  className="py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Отзывы
                </a>
                <a href="#faq" className="py-2 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  FAQ
                </a>
                <a
                  href="#pricing"
                  className="py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Стоимость
                </a>
                <ConfettiButton
                  options={{
                    get angle() {
                      return Math.random() * 360;
                    },
                  }}
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Записаться
                </ConfettiButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Banner Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#9CA3AF"
          maxOpacity={0.2}
          flickerChance={0.1}
        />

        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div className="container mx-auto px-4 relative z-10 mt-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-bold mb-6">
              Самый топовый курс по React и Next.js для современных разработчиков
            </h2>

            <VelocityScroll defaultVelocity={1} numRows={1} className="py-6 text-2xl md:text-3xl text-primary">
              TypeScript • Server Components • Zustand • Tailwind • Framer Motion • Server Actions
            </VelocityScroll>

            <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center">
              <a href="https://t.me/siberiacancode">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-14 py-6"
                >
                  Вступить в сообщество
                  <Users className="h-4 w-4" />
                </Button>
              </a>
              <a href="#pricing">
                <Button
                  size="lg"
                  className="px-14 py-6"
                >
                  Купить курс
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему стоит выбрать этот курс?</h2>
            <p className="text-zinc-600 text-lg">
              Мы создали курс, который даст вам все необходимые навыки для создания современных веб-приложений
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Актуальные технологии",
                description: "React 19, Next.js, Zustand и Server Actions — всё самое новое и востребованное на рынке.",
                icon: <Calendar className="h-12 w-12" />,
              },
              {
                title: "100% практика",
                description: "Создаем реальные проекты для портфолио с практическими заданиями в каждом модуле.",
                icon: <Check className="h-12 w-12" />,
              },
              {
                title: "Поддержка",
                description: "Доступ к закрытому сообществу и личная поддержка от преподавателя.",
                icon: <Users className="h-12 w-12" />,
              },
              {
                title: "Трудоустройство",
                description: "Помощь с резюме и подготовкой к собеседованиям для успешного старта карьеры.",
                icon: <Briefcase className="h-12 w-12" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/50 border border-zinc-200 rounded-xl p-6 hover:border-primary/50 transition-colors shadow-sm"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Программа курса</h2>
            <p className="text-zinc-600 text-lg">
              Полный путь от основ до продвинутых техник разработки на React и Next.js
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <BentoGrid className="max-w-6xl mx-auto">
              {[
                {
                  name: "Основы React 19",
                  href: "#",
                  background: (
                    <Marquee
                      pauseOnHover
                      className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]"
                    >
                      {[
                        { name: "useState", body: "Управление состоянием компонента" },
                        { name: "useEffect", body: "Побочные эффекты и жизненный цикл" },
                        { name: "useContext", body: "Доступ к контексту React" },
                        { name: "useReducer", body: "Сложное управление состоянием" },
                        { name: "useCallback", body: "Мемоизация функций" },
                        { name: "useMemo", body: "Мемоизация вычисляемых значений" },
                        { name: "useRef", body: "Доступ к DOM и сохранение значений" },
                        { name: "useLayoutEffect", body: "Синхронные эффекты" },
                        { name: "useTransition", body: "Приоритизация обновлений UI" },
                        { name: "useDeferredValue", body: "Отложенное обновление значений" }
                      ].map((hook, idx) => (
                        <figure
                          key={idx}
                          className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                          )}
                        >
                          <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col">
                              <figcaption className="text-sm font-medium dark:text-white ">
                                {hook.name}
                              </figcaption>
                            </div>
                          </div>
                          <blockquote className="mt-2 text-xs">{hook.body}</blockquote>
                        </figure>
                      ))}
                    </Marquee>
                  ),
                  cta: "Подробнее",
                  className: "col-span-2 row-span-1",
                  title: "Основы React 19",
                  description: "Компоненты, Хуки, Состояние, Новые возможности React 19, Работа с формами",
                  Icon: Code
                },
                {
                  name: "Next.js",
                  href: "#",
                  background: (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="size-62 opacity-60 transition-all duration-300 ease-out transform group-hover:scale-110 group-hover:-translate-y-2"
                        viewBox="0 0 180 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask id="mask0_408_139" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                          <circle cx="90" cy="90" r="90" fill="black" />
                        </mask>
                        <g mask="url(#mask0_408_139)">
                          <circle cx="90" cy="90" r="90" fill="white" />
                          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)" />
                          <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)" />
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="black" />
                            <stop offset="1" stopColor="black" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                            <stop stopColor="black" />
                            <stop offset="1" stopColor="black" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  ),
                  cta: "Подробнее",
                  className: "col-span-1 row-span-1",
                  title: "Next.js",
                  description: "App Router, SSR/CSR, API Routes, Server Components",
                  Icon: Layout
                },
                {
                  name: "Zustand & TypeScript",
                  href: "#",
                  background: (
                    <AnimatedList className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90">
                      {[
                        {
                          name: "Payment received",
                          description: "Zustand Store",
                          time: "15m ago",
                          icon: "💸",
                          color: "#00C9A7",
                        },
                        {
                          name: "User signed up",
                          description: "TypeScript Interface",
                          time: "10m ago",
                          icon: "👤",
                          color: "#FFB800",
                        },
                        {
                          name: "New message",
                          description: "State Management",
                          time: "5m ago",
                          icon: "💬",
                          color: "#FF3D71",
                        },
                        {
                          name: "New event",
                          description: "React Integration",
                          time: "2m ago",
                          icon: "🗞️",
                          color: "#1E86FF",
                        },
                      ].map((item, idx) => (
                        <figure
                          key={idx}
                          className={cn(
                            "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                            "transition-all duration-200 ease-in-out hover:scale-[103%]",
                            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                            "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                          )}
                        >
                          <div className="flex flex-row items-center gap-3">
                            <div
                              className="flex size-10 items-center justify-center rounded-2xl"
                              style={{
                                backgroundColor: item.color,
                              }}
                            >
                              <span className="text-lg">{item.icon}</span>
                            </div>
                            <div className="flex flex-col overflow-hidden">
                              <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                                <span className="text-sm sm:text-lg">{item.name}</span>
                                <span className="mx-1">·</span>
                                <span className="text-xs text-gray-500">{item.time}</span>
                              </figcaption>
                              <p className="text-sm font-normal dark:text-white/60">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </figure>
                      ))}
                    </AnimatedList>
                  ),
                  cta: "Подробнее",
                  className: "col-span-1 row-span-1",
                  title: "Zustand & TypeScript",
                  description: "Сильная типизация, управление состоянием, интеграция с React",
                  Icon: Braces
                },
                {
                  name: "Оптимизация",
                  href: "#",
                  background: (
                    <div className="absolute top-4 h-[300px] w-full scale-90 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90">
                      <Tree
                        initialSelectedId="7"
                        initialExpandedItems={[
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9",
                          "10",
                          "11",
                        ]}
                        elements={[
                          {
                            id: "1",
                            isSelectable: true,
                            name: "src",
                            children: [
                              {
                                id: "2",
                                isSelectable: true,
                                name: "app",
                                children: [
                                  {
                                    id: "3",
                                    isSelectable: true,
                                    name: "layout.tsx",
                                  },
                                  {
                                    id: "4",
                                    isSelectable: true,
                                    name: "page.tsx",
                                  },
                                ],
                              },
                              {
                                id: "5",
                                isSelectable: true,
                                name: "components",
                                children: [
                                  {
                                    id: "6",
                                    isSelectable: true,
                                    name: "header.tsx",
                                  }
                                ],
                              },
                            ],
                          },
                        ]}
                      >
                        <Folder element="src" value="1">
                          <Folder value="2" element="app">
                            <File value="3">
                              <p>layout.tsx</p>
                            </File>
                            <File value="4">
                              <p>page.tsx</p>
                            </File>
                          </Folder>
                          <Folder value="5" element="components">
                            <Folder value="6" element="ui">
                              <File value="7">
                                <p>button.tsx</p>
                              </File>
                            </Folder>
                          </Folder>
                        </Folder>
                      </Tree>
                    </div>
                  ),
                  cta: "Подробнее",
                  className: "col-span-2 row-span-1",
                  title: "Модуль 4: Оптимизация",
                  description: "Code Splitting, SEO, Ленивая загрузка, Кэширование",
                  Icon: Zap
                },
                {
                  name: "Проекты",
                  href: "#",
                  background: <img className="absolute -right-20 -top-20 opacity-60" />,
                  cta: "Подробнее",
                  className: "col-span-1 row-span-1",
                  title: "Модуль 5: Проекты",
                  description: "E-commerce, SaaS, Dashboards, Интеграция с API",
                  Icon: FolderKanban
                },
                {
                  name: "Анимации",
                  href: "#",
                  background: <img className="absolute -right-20 -top-20 opacity-60" />,
                  cta: "Подробнее",
                  className: "col-span-1 row-span-1",
                  title: "Модуль 6: Анимации",
                  description: "Framer Motion, Интерактивные интерфейсы, Доступность",
                  Icon: Sparkles
                },
                {
                  name: "Бонусный модуль: Деплой и CI/CD",
                  href: "#",
                  background: <img className="absolute -right-20 -top-20 opacity-60" />,
                  cta: "Подробнее",
                  className: "col-span-1 row-span-1",
                  title: "Бонусный модуль: Деплой и CI/CD",
                  description: "Vercel, Netlify, GitHub Actions, Автоматизация процессов разработки",
                  Icon: Rocket
                }
              ].map((module, index) => (
                <BentoCard
                  key={index}
                  name={module.name}
                  href={module.href}
                  background={module.background}
                  cta={module.cta}
                  className={module.className}
                  title={module.title}
                  description={module.description}
                  Icon={module.Icon}
                  onClick={handleButtonClick}
                />
              ))}
            </BentoGrid>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы студентов</h2>
            <p className="text-zinc-600 text-lg">Что говорят выпускники о нашем курсе</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/50 backdrop-blur-sm border-zinc-200"
                onClick={() => scrollTestimonials("left")}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/50 backdrop-blur-sm border-zinc-200"
                onClick={() => scrollTestimonials("right")}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div
              ref={testimonialsRef}
              className="flex overflow-x-auto gap-6 pb-6 px-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[
                {
                  name: "Иван С.",
                  avatar: "И",
                  text: "Благодаря курсу я получил работу в IT! Материал подан очень структурированно, а практические задания помогли закрепить знания.",
                  rating: 5,
                  position: "Frontend Developer",
                  company: "NeoTech",
                },
                {
                  name: "Екатерина П.",
                  avatar: "Е",
                  text: "Лучший курс по Next.js, рекомендую! Дмитрий объясняет сложные концепции простым языком, а поддержка в чате просто на высоте.",
                  rating: 5,
                  position: "Web Developer",
                  company: "DigitalWave",
                },
                {
                  name: "Алексей Г.",
                  avatar: "А",
                  text: "Теперь я могу создавать современные веб-приложения! Особенно понравились модули по оптимизации и работе с Server Components.",
                  rating: 4.5,
                  position: "Full-stack Developer",
                  company: "SiberCode",
                },
                {
                  name: "Мария К.",
                  avatar: "М",
                  text: "Отличный курс для тех, кто хочет освоить современный стек технологий. Много практики и реальных примеров.",
                  rating: 5,
                  position: "React Developer",
                  company: "FutureWeb",
                },
                {
                  name: "Дмитрий Л.",
                  avatar: "Д",
                  text: "Курс помог мне перейти с Angular на React и Next.js. Очень доволен результатом и новыми возможностями.",
                  rating: 4.8,
                  position: "Senior Developer",
                  company: "AlphaStream",
                },
              ].map((testimonial, index) => (
                <motion.div key={index} variants={fadeIn} className="min-w-[300px] md:min-w-[400px] snap-center">
                  <Card className="bg-white border-zinc-200 shadow-sm overflow-hidden h-full">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-4">
                          <Avatar className="border-2 border-primary">
                            <AvatarFallback className="bg-primary/20 text-primary">{testimonial.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg text-zinc-900">{testimonial.name}</CardTitle>
                            <CardDescription className="text-zinc-500">
                              {testimonial.position}, {testimonial.company}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-30 z-0"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              <span className="text-primary font-medium">Дополнительные преимущества</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-700">Бонусы к курсу</h2>
            <p className="text-zinc-600 text-lg">Дополнительные материалы, которые помогут вам в обучении</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Доступ к закрытому чату",
                description: "Личное общение с Дмитрием Бабиным и другими студентами курса",
                icon: <MessageCircle className="h-10 w-10 text-primary" />,
                gradient: "from-blue-500/10 to-blue-700/10",
                border: "border-blue-500/30"
              },
              {
                title: "Чек-листы и гайды",
                description: "Полезные материалы для быстрого старта и решения типовых задач",
                icon: <Check className="h-10 w-10 text-purple-400" />,
                gradient: "from-purple-500/10 to-purple-700/10",
                border: "border-purple-500/30"
              },
              {
                title: "Готовые шаблоны",
                description: "Шаблоны проектов на Next.js, которые можно использовать для своих задач",
                icon: <Gift className="h-10 w-10 text-green-400" />,
                gradient: "from-green-500/10 to-green-700/10",
                border: "border-green-500/30"
              },
            ].map((bonus, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`relative group rounded-2xl p-1 bg-gradient-to-br ${bonus.gradient} hover:shadow-lg transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                <div className={`h-full bg-white/80 backdrop-blur-sm rounded-xl p-8 border ${bonus.border} flex flex-col shadow-sm`}>
                  <div className="p-4 rounded-2xl bg-zinc-100 w-fit mb-6">
                    {bonus.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    {bonus.title}
                  </h3>
                  <p className="text-zinc-600 mb-6">{bonus.description}</p>
                  <div className="mt-auto">
                    <div className="flex items-center transition-colors cursor-pointer text-primary hover:text-primary/80">
                      <span className="text-sm font-medium">Подробнее</span>
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Стоимость курса</h2>
            <p className="text-zinc-600 text-lg">Инвестиция в ваше будущее как разработчика</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Базовый тариф */}
            <motion.div variants={fadeIn}>
              <Card className="bg-white border border-zinc-200 overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <Badge variant="outline" className="mb-3 border-blue-500/30 text-blue-600">
                      Базовый
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900">Старт</h3>
                    <p className="text-zinc-600 mt-2">Основы React и Next.js</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-3xl font-bold text-zinc-900">45 000 ₽</p>
                    <p className="text-sm text-zinc-500">Доступ на 6 месяцев</p>
                  </div>

                  <Separator className="my-6" />

                  <ul className="space-y-3 mb-6 flex-grow">
                    {[
                      "Первые 2 модуля курса",
                      "Базовые практические задания",
                      "Доступ к общему чату студентов",
                      "Базовые шаблоны проектов",
                      "Электронный сертификат",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-zinc-700">
                        <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ConfettiButton
                    options={{
                      get angle() {
                        return Math.random() * 360;
                      },
                    }}
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700">
                    Выбрать тариф
                  </ConfettiButton>
                </div>
              </Card>
            </motion.div>

            {/* Стандартный тариф */}
            <motion.div variants={fadeIn}>
              <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/30 overflow-hidden h-full relative shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"></div>
                <div className="absolute -right-12 -top-12 size-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <Badge className="mb-3 bg-primary text-white">
                      Популярный выбор
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900">Стандарт</h3>
                    <p className="text-zinc-600 mt-2">Полный курс с поддержкой</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-3xl font-bold text-zinc-900">75 000 ₽</p>
                    <p className="text-sm text-zinc-500">Доступ на 12 месяцев</p>
                  </div>

                  <Separator className="my-6" />

                  <ul className="space-y-3 mb-6 flex-grow">
                    {[
                      "Все 5 модулей курса",
                      "Расширенные практические задания",
                      "Доступ к закрытому чату с Дмитрием",
                      "Чек-листы и полезные гайды",
                      "Готовые шаблоны проектов",
                      "Сертификат о прохождении курса",
                      "Оплата частями (3 платежа)",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-zinc-700">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ConfettiButton
                    options={{
                      get angle() {
                        return Math.random() * 360;
                      },
                    }}
                    size="lg"
                    className="w-full">
                    Выбрать тариф
                  </ConfettiButton>
                </div>
              </Card>
            </motion.div>

            {/* Премиум тариф */}
            <motion.div variants={fadeIn}>
              <Card className="bg-gradient-to-br from-purple-500/5 to-indigo-500/5 border border-purple-500/30 overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <Badge variant="outline" className="mb-3 border-purple-500/30 text-purple-600">
                      Премиум
                    </Badge>
                    <h3 className="text-2xl font-bold text-zinc-900">VIP</h3>
                    <p className="text-zinc-600 mt-2">Максимальная поддержка</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-3xl font-bold text-zinc-900">120 000 ₽</p>
                    <p className="text-sm text-zinc-500">Доступ навсегда</p>
                  </div>

                  <Separator className="my-6" />

                  <ul className="space-y-3 mb-6 flex-grow">
                    {[
                      "Все модули и материалы курса",
                      "Персональные консультации (5 часов)",
                      "Приоритетная поддержка 24/7",
                      "Код-ревью ваших проектов",
                      "Эксклюзивные мастер-классы",
                      "Помощь с трудоустройством",
                      "Все шаблоны и исходники",
                      "Оплата частями (до 6 платежей)",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-zinc-700">
                        <Check className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ConfettiButton
                    options={{
                      get angle() {
                        return Math.random() * 360;
                      },
                    }}
                    size="lg"
                    className="w-full bg-purple-600 hover:bg-purple-700">
                    Выбрать тариф
                  </ConfettiButton>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-purple-900/5 to-transparent"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-purple-800/10 via-indigo-900/5 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-conic from-blue-700/5 via-purple-800/5 to-pink-600/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-purple-900/5 to-transparent opacity-60"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-700/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-600/5 to-blue-600/5 blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="inline-block mb-6 relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 blur-xl"></div>
              <Rocket className="h-32 w-32 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">Начните свой путь в React-разработке сегодня</h2>
            <div className="prose mx-auto">
              <p className="text-xl mb-6 text-zinc-700">
                Присоединяйтесь к сотням разработчиков, которые уже изменили свою карьеру с помощью нашего курса. Количество мест ограничено!
              </p>
              <ConfettiButton
                options={{
                  get angle() {
                    return Math.random() * 360;
                  },
                }}
                size="lg"
              >
                Забронировать место
              </ConfettiButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-zinc-600 text-lg">Ответы на популярные вопросы о курсе</p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Как долго длится курс?",
                  answer:
                    "Курс рассчитан на пару недель обучения. Каждую неделю выходит новый модуль с теорией и практическими заданиями.",
                },
                {
                  question: "Подойдет ли мне курс, если я новичок?",
                  answer:
                    "Для комфортного прохождения курса желательно иметь базовые знания HTML, CSS и JavaScript. Если вы совсем новичок, рекомендуем сначала пройти вводный курс по основам веб-разработки.",
                },
                {
                  question: "Можно ли вернуть деньги, если курс не подойдет?",
                  answer:
                    "Нет, мы не предоставляем гарантию возврата денег в течение 14 дней с момента начала обучения. Если курс вам не подойдет, мы не вернем полную стоимость.",
                },
                {
                  question: "Это шутка?",
                  answer:
                    "Да! Этот лендинг сделан в честь 1 апреля.",
                },
              ].map((faq, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <AccordionItem value={`item-${index}`} className="border border-zinc-200 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:bg-zinc-100/50 transition-colors">
                      <div className="flex items-center gap-3 text-left">
                        <span className="text-lg font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-zinc-50/50">
                      <p className="text-zinc-700">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-white">SiberiaCanCode</h3>
              <p className="text-white/70 mb-4">Обучаем современной веб-разработке с фокусом на практические навыки</p>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-white">Навигация</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-white/70 hover:text-white transition-colors">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#curriculum" className="text-white/70 hover:text-white transition-colors">
                    Программа курса
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">
                    Отзывы
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-white">Контакты</h4>
              <ul className="space-y-2">
                <li className="text-white/70">Email: info@siberiacancode.ru</li>
                <li className="text-white/70">Телеграм: @siberiacancode</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-white">Подписаться на обновления</h4>
              <div className="flex gap-2">
                <a href="https://t.me/siberiacancode">
                  <Button variant="outline">Подписаться</Button>
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">© {new Date().getFullYear()} SiberiaCanCode. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-0 right-0 z-40 px-4"
          >
            <div className="max-w-md mx-auto bg-black/90 backdrop-blur-md border border-zinc-800 rounded-lg p-4 shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-white">Готовы начать обучение?</p>
                  <p className="text-sm text-white/70">Запишитесь на курс прямо сейчас</p>
                </div>
                <ConfettiButton size="sm">Записаться</ConfettiButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

