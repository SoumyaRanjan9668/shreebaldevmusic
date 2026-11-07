import { BUSINESS_CONFIG } from "@/config/business";

/**
 * Generates a WhatsApp click-to-chat URL with a pre-filled, URL-encoded message.
 * @param serviceName Optional specific service name to enquire about.
 * @param customDetails Optional extra details (e.g. date, location).
 */
export function getWhatsAppUrl(serviceName?: string, customDetails?: string): string {
  let message: string;

  if (serviceName) {
    message = `Hello Shree Baldev Musical, I would like to enquire about booking your "${serviceName}" services for an upcoming event.`;
  } else {
    message =
      "Hello Shree Baldev Musical, I would like to enquire about booking your Band Baja and Box Music services for an upcoming event.";
  }

  if (customDetails && customDetails.trim().length > 0) {
    message += `\n\nEvent Details: ${customDetails.trim()}`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${encodedMessage}`;
}

export function getPhoneUrl(): string {
  return BUSINESS_CONFIG.phoneUrl;
}

export function getMapsUrl(): string {
  return BUSINESS_CONFIG.mapsUrl;
}
