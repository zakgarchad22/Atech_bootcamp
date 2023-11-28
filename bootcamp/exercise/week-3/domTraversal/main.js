
let data = {
  cmp_id: []
}

$('.computer').on('click', '.generator', function() {
  let pc = $(this).closest('.computer')
  let processorID = pc.find('.processor').attr('id')
  let computerDataId = pc.data('id')
  let busNumber = pc.find('.BUS').text()

  //Push 
  data.cmp_id.push(computerDataId)

  console.log('Processor ID:', processorID)
  console.log('Computer’s data-id:', computerDataId)
  console.log('BUS:', busNumber)
});

$('.computer').on('click', '.validator', function() 
{

  let pc = $(this).closest('.computer')
  let generatorText = pc.find('.generator').text()
  let mb = pc.find('.MB').text()

  let qr1 = pc.find('.QR').eq(0).text() 
  let qr2 = pc.find('.QR').eq(1).text() 

  console.log('The generator’s text:', generatorText)
  console.log('The MB:', mb)
  console.log(`1. ${qr1}  2. ${qr2}`)
});

