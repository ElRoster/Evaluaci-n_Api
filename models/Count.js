import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence'

const AutoIncrement = AutoIncrementFactory(mongoose);

const CountSchema = new mongoose.Schema({
    
    NumberCount:{
        type :Number,
        unique:true

    },

    ClientDocument:{
        type:Number,
        unique:true
    },

    ApDate:{
        type:Date,
        default: Date.now
    },

    Balance:{
        type:Number,
    },

    AccessPasssword:{
        type:String,
        maxlength:[4,"the password must be a maximum 4 Numbers"]
    }
});

CountSchema.plugin(AutoIncrement,{ inc_field: 'NumberCount'});

const Count = mongoose.model('Count', CountSchema, 'Count')

export default Count;
