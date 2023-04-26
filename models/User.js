const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thought');


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address']
        },
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: "Thought",
            },
        ],
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: "User",
            },
          ],
          toJSON: {
            virtuals: true,
          },
          id: false,
        
        // figure out where to create userSchema and connect it to friendCount
    },
);

// Put schema settings below, create a virtual called friendCount that retrieves the length of the user's friends array
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
})

const User = model('User', userSchema);

module.exports = User;