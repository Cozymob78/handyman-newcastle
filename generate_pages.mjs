import fs from 'fs';

const services = [
    {
        id: 'flooring-installation',
        title: 'Flooring Installation | FastFixes Handyman',
        heading: 'Professional Flooring Installation',
        desc: 'Premium laminate and wooden flooring installation in Newcastle upon Tyne.',
        seoTitle: 'Flooring Installation in Newcastle | FastFixes Handyman',
        seoKeywords: 'flooring installation newcastle, laminate fitting, wooden floors, handyman flooring',
        points: ['Precise cutting and fitting', 'Subfloor preparation and leveling', 'Laminate, engineered wood, and parquet', 'Skirting board installation and finishing'],
        img: 'assets/flooring_installation_1777795055012.png',
        cssClass: ''
    },
    {
        id: 'furniture-repair',
        title: 'Furniture Repair | FastFixes Handyman',
        heading: 'Expert Furniture Repair',
        desc: 'Restore your cherished wooden furniture to its former glory.',
        seoTitle: 'Furniture Repair Newcastle | FastFixes Handyman',
        seoKeywords: 'furniture repair newcastle, wood restoration, chair repair, table repair',
        points: ['Scratch and dent removal', 'Joint tightening and regluing', 'Surface refinishing', 'Antique furniture care'],
        img: 'assets/furniture_repair_1777795394122.png',
        cssClass: ''
    },
    {
        id: 'furniture-assembly',
        title: 'Furniture Assembly | FastFixes Handyman',
        heading: 'Fast Flat-Pack Assembly',
        desc: 'Quick and reliable furniture assembly for all brands.',
        seoTitle: 'Flat Pack Furniture Assembly Newcastle | FastFixes',
        seoKeywords: 'furniture assembly newcastle, IKEA assembly, flat pack building, handyman assembly',
        points: ['IKEA, Argos, and other brands', 'Wardrobes, beds, and tables', 'Safe and secure wall anchoring', 'No leftover screws or wobbly legs'],
        img: 'assets/furniture_assembly_1777795616665.png',
        cssClass: ''
    },
    {
        id: 'plumbing-services',
        title: 'Plumbing Services | FastFixes Handyman',
        heading: 'Reliable Plumbing Services',
        desc: 'Expert plumbing solutions for leaks, sinks, and bathrooms.',
        seoTitle: 'Local Plumber Newcastle | FastFixes Handyman',
        seoKeywords: 'plumber newcastle, leak repair, sink fitting, blocked drains newcastle',
        points: ['Tap repair and replacement', 'Pipe leak fixes', 'Washing machine installation', 'Unblocking sinks and drains'],
        img: 'assets/plumbing_services_1777795640024.png',
        cssClass: ''
    },
    {
        id: 'electrical-services',
        title: 'Electrical Services | FastFixes Handyman',
        heading: 'Safe Electrical Services',
        desc: 'Certified electrical installations and minor repairs.',
        seoTitle: 'Electrician Newcastle | FastFixes Handyman',
        seoKeywords: 'electrician newcastle, light fitting, socket repair, smart home installation',
        points: ['Light fixture installation', 'Socket replacement and fixing', 'Smart home setup (Ring, Nest)', 'Fault finding and safe repairs'],
        img: 'assets/electrical_services_1777795753782.png',
        cssClass: ''
    },
    {
        id: 'painting-decorating',
        title: 'Painting & Decorating | FastFixes Handyman',
        heading: 'Premium Painting & Decorating',
        desc: 'Flawless finishes for your home interior.',
        seoTitle: 'Painter and Decorator Newcastle | FastFixes',
        seoKeywords: 'painter newcastle, decorator, wall painting, interior painting professional',
        points: ['Interior wall and ceiling painting', 'Woodwork glossing and varnishing', 'Surface preparation and filling', 'Wallpaper removal and hanging'],
        img: 'assets/painting_decorating.jpg',
        cssClass: ''
    },
    {
        id: 'cleaning-services',
        title: 'General Cleaning | FastFixes Handyman',
        heading: 'Deep Cleaning Services',
        desc: 'Comprehensive house and yard cleaning.',
        seoTitle: 'House & Yard Cleaning Newcastle | FastFixes',
        seoKeywords: 'cleaning services newcastle, yard cleaning, deep house clean, move out cleaning',
        points: ['End of tenancy deep cleans', 'Yard and patio jet washing', 'Carpet and upholstery spot cleaning', 'Garbage and debris removal'],
        img: '',
        cssClass: 'abstract-6'
    },
    {
        id: 'tv-wall-mounting',
        title: 'TV Wall Mounting | FastFixes Handyman',
        heading: 'Sleek TV Wall Mounting',
        desc: 'Perfectly leveled TV installations with hidden cables.',
        seoTitle: 'TV Wall Mounting Newcastle | FastFixes Handyman',
        seoKeywords: 'TV wall mount newcastle, bracket installation, hide TV cables, handyman TV setup',
        points: ['Any size TV (32" to 85"+)', 'Plasterboard, brick, and stud walls', 'Concealed cable management routing', 'Soundbar and shelving installation'],
        img: 'assets/tv_wall_mounting.jpg',
        cssClass: ''
    },
    {
        id: 'carpentry-joinery',
        title: 'Carpentry & Joinery | FastFixes Handyman',
        heading: 'Professional Carpentry',
        desc: 'Custom woodwork, door hanging, and joinery.',
        seoTitle: 'Carpenter Newcastle | FastFixes Handyman',
        seoKeywords: 'carpenter newcastle, joinery, door hanging, bespoke woodwork, skirting boards',
        points: ['Internal and external door hanging', 'Custom shelving and built-ins', 'Skirting boards and architraves', 'Decking and fence repairs'],
        img: '',
        cssClass: 'abstract-4'
    }
];

