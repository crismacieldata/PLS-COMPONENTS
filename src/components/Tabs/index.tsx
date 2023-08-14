import { useEffect, useState } from 'react';
import { Container } from './style';

interface TabsProps {
	children: any;
}

const Tabs = ({ children }: TabsProps) => {
	const [tabActivated, setTabActivated] = useState<number>(0);
	const [tabs, setTabs] = useState<any>([]);

	useEffect(() => {
		const listTabs = getListTabs(children);
		if (listTabs?.length > 0) {
			setTabs(listTabs);
		} else {
			setTabs([...tabs, listTabs]);
		}
	}, []);

	const getListTabs = (children: any) => {
		if (Array.isArray(children)) {
			return children.reduce((prev: any, cur: any) => {
				if (cur && cur.props.children) {
					prev.push(cur);
				}

				return prev;
			}, []);
		}

		return children;
	};

	const getContentActivated = (key: number) => {
		return key === tabActivated ? 'active' : '';
	};

	const onSelectTab = (key: number) => {
		setTabActivated(key);
	};

	const showTabs = (): boolean => {
		return tabs.length > 1;
	};

	const renderTabs = () => {
		return tabs.map((tab: any, key: number) => {
			if (!tab || tabs.length === 1) return;
			return (
				<div key={key} className={`tab ${getContentActivated(key)}`} onClick={() => onSelectTab(key)}>
					{tab.props.label}
				</div>
			);
		});
	};

	const renderTabsContent = () => {
		return tabs.map((tab: any, key: number) => {
			if (key !== tabActivated) return;

			return (
				<div key={key} className="tab-content">
					{tab}
				</div>
			);
		});
	};

	return (
		<Container>
			{showTabs() && <div className="tabs">{renderTabs()}</div>}
			<div className="tabs-content">{renderTabsContent()}</div>
		</Container>
	);
};

interface TabProps {
	children?: any;
	label: string;
}

const Tab = (props: TabProps) => {
	return props.children;
};
Tabs.Tab = Tab;

export default Tabs;
