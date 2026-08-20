# Sahabat Danurdara - Design System & Antigravity Rules

Dokumen ini berisi panduan desain, warna, tipografi, dan aturan UI yang digunakan sebagai patokan (prompt) untuk Antigravity dalam merapihkan dan membangun ulang website Sahabat Danurdara.

## 1. BRAND IDENTITY & COLOR PALETTE
- **Primary:** `#429030` (Emerald Nature Green) - Digunakan untuk Buttons, Main Badges, Primary Accents, Active Links.
- **Primary Dark:** `#2D6320` - Digunakan untuk Hover states dan Deep emphasis.
- **Primary Deep Surface:** `#132E14` (Deep Forest) - Digunakan untuk Footer background, High-impact summary cards.
- **Secondary Accent:** `#EBDF01` (Vibrant Warm Yellow) - Melambangkan energi anak muda. Digunakan untuk Highlight badges, key metric numbers, decorative pill tags, CTA badges.
- **Secondary Accent Hover:** `#D8CD00`
- **Background Main:** `#FBFDF9` (Soft Off-White warm green tint)
- **Surface / Cards:** `#FFFFFF` (dengan soft shadow `0 8px 30px rgba(0,0,0,0.04)` dan border `1px solid rgba(66, 144, 48, 0.12)`)
- **Text Main:** `#1E293B` (Slate 800) untuk Headings & Primary body.
- **Text Muted:** `#64748B` (Slate 500) untuk Dates, Subtitles, Meta info.

## 2. TYPOGRAPHY
- **Headings (H1, H2, H3, H4):** `Plus Jakarta Sans` atau `Outfit`, sans-serif (Font weights: 600, 700, 800) - modern, ramah, kekinian.
- **Body Text:** `Plus Jakarta Sans` atau `Inter`, sans-serif (Weights: 400, 500; Line-height: 1.6 - 1.75).
- **Hierarchy Rule:** 
  - **H1 Hero:** 44px - 56px (Mobile: 32px - 38px) dengan bold highlight spans di `#429030` atau `#EBDF01`.
  - **H2 Section Titles:** 32px - 40px (Mobile: 26px - 30px) didampingi oleh small uppercase badge di atasnya.
  - **Body:** 16px (Paragraphs), 14px (Cards & meta).

## 3. UI PATTERNS & SECTION-BY-SECTION RULES

### A. Navigation Bar
- **Style:** Floating pill atau clean sticky bar dengan backdrop blur (`rgba(255, 255, 255, 0.85)` + `backdrop-filter: blur(12px)`).
- **CTA Nav Button:** Background `#429030`, Text `#FFFFFF`, rounded full (`border-radius: 9999px`).

### B. Hero Section
- **Visual:** Clean split layout atau dynamic hero dengan subtle floating badge ("🌱 Bergerak Bersama untuk Perubahan").
- **CTA Buttons:**
  - *Primary CTA:* Solid `#429030`, text white, hover dengan subtle scale & shadow.
  - *Secondary CTA:* Outline/ghost dengan 1.5px border `#429030` atau soft pill dengan `#EBDF01` accent text.

### C. Tentang Danurdara & Fokus Pilar
- Hindari teks paragraf panjang (dinding teks). Ubah menjadi format interaktif:
  - Ringkasan singkat filosofi "Kaya Ilmu".
  - 3 Pilar Kartu Interaktif (Anak-anak, Perempuan, Lansia) dengan micro-icon dan subtle border.

### D. Impact & Social Proof Counter (Jangkauan)
- **Tampilan:** Grid kartu modern berlatar belakang `#132E14` (Deep Forest) atau Glassmorphism cards.
- **Angka Statistik:** Diberi warna aksen `#EBDF01` ukuran besar (font-weight 800) dengan label uppercase di bawahnya.
- **Efek:** Tambahkan indikator progress atau animasi counter saat di-scroll.

### E. Kegiatan Kita (Activity Cards)
- **Card Component:**
  - Rounded corners lembut (`border-radius: 16px` hingga `20px`).
  - Image container dengan aspect ratio 16:9 + overlay hover zoom.
  - **Category Badge:** Pill badge di atas kartu berlatar `#4290301A` (opacity) dengan teks `#429030` (atau aksen `#EBDF01` untuk event penting).
  - **Info:** Tanggal dengan icon calendar mini, judul maksimal 2 baris (truncated), dan tombol "Detail Kegiatan" yang clean.

### F. Partner & Kolaborator
- Logo slider / marquee format grayscale yang berubah menjadi full color saat di-hover.

### G. Footer
- **Background:** `#132E14` (Deep Forest Green).
- **Text:** Light muted `#CBD5E1`.
- **Aksen Hover (Link/Icon):** `#EBDF01`.

## 4. DESIGN CODE OF CONDUCT (DOs & DONTs)
- **DO:** Gunakan radius rounded yang lembut (12px - 24px) untuk menciptakan kesan ramah, komunitas, dan hangat.
- **DO:** Gunakan `#EBDF01` secukupnya sebagai high-energy accent (highlight text, badges, stats) agar eye-catching namun tidak membuat mata lelah.
- **DONT:** Jangan gunakan latar belakang hitam pekat `#000000`; selalu gunakan `#132E14` untuk dark section agar harmoni warna hijau terjaga.
- **DONT:** Jangan biarkan teks deskripsi berformat single long paragraph tanpa visual anchor/bullet point atau pembagian kolom.
