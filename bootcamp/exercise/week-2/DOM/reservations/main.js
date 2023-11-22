const reservations = {
  bob: { claimed: false },
  ted: { claimed: true }
}
document.getElementById("checkButton").addEventListener("click", function() {
const nameInput = document.getElementById("nameInput");
const name = nameInput.value.toLowerCase();
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
});

