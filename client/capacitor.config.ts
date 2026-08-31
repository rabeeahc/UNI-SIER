import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  // Reverse-domain style unique ID for your app.
  // This is what identifies your app in the Play Store / App Store.
  // Change "com.campusbridge.app" only if you plan to publish under a
  // different domain/name later — changing it after publishing is painful,
  // so it's worth picking something you're happy with now.
  appId: "com.campusbridge.app",

  // Display name shown under the app icon on the phone's home screen.
  appName: "Campus Bridge",

  // Where Capacitor should look for your built website files.
  // This must match Vite's build output folder (the default is "dist").
  webDir: "dist",

  server: {
    // Allows the app to work smoothly with React Router during development.
    // androidScheme "https" makes Capacitor serve your app from a local
    // https://localhost origin inside the WebView, which avoids the
    // file:// path issues that break client-side routing.
    androidScheme: "https",
  },
};

export default config;
