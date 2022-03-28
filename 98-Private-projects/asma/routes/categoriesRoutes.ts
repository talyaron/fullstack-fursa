import Category from "../model/schema/categoriesModel";

const express = require('express');
const router = express.Router();



async function getCategories(): Promise<any> {
    try {
        const categories = await Category.find({});
        return categories;
    } catch (err: any) {
        console.error(err)
        return false;
    }
}

router.get('/get-categories', async (req, res) => {
    try {
        const categories = await getCategories();
        res.send({ ok: true, categories: categories });
    } catch (error) {
        res.send({ ok: false, categories: [] });
    }
})

router.post('/delete-category', async (req, res) => {
    try {
        const categoryId = req.body;
        if (!categoryId) throw new Error("No category in request");
        const filter = categoryId
        console.log(filter);
        let doc = await Category.deleteOne(filter);
        console.log('category deleted !!');
        res.send({ message: 'Deleted' });
    } catch (error) {
        res.send({ error });
    }
});

module.exports = router;