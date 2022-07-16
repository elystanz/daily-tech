const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Blog.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
        'id',
        'title',
        'content',
        'user_id',
        'created',
        'comment_text'
    ],
    include: [
      {
        model: Comment,
        attributes: [
            'id',
            'comment_text',
            'post_id',
            'user_id',
        ],
        include: {
          model: User,
          attributes: [
              'username'
            ]
        }
      },
      {
        model: User,
        attributes: [
            'username'
        ]
      }
    ]
  })
    .then(dbBlogData => {
      const blogs = dbBlogData.map(blog => blog.get({ plain: true }));
      res.render('dashboard', { blogs, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Blog.findByPk(req.params.id, {
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: [
            'id', 
            'comment_text', 
            'post_id', 
            'user_id', 
            'created_at'],
        include: {
          model: User,
          attributes: [
              'username'
            ]
        }
      },
      {
        model: User,
        attributes: [
            'username'
        ]
      }
    ]
  })
    .then(dbBlogData => {
      if (dbBlogData) {
        const blog = dbBlogData.get({ plain: true });
        
        res.render('edit-blog', {
          blog,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
