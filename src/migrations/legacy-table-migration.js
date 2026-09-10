window.pypLegacyMigration = Object.freeze({
  preview(data) {
    return {
      sourceKey: window.pypLegacyStorage.key,
      destructive: false,
      resources: window.pypLegacyStorage.previewResources(data),
      reservations: window.pypLegacyStorage.previewReservations(data)
    };
  }
});
