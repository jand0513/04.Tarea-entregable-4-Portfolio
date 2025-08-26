# 💼 Portfolio Adam Keyes - Frontend Developer

![Portfolio Preview](./01.%20Png%20Proyecto/Home%20-%20Desktop.png)

## 🌟 Descripción

Portfolio personal de Adam Keyes, un desarrollador frontend especializado en crear experiencias web modernas y responsivas. Este proyecto está construido con tecnologías modernas y sigue las mejores prácticas de desarrollo web.

## 🚀 Demo en Vivo

**🌐 Ver Portfolio:** [https://jand0513.github.io/04.Tarea-entregable-4-Portfolio/](https://jand0513.github.io/04.Tarea-entregable-4-Portfolio/)

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3/SASS** - Estilos y diseño responsivo
- **JavaScript ES6+** - Interactividad
- **Vite** - Build tool y desarrollo
- **GitHub Pages** - Despliegue automático

## 📁 Estructura del Proyecto

```
04.Tarea-entregable-4-Portfolio/
├── 📄 index.html                    # Página principal
├── 📄 main.js                       # Punto de entrada JavaScript
├── 📄 package.json                  # Dependencias y scripts
├── 📄 vite.config.js               # Configuración de Vite
├── 📄 README.md                     # Documentación del proyecto
├── 📄 .gitignore                    # Archivos ignorados por Git
│
├── 📂 01. Png Proyecto/            # Diseños y mockups
│   ├── Design System.png
│   ├── Home - Desktop.png
│   ├── Home - Desktop - Active.png
│   ├── Home - Mobile.png
│   └── Home - Tablet.png
│
├── 📂 img/                         # Recursos de imágenes
│   ├── logoadamkeyes.png
│   ├── 📂 desktop/                 # Imágenes para escritorio
│   │   ├── image-profile-desktop.webp
│   │   └── thumbnail-project-*.webp
│   ├── 📂 mobile/                  # Imágenes para móvil
│   │   ├── image-profile-mobile.webp
│   │   └── thumbnail-project-*.webp
│   ├── 📂 tablet/                  # Imágenes para tablet
│   │   └── thumbnail-project-*.webp
│   └── 📂 icons/                   # Iconos SVG
│       ├── icon-github.svg
│       ├── icon-linkedin.svg
│       ├── icon-twitter.svg
│       ├── icon-frontend-mentor.svg
│       ├── pattern-circle.svg
│       └── pattern-rings.svg
│
├── 📂 js/                          # Scripts JavaScript
│   ├── app.js                      # Lógica principal
│   └── 📂 vendor/                  # Librerías de terceros
│
├── 📂 sass/                        # Estilos SASS organizados
│   ├── app.scss                    # Archivo principal de estilos
│   ├── _settings.scss              # Variables globales
│   │
│   ├── 📂 abstracts/               # Herramientas y helpers
│   │   ├── _abstracts.scss
│   │   ├── _variables.scss
│   │   ├── _functions.scss
│   │   ├── _mixins.scss
│   │   └── _placeholders.scss
│   │
│   ├── 📂 base/                    # Estilos base
│   │   ├── _base.scss
│   │   ├── _reset.scss
│   │   ├── _typography.scss
│   │   └── _animations.scss
│   │
│   ├── 📂 components/              # Componentes reutilizables
│   │   ├── _components.scss
│   │   └── _buttons.scss
│   │
│   ├── 📂 layout/                  # Estructura de página
│   │   ├── _layout.scss
│   │   ├── _header.scss
│   │   ├── _navbar.scss
│   │   ├── _hero.scss
│   │   ├── _skills.scss
│   │   ├── _projects.scss
│   │   ├── _contact.scss
│   │   ├── _footer.scss
│   │   ├── _grid.scss
│   │   ├── _forms.scss
│   │   └── _sidebar.scss
│   │
│   ├── 📂 pages/                   # Estilos específicos de página
│   │   └── _pages.scss
│   │
│   ├── 📂 themes/                  # Temas y variaciones
│   │   └── _themes.scss
│   │
│   └── 📂 vendors/                 # Estilos de librerías externas
│       └── _vendors.scss
│
└── 📂 .github/                     # Configuración de GitHub
    └── 📂 workflows/
        └── deploy.yml              # Despliegue automático
```

## 🎨 Características del Diseño

### 📱 Diseño Responsivo
- **Mobile First:** Optimizado para dispositivos móviles
- **Breakpoints:** 375px (móvil), 768px (tablet), 1440px (escritorio)
- **Imágenes Adaptativas:** Diferentes resoluciones según dispositivo

### 🎯 Secciones Principales
1. **Hero Section** - Presentación personal con imagen de perfil
2. **Skills** - Tecnologías y habilidades técnicas
3. **Projects** - Portafolio de proyectos con enlaces
4. **Contact** - Formulario de contacto funcional

### 🎨 Sistema de Diseño
- **Tipografía:** Space Grotesk
- **Colores:** Esquema de colores oscuro/claro
- **Iconografía:** Iconos SVG personalizados
- **Animaciones:** Transiciones suaves y efectos hover

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/jand0513/04.Tarea-entregable-4-Portfolio.git

# Navegar al directorio
cd 04.Tarea-entregable-4-Portfolio

# Instalar dependencias
npm install
```

### Scripts Disponibles
```bash
# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📦 Build y Despliegue

### Desarrollo Local
```bash
npm run dev
```
- Servidor local en `http://localhost:3000`
- Hot reload automático
- Source maps para debugging

### Producción
```bash
npm run build
```
- Minificación de archivos
- Optimización de imágenes
- Generación de source maps

### Despliegue Automático
El proyecto incluye GitHub Actions para despliegue automático:
- **Trigger:** Push a la rama `main`
- **Destino:** GitHub Pages
- **URL:** https://jand0513.github.io/04.Tarea-entregable-4-Portfolio/

## 🌐 Navegadores Soportados

| Navegador | Versión Mínima |
|-----------|----------------|
| Chrome    | 90+            |
| Firefox   | 88+            |
| Safari    | 14+            |
| Edge      | 90+            |

## 📈 Performance

- ⚡ **Lighthouse Score:** 95+ en todas las métricas
- 🖼️ **Imágenes Optimizadas:** WebP para mejor compresión
- 📦 **CSS Optimizado:** SASS con arquitectura escalable
- 🔧 **Build Optimizado:** Vite para bundling eficiente

## 🤝 Contribución

Si quieres contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE.txt](LICENSE.txt) para más detalles.

## 👨‍💻 Autor

**Adam Keyes**
- Portfolio: [https://jand0513.github.io/04.Tarea-entregable-4-Portfolio/](https://jand0513.github.io/04.Tarea-entregable-4-Portfolio/)
- GitHub: [@jand0513](https://github.com/jand0513)

## 🙏 Agradecimientos

- Diseño original inspirado en Frontend Mentor
- Iconos de la comunidad de desarrolladores
- Fuentes de Google Fonts

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐
