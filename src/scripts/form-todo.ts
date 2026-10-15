/**
 * TODO(forms): PLACEHOLDER — form submissions are NOT connected yet.
 *
 * Every <form data-form-todo> on the site is handled here. Pressing the submit
 * button runs the browser's normal validation (required fields, valid email),
 * then shows a "not connected" message. Nothing is sent anywhere.
 *
 * When the client decides where submissions should go (email, a CRM, a
 * spreadsheet…), replace the body of `handleSubmit` with a real `fetch()` call
 * to that destination, and remove the placeholder message. Each form's fields
 * all have `name` attributes, so `new FormData(form)` already contains the data.
 */
function handleSubmit(event: SubmitEvent) {
  event.preventDefault(); // stops the page from posting data to a URL

  const form = event.currentTarget as HTMLFormElement;
  const status = form.querySelector<HTMLElement>('[data-form-status]');

  // TODO(forms): send `new FormData(form)` to the real destination here.

  if (status) {
    status.textContent =
      'Thanks! This is a preview: the form is not connected yet, so nothing was sent.';
    status.hidden = false;
  }
}

document.querySelectorAll<HTMLFormElement>('form[data-form-todo]').forEach((form) => {
  form.addEventListener('submit', handleSubmit);
});
