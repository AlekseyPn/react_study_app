const dictionary:any = {
  en: {
    incorrect_login_or_password: "Incorrect user name or password",
  },
  ru: {
    incorrect_login_or_password: "Имя пользователя или пароль введены не верно",
  }
}

const currentLocale: string = "ru";

export const getMessage = (key: string): string => dictionary[currentLocale][key];