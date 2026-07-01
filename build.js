const fs = require('fs');

let html = fs.readFileSync('index_backup.html', 'utf8');

// 1. Navbar
html = html.replace(
  '<li><a href="#catalogo" class="nav-link">Catálogo</a></li>',
  '<li><a href="#catalogo" class="nav-link">Catálogo</a></li>\n                <li><a href="#servicios" class="nav-link">Servicios</a></li>'
);

// 2. Filter Bar
html = html.replace(
  '<button class="filter-btn" data-filter="collares">Collares</button>',
  '<button class="filter-btn" data-filter="cadenas">Cadenas</button>\n                <button class="filter-btn" data-filter="dijes">Dijes</button>\n                <button class="filter-btn" data-filter="collares">Collares</button>'
).replace(
  '<button class="filter-btn" data-filter="dijes">Dijes</button>\n                <button class="filter-btn" data-filter="relojes">Relojes</button>',
  '<button class="filter-btn" data-filter="relojes">Relojes</button>'
);

// 3. Catalog Divisions & Buttons
html = html.replace(
  '<!-- Product Grid -->\n            <div class="product-grid">',
  '<!-- Divisón: ORO -->\n            <h3 class="catalog-division-title animate-on-scroll">Colección de Oro</h3>\n            <div class="product-grid division-grid">'
).replace(
  '<!-- Product 5 -->',
  '</div>\n\n            <!-- Divisón: PLATA -->\n            <h3 class="catalog-division-title animate-on-scroll" style="margin-top: 60px;">Colección de Plata</h3>\n            <div class="product-grid division-grid">\n                <!-- Product 5 -->'
).replace(
  '<!-- Product 6 -->',
  '</div>\n            \n            <!-- Divisón: RELOJES -->\n            <h3 class="catalog-division-title animate-on-scroll" style="margin-top: 60px;">Colección de Relojes</h3>\n            <div class="product-grid division-grid">\n                <!-- Product 6 -->'
);

// 4. Add Cadenas example
html = html.replace(
  '<!-- Divisón: PLATA -->',
  '<!-- Product: Cadenas (New Example) -->\n                <div class="product-card animate-on-scroll" data-category="cadenas">\n                    <div class="product-image-wrap">\n                        <img src="assets/images/collar-oro.png" alt="Cadena Imperial - Joyería Montesión" loading="lazy" style="filter: hue-rotate(10deg);">\n                        <div class="product-overlay">\n                            <span class="product-badge">Clásico</span>\n                        </div>\n                    </div>\n                    <div class="product-body">\n                        <span class="product-category">Cadenas</span>\n                        <h3 class="product-name">Cadena Imperial</h3>\n                        <p class="product-desc">Cadena de oro 18k tejido espiga. Resistencia y elegancia para uso diario.</p>\n                        <div class="product-footer">\n                            <span class="product-price">.00</span>\n                            <button class="product-link open-modal-btn">Ver detalles</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Divisón: PLATA -->'
);

// 5. Add Rebajas example and Servicios
const rebajasAndServices = 
            </div>
            
            <!-- Divisón: REBAJAS (Sale) -->
            <h3 class="catalog-division-title sale-division animate-on-scroll" style="margin-top: 60px; color: #e63946; border-bottom-color: rgba(230, 57, 70, 0.3);">
                Zona de Rebajas
            </h3>
            <div class="product-grid division-grid">
                <!-- Product: Rebajas Example -->
                <div class="product-card animate-on-scroll sale-card" data-category="anillos">
                    <div class="product-image-wrap">
                        <img src="assets/images/anillo-oro.png" alt="Set Primavera - Joyería Montesión" loading="lazy" style="filter: sepia(0.3);">
                        <div class="product-overlay">
                            <span class="product-badge sale-badge" style="background-color: #e63946;">-40% DESC</span>
                        </div>
                    </div>
                    <div class="product-body">
                        <span class="product-category">Anillos / Sets</span>
                        <h3 class="product-name">Set Primavera</h3>
                        <p class="product-desc">Hermoso set con gemas de temporada. Últimas piezas en inventario a precio especial.</p>
                        <div class="product-footer" style="align-items: center;">
                            <div style="display: flex; flex-direction: column;">
                                <span class="product-price-old" style="text-decoration: line-through; color: var(--color-text-muted); font-size: 0.9rem;">.00</span>
                                <span class="product-price" style="color: #e63946;">.00</span>
                            </div>
                            <button class="product-link open-modal-btn">Ver detalles</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ====== SERVICIOS SECTION ====== -->
    <section id="servicios" class="section services-section" style="background-color: var(--color-bg-alt);">
        <div class="container">
            <div class="section-header animate-on-scroll">
                <span class="section-tag">NUESTROS SERVICIOS</span>
                <h2 class="section-title">Cuidado y <em>Restauración</em></h2>
                <div class="section-line"></div>
                <p class="section-subtitle">Ofrecemos servicios especializados para mantener tus joyas impecables generación tras generación.</p>
            </div>
            
            <div class="services-grid animate-on-scroll delay-1">
                <div class="service-card">
                    <div class="service-icon">✨</div>
                    <h3 class="service-title">Reparación y Limpieza</h3>
                    <p class="service-desc">Devolvemos el brillo original a tus piezas. Reparación de broches, eslabones y limpieza ultrasónica profunda.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📐</div>
                    <h3 class="service-title">Encargos a Medida</h3>
                    <p class="service-desc">Diseñamos y creamos la joya de tus sueños desde cero. Trae tu idea y nuestros orfebres la harán realidad.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🛠️</div>
                    <h3 class="service-title">Ajustes Especializados</h3>
                    <p class="service-desc">Ajuste de tallas para anillos, recorte de pulseras y cadenas, garantizando un acabado perfecto en <strong>plata y oro</strong>.</p>
                </div>
            </div>
        </div>
    </section>
