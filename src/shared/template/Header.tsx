import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return (
        <>
            <h1>User CRUD Application</h1>
            <a>
                {/* <i className='bi bi-person'></i> */}
                <AccountCircleIcon style={{ 'fontSize': 'xxx-large' }} />
            </a>
        </>
    )
}

export default Header