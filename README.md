# Додаток "Керування замовленнями" на React.js - ТЗ

## **Опис проекту**

Цей проєкт реалізує додаток для управління замовленнями. Менеджер може створювати замовлення, переглядати їх у списку, дивитися завантаження днів по датам, а також змінювати статус або видаляти замовлення.

---

## **Функціонал**

### Основні можливості:

1. **Створення замовлення:**

   - Форма для створення замовлення.

2. **Перегляд замовлень:**

   - Інтерактивний календар із підсвіченими датами, які мають замовлення по навантаженню.
   - Таблиця із замовленнями за обраною датою.

3. **Управління замовленнями:**
   - Кнопки взаємодії з замовленням.

---

## **Технології**

- **React** для створення компонентів.
- **CSS** для стилізації інтерфейсу та анімацій.
- Використання **React-хуків** для управління станом та логікою.

---

## **Інструкція з використання**

### 1. **Використання таймера**

- Заповніть поля у формі зліва.
- Натисніть кнопку "Додати замовлення".
- Замовлення буде додано до таблиці, якщо введення валідне.
- Після завершення таймера з'явиться алерт із вашим повідомленням.

### 2. **Перегляд замовлень**

- Оберіть дату у календарі.
- Замовлення за обраною датою відобразяться у таблиці.
- Замовлення буде додано до таблиці, якщо введення валідне.
- Після завершення таймера з'явиться алерт із вашим повідомленням.

### 3. **Керування замовленнями**

- Натисніть ✅, щоб змінити статус замовлення на "Доставлено".
- Натисніть 🕒, щоб повернути статус до "У процесі".
- Натисніть ❌, щоб видалити замовлення.

---

## **Приклад інтерфейсу**

![Приклад інтерфейсу](image.png)

## **Додаткові деталі**

### **Календар:**

- Підсвічує дати з замовленнями (зелений).
- Поточний день виділений.

### **Зберігання даних:**

- Дані зберігаються в локальному стані додатка (без серверної частини).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
