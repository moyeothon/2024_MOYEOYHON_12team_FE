import * as He from '@/styles/HeaderStyle'
import Logo from '@/assets/LOGO.png'
import Home from '@/assets/Home.png';

const Header = () => {




    return (
        <He.Header>
            <He.HomeBtn>
                <img src={Home} />
                홈
                </He.HomeBtn>
            <He.Logo src={Logo}/>
            <div id='empty'/>
        </He.Header>
    );
}

export default Header;