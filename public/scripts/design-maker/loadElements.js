export function loadElements(elementOnClick) {

    fetch('api/elements')
        .then(res => res.json())
        .then(files => files.forEach(file => {
            // adds images to menu
            let image = document.createElement('img')
            image.src = 'assets/elements/' + file
            document.getElementById('elements-menu').appendChild(image)

            // add image to canvas onclick
            image.addEventListener('click', (e) => elementOnClick(e.target))
        }))

}

