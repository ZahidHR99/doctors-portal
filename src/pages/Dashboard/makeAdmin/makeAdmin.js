import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
        console.log(email);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
                setFail(false);
            }else{
                setFail(true);
                setSuccess(false);
            }
            
        })

        e.preventDefault();
    }

    return (
        <div>
            <h2>Make an Admin</h2>

            {
                success && <Alert severity="success" style={{ margin: '10px' }}>Admin Added Success</Alert>
            }
            {
                fail && <Alert severity="error" style={{ margin: '10px' }}>Admin Added Fail</Alert>
            }

            <form onSubmit={handleAdminSubmit}>
                <TextField
                 type="email"
                 key="email"
                 label="Email"
                 onBlur={handleOnBlur}
                 variant="standard"
                 style={{ width: '50%'}}
                />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;