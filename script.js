
const API_KEY = '58555aaa73754fa1b6555132250610'

const temperatureField = document.querySelector('.temp p');
const locationField = document.querySelector('.location-name');
const dateField = document.querySelector('.localtime');
const conditionField = document.querySelector('.condition-text');
const loadingIndicator = document.querySelector('.loading');
const errorMessage = document.querySelector('.error-message');
const searchField = document.querySelector('.search-area');
const form = document.querySelector('form');

form.addEventListener('submit', searchForFunction)


const fetchResults = async (location = 'Mumbai') => {
    try {
        
        if (loadingIndicator) loadingIndicator.style.display = 'block'
        if (errorMessage) errorMessage.textContent = ''
        const encoded = encodeURIComponent(location || 'Mumbai')
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encoded}&aqi=no`
        const response = await fetch(url)
        if (!response.ok) throw new Error(`API error: ${response.status} ${response.statusText}`)
        const data = await response.json()
        console.log('weather data', data)
        const locationName = data.location?.name || 'Unknown'
        const time = data.location?.localtime || ''
        const temp = data.current?.temp_c ?? ''
        const condition = data.current?.condition?.text || ''

        updateDetails(temp, locationName, condition, time)
        if (loadingIndicator) loadingIndicator.style.display = 'none'
    } catch (err) {
        console.error(err)
        
        locationField.innerText = 'Error'
        dateField.innerText = ''
        temperatureField.innerText = '--'
        conditionField.innerText = 'Could not fetch data'
        if (loadingIndicator) loadingIndicator.style.display = 'none'
        if (errorMessage) errorMessage.textContent = err.message || 'Could not fetch data'
    }
}

function updateDetails(temp, locationName, condition, time) {
    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateField.innerText = time
    conditionField.innerText = condition
}

function searchForFunction(e) {
    e.preventDefault()
    const target = (searchField.value || '').trim()
    if (!target) return
    fetchResults(target)
}


fetchResults('Mumbai')