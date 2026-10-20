# ReVibe — Pre-Loved Products Marketplace

A responsive Next.js marketplace frontend for discovering and listing pre-loved finds. The included listings are sample content for a demo and are not real offers. There is no authentication, messaging service, payment processing, or backend.

## Run locally

Requires Node.js 18.18 or later.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). You can also use `npm install` and `npm run dev` if you prefer npm.

## Build for production

```bash
pnpm build
```

The project uses the Next.js App Router, TypeScript, and Tailwind CSS. The build now creates a static website in `out/`; deploy that folder to a static host, or use the Capacitor steps below.

## Android with Capacitor

Use Node.js 22 or later, Android Studio 2025.2.1 or later, and an Android SDK. Android Studio includes the supported JDK. Install an Android SDK platform and SDK tools from Android Studio's SDK Manager before running or building the native app.

The native project is configured with app ID `com.revibe.marketplace` and app name `ReVibe`.

```bash
pnpm install
pnpm run cap:sync
pnpm run android:open
```

`cap:sync` rebuilds the static Next.js site and copies `out/` into the Android project. Run it after web changes. In Android Studio, wait for Gradle sync, select an emulator or connected device, then press **Run**. This repository does not include a generated APK or AAB.

For npm, the equivalent commands are `npm install`, `npm run cap:sync`, and `npm run android:open`.

## Capacitor demo limitations

- Favourites, cart, profile details, and sample listings use this WebView's local storage. They stay on this device and are not shared across devices or users; clearing app data removes them.
- There is no authentication, real order history, checkout, payment processing, seller messaging, or image-match service. These need a backend before they can represent a real marketplace.
- Product photos selected in the browser stay local to the device. The sample catalog photos and Google Fonts are loaded from the internet and therefore need network access.
- The camera action uses the WebView/browser file picker with an image capture hint. Native Camera plugin permissions and native upload flows have not been added.

## Demo interactions

- Search the sample inventory and filter by category, condition, and maximum price.
- Open product details, save items locally, and inspect the seller information shown for the sample product.
- Add a sample listing with an optional photo. Listings are kept in this browser's local storage.
- “Ask about this find” and seller contact are intentionally presented as demo notices; no messaging, account, or payment service is connected.
