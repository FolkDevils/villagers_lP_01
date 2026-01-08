# Asset Organization & Naming Plan

This document outlines the proposed restructuring of the `/public` directory to improve maintainability, developer experience, and SEO.

## 1. Directory Structure Strategy

Instead of a flat structure (dumping everything in root), we will organize assets by **Context** (Page/Feature).

```text
public/
├── images/
│   ├── shared/          # Assets used across multiple pages (Logos, UI elements)
│   ├── customer/        # Assets specific to the Customer Landing Page
│   └── owner/           # Assets specific to the Owner Landing Page
└── icons/               # UI Icons (arrows, close buttons, small SVGs)
```

## 2. Naming Convention

We will enforce **kebab-case** (lowercase, hyphen-separated) for all files. This avoids case-sensitivity issues on different OSs (Windows vs Linux).

*   ✅ `hero-background-desktop.png`
*   ❌ `heroCustomer_mobile.png`
*   ❌ `Customer_05.png`

## 3. Migration Map

Below is the mapping of current files to their new, organized locations.

### **Shared Assets**
| Current File | New Path | Description |
| :--- | :--- | :--- |
| `villagerLogo_new.svg` | `/images/shared/villagers-logo.svg` | Main Logo |
| `local.png` | `/images/shared/chart-local-bg.png` | Used in charts (confirm if shared) |

### **UI Icons**
| Current File | New Path | Description |
| :--- | :--- | :--- |
| `carousel-arrow-left.svg` | `/icons/arrow-left.svg` | Carousel Navigation |
| `carousel-arrow-right.svg` | `/icons/arrow-right.svg` | Carousel Navigation |
| `icon_x.svg` | `/icons/close.svg` | Modal/Popup Close Icon |

### **Page: Customer**
| Current File | New Path | Description |
| :--- | :--- | :--- |
| `customerHero08.png` | `/images/customer/hero-desktop.png` | Main Hero Background |
| `heroCustomer_mobile.png` | `/images/customer/hero-mobile.png` | Mobile Hero Background |
| `Customer_05.png` | `/images/customer/chart-economy-multiplier.png` | Right bar in BarChart |
| `Customer_07.png` | `/images/customer/slide-impact.png` | Carousel Slide: Impact |
| `Customer_10.png` | `/images/customer/slide-thrive.png` | Carousel Slide: Thrive |
| `Customer_11.png` | `/images/customer/slide-belong.png` | Carousel Slide: Belong |
| `Customer_12.png` | `/images/customer/testimonial-1.png` | Testimonial Avatar |
| `Customer_13.png` | `/images/customer/testimonial-2.png` | Testimonial Avatar |
| `Customer_14.png` | `/images/customer/testimonial-3.png` | Testimonial Avatar |
| `Customer_15.png` | `/images/customer/testimonial-4.png` | Testimonial Avatar |

### **Page: Owner**
| Current File | New Path | Description |
| :--- | :--- | :--- |
| `ownerHero02a.png` | `/images/owner/hero-desktop.png` | Main Hero Background |
| `heroOwner_mobile.png` | `/images/owner/hero-mobile.png` | Mobile Hero Background |
| `block02_image_05.png` | `/images/owner/slide-impact.png` | Carousel Slide: Impact |
| `block02_image_06.png` | `/images/owner/slide-engage.png` | Carousel Slide: Engage |
| `block02_image_07.png` | `/images/owner/slide-value.png` | Carousel Slide: Value |
| `quote_01b.png` | `/images/owner/testimonial-yonderlust.png` | Testimonial Image |
| `quote_02.png` | `/images/owner/testimonial-indio.png` | Testimonial Image |
| `quote_03.png` | `/images/owner/testimonial-ascend.png` | Testimonial Image |
| `quote_05.png` | `/images/owner/testimonial-bullseye.png` | Testimonial Image |

### **Partner Logos (Owner Page)**
| Current File | New Path | Description |
| :--- | :--- | :--- |
| `logo_yonderlust.svg` | `/images/owner/logo-yonderlust.svg` | Partner Logo |
| `logo_indio.svg` | `/images/owner/logo-indio.svg` | Partner Logo |
| `logo_ascend.svg` | `/images/owner/logo-ascend.svg` | Partner Logo |
| `logo_bullseye.svg` | `/images/owner/logo-bullseye.svg` | Partner Logo |

## 4. Implementation Steps

When you are ready to execute this plan:

1.  **Create Directories:**
    ```bash
    mkdir -p public/images/shared public/images/customer public/images/owner public/icons
    ```
2.  **Move & Rename Files:** (Scripted approach recommended to avoid errors)
3.  **Update Code References:**
    *   Search for old filenames (e.g., `customerHero08.png`)
    *   Replace with new paths (e.g., `/images/customer/hero-desktop.png`)
4.  **Verify:** Run `npm run build` to ensure no 404s.

