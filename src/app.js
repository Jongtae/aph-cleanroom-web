const form = document.querySelector('#meeting-cost-form');
const errorBox = document.querySelector('#form-error');
const summary = document.querySelector('#result-summary');
const totalCost = document.querySelector('#total-cost');
const costPerMinute = document.querySelector('#cost-per-minute');
const costPerParticipant = document.querySelector('#cost-per-participant');

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

function readNumber(formData, name) {
  const rawValue = String(formData.get(name) ?? '').trim();
  if (rawValue === '') {
    return Number.NaN;
  }

  return Number(rawValue);
}

function validateInputs({ participants, hourlyCost, duration }) {
  const errors = [];

  if (!Number.isInteger(participants) || participants <= 0) {
    errors.push('Enter at least 1 participant.');
  }

  if (!Number.isFinite(hourlyCost) || hourlyCost < 0) {
    errors.push('Enter an average hourly cost of $0 or more.');
  }

  if (!Number.isFinite(duration) || duration <= 0) {
    errors.push('Enter a duration greater than 0 minutes.');
  }

  return errors;
}

function calculateMeetingCost({ participants, hourlyCost, duration }) {
  const total = participants * hourlyCost * (duration / 60);

  return {
    total,
    perMinute: total / duration,
    perParticipant: total / participants
  };
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.hidden = false;
  summary.textContent = 'Correct the highlighted inputs and calculate again.';
}

function clearError() {
  errorBox.textContent = '';
  errorBox.hidden = true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const inputs = {
    participants: readNumber(formData, 'participants'),
    hourlyCost: readNumber(formData, 'hourlyCost'),
    duration: readNumber(formData, 'duration')
  };

  const errors = validateInputs(inputs);
  if (errors.length > 0) {
    showError(errors.join(' '));
    return;
  }

  clearError();

  const result = calculateMeetingCost(inputs);
  totalCost.textContent = currency.format(result.total);
  costPerMinute.textContent = currency.format(result.perMinute);
  costPerParticipant.textContent = currency.format(result.perParticipant);
  summary.textContent = `${inputs.participants} participants for ${inputs.duration} minutes at ${currency.format(inputs.hourlyCost)} per hour.`;
});
