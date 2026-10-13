# QL — Firma boutique de asesoría legal

Sitio web bilingüe (ES/EN) de una firma boutique de alto nivel, al estilo de Nueva York. Es un sitio estático: HTML, CSS y JS, sin dependencias.

```
index.html          Contenido (cada texto en <span data-l="es"> y <span data-l="en">)
styles.css          Identidad visual y diseño
script.js           Cambio de idioma, animaciones y formulario
assets/monogram.svg Monograma QL (favicon y logo)
```

Para verlo, abre `index.html` en el navegador.

## Identidad visual

| Token      | Color     | Uso                          |
|------------|-----------|------------------------------|
| Verde 950  | `#0A1F18` | Fondos profundos y pie       |
| Verde 900  | `#0E2A21` | Color principal de la marca  |
| Verde 800  | `#153A2E` | Superficies                  |
| Marfil     | `#F5F0E6` | Fondo claro                  |
| Latón      | `#B8975A` | Acento, botones y detalles   |
| Champagne  | `#D4BC8A` | Acento sobre verde           |

Tipografías: **Cormorant Garamond** para títulos (serif clásica, editorial) y **Jost** para el texto (sans geométrica y ligera).

## Nombres propuestos

- **QL Counsel / QL Consejeros**: nombre de trabajo usado en el sitio.
- **Quorum Lex**: viene del latín y funciona igual en español e inglés.
- **Quill & Ledger**: pluma (derecho) y libro mayor (negocios y patrimonio).
- **Qualis Legal**: del latín *qualis*, "de calidad".
- **QL Advisory**: pone el foco en la asesoría y no en el litigio.

> ⚠️ En Nueva York, la regla 7.5(b) de las *Rules of Professional Conduct* prohíbe ejercer con un **nombre comercial** (trade name). El nombre legal de la firma normalmente debe incluir el apellido del abogado, por ejemplo "[Apellido] Law PLLC". "QL" puede usarse como monograma y marca visual. Confirma el nombre final con las reglas de la jurisdicción donde vas a ejercer.

## Pendientes antes de publicar

- [ ] Nombre definitivo de la firma, nombre del fundador, biografía y jurisdicciones de admisión
- [ ] Dirección y correo reales (actualmente `office@qlcounsel.com` es un ejemplo)
- [ ] Conectar el formulario a un servicio (Formspree, Basin, etc.); hoy abre el correo del visitante
- [ ] Retrato profesional del fundador para reemplazar el bloque con el monograma
- [ ] Registrar el dominio y publicar (Netlify, Vercel o GitHub Pages)
