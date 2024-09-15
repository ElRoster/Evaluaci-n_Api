import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence'

const AutoIncrement = AutoIncrementFactory(mongoose);

const CountSchema = new mongoose.Schema({
    
    NumberCount:{
        type :Number,
        unique:true

    },

    ClientDocument:{
        type:String,
        unique:true
    },

    ApDate:{
        type:Date,
        default: Date.now
    },

    Balance:{
        type:Number,
    },

    AccessPassword:{
        type:String,
    },

    Observation:{
        type:String
    }

});

CountSchema.plugin(AutoIncrement,{ inc_field: 'NumberCount'});

const Count = mongoose.model('Count', CountSchema, 'Counts')

export default Count;
