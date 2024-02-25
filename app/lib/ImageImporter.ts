interface ImagePaths {
    [key: string]: {
        imgPath: string;
        description: string;
    };
}
class ImageImporter {
    private readonly images: ImagePaths;

    constructor() {
        this.images = {
            logo: {
                imgPath: 'https://rick-i-morty.com/wp-content/uploads/2019/12/logo-rick-morty.jpg',
                description: 'это логотип'
            },
            github: {
                imgPath: '/github-48-icon.png',
                description: 'это иконка гитхаба'
            }
        };
    }

    getImage(): ImagePaths {
        return this.images;
    }
}

const imageImporter = new ImageImporter();
export default imageImporter;
