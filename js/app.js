// Выпадающее меню "Мои данные"
const toggle = document.getElementById('user-toggle');
const dropdown = document.getElementById('dropdown');

if (toggle && dropdown) {
  toggle.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
}

// Работа с аватаром
const avatarToggle = document.getElementById('avatar-toggle');
const avatarOptions = document.getElementById('avatar-options');
const selectedAvatar = document.getElementById('selected-avatar');
const topbarAvatar = document.querySelector('.avatar');

if (avatarToggle && avatarOptions && selectedAvatar && topbarAvatar) {
  avatarToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    avatarOptions.classList.remove('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!avatarOptions.contains(e.target) && !avatarToggle.contains(e.target)) {
      avatarOptions.classList.add('hidden');
    }
  });

  window.changeAvatar = function (imgElement) {
    const newSrc = imgElement.src;
    selectedAvatar.src = newSrc;
    topbarAvatar.src = newSrc;
    localStorage.setItem('selectedAvatar', newSrc);
    avatarOptions.classList.add('hidden');
  };
}

// Сохранение и редактирование имени и фамилии
window.enableEdit = function (fieldId) {
  const input = document.getElementById(fieldId);
  if (input) {
    input.disabled = false;
    input.focus();
    const saveBtn = document.querySelector('.save-btn');
    if (saveBtn) saveBtn.classList.remove('hidden');
  }
};

window.saveName = function () {
  const firstName = document.getElementById('firstName')?.value || '';
  const lastName = document.getElementById('lastName')?.value || '';

  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);

  const firstInput = document.getElementById('firstName');
  const lastInput = document.getElementById('lastName');
  if (firstInput) firstInput.disabled = true;
  if (lastInput) lastInput.disabled = true;

  const saveBtn = document.querySelector('.save-btn');
  if (saveBtn) saveBtn.classList.add('hidden');

  const topbarFirst = document.querySelector('.firstname');
  const topbarLast = document.querySelector('.lastname');
  if (topbarFirst) topbarFirst.textContent = firstName;
  if (topbarLast) topbarLast.textContent = lastName;
};

// При загрузке страницы — установка сохранённых значений
window.addEventListener('DOMContentLoaded', () => {
  const savedAvatar = localStorage.getItem('selectedAvatar');
  const savedFirst = localStorage.getItem('firstName');
  const savedLast = localStorage.getItem('lastName');

  const topbarAvatar = document.querySelector('.avatar');
  const selectedAvatar = document.getElementById('selected-avatar');
  if (savedAvatar && topbarAvatar) topbarAvatar.src = savedAvatar;
  if (savedAvatar && selectedAvatar) selectedAvatar.src = savedAvatar;

  const firstInput = document.getElementById('firstName');
  const lastInput = document.getElementById('lastName');
  if (savedFirst && firstInput) firstInput.value = savedFirst;
  if (savedLast && lastInput) lastInput.value = savedLast;

  const topbarFirst = document.querySelector('.firstname');
  const topbarLast = document.querySelector('.lastname');
  if (savedFirst && topbarFirst) topbarFirst.textContent = savedFirst;
  if (savedLast && topbarLast) topbarLast.textContent = savedLast;
});

// Показ уведомления под колокольчиком
window.showTopbarNotification = function () {
  const popup = document.getElementById('notification-popup');
  if (!popup) return;

  popup.classList.remove('hidden');
  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => popup.classList.add('hidden'), 300);
  }, 2500);
};
