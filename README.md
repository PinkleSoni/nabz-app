# Nabz Health Report App

A React Native Expo application for displaying and managing laboratory health reports in a user-friendly format.

## 🎯 Project Overview

This is a design assessment project that involves:
- ✅ Research on health report displays
- ✅ Design system creation
- ✅ Component library development
- ✅ Vercel deployment

## ✨ Features

- 📋 **Lab Reports Listing** - View all your laboratory reports
- 🔍 **Detailed Report View** - See complete test results with categorized grouping
- 🚩 **Flagged Results** - Highlighted abnormal/out-of-range test results
- 🌐 **Bilingual Support** - English and Hindi language support
- ⚡ **Loading States** - Smooth skeleton loading screens
- 📱 **Responsive Design** - Works on mobile and web
- 🎨 **Design System** - Consistent color palette and typography

## 🛠️ Tech Stack

- **React Native** - Cross-platform mobile framework
- **Expo** - React Native framework for rapid development
- **React Navigation** - Navigation management
- **React Native Web** - Web support for React Native
- **StyleSheet** - Native styling system

## 📂 Project Structure

```
nabz-app/
├── screens/
│   └── health/
│       ├── HealthReports.js         # Main reports listing screen
│       ├── ReportDetail.js          # Detailed report view
│       ├── ResultDetail.js          # Individual test detail
│       └── components/
│           ├── ResultCard.js        # Reusable test result card
│           ├── ResultGroup.js       # Grouped results section
│           ├── ReportHeader.js      # Patient info header
│           ├── FlaggedSection.js    # Abnormal results highlight
│           └── LoadingStates.js     # Loading skeleton screens
├── navigation/
│   ├── AppNavigator.js              # Main app navigation setup
│   └── HealthNavigator.js           # Health tab stack navigator
├── tokens.js                        # Design tokens & color system
├── App.js                           # Root component
├── index.js                         # App entry point
├── package.json                     # Dependencies
├── vercel.json                      # Vercel deployment config
├── .vercelignore                    # Vercel ignore patterns
├── .env.example                     # Environment variables template
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn package manager
- Expo CLI (optional): `npm install -g expo-cli`

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PinkleSoni/nabz-app.git
cd nabz-app
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (optional):
```bash
cp .env.example .env.local
```

### Development

Run the app locally:

```bash
# Start Expo development server
npm start

# Run on iOS simulator (macOS only)
npm run ios

# Run on Android emulator
npm run android

# Run on web browser
npm run web
```

## 🎨 Design System

### Colors

**Health Theme Palette:**
- Primary: `#3B5BA6` (Medical Blue)
- Success: `#3B6D11` (Green - Normal)
- Warning: `#E8B4A6` (Orange - Abnormal)
- Error: `#D67C7C` (Red - Critical)
- Background: `#DFE7EA` (Light Blue Gray)
- Surface: `#FFFFFF` (White)

### Typography

- **Headline**: 22px, Bold (600)
- **Title**: 20px, Semibold (600)
- **Body**: 14px, Regular (400)
- **Caption**: 12px, Regular (400)
- **Label**: 11px, Regular (400)

### Spacing Scale

- XS: 4px
- SM: 8px
- MD: 16px (standard)
- LG: 24px
- XL: 32px

## 🌍 Bilingual Support

The app supports:
- **English** - Primary interface language
- **Hindi** - Secondary interface language

All key UI elements, reports, and medical terminology have Hindi translations.

## 📦 Components

### ResultCard
Displays individual test result with:
- Color-coded status rail
- Test name and Hindi translation
- Result value and unit
- Status badge (NORMAL/HIGH/LOW)

### ResultGroup
Shows categorized test results:
- Section header with test category
- Count of results in group
- List of individual test cards

### ReportHeader
Patient information display:
- Patient name, age, gender
- Report date
- Summary of results (normal vs flagged)

### FlaggedSection
Highlights abnormal results:
- Count of flagged tests
- Special styling for out-of-range values
- Disclaimer about diagnosis

### LoadingStates
Animated skeleton screens:
- Full page loading state
- Individual row skeleton
- Smooth animation

## 🌐 Deployment

### Vercel Deployment

1. Push code to GitHub (already done at https://github.com/PinkleSoni/nabz-app)
2. Connect repository to Vercel:
   - Go to vercel.com
   - Click "New Project"
   - Select this repository
   - Vercel auto-detects Expo web config
3. Add environment variables (if needed):
   - Set in Vercel dashboard under Project Settings
4. Deploy!

The app runs as a web application using React Native Web.

**Live URL**: Your Vercel deployment URL will appear after deployment

### Mobile Deployment (Future)

For native iOS/Android builds:

```bash
npm install -g eas-cli
eas build
```

Then submit to App Store and Google Play.

## 📊 Mock Data

The app includes sample health report data:

**Patient**: Sunita Deshmukh, 52F
**Date**: 11 Sep 2026
**Results**: 42 tests across 3 categories
- Blood tests (3 results, 1 flagged)
- Biochemistry (3 results, 1 flagged)
- Lipid Profile (3 results, 2 flagged)

## 🔄 Data Integration

Currently using mock data. To integrate real API:

1. Update API endpoints in screens
2. Add authentication if needed
3. Implement error handling
4. Add data caching

Example API structure expected:
```json
{
  "reports": [
    {
      "id": "string",
      "patientName": "string",
      "patientAge": number,
      "reportDate": "string",
      "groups": [
        {
          "name": "string",
          "results": [
            {
              "name": "string",
              "value": "string",
              "unit": "string",
              "status": "normal|high|low"
            }
          ]
        }
      ]
    }
  ]
}
```

## 📝 Development Roadmap

- [ ] Real API integration
- [ ] User authentication
- [ ] Report caching
- [ ] PDF export functionality
- [ ] Email/SMS notifications
- [ ] Dark mode support
- [ ] Offline mode
- [ ] Analytics integration

## 🤝 Contributing

To contribute to this project:

1. Create a feature branch: `git checkout -b feature/name`
2. Make your changes
3. Commit: `git commit -m "Description"`
4. Push: `git push origin feature/name`
5. Open a Pull Request

## 📄 License

MIT License - See LICENSE file for details

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check existing issues for solutions

## 👨‍💻 Author

**Pinkle Soni**
- GitHub: @PinkleSoni
- Email: pinklesoni.225@gmail.com

---

**Built with ❤️ for healthcare accessibility**

*Lab reports made simple and understandable for everyone.*
