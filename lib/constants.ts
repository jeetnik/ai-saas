export const plansMap = [
  {
    id: "basic",
    name: "Basic",
    description: "Get started with SpeakEasy!",
    price: "1",
    items: ["10 Blog Posts", "10 Transcription"],
    paymentLink: "https://buy.stripe.com/test_aEU9D35X65fH0MMeUW",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1PtLVqBPnsISnc82CW4au1uq"
        : "",
  },
  {
    id: "pro",
    name: "Pro",
    description: "All Blog Posts, let’s go!",
    price: "10",
    items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    paymentLink: "https://buy.stripe.com/test_cN26qRclufUl9jibIL",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1PtLVqBPnsISnc82bspCVu5e"
        : "",
  },
];

export const ORIGIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ai-saas-five-bice.vercel.app/";
