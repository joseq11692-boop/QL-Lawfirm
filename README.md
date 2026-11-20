# Kiu Legal — Firma boutique de asesoría legal

> ⚠️ **Este repositorio es PÚBLICO.** Contiene solo la web y el material de marketing. Nunca subas aquí información de clientes ni expedientes: ese trabajo va en un repositorio privado aparte (por ejemplo, `Kiu-Legal-Despacho`).

Sitio web bilingüe (ES/EN) de una firma boutique de alto nivel con sede en Ciudad de Panamá y estética de boutique neoyorquina. Fundador: Jose Alberto Quiel. Es un sitio estático: HTML, CSS y JS, sin dependencias.

```
index.html          Contenido (cada texto en <span data-l="es"> y <span data-l="en">)
styles.css          Identidad visual y diseño
script.js           Cambio de idioma, animaciones y formulario
assets/favicon.svg  Ícono de la pestaña (K con rombo dorado)
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

## Nombre y logo

- **Kiu Legal**: ✅ nombre elegido. "Kiu" suena como la letra Q en inglés (Q de Quiel) y funciona igual en español e inglés, con un enfoque internacional. Nombre anterior: Q Legal.
- **Logo:** logotipo de texto. "Kiu" en Cormorant Garamond y el punto de la "i" es un rombo dorado; a la derecha, una línea dorada fina y "LEGAL" en mayúsculas espaciadas. Ícono: "K" con el rombo, para redes y favicon. En la web está hecho con HTML y CSS (`.kiu-logo` en `styles.css`).
- **Dominios:** `kiulegal.com` y `kiu.legal` aparecían libres el 20/11/2026. Registrarlos antes de anunciar el nombre.

> ⚠️ La consulta al Colegio Nacional de Abogados de Panamá se hizo con el nombre "Q Legal". Confirmar también "Kiu Legal" y registrar la marca en DIGERPI (clase 45). El fundador está admitido en Panamá, así que el sitio no debe presentar la firma como despacho de EE.UU.

## Áreas de práctica (sin litigio)

1. Corporativo y estructuración internacional (sociedades, fundaciones de interés privado, holdings)
2. Derecho marítimo (registro de buques, hipotecas navales, compraventa de buques)
3. Inversión inmobiliaria y Propiedad Horizontal
4. Residencia para inversionistas (inversionista calificado, Países Amigos)

## Pendientes antes de publicar

- [x] Nombre definitivo: **Kiu Legal**
- [ ] Confirmar "Kiu Legal" con el Colegio Nacional de Abogados
- [ ] Registrar la marca en DIGERPI (clase 45) y los dominios `kiulegal.com` y `kiu.legal`
- [ ] Revisar la biografía del fundador (sección IV)
- [x] Dirección: PH Dream Plaza, Costa del Este, Ciudad de Panamá
- [ ] Correo real (actualmente `office@kiu.legal` es un ejemplo)
- [ ] Conectar el formulario a un servicio (Formspree, Basin, etc.); hoy abre el correo del visitante
- [x] Foto del fundador (`assets/founder.jpg`)
- [ ] Registrar el dominio y publicar (Netlify, Vercel o GitHub Pages)
