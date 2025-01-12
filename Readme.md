RANDOM IMAGE GENERATOR
     fetch('https://picsum.photos/id/230/200/300?random=1').then(response=> response.blob()).then(images=>{
        let imageobject=URL.createObjectURL(images);
        let image = document.createElement('img');
        image.src=imageobject;
        document.getElementById('home').appendChild(image)
    });

    https://api.api-ninjas.com/v1/randomimage?category=
    https://random.imagecdn.app/500/150
    https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json
    https://picsum.photos/id/230/200/300?random=1

