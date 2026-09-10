window.pypCoworkingConfig = Object.freeze({
  resources: Object.freeze([
    {
      id: 'coworking-01',
      resourceType: 'COWORKING',
      code: 'CW-01',
      name: 'Coworking Space 01',
      capacity: null,
      location: 'Coworking area',
      status: 'AVAILABLE',
      active: true
    }
  ]),
  packages: Object.freeze([
    { id: 'coworking-daily', name: 'Daily Pass', price: 100000, billing: 'per day', duration: '1 day', packageType: 'PASS' },
    { id: 'coworking-3-hours', name: '3 Hours Pass', price: 60000, billing: '3 hours', duration: '3 hours', packageType: 'PASS' },
    { id: 'coworking-annual', name: 'Annual Pass', price: 300000, billing: '4 days coworking in year', duration: '4 coworking days / year', packageType: 'PASS', entitlementValue: 4 },
    { id: 'resident-monthly', name: 'Resident Membership', price: 1100000, billing: 'per month', duration: '1 month', packageType: 'MEMBERSHIP' }
  ]),
  formatPrice(value) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
  }
});
