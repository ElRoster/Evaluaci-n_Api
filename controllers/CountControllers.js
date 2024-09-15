import bcrypt from 'bcryptjs';
import Count from '../models/Count.js'

export const CreateCount = async(req,res) => {
    try{
        const { ClientDocument, Observation, Balance, AccessPassword } = req.body;

        const count = new Count({
            ClientDocument: ClientDocument || null,
            Balance: Balance ||0,
            AccessPassword: await bcrypt.hash(AccessPassword,6),
            Observation: Observation || ''
        })
        await count.save()
        res.status(201).json({msg : 'Count has been created successfully'})
        }
        catch(error){
            res.status(400).json({msg: error.message});
    }
};

export const ListOne = async (req, res) =>{
    try{
        const count = await Count.findOne({NumberCount: req.params.NumberCount})
        if(!NumberCount) res.status(404).send('Count not found');
        res.json(count);
        
    }catch(error){
        res.status(500).send(error)
    }

}


export const ListCount = async (req,res) => {
    try{
        const count = await Count.find()
        res.json(count)
    }
    catch(error){
        res.status(500).json({msg: ' something was wrong with the server'})
    }
};



export const Consing =async (req,res) => {
    const { Balance } = req.body;
    try{
        const count = Count.findOne({NumberCount: req.params.NumberCount})
        if(!count){return res.status(404).send('Account not found.')}; 
        if(Balance < 0) return res.status(400).send('Balance cannot be negative');

        count.Balance += Balance
        await count.save()
        res.status(200).json({msg: 'Consing successfully'})
        
    }
    catch(error){
        res.status(500).send(error);
    }
}

export const WithdrawMoney = async (req,res) =>{
    const { Balance } = req.body;
    try{
        const count = Count.findOne({ NumberCount: req.params.NumberCount });
        if( Balance <= 0) return res.status(404).send('the account has no balance')
        if(!count){
            return res.status(404).send('Account not found.');
        }

        count.Balance -= Balance
        await count.save()
        res.json(count)
    }
    catch(error){
        res.status(500).send(error);
    }
};

export const DeleteCount = async (req,res)=>{
    try{
        const count = await Count.findByIdAndDelete({ NumberCount:req.params.Id})
        if(!count){
            return res.status(404).send('count is not found');
        }
        if(count.Balance === 0){
            await count.delete()
            res.send('The count has been deleted.')
        }
        else res.send('The count must be empty to be deleted.')
        

    }
    catch(error){
        res.status(500).send(error)
    }
}