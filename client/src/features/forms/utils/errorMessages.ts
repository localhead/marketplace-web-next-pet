const requiredErrorMessage = (label: string) => `Заполните поле ${label}`;

const wrongEmailFormatErrorMessage = () => 'Неверный формат email';

export const errorMessages = {
  requiredErrorMessage,
  wrongEmailFormatErrorMessage,
};
