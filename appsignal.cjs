
import { Appsignal } from "@appsignal/nodejs";

console.log("🛠️  Running preload...");

new Appsignal({
  active: true,
  name: process.env.APPSIGNAL_APP_NAME,
  environment: "development",
});