const template = (service) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${service.seoTitle}</title>
    <link rel="icon" href="assets/favicon.jpg" type="image/jpeg">
    <meta name="description" content="${service.desc}">
    <meta name="keywords" content="${service.seoKeywords}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="index.css">
</head>
<body>

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/447465808079" target="_blank" class="whatsapp-float" aria-label="Contact FastFixes on WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
    </a>

    <!-- Header / Nav -->
    <header style="background: rgba(11, 17, 33, 0.9); backdrop-filter: blur(12px);">
        <div class="container nav-container">
            <a href="index.html" class="logo">FastFixes <span>Handyman</span></a>
            <ul class="nav-links">
                <li><a href="index.html#services">Services</a></li>
                <li><a href="index.html#why-us">Why Us</a></li>
                <li><a href="index.html#contact">Contact</a></li>
                <li><a href="https://facebook.com/" target="_blank" aria-label="Visit our Facebook page"><i class="fa-brands fa-facebook" style="font-size: 1.2rem;"></i></a></li>
            </ul>
            <div class="hamburger">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </header>

    <!-- Service Hero Section -->
    <section class="service-hero">
        <div class="container">
            <h1>${service.heading}</h1>
            <p>${service.desc}</p>
        </div>
    </section>

    <!-- Service Details Section -->
    <section class="section">
        <div class="container service-details">
            <div class="service-desc">
                ${service.img !== '' ? `<img src="${service.img}" alt="${service.heading}" style="width:100%; border-radius: 12px; margin-bottom: 2rem; object-fit: cover; max-height: 400px;">` : `<div style="width:100%; height:400px; border-radius: 12px; margin-bottom: 2rem;" class="${service.cssClass}"></div>`}
                <h2>What\'s Included?</h2>
                <p>We provide comprehensive ${service.heading.toLowerCase()} ensuring that everything is done safely, properly, and to the highest standard.</p>
                <ul>
                    ${service.points.map(p => `<li><i class="fa-solid fa-check-circle"></i> ${p}</li>`).join('\\n                    ')}
                </ul>
                <a href="https://wa.me/447465808079" target="_blank" class="btn" style="margin-top: 1rem;">Book This Service</a>
            </div>

            <div class="service-sidebar">
                <h3>Contact Us Directly</h3>
                <p>Need this service sorted immediately? Reach out on WhatsApp for a fast, free quote.</p>
                <div style="margin-bottom: 1.5rem;">
                    <i class="fa-brands fa-whatsapp text-primary" style="font-size: 1.5rem; vertical-align: middle;"></i>
                    <strong style="margin-left: 0.5rem; font-size: 1.2rem;">+44 7465 808079</strong>
                </div>
                <h3>Covered Area</h3>
                <p>Newcastle upon Tyne & surrounding selected areas.</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h4>FastFixes Handyman</h4>
                    <p>Newcastle upon Tyne's premier handyman service. Quality craftsmanship and reliable service.</p>
                </div>
                <div class="footer-col">
                    <h4>Contact Information</h4>
                    <ul>
                        <li><i class="fa-solid fa-location-dot text-primary"></i> Newcastle upon Tyne, UK</li>
                        <li><i class="fa-brands fa-whatsapp text-primary"></i> +44 7465 808079</li>
                        <li><i class="fa-solid fa-envelope text-primary"></i> info@handyman.fastfixes.co.uk</li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html#services">All Services</a></li>
                        <li><a href="index.html">Back to Home</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 FastFixes Handyman. All rights reserved.</p>
                <a href="#" class="fb-share" aria-label="Share on Facebook"><i class="fa-brands fa-facebook-f"></i> Share</a>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>`;

services.forEach(s => {
    fs.writeFileSync(\`\${s.id}.html\`, template(s));
});
console.log('Successfully generated all 9 service pages.');
