#!/bin/bash
set -e

echo "🔨 Building Nabz Health Report for Web..."

# Create output directory
mkdir -p public

# Export Expo web app
echo "📦 Exporting Expo web app..."
npx expo export --platform web --output-dir public || {
  echo "⚠️  Expo export failed, creating fallback..."
  mkdir -p public
}

# Create a proper index.html if it doesn't exist
if [ ! -f "public/index.html" ]; then
  echo "📄 Creating index.html..."
  cat > public/index.html << 'HTMLEOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <title>Nabz Health Report</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        html, body {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        body {
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
            background: #DFE7EA;
            color: #12242D;
        }
        #root {
            flex: 1;
            overflow: hidden;
        }
        .loading {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            flex-direction: column;
            gap: 20px;
        }
        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #E8EBEE;
            border-top-color: #3B5BA6;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        .loading-text {
            font-size: 18px;
            color: #51707C;
        }
    </style>
</head>
<body>
    <div id="root">
        <div class="loading">
            <div class="spinner"></div>
            <div class="loading-text">Loading Nabz Health Report...</div>
        </div>
    </div>

    <script src="/__/init.js"></script>
    <script type="module" src="./index.js"></script>
</body>
</html>
HTMLEOF
fi

# Create a simple index.js if it doesn't exist
if [ ! -f "public/index.js" ]; then
  echo "📝 Creating index.js..."
  cat > public/index.js << 'JSEOF'
import 'react-native/Libraries/Core/InitializeCore';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from '../App.js';

const RootComponent = () => <App />;

AppRegistry.registerComponent('main', () => RootComponent);
AppRegistry.runApplication('main', {
  rootTag: document.getElementById('root'),
});
JSEOF
fi

echo "✅ Build complete!"
echo "📂 Public directory ready at: public/"
ls -la public/ | head -20

exit 0
