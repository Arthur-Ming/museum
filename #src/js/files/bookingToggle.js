class BookingToggle {
    ticketButton = document.getElementById('tickets-button');
    booking = document.querySelector('.booking');
    bookingClose = document.querySelector('.booking__close');

    onTicketButtonClick = () => {
        this.booking.classList.add('booking__show')
     }

    onBookingClose = () => {
        this.booking.classList.remove('booking__show')
    }

    onClickOutside =  (event) => {
    
        const target = event.target.closest('.booking__box');
     
        if (!target) {
     
           if (this.booking.classList.contains('booking__show')) {
              this.booking.classList.remove('booking__show')
           }
        }
     }

    constructor(){
        this.initEventListeners();
     }
  
     initEventListeners() {
        this.ticketButton.addEventListener('click', this.onTicketButtonClick)
        this.bookingClose.addEventListener('click', this.onBookingClose)
        document.addEventListener('click', this.onClickOutside, true)
     }
}

const bookingToggle = new BookingToggle;
