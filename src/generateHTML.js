

function generateEngineerCard(engineer) {
   return `
                   <div class="col">
                     <div class="card">
                       <div class="card-body">
                           <h5 class="card-title">${engineer.name}</h5>
                           <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
                           <p class="card-text">ID: ${engineer.id}</p>
                           <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a>
                           <a href="https://github.com/${engineer.github}" class="card-link">${engineer.github}</a>                    
                       </div>
                     </div>
                   </div>
   
           `

}

function generateInternCard(intern) {
   return `
                   <div class="col">
                     <div class="card">
                       <div class="card-body">
                           <h5 class="card-title">${intern.name}</h5>
                           <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
                           <p class="card-text">ID: ${intern.id}</p>
                           <p class="card-text">School: ${intern.school}</p>
                           <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>                   
                       </div>
                     </div>
                   </div>
   
           `
}

function generateManager(manager) {
    return `
                   <div class="col">
                     <div class="card">
                       <div class="card-body">
                           <h5 class="card-title"> ${manager.name} </h5>
                           <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
                           <p class="card-text">ID: ${manager.id}</p>
                           <p class="card-text">Office Phone: ${manager.officeNumber}</p>
                           <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>                   
                       </div>
                     </div>
                   </div>
   
                 `
}

function generateHTML(data) {
   const teamcardsArray = [];
   for (var i=0; i < data.length; i++ ) {
      const employee = data[i];
      const role = employee.getRole();
      if (role === 'Manager') {
         const managerCard = generateManager(employee);
         teamcardsArray.push(managerCard);
      }
      if (role === 'Intern') {
         const internCard = generateInternCard(employee);
         teamcardsArray.push(internCard);
      }
      if (role === 'Engineer') {
         const engineerCard = generateEngineerCard(employee);
         teamcardsArray.push(engineerCard);
      }
   }
   return `<!DOCTYPE html>
   <html>
       <head>
           <meta charset="utf-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <title>Team Profile</title>
           <meta name="viewport" content="width=device-width, initial-scale=1">
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
       </head>
       <body>
       <div class="container mt-5">
         <div class="row row-cols-1 row-cols-md-2 g-4">
           ${teamcardsArray.join(' ')}    
           </div>
           </div>      
       </body>
   </html>`
}
module.exports = generateHTML