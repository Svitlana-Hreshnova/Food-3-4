import iconClose from '../images/icons.svg';

const openModalButtons = document.querySelectorAll('.js-open-modal');
openModalButtons.forEach(button => {
    button.addEventListener('click', createModal);
});

function createModal() {
    const modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('mdl-backdrop');
    document.body.appendChild(modalBackdrop);
    modalBackdrop.addEventListener('click', closeModal);
    
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('mdl-window');
    modalBackdrop.appendChild(modalWindow);

    const modalCloseButton = document.createElement('button');
    modalCloseButton.classList.add('mdl-close-btn');
    modalCloseButton.type = "button";
    modalCloseButton.innerHTML = `
    <svg class="icon-close" width="11" height="11">
        <use href="${iconClose}#icon-close"></use>
    </svg>
    `;
    modalWindow.appendChild(modalCloseButton);
    modalCloseButton.addEventListener('click', closeModal);

    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('mdl-title');
    modalTitle.textContent = "Order Form";
    modalWindow.appendChild(modalTitle);

    const modalForm = document.createElement('form');
    modalForm.classList.add('mdl-form');
    modalForm.name = "order_form";
    modalForm.autocomplete = "on";
    modalWindow.appendChild(modalForm);

    const modalWrap_1 = document.createElement('div');
    modalWrap_1.classList.add('modal-wrap');
    modalForm.appendChild(modalWrap_1);

    const modalLabelName = document.createElement('label');
    modalLabelName.classList.add('mdl-label');
    modalLabelName.for = "user_name";
    modalLabelName.textContent = "Name"
    modalWrap_1.appendChild(modalLabelName);

    const modalInputName = document.createElement('input');
    modalInputName.classList.add('mdl-input');
    modalInputName.name = "user_name";
    modalInputName.id = "user_name";
    modalInputName.type = "text"
    modalInputName.placeholder = "Your name";
    modalWrap_1.appendChild(modalInputName);

    const modalWrap_2 = document.createElement('div');
    modalWrap_2.classList.add('modal-wrap');
    modalForm.appendChild(modalWrap_2);

    const modalLabelPhone = document.createElement('label');
    modalLabelPhone.classList.add('mdl-label');
    modalLabelPhone.for = "user_phone";
    modalLabelPhone.textContent = "Phone number"
    modalWrap_2.appendChild(modalLabelPhone);

    const modalInputPhone = document.createElement('input');
    modalInputPhone.classList.add('mdl-input');
    modalInputPhone.name = "user_phone";
    modalInputPhone.id = "user_phone";
    modalInputPhone.type = "tel";
    modalInputPhone.placeholder = "+38(0_ _) _ _ _   _ _   _ _";
    modalWrap_2.appendChild(modalInputPhone);

    const modalWrap_3 = document.createElement('div');
    modalWrap_3.classList.add('modal-wrap');
    modalForm.appendChild(modalWrap_3);

    const modalLabelEmail = document.createElement('label');
    modalLabelEmail.classList.add('mdl-label');
    modalLabelEmail.for = "user_email";
    modalLabelEmail.textContent = "E-mail"
    modalWrap_3.appendChild(modalLabelEmail);

    const modalInputEmail = document.createElement('input');
    modalInputEmail.classList.add('mdl-input');
    modalInputEmail.name = "user_email";
    modalInputEmail.id = "user_email";
    modalInputEmail.type = "email";
    modalInputEmail.placeholder = "example@gmail.com";
    modalWrap_3.appendChild(modalInputEmail);

    const modalFormButton = document.createElement('button');
    modalFormButton.classList.add('mdl-form-btn')
    modalFormButton.type = "submit";
    modalFormButton.textContent = "Send"
    modalForm.appendChild(modalFormButton);
    modalFormButton.addEventListener('click', submitRegistration);

    document.body.style.overflow = "hidden";

    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    function handleClickOutside(e) {
        e.stopPropagation();
    }

    modalWindow.addEventListener('click', handleClickOutside);

    function closeModal() {
        modalBackdrop.removeEventListener('click', closeModal)
        modalCloseButton.removeEventListener('click', closeModal);
        modalWindow.removeEventListener('click', handleClickOutside);
        window.removeEventListener('keydown', e => {
            if (e.key === "Escape") {
                closeModal();
            }
        });
        modalBackdrop.remove();
        document.body.style.overflow = "initial";
    }

    function submitRegistration(e) {
        e.preventDefault();

        const name = document.getElementById('user_name').value;
        const phone = document.getElementById('user_phone').value;
        const email = document.getElementById('user_email').value;

        fetch('/submitRegistration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, phone, email }),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Добавьте здесь обработку успешной отправки данных
  })
  .catch(error => {
    console.error('Error:', error);
    // Добавьте здесь обработку ошибок
  });
    }

};