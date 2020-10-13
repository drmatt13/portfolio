const array = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'comment': `post -> '/register'`},
{'comment': `if !user`},
{'comment': `create user & encrypt password`},
{'js': `const bcrypt = require("bcrypt");`},
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
        [
{'comment': `post -> '/login'`},
{'comment': `get user {}`},
{'comment': `compare client password with encrypted password`},
{'js': `bcrypt.compare(req.password, user.password, (error, same) => {
if (same) {`},
{'comment': `    create a jsonwebtoken containing the user_id & expiration`},
{'comment': `    the payload is hashed w/ the secret variable`},
{'js': `    const token = jwt.sign({payload: user_id}, secret);`},
{'comment': `    render home, {token}`},
{'js': `    } else {`},
{'comment': `    password incorrect`},
{'js': `    }
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
        [
{'comment': `get -> '/'`},
{'comment': `if !token render login page,`},
{'comment': `if token render home page,`},
{'js': `jwt.verify(req.cookies.token, secret, (error, verifiedJwt) => {
    if(!error){`},
{'comment': `        verifiedJwt`},
{'js': `    }else{`},
{'comment': `        error`},
{'js': `    }
});`}
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