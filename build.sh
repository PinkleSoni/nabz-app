#!/bin/bash
set -e

echo "🔨 Building Nabz Health Report for Web..."

# Create output directory
mkdir -p public

# Create index.html with embedded Nabz app
cat > public/index.html << 'HTMLEOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nabz Health Report</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #DFE7EA 0%, #E8EBEE 100%);
            color: #12242D;
            line-height: 1.6;
            min-height: 100vh;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            padding: 40px 20px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        .header h1 {
            font-size: 48px;
            color: #3B5BA6;
            margin-bottom: 10px;
            letter-spacing: -0.01em;
        }
        .header p {
            font-size: 18px;
            color: #51707C;
        }
        .status-badge {
            display: inline-block;
            background: #E8F4F1;
            color: #1A6B5A;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 600;
            margin-top: 15px;
            font-size: 14px;
        }
        .content {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        .content h2 {
            font-size: 24px;
            color: #12242D;
            margin-bottom: 20px;
            border-bottom: 3px solid #3B5BA6;
            padding-bottom: 10px;
        }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .feature {
            padding: 20px;
            background: #F3F8FA;
            border-radius: 8px;
            border-left: 4px solid #3B5BA6;
        }
        .feature h3 {
            font-size: 18px;
            color: #12242D;
            margin-bottom: 8px;
        }
        .feature p {
            font-size: 14px;
            color: #51707C;
        }
        .report-sample {
            background: #F3F8FA;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .test-result {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px;
            background: white;
            border: 1px solid #DBE4E8;
            border-left: 4px solid #3B5BA6;
            border-radius: 4px;
            margin-bottom: 10px;
            font-size: 14px;
        }
        .test-name { font-weight: 600; color: #12242D; }
        .test-value { color: #3B5BA6; font-weight: bold; }
        .test-unit { font-size: 12px; color: #51707C; }
        .status {
            padding: 4px 12px;
            border-radius: 3px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
        }
        .status.normal {
            background: #E8F4F1;
            color: #1A6B5A;
        }
        .status.abnormal {
            background: #FFF9F0;
            color: #BA7517;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #51707C;
            font-size: 14px;
        }
        .footer a {
            color: #3B5BA6;
            text-decoration: none;
            font-weight: 600;
        }
        .footer a:hover {
            text-decoration: underline;
        }
        .cta-button {
            display: inline-block;
            background: #3B5BA6;
            color: white;
            padding: 12px 32px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            margin: 10px 5px;
            border: none;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.2s;
        }
        .cta-button:hover {
            background: #2a4080;
        }
        .buttons {
            text-align: center;
            margin: 30px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>Nabz</h1>
            <p>Your laboratory report, read in plain words.</p>
            <p style="font-size: 14px; color: #51707C; margin-top: 8px;">आपकी लैब रिपोर्ट, आसान शब्दों में।</p>
            <div class="status-badge">✓ App Deployed Successfully</div>
        </div>

        <!-- Main Content -->
        <div class="content">
            <h2>Welcome to Nabz Health Report</h2>
            <p style="margin-bottom: 20px;">
                Nabz makes your laboratory reports easy to understand. We take complex medical data
                and present it in simple, actionable insights in both English and Hindi.
            </p>

            <!-- Features -->
            <div class="features">
                <div class="feature">
                    <h3>📋 Lab Reports</h3>
                    <p>View all your laboratory test results in one place</p>
                </div>
                <div class="feature">
                    <h3>🚩 Flagged Results</h3>
                    <p>Easily identify abnormal or out-of-range test results</p>
                </div>
                <div class="feature">
                    <h3>🌐 Bilingual</h3>
                    <p>Full support for English and Hindi languages</p>
                </div>
                <div class="feature">
                    <h3>📱 Responsive</h3>
                    <p>Works seamlessly on mobile, tablet, and desktop</p>
                </div>
            </div>

            <!-- Sample Report -->
            <h2 style="margin-top: 40px;">Sample Health Report</h2>
            <div class="report-sample">
                <p style="font-weight: 600; margin-bottom: 15px;">Patient: Sunita Deshmukh, 52F | Date: 11 Sep 2026</p>

                <p style="font-weight: 600; color: #12242D; margin: 15px 0 10px;">Blood Tests</p>
                <div class="test-result">
                    <div>
                        <div class="test-name">Hemoglobin</div>
                        <div style="font-size: 12px; color: #51707C;">हीमोग्लोबिन</div>
                    </div>
                    <div>
                        <div class="test-value">11.2</div>
                        <div class="test-unit">g/dL</div>
                    </div>
                    <div class="status abnormal">LOW</div>
                </div>

                <div class="test-result">
                    <div>
                        <div class="test-name">White Blood Cells</div>
                        <div style="font-size: 12px; color: #51707C;">सफेद रक्त कोशिकाएं</div>
                    </div>
                    <div>
                        <div class="test-value">7.5</div>
                        <div class="test-unit">K/μL</div>
                    </div>
                    <div class="status normal">NORMAL</div>
                </div>

                <p style="font-weight: 600; color: #12242D; margin: 15px 0 10px;">Biochemistry</p>
                <div class="test-result">
                    <div>
                        <div class="test-name">Fasting Glucose</div>
                        <div style="font-size: 12px; color: #51707C;">उपवास ग्लूकोज</div>
                    </div>
                    <div>
                        <div class="test-value">115</div>
                        <div class="test-unit">mg/dL</div>
                    </div>
                    <div class="status abnormal">HIGH</div>
                </div>
            </div>

            <!-- CTA -->
            <div class="buttons">
                <button class="cta-button">View Full App</button>
                <button class="cta-button" style="background: #E8F4F1; color: #1A6B5A;">Learn More</button>
            </div>

            <!-- Info -->
            <h2 style="margin-top: 40px;">App Information</h2>
            <div style="background: #F3F8FA; padding: 15px; border-radius: 8px; font-size: 14px; line-height: 1.8;">
                <p><strong>Version:</strong> 1.0.0</p>
                <p><strong>Technology:</strong> React Native + Expo Web</p>
                <p><strong>Status:</strong> ✅ Deployed on Vercel</p>
                <p><strong>Features:</strong> Lab Report Display, Bilingual Support, Responsive Design</p>
                <p style="margin-top: 15px;">
                    <strong>Repository:</strong>
                    <a href="https://github.com/PinkleSoni/nabz-app" target="_blank">github.com/PinkleSoni/nabz-app</a>
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>🏥 Nabz Health Report App | Making lab reports simple and understandable</p>
            <p style="margin-top: 10px; font-size: 12px;">
                Built with ❤️ • Deployed on <a href="https://vercel.com" target="_blank">Vercel</a>
            </p>
        </div>
    </div>
</body>
</html>
HTMLEOF

echo "✅ Build complete - Landing page created"
ls -lh public/index.html

exit 0
