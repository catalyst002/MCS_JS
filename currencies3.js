export const getDropdown = (currencies) => {
	return `<option value="">Выберите валюту</option>
  ${currencies.map(x => `<option value="">${x}</option>`)}`
}
