//Only start playing with this file if you're done with all the basics

const must = (radio) => radio.filter(rb => rb.checked).length

const findRelevantApts = function (address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking) {
    
    return apartments.filter(a =>
        a.address.toLowerCase().includes(address.toLowerCase()) &&
        a.price >= minPrice &&
        a.price <= maxPrice &&
        a.rooms >= minRooms &&
        a.rooms <= maxRooms &&
        a.immediate === immediate &&
        a.parking === parking


    )
}
