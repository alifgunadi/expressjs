const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const fs = require('fs');
const path = require('path');

router.get('/', (req, res, next) => {
    const {page, total} = req.query;
    res.json({
        status: 'Success',
        message: 'Hallo Alif Gunadi',
        page,
        total
    });
});


router.get('/product/:id', (req, res) => {
    console.log(req.query);
    res.json({
        id: req.params.id
    });
});
router.post('/product/', upload.single('image'),(req, res) => {
    const {name, price, stock, status} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, 'uploads', image.originalname);
        fs.renameSync(image.path, target)
        // res.json({
        //     name,
        //     price,
        //     stock,
        //     status,
        //     image
        // });

        res.sendFile(target);
    }
});
// router.get('/:category/:tag', (req, res) => {
//     const {category, tag} = req.params
//     res.json({
//         category: category,
//         tag: tag
//     });
// });

// router.get('/uploads',);

module.exports = router;