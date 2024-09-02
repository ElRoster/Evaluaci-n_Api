import bcrypt from 'bcryptjs';
import Count from '../models/Count.js'

export const CreateCount = async(req,res) => {
    try{
        const count = new Count ({ AccessPassword: req.params.AccessPassword || 'is Ok' })
        count.AccessPassword = await bcrypt.hash(req.body.AccessPassword, 4);
        if(count.AccessPassword <= 0){
            res.status(400).json('Access password cannot be empty')
        }
        await count.save(),
        res.status(201).jason(count)
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
};

export const ListCount =async (req,res) => {
    try{
        const count = await Count.find()
        res.jason(count)
    }
    catch(error){
        res.status(500).send(error)
    }
};



export const Consing =async (req,res) => {
    try{
        const count = await Count.findByIdAndUpdate(req.params.id, {$inc: {Balance: req.body.amount}}, {new: true})
        if(!count){
            return res.status(404).send('Account not found.');
        }
        res.send(count)
    }
    catch(error){
        res.status(500).send(error);
    }
}

export const WithdrawMoney = async (req,res) =>{
    try{
        const withdraw = Balance.findOne({amount:req.params.amount})
    
        const count = await Count.findByIdAndUpdate(req.params.id, {$inc: {Balance: -req.body.amount}}, {new: true})
        if(count.withdraw <= 0) return res.status(404).send('the account has no balance')
        if(!count){
            return res.status(404).send('Account not found.');
        }
        res.jason(withdraw)
        res.send(count)
    }
    catch(error){
        res.status(500).send(error);
    }
};

export const DeleteCount = async (req,res)=>{
    try{
        const count = await Count.findByIdAndDelete(req.params.id)
        if(count.Balance === 0){
            res.send('The count has been deleted.')
            await count.delete()

        if(!count){
            return res.status(404).send('account must be empty to be deleted.');
        }
        }
    }
    catch(error){
        res.status(500).send(error)
    }
}