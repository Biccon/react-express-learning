import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userno: { type: Number, required: true, unique: true },
    userid: { type: String, required: true },
    userpw: { type: String, required: true }
},
    {
        timestamps: true
    });

userSchema.static.create = (payload) => {
    const user = new this(payload);

    return user.save();
}


userSchema.static.login = (userid, userpw) => {
    return this.findOne({ userid, userpw })
}

userSchema.static.changePassword = (userid, userpw, newpw) => {
    return this.findOneAndUpdate({ userid, userpw }, payload, { userpw: newpw });
}


userSchema.static.deleteUser = (userid, userpw) => {
    return this.remove({ userid, userpw })
}


export default mongoose.model('user', userSchema);