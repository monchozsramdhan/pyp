window.pypCustomerBookingState = (() => {
  let step = 'service';
  const steps = ['service', 'space', 'schedule', 'details', 'confirm'];
  function setStep(nextStep) {
    if (!steps.includes(nextStep)) return;
    step = nextStep;
    document.querySelectorAll('.booking-step').forEach((element, index) => {
      element.classList.toggle('active', steps.indexOf(step) >= index);
    });
    const label = document.querySelector('.booking-mobile-step');
    if (label) label.textContent = `Step ${steps.indexOf(step) + 1} of ${steps.length} · ${step[0].toUpperCase()}${step.slice(1)}`;
  }
  function readSchedule() {
    return { date: document.querySelector('#f-date')?.value || '', start: document.querySelector('#f-start')?.value || '', end: document.querySelector('#f-end')?.value || '', guests: document.querySelector('#f-guests')?.value || '' };
  }
  function renderReview() {
    const review = document.querySelector('#booking-review');
    if (!review) return;
    const schedule = readSchedule();
    const table = document.querySelector('#f-table');
    const tableLabel = table?.selectedOptions[0]?.textContent || 'Not selected';
    review.innerHTML = `<span>Booking review</span><strong>${tableLabel}</strong><small>${schedule.date || 'Date'} · ${schedule.start || '--:--'} – ${schedule.end || '--:--'} · ${schedule.guests || '-'} guests</small>`;
  }
  function showConfirmation(reservation) {
    const banner = document.querySelector('#booking-confirmation');
    if (!banner) return;
    const detail = banner.querySelector('[data-confirmation-detail]');
    if (detail) detail.textContent = `${reservation.id} · Table ${reservation.tableNo} · ${reservation.date} · ${reservation.start}–${reservation.end}`;
    banner.hidden = false;
    banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  return Object.freeze({ setStep, renderReview, showConfirmation });
})();
