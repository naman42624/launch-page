# Holidays By Bells - Launch Page

This is a Next.js project for the launch page of **Holidays By Bells** - a travel and flight booking portal.

## Features

- 🎯 **Clean Launch Page**: Welcome message with prominent deploy button
- ✈️ **Flight Animations**: Airplane flying animation on button click
- ☁️ **Cloud Animations**: Floating clouds background effect
- 🌍 **Travel Theme**: Travel-themed icons and animations
- 📱 **Responsive Design**: Mobile-friendly layout
- 🚀 **Deploy Function**: Redirects to holidaysbybells.com after animation

## Technologies Used

- Next.js 15.3.5 with App Router
- React 19 with TypeScript
- Tailwind CSS for styling
- Custom CSS animations for travel effects

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/page.tsx` - Main launch page component
- `src/app/globals.css` - Global styles and animations
- `src/app/layout.tsx` - App layout and metadata

## Deploy Button Functionality

When the "Deploy" button is clicked:
1. Shows airplane flying animation
2. Displays loading state with spinner
3. After 3 seconds, redirects to holidaysbybells.com

## Animations

- **Clouds**: Continuously floating across the screen
- **Airplane**: Flies across screen when deploy button is clicked
- **Travel Icons**: Bounce and spin animations
- **Button**: Hover effects and loading states

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
