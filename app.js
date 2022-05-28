var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal__header i')
var btnClose = document.querySelector('.modal__footer button')

//Đoạn function này đc chạy khi có sự kiện click//
function toggleModal(){
    modal.classList.toggle('hiden')
};

//Mở Modal
btnOpen.addEventListener('click', toggleModal);

//Đóng Modal
btnClose.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)

//Hover ra ngoài trang vẫn đóng Modal
modal.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) {
        toggleModal()
    }
});

