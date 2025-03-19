// 1. Variables iniciales (ajustadas a tus IDs)
const nombres = [];
const nombreInput = document.getElementById('amigo'); // Cambiado a 'amigo'
const listaAmigos = document.getElementById('listaAmigos'); // Cambiado a 'listaAmigos'
const resultado = document.getElementById('resultado');

// 2. Función para añadir nombres (ahora se llama agregarAmigo por el onclick)
function agregarAmigo() {
    const nombre = nombreInput.value.trim();
    
    if (nombre === '') {
        alert('Ingrese un nombre válido');
        return;
    }
    
    nombres.push(nombre);
    actualizarLista();
    nombreInput.value = '';
}

// 3. Actualizar la lista visualmente
function actualizarLista() {
    listaAmigos.innerHTML = ''; // Usamos tu listaAmigos
    
    nombres.forEach((nombre, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${nombre}`;
        listaAmigos.appendChild(li);
    });
}

// 4. Función para sortear (ajustada para tu estructura)
function sortearAmigo() {
    resultado.innerHTML = ''; // Limpiamos el <ul> de resultados
    
    if (nombres.length === 0) {
        const liError = document.createElement('li');
        liError.textContent = 'No hay nombres para sortear';
        resultado.appendChild(liError);
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSecreto = nombres[indiceAleatorio];
    
    const liResultado = document.createElement('li');
    liResultado.innerHTML = `<strong>El amigo secreto sorteado es:</strong> ${amigoSecreto}`;
    resultado.appendChild(liResultado);
}

// 5. Soporte para tecla Enter (mantenemos este listener)
nombreInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});