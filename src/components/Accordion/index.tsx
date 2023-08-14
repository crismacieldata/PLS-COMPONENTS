import { createContext, useContext, useEffect, useState } from 'react';
import { Container } from './style';
import classnames from 'classnames';
import { IoIosArrowForward } from 'react-icons/io';

interface AccordionContextType {
	hasContent: boolean;
	setHasContent: (open: boolean) => void;
	open: boolean;
	setOpen: (open: boolean) => void;
	openFixed: boolean;
	closedFixed: boolean;
	bgContentColorRed: boolean;
	bgContentColorGreen: boolean;
	theme?: 'primary';
}

const AccordionContext = createContext<AccordionContextType>({
	open: false,
	hasContent: false,
	openFixed: false,
	closedFixed: false,
	bgContentColorRed: false,
	bgContentColorGreen: false,
	setOpen: () => {
		return;
	},
	setHasContent: () => {
		return;
	}
});

interface AccordionProps {
	children: any;
	openFixed?: boolean;
	opened?: boolean;
	closedFixed?: boolean;
	bgContentColorRed?: boolean;
	bgContentColorGreen?: boolean;
}

const Accordion = (props: AccordionProps) => {
	const {
		children,
		bgContentColorGreen = false,
		bgContentColorRed = false,
		openFixed = false,
		closedFixed = false,
		opened = false
	} = props;
	const [open, setOpen] = useState<boolean>(opened);
	const [hasContent, setHasContent] = useState(false);

	useEffect(() => {
		if (openFixed) setOpen(true);
	}, [openFixed]);

	return (
		<AccordionContext.Provider
			value={{
				openFixed,
				bgContentColorRed,
				bgContentColorGreen,
				closedFixed,
				open,
				hasContent,
				setOpen,
				setHasContent
			}}>
			<Container>{children}</Container>
		</AccordionContext.Provider>
	);
};

interface HeaderProps {
	children: any;
	class?: string;
}

const Header = ({ children, class: className = '' }: HeaderProps) => {
	const { open, hasContent, openFixed, closedFixed, setOpen } = useContext(AccordionContext);

	const onToggle = () => {
		if (!openFixed && !closedFixed && hasContent) setOpen(!open);
	};

	return (
		<div
			className={classnames('header', className, { open, openFixed, closedFixed, 'no-cursor': !hasContent })}
			onClick={onToggle}>
			<div className={classnames('arrow', { disabled: !hasContent, opened: open })}>
				{!openFixed && <IoIosArrowForward />}
			</div>
			<div className={'content-header'}>{children}</div>
		</div>
	);
};
Accordion.Header = Header;

interface ContentProps {
	children: any;
}

const Content = ({ children }: ContentProps) => {
	const { open, bgContentColorRed, bgContentColorGreen, setHasContent } = useContext(AccordionContext);

	useEffect(() => {
		setHasContent(true);
	}, [setHasContent]);

	if (!open) return <></>;
	return <div className={classnames('content', { open, bgContentColorRed, bgContentColorGreen })}>{children}</div>;
};
Accordion.Content = Content;

export default Accordion;
