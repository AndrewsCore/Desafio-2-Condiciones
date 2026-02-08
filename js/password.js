        function verificarPassword() {
            const p1 = document.querySelector('#pass1').value;
            const p2 = document.querySelector('#pass2').value;
            const p3 = document.querySelector('#pass3').value;

            // Concatenamos los valores
            const password = p1 + p2 + p3;
            const parrafo = document.querySelector('#resultado-password');

            if (password === "911") {
                parrafo.innerHTML = "Password 1 correcto";
                parrafo.style.color = "green";
            } else if (password === "714") {
                parrafo.innerHTML = "Password 2 es correcto";
                parrafo.style.color = "green";
            } else {
                parrafo.innerHTML = "Password incorrecto";
                parrafo.style.color = "red";
            }
        }