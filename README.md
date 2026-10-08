# Funiro

Учебный проект: вёрстка главной страницы интернет-магазина мебели по макету Furniro на React + Vite + Tailwind CSS v4.

Сейчас это только одна страница (главная). Данные — заглушки, бэкенда нет.

## Стек

- React 19 + Vite 8
- Tailwind CSS 4 (через `@tailwindcss/vite`)
- Embla Carousel (слайдеры, плюс автоплей)
- ESLint 10 с плагинами react-hooks и react-refresh

## Запуск

```bash
npm install
npm run dev      # dev-сервер
npm run build    # сборка в dist/
npm run preview  # просмотр собранной версии
npm run lint     # проверка ESLint
```

## Структура

Проект построен по Feature-Sliced Design (слои сверху вниз):

```
src/
├── app/        # корневой компонент App
├── pages/      # страницы; сейчас только home
├── widgets/    # большие самостоятельные блоки: header, footer
├── features/   # пользовательские сценарии: subscribe (форма подписки)
├── entities/   # бизнес-сущности и их карточки: product, room, article
└── shared/     # переиспользуемое без привязки к домену
    ├── ui/     # кнопки, инпуты, карусель, Reveal-анимации, иконки и т.д.
    ├── lib/    # утилиты: cn, formatPrice, useInView
    └── config/ # константы layout (ширина контейнера, брейкпоинты)
```

Внутри каждого слайса обычно есть `ui/` (компоненты) и `model/` (данные или логика). Например, `pages/home/model/products.js` — это моковые товары для главной.

Правило FSD: слой может импортировать только из слоёв ниже него (`pages` → `widgets` → `features` → `entities` → `shared`). Обратные импорты не делаем.

## Где что лежит

- Главная страница собирается в [src/pages/home/ui/HomePage.jsx](src/pages/home/ui/HomePage.jsx): Header, Hero, Features, Products, Rooms, Tips, Gallery, Footer.
- Данные для секций — в `src/pages/home/model/`.
- Глобальные стили и дизайн-токены (цвета, шрифт Poppins) — в [src/index.css](src/index.css) внутри блока `@theme`.
- Константы ширины контейнера (`CONTAINER_MAX_WIDTH`, `CONTAINER_PADDING`) лежат в `src/shared/config/layout.js` и должны совпадать с классами `Container`.

## Что дальше

- Другие страницы (товар, каталог) — нужен роутер.
- Вынести данные из `model/` на сервер.
- Подключить реальную отправку формы подписки (сейчас только `onSubmit`).
