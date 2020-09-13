const mongoose = require('mongoose');
const slugify = require('slugify');

const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more then 50 characters']
    },
    slug: String,
    price: {
        type: Number,
        required: [true, 'Please add a price'],
    },
    // item, onesize, shirt, pants, socks, shoes
    product: {
        type: String,
        required: [true, 'item, onesize, shirt, leggings, shoes'],
        trim: true
    },
    item: Number,
    onesize: Number,
    shirt: {
        s: Number,
        m: Number,
        l: Number,
        xl: Number,
        xxl: Number
    },
    leggings: {
        s: Number,
        m: Number,
        l: Number,
        xl: Number,
        xxl: Number
    },
    // add on update
    // shoes: {
    //     6: Number,
    //     6.5: Number,
    //     7: Number,
    //     7.5: Number,
    //     8: Number,
    //     8.5: Number,
    //     9: Number,
    //     9.5: Number,
    //     10: Number,
    //     10.5: Number,
    //     11: Number,
    //     11.5: Number,
    //     12: Number
    // },
    descriptionSmall: String,
    descriptionLarge: String
});

//slugify
StoreSchema.pre('save', function() {
    this.slug = slugify(this.name, {
        replacement: '-',
        remove: undefined,
        lower: true
    })
});

module.exports = mongoose.model('Item', StoreSchema);