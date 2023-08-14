import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { Container } from './style';
import classnames from 'classnames';

interface CheckboxProps {
	label: string;
	name?: string;
	checked?: boolean;
	onClick?: (ch: boolean) => void;
	onChange?: () => void;
}

const Checkbox = (props: CheckboxProps) => {
	const {
		label,
		name,
		checked = false,
		onClick,
		onChange = () => {
			return;
		}
	} = props;
	const [ch, setChecked] = useState<boolean>(checked);

	const tootle = () => {
		setChecked(!ch);
		if (onClick) {
			onClick(!ch);
		}
	};

	return (
		<Container onClick={tootle}>
			<input type="checkbox" name={name} checked={ch} onChange={onChange} />
			<div className={classnames('check', { checked: ch })}>{ch && <AiOutlineCheck />}</div>
			<div className="label">{label}</div>
		</Container>
	);
};

export default Checkbox;