;

html = html.replace(
  /<\/div>\s*<\/div>\s*<\/section>\s*<!-- ====== NOSOTROS SECTION ====== -->/,
  rebajasAndServices + '\n\n    <!-- ====== NOSOTROS SECTION ====== -->'
);

// 6. Update all old links to open modal
html = html.replace(/<a href="https:\/\/wa\.me[^>]+class="product-link"[^>]*>Consultar →<\/a>/g, '<button class="product-link open-modal-btn">Ver detalles</button>');

// 7. Add Reseñas
const resenas = 
    <!-- ====== RESEÑAS SECTION ====== -->
    <section id="resenas" class="section reviews-section" style="background-color: var(--color-bg);">
        <div class="container">
            <div class="section-header animate-on-scroll">
                <span class="section-tag">TESTIMONIOS</span>
                <h2 class="section-title">Lo que dicen nuestros <em>Clientes</em></h2>
                <div class="section-line"></div>
            </div>
            
            <div class="reviews-grid animate-on-scroll delay-1">
                <div class="review-card">
                    <div class="review-stars">★★★★★</div>
                    <p class="review-text">"La atención es impecable y la calidad de los diamantes superó mis expectativas. Definitivamente volveré para mi aniversario."</p>
                    <p class="review-author">- Carlos M.</p>
                </div>
                <div class="review-card">
                    <div class="review-stars">★★★★★</div>
                    <p class="review-text">"Llevé un anillo antiguo de mi abuela para restaurar y el trabajo que hicieron fue una verdadera obra de arte. Quedó como nuevo."</p>
                    <p class="review-author">- Elena R.</p>
                </div>
                <div class="review-card">
                    <div class="review-stars">★★★★★</div>
                    <p class="review-text">"El mejor lugar para encontrar ese regalo especial. El diseño del collar que compré es único y muy elegante."</p>
                    <p class="review-author">- Sofia T.</p>
                </div>
            </div>
        </div>
    </section>
;

html = html.replace('<!-- ====== UBICACIÓN SECTION ====== -->', resenas + '\n    <!-- ====== UBICACIÓN SECTION ====== -->');

// 8. Add Modal
const modal = 
    <!-- ====== PRODUCT MODAL ====== -->
    <div id="product-modal" class="modal-overlay">
        <div class="modal-content">
            <button class="modal-close" aria-label="Cerrar">&times;</button>
            <div class="modal-body">
                <div class="modal-gallery">
                    <img id="modal-main-img" src="" alt="Producto">
                    <div class="modal-thumbnails">
                        <!-- Generaremos 2 miniaturas de demo para dar la idea -->
                        <div class="thumb active"><img src="" class="thumb-img-1" alt="thumb"></div>
                        <div class="thumb"><img src="assets/images/logo-montesion.jpg" alt="thumb"></div>
                        <div class="thumb"><img src="assets/images/logo-montesion.jpg" alt="thumb"></div>
                    </div>
                </div>
                <div class="modal-info">
                    <h3 id="modal-title">Título del Producto</h3>
                    <p id="modal-desc">Descripción del producto</p>
                    <p id="modal-price" class="modal-price">.00</p>
                    <a id="modal-whatsapp-btn" href="#" target="_blank" class="btn-primary modal-btn">Consultar por WhatsApp</a>
                </div>
            </div>
        </div>
    </div>
;
html = html.replace(/<script src="script\.js"><\/script>\s*<\/body>/, modal + '\n    <script src="script.js"></script>\n</body>');

// Fix encoding issues if any
html = html.replace(/Ã“/g, 'Ó').replace(/Ã³/g, 'ó').replace(/Ã‰/g, 'É').replace(/Ã/g, 'í').replace(/Ã¡/g, 'á').replace(/Ã±/g, 'ñ').replace(/Ã©/g, 'é');

fs.writeFileSync('index.html', html, 'utf8');
