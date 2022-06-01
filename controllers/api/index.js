const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comments', commentRoutes)

modeule.exports = router;