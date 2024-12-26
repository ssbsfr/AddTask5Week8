import './index.css';

// Выполняем действия после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = document.querySelector('.cookie-consent');
    const consentButton = document.querySelector('.cookie-consent__button');
    const COOKIE_CONSENT_KEY = 'cookieConsentAccepted';

    // Проверяем, было ли ранее сохранено согласие в LocalStorage
    const isConsentAccepted = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (isConsentAccepted) {
        // Если согласие уже было дано, скрываем сообщение
        cookieConsent.classList.add('hide');
    }

    // Добавляем обработчик события для кнопки
    consentButton.addEventListener('click', () => {
        // Сохраняем в LocalStorage, что пользователь принял сообщение
        localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
        // Скрываем сообщение
        cookieConsent.classList.add('hide');
    });
});
