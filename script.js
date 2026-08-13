const tabs = document.querySelectorAll('.booking-tabs button');
const toast = document.querySelector('#toast');
let type = 'Flight';
tabs.forEach(tab => tab.addEventListener('click', () => { tabs.forEach(t => t.classList.remove('active')); tab.classList.add('active'); type = tab.dataset.type; }));
function show(message) { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3800); }
document.querySelector('#travel-form').addEventListener('submit', event => { event.preventDefault(); show(`${type} search received — our team will help find your best option.`); });
document.querySelector('#contact-form').addEventListener('submit', event => { event.preventDefault(); window.open('https://docs.google.com/forms/d/1dHbZVexGMHZ4yTL_ODylAizgquuPLLtx8s-e-fU_Ppw/viewform', '_blank', 'noopener'); });
