var Tablainfo = document.getElementById('lista_Completa')

axios.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
	const data = response.data
	if (data) { 
		Tablainfo.innerHTML += `   
			<tr>
				    <th><b>Nombre:</b></th>
				    <th><b>Username:</b></th>
				    <th><b>Email:</b></th>
					<th><b>Phone:</b></th><br>
					<th><b>Website:</b></th><br>
				</tr>`
		data.forEach(function(item) {
				Tablainfo.innerHTML += `
				<tr>
					<td>${item.name} </td>
					<td>${item.username}</td>
					<td>${item.email}</td>
					<td>${item.phone}</td><br>
					<td>${item.website}</td> <br>
				</tr> 
				`            
				/* En caso de querer ver mas informacion para mostrar  , tire este console.log lo puse solo en caso de emergencia y comprobación             
				console.log(item)      
				*/                                		
			 })                                                          
	}
	
})
