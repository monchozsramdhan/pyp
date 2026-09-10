window.pypLegacyStorage = Object.freeze({
  key: 'pypcoffee-reservation-v1',

  read() {
    const raw = localStorage.getItem(this.key);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.tables) || !Array.isArray(parsed.reservations)) {
      throw new Error('Invalid pypcoffee legacy storage format');
    }
    return parsed;
  },

  previewResources(data) {
    return (data?.tables || []).map(window.pypResourceModel.fromTable);
  },

  previewReservations(data) {
    return (data?.reservations || []).map(window.pypResourceModel.fromReservation);
  }
});
