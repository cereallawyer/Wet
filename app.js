
const app = document.getElementById('app');

function showPage(page) {
  if (page === 'calving') {
    app.innerHTML = '<h2>Calving</h2><p>Multi-service entry and gestation tracking.</p>';
  } else if (page === 'weights') {
    app.innerHTML = '<h2>Weights</h2><p>Enter and compare animal weights.</p>';
  } else if (page === 'treatments') {
    app.innerHTML = '<h2>Treatments</h2><p>Track treatments and schedule reminders.</p>';
  } else if (page === 'profiles') {
    app.innerHTML = '<h2>Animal Profiles</h2><p>Sire, Dam, Tag, Notes, Photos.</p>';
  }
}
