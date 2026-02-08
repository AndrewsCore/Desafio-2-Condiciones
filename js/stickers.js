        function verificarStickers() {
            // Obtenemos los valores, usamos || 0 por si el input está vacío
            const s1 = Number(document.querySelector('#sticker1').value) || 0;
            const s2 = Number(document.querySelector('#sticker2').value) || 0;
            const s3 = Number(document.querySelector('#sticker3').value) || 0;

            // sumamos los valores el tot
            const total = s1 + s2 + s3;
            const parrafo = document.querySelector('#resultado-stickers');

            if (total <= 10) {
                parrafo.innerHTML = "Llevas " + total + " stickers";
                parrafo.style.color = "green";
            } else {
                parrafo.innerHTML = "Llevas demasiados stickers";
                parrafo.style.color = "red";
            }
        }
