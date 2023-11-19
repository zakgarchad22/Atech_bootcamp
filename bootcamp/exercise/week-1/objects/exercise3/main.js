const reservations = {
  bob: { claimed: false },
  ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation');

if(reservations.hasOwnProperty(name.toLowerCase()) && (!reservations[name.toLowerCase()].claimed))
{

  console.log("Welcome, %s",name)
}
else if(reservations.hasOwnProperty(name.toLowerCase()) && (reservations[name.toLowerCase()].claimed) )
{

  console.log("Hmm, someone already claimed this reservation")
}
else
{
  console.log("You have no reservation")
  reservations[name.toLowerCase()] = { claimed: true };

}


