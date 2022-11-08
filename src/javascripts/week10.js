import 'bootstrap'

let guests = []

export function addGuest(e){
  e.preventDefault()
  
  let guest = {
    f_name: document.getElementById('fname').value,
    l_name: document.querySelector('#lname').value
  }

  if(guest.f_name.trim() && guest.l_name.trim()){
    let table_body = document.querySelector('tbody')
    table_body.innerHTML += `<tr>
      <td>${guest.f_name}</td>
      <td>${guest.l_name}</td>
    </tr>`
  }

}


document.querySelector("form").onsubmit = addGuest