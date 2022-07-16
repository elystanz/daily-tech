const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { Blogs, User, Comment } = require('../../models');
// const withAuth = require('../../util/auth');

router.get('/', (req, res) => {
    Blogs.findAll({
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

    .then(dbBlogData => res.json(dbBlogData))
    .catch(err => {
        console.log(err);
        res.status(500).jason(err);
    });
});

router.get('/:id', (req, res) => {
    Blogs.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'context',
        'user_id',
        'comment_text'
      ],
      include: [
        {
          model: Comment,
          attributes: [
              'id', 
              'comment_text', 
              'post_id', 
              'user_id'
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
        if (!dbBlogData) {
          res.status(404).json({ message: 'No post found with this ID' });
          return;
        }
        res.json(dbBlogData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.blog('/', withAuth, (req, res) => {
    Blogs.create({
        title: req.body.title,
        post_url: req.body.post_url,
        user_id: req.session.user_id
      })
        .then(dbBlogData => res.json(dbBlogData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
    Blogs.update(
      {
        title: req.body.title
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbBlogData => {
        if (!dbBlogData) {
          res.status(404).json({ message: 'No post found with this ID' });
          return;
        }
        res.json(dbBlogData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
  
router.delete('/:id', withAuth, (req, res) => {
    Blogs.destroy({
        where: {
        id: req.params.id
        }
    })
        .then(dbBlogData => {
        if (!dbBlogData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbBlogData);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
  
module.exports = router;