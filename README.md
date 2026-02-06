# Mango Entertainment Website 🥭

Een display pagina voor de gamestudio Mango Entertainment - een frisse indie game studio die passie en creativiteit samenbrengt.

## 📋 Project Overzicht

Dit is de officiële website voor Mango Entertainment, een indie gamestudio. De website bevat informatie over de studio, hun games, blog posts, en contact informatie.

## 🗂️ Project Structuur

```
mango-entertainment-website/
├── index.html              # Hoofd HTML bestand
├── README.md              # Project documentatie
└── assets/                # Alle website assets
    ├── css/
    │   └── style.css      # Hoofd stylesheet met Mango thema
    ├── js/
    │   └── script.js      # JavaScript functionaliteit
    ├── fonts/             # Custom gaming fonts
    │   ├── karmatic_arcade/
    │   │   └── ka1.ttf    # Retro arcade font voor headings
    │   └── game_over/
    │       └── game_over.ttf  # Gaming font voor body text
    └── img/               # Afbeeldingen
        ├── mango_entertainment_logo.png
        ├── obscura_logo.png
        └── placeholder.jpg
```

## 🎨 Features

- **Responsive Design**: Werkt op desktop, tablet en mobiele apparaten
- **Smooth Scrolling**: Vloeiende navigatie tussen secties
- **Active Navigation**: Automatische highlighting van huidige sectie
- **Glassmorphism**: Moderne glasachtige effecten
- **Mango Thema**: Warme oranje kleuren geïnspireerd door mango's
- **Retro Gaming Fonts**: Authentieke arcade-stijl typografie

## 🚀 Gebruik

### Website Lokaal Openen

1. Clone de repository:
   ```bash
   git clone https://github.com/Yonaki51/mango-entertainment-website.git
   ```

2. Open `index.html` in een webbrowser:
   - Dubbelklik op het bestand, of
   - Gebruik een lokale server (zie hieronder voor beste ervaring)

> **Note:** De website gebruikt een `<base>` tag voor GitHub Pages deployment. Voor lokale ontwikkeling, gebruik een van de hieronder genoemde server opties die de repository naam in de URL simuleren, of open het bestand direct in de browser (werkt ook, maar zonder de base path).

### Met Lokale Server

Voor de beste ervaring, gebruik een lokale development server:

```bash
# Met Python 3
python -m http.server 8000

# Met Node.js (http-server package)
npx http-server

# Met PHP
php -S localhost:8000
```

Navigeer dan naar `http://localhost:8000` in je browser.

### GitHub Pages Deployment

De website is geconfigureerd voor deployment op GitHub Pages:
- **URL**: `https://yonaki51.github.io/mango-entertainment-website/`
- **Configuratie**: De `<base>` tag in `index.html` zorgt ervoor dat alle assets correct laden op GitHub Pages
- **Setup**: Ga naar repository Settings → Pages → selecteer de branch om te deployen

> **Note voor forks**: Als je deze repository forkt of de naam verandert, update dan de `<base href="/mango-entertainment-website/">` tag in `index.html` naar je nieuwe repository naam.

## 🎯 Secties

- **Home**: Welkomstbericht en introductie
- **Blog**: Laatste updates en behind-the-scenes inzichten
- **Games**: Overzicht van game projecten
- **About**: Informatie over de studio
- **Contact**: Contact informatie

## 🛠️ Technologieën

- HTML5
- CSS3 (met CSS Custom Properties)
- Vanilla JavaScript (geen frameworks)
- Custom Web Fonts

## 📝 Licentie

© 2024-2026 Mango Entertainment. Alle rechten voorbehouden.

## 👥 Contact

Voor vragen of samenwerking, neem contact op via de website.
