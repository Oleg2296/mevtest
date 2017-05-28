app.factory('GellaryServie',function () {
    function addImage(img) {
        img.id=images[images.length-1].id+1;
        var obj = Object.assign({},img);
        images.push(obj);
    }
    function getImages() {
        return images;
    }
    return {
        addImage: addImage,
        getImages:getImages
    }
});
