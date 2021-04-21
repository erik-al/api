fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(data => printQuestions(data.results))


function printQuestions(questions) {
    let container = document.getElementById('questions-container');
    questions.forEach((question) => {
        container.innerHTML += `<div class="col-4 mt-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    ${question.question}
                                </div>
                            </div>
                        </div>`
    });
}

  
//   www.academlo.users/users -> get -> ontener todos los usuarios
//   www.academlo.users/users -> post -> crear un usuario nuevo
//   www.academlo.users/users/:id -> patch -> actualizar los datos de un usuario
//   www.academlo.users/users/:id -> delete -> eliminar un usuario

