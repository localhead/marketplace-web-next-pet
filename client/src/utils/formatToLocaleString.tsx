export function toPercent(value: number | string, digits: number) {
  return value.toLocaleString("en", {
    maximumFractionDigits: digits,
    style: "percent",
  });
}

export function toCurrency(
  value: number,
  params?: { currency: "RUB" | "USD" | "EUR"; showPennies: boolean }
) {
  const variant = params?.currency === "RUB" ? "ru" : "en";

  return value.toLocaleString(variant, {
    style: "currency",
    currency: params?.currency,
    maximumFractionDigits: params?.showPennies === true ? 2 : 0,
  });
}
