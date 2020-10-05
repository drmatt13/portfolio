const array = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'comment': `create user & encrypt password`},
{'js': `const bcrypt = require("bcrypt");`},
{'comment': `if !user`},
{'comment': `create salt`},
{'js': `bcrypt.genSalt(10, (error, salt) => {`},
{'comment': `   hash the password with the salt,`},
{'comment': `   the salt also becomes the leading variable`},
{'comment': `   --> <salt><hashstring>`},
{'js': `    bcrypt.hash(password, salt, (error, hash) => {`},
{'comment': `       update password w/ hashed password`},
{'js': `        req.body.password = hash;`},
{'comment': `       create user {`},
{'comment': `       }`},
{'js': `        const token = jwt.sign({payload: user_id}, 'secret');`},
{'comment': `       render('/route', {token});`},
{'js': `    });
});`},
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [],
        // output
        [],
        //render
        {'render': true}
    ],
    
]