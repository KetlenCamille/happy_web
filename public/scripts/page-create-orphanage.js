//Create map
const map = L.map('mapid').setView([-25.4504826,-49.3069206], 15);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68]
})

let marker;

//Create and add marker
map.on('click', (event) => {
    const lat  = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //Remove icon
    marker && map.removeLayer(marker)

    //Add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

//Add photo field
function addPhotoField(){
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    newFieldContainer.children[0].value = ""
    container.appendChild(newFieldContainer)
}

//Delete photo field
function deletefield(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove()
}

//Select yes or no button
function toggleSelect(event){
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}
