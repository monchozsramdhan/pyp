window.pypResourceService = Object.freeze({
  listTables(data) {
    return window.pypLegacyStorage.previewResources(data);
  },

  findTable(data, id) {
    return this.listTables(data).find(resource => resource.legacyId === Number(id));
  }
});
