window.pypResourceCard = Object.freeze({
  decorate(element, resource, status) {
    element.classList.add('resource-card');
    element.dataset.resourceId = resource.id;
    element.dataset.resourceCode = resource.code;
    element.setAttribute(
      'aria-label',
      `${resource.name}, ${resource.capacity} seats, ${status}`
    );
    return element;
  }
});
