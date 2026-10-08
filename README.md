# 🌸 NIVARA - Fitness & Healthcare Mobile App
> **Empowering Body, Mind & Vitality**  
> *শৰীৰ, মন আৰু প্ৰাণৰ শক্তি বিকাশ • শরীর, মন ও আত্মাকে শক্তিশালী করা • शरीर, मन और आत्मा का सशक्तिकरण*

NIVARA is a React Native mobile application tailored for holistic health, fitness, vitality, and women's wellness. Built with Expo, it features full **Dark Mode** and seamless **Multilingual facilities in Assamese (অসমীয়া), Bengali (বাংলা), Hindi (हिन्दी), and English**, incorporating the official NIVARA brand logo.

---

## 📱 Features

- **🌸 Brand Identity & Logo**:
  - Incorporates the NIVARA silhouette emblem across app headers, splash screens, and icons.
  - Custom vibrant fuchsia & rose-gold palette matching feminine energy and healing.

- **🌓 Dynamic Dark & Light Theme**:
  - Instant toggle between dark obsidian theme (`#0F0F14`) and clean white porcelain theme (`#F8FAFC`).
  - High-contrast typography optimized for readability across day and night.

- **🌐 4-Language Multilingual System**:
  - **English (EN)**
  - **Bengali (বাংলা - BN)**
  - **Hindi (हिन्दी - HI)**
  - **Assamese (অসমীয়া - AS)**
  - Real-time one-tap language switching from header badge or settings.

- **🏃 Fitness & Workouts**:
  - **Surya Namaskar (Sun Salutation - 12 Asanas)** with step guides.
  - **Pranayama Breathwork** (Anulom-Vilom, Kapalbhati, Bhramari).
  - **Core & Strength** (Pelvic floor & abdominal toning).
  - **Cardio & HIIT** (Fat-burning routines).
  - **Spine & Back Care** (Postural correction & relief).
  - Interactive **Session Player Modal** with live countdown timer and completion celebration.

- **🩺 Healthcare & Vitals Tracker**:
  - Blood Pressure (systolic / diastolic).
  - Fasting Blood Sugar (mg/dL).
  - Resting Heart Rate (BPM) & Blood Oxygen (SpO2 %).
  - **Body Mass Index (BMI)** calculator with health status indicator.
  - **Women's Health & Cycle Care** (Ovulation, cycle calendar, symptom logging).
  - **Emergency SOS & Helplines** (112 National Emergency, 108 Ambulance, 1091 Women Helpline).

- **🥗 Ayurveda & Nutrition**:
  - Sattvic Detox Diet, High-Protein Indian Meal Plate, Hormone Balancing Plan.
  - Daily calorie targets and macronutrient tracker (Carbs, Protein, Fats).
  - Visual **Interactive Hydration Glasses** tracker (+250ml quick logging).
  - Daily Ayurvedic digestion and wellness tips.

---

## 🚀 How to Run the App

### 1. View in Web Browser (Instant Preview)
The app is currently active on your local machine:
```bash
# Open in browser:
http://localhost:8082
```
To run the live dev server at any time:
```bash
npm run web
```

### 2. Run on Your Phone (Android / iOS)
1. Install **Expo Go** from the Google Play Store (Android) or Apple App Store (iOS).
2. Start the Expo development server:
   ```bash
   npm start
   ```
3. Scan the QR code shown in the terminal with your phone's camera (iOS) or the Expo Go app (Android).

### 3. Build Downloadable Standalone Android APK (.apk)
To produce a standalone downloadable APK file that you can install directly on any Android device:
```bash
npx eas-cli login
npx eas-cli build -p android --profile preview
```

---

## 📁 Project Architecture

```
nivara-app/
├── assets/
│   ├── logo.png               # Brand logo
│   ├── icon.png               # App launcher icon
│   └── splash-icon.png        # Launch splash screen
├── src/
│   ├── theme/
│   │   ├── colors.js          # Dark & Light mode color tokens
│   │   └── ThemeContext.js    # Theme switcher provider
│   ├── localization/
│   │   ├── LanguageContext.js # Multi-language switcher provider
│   │   └── translations/
│   │       ├── en.js          # English strings
│   │       ├── bn.js          # Bengali (বাংলা) strings
│   │       ├── hi.js          # Hindi (हिन्दी) strings
│   │       └── as.js          # Assamese (অসমীয়া) strings
│   ├── context/
│   │   └── HealthContext.js   # Daily steps, calories, water & vitals state
│   ├── components/
│   │   ├── AppHeader.js       # Branded header with logo, theme & lang toggles
│   │   ├── LanguageModal.js   # Regional language selection modal
│   │   ├── WorkoutTimerModal.js # Interactive workout timer player
│   │   └── VitalsModal.js     # Health metrics entry modal
│   └── screens/
│       ├── HomeScreen.js      # Activity overview, streak, quotes, water
│       ├── FitnessScreen.js   # Yoga, cardio, strength workout cards
│       ├── HealthcareScreen.js# Vitals, BMI, women's wellness, SOS helplines
│       ├── NutritionScreen.js # Meal plans, calorie budget, water glasses
│       └── SettingsScreen.js  # Profile, theme switch, language selector
├── App.js                     # Root entry point with custom bottom navigation
├── app.json                   # Expo app configuration
└── package.json
```
