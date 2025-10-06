<<<<<<< HEAD
# WeatherApp
=======
Weather App (small front-end demo)

What this does
- Simple front-end that fetches current weather from WeatherAPI and displays location, local time, temperature (°C) and condition.

Quick start
1. Open `index.html` in your browser. The page will fetch weather for the default location (Mumbai).
2. Use the search input to query another city (e.g., "London") and press the Search button.

Change the API key
- In `script.js` replace the API_KEY constant with your own WeatherAPI key:

  const API_KEY = 'YOUR_KEY_HERE'

Security note
- Storing API keys in client-side JS is okay for quick testing but not for production. Consider creating a server-side proxy (Node/Express) that keeps the key secret and forwards requests from the client.

Troubleshooting
- If the app shows an error message, open the browser DevTools Console to see the failing network request and the error message.
- If you run into CORS or mixed-content issues, ensure you visit `index.html` from a proper local server (e.g., `npx http-server` or VS Code Live Server) rather than using the file:// protocol.
>>>>>>> 876dae0 (Intial commit)
