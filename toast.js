// Toast function
function toast({
    title = '', 
    message = '', 
    type = 'info', 
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');
        //Auto remove toast
        const autoRemoveID = setTimeout(function() {
            main.removeChild(toast)
        }, duration + 1000);

        //Remove toast manually
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveID);
            }
        }
        const icons = {
            success : 'fas fa-check-circle',
            info : 'fas fa-info-circle',
            warning : 'fas fa-exclamation-circle',
        };
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .5s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icons[type]}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>
        `;
        main.appendChild(toast);                    
    }
}

function showSuccessToast() {
    toast({
    title : 'Success',
    message : 'Anyone with access can view your invitedvisitors.',
    type : 'success',
    duration : 6000
});
}
function showInfoToast() {
    toast({
    title : 'Info',
    message : 'Anyone with access can view your invitedvisitors.',
    type : 'info',
    duration : 3000
})
}
function showWarningToast() {
    toast({
    title : 'Warning',
    message : 'Anyone with access can view your invitedvisitors.',
    type : 'warning',
    duration : 3000
})
}