


document.getElementById("btnSubmit").addEventListener("click", function() {

  let name = document.getElementById('inputName').value;
  let salary = document.getElementById('inputSalary').value;
  let birthday = document.getElementById('inputBirthday').value;
  let phone = document.getElementById('inputPhone').value;
  let error = '';
  if (name.length < 3) {
      error += 'Name must be longer than 2 characters<br>';
  }
  if (!(salary > 10000 && salary < 16000)) {
      error += 'Salary must be greater than 10,000 but less than 16,000<br>';
  }
  if (!birthday) {
      error += 'Birthday may not be null<br>';
  }
  if (phone.length !== 10) {
      error += 'Phone must be 10 digits long<br>';
  }
  document.getElementById('error').innerHTML = error;

  if (error === '') {
    document.querySelector('.container').style.display = 'none';
    alert('Welcome, ' + name + '!');
}
});

