import LogoPlsImg from './pls.png';

interface LogoPlsProps {
	height?: number;
}

const LogoPls = ({ height = 65 }: LogoPlsProps) => {
	return <img style={{ height: `${height}px` }} src={LogoPlsImg} alt="Paradigm Language Support" />;
};

export default LogoPls;
