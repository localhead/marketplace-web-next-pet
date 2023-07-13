import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import setDefaultOptions from "date-fns/setDefaultOptions";

export type DateFormat =
  | "DD MMMM YYYY - HH:MM"
  | "HH:MM"
  | "DD.MM.YYYY"
  | "DD month YYYY"
  | "DD month";

setDefaultOptions({
  locale: ruLocale,
});

export const formatDate = (
  date: string | number | Date,
  dateFormat: DateFormat
) => {
  try {
    const dateObj = new Date(date);
    switch (dateFormat) {
      case "DD MMMM YYYY - HH:MM": {
        return format(dateObj, "d MMMM yyyy - HH:mm");
      }
      case "DD.MM.YYYY": {
        return format(dateObj, "d.M.u");
      }
      case "HH:MM": {
        return format(dateObj, "HH:mm");
      }
      case "DD month YYYY": {
        return format(dateObj, "d MMMM yyyy");
      }
      case "DD month": {
        return format(dateObj, "d MMMM");
      }
    }
  } catch (e) {
    return "invalid date";
  }
};
