describe('Testing Angularjs', function () {
    beforeEach(module('myApp','ngAnimate','dndLists'));
    var scope = {};
    var ctrl;
    describe('test angular homeCtrl',function () {
        beforeEach( inject(function ($controller) {
            ctrl = $controller('homeCtrl', {$scope:scope});
        }));
        it('should add new image in array of images',function () {
            expect(ctrl).toBeDefined();
            expect(scope.addImage).toBeDefined();
            expect(scope.img).toBeDefined();
            expect(scope.newImage).toBeDefined();
            expect(images).toBeDefined();
            expect(scope.modal).toBeDefined();
            expect(images.length).toBe(6);
            scope.newImage = {
                description: 'mount',
                url: 'link'
            };
            scope.addImage();
            expect(images.length).toBe(7);
            expect(images[images.length-1].description).toBe('mount');
            expect(images[images.length-1].url).toBe('link');
            scope.newImage = {
                description: '',
                url: ''
            };
            scope.addImage();
            expect(images.length).not.toBe(8);
        })
    });
    describe('test angular gellaryCtrl',function () {
        beforeEach( inject(function ($controller) {
            ctrl = $controller('gellaryCtrl', {$scope:scope});
        }));
        it('show and hide corner',function () {
            expect(ctrl).toBeDefined();
            expect(scope.imageList).toBeDefined();
            expect(scope.imageList.length).toBe(7);
            expect(scope.movedItem).toBeDefined();
            expect(scope.moveItemEnd).toBeDefined();
            expect(scope.moveItemStart).toBeDefined();
            expect(scope.movedItem).toBe(false);

            scope.moveItemStart();
            expect(scope.movedItem).toBe(true);
            scope.moveItemEnd();
            expect(scope.movedItem).toBe(false);

        })
    })
    describe('test angular GellaryServie',function () {
        var factory = null;
        beforeEach(inject(function(GellaryServie) {
            factory = GellaryServie;
        }));
        it('add images, and get images',function () {
            expect(factory).toBeDefined();
            expect(factory.addImage).toBeDefined();
            expect(factory.getImages).toBeDefined();
            expect(factory.getImages().length).toBe(7);
            var newImage = {
                description: 'newImage',
                url: 'newLink'
            };
            factory.addImage(newImage);
            expect(factory.getImages().length).toBe(8);
            expect(factory.getImages()[factory.getImages().length-1].description).toBe('newImage');
            expect(factory.getImages()[factory.getImages().length-1].url).toBe('newLink');
        })
    })
});