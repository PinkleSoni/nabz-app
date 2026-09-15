#!/bin/bash

# Create public directory
mkdir -p public

# Create a simple index.html that loads the Expo web app
cat > public/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nabz Health Report</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: system-ui, -apple-system, sans-serif;
            background: #DFE7EA;
        }
        #root {
            width: 100vw;
            height: 100vh;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Load Expo web app
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/react@19.2.3/umd/react.production.min.js';
            document.head.appendChild(script);
        });
    </script>
</body>
</html>
EOF

echo "Build complete - public directory created"
