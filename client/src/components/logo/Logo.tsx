import {ContainerLogo} from './logo.styles';
import { default as logo} from '../../assets/img/logo-homepage.png'

export const Logo = () => {
	return (
		<ContainerLogo>
			<img src={logo} alt="logo" />
		</ContainerLogo>
	);
};
