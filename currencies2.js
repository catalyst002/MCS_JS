export const getDropdown = (currencies) => {
	return `<option value="">Выберите валюту</option>
  <option value="${currencies[0]}">${currencies[0]}</option>
  <option value="${currencies[1]}">${currencies[1]}</option>
  <option value="${currencies[2]}">${currencies[2]}</option>
  <option value="${currencies[3]}">${currencies[3]}</option>`
}
