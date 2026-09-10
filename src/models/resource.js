window.pypResourceModel = Object.freeze({
  fromTable(table) {
    return {
      id: `table-${table.id}`,
      legacyId: table.id,
      resourceType: window.pypResourceTypes.TABLE,
      code: `TABLE-${table.no}`,
      name: `Table ${table.no}`,
      capacity: table.capacity,
      location: table.location,
      status: table.status,
      active: true
    };
  },

  fromReservation(reservation) {
    return {
      id: reservation.id,
      legacyId: reservation.id,
      resourceType: window.pypResourceTypes.TABLE,
      resourceId: `table-${reservation.tableId}`,
      customerId: reservation.phone,
      start: `${reservation.date}T${reservation.start}`,
      end: `${reservation.date}T${reservation.end}`,
      status: reservation.status,
      guests: reservation.guests,
      notes: reservation.notes || ''
    };
  }
});
