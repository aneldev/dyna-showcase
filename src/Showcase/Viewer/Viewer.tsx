import * as React from 'react';
import {CSSProperties} from 'react';
import * as classNames from 'classnames/bind';
import {guid} from 'dyna-guid';

import {IAppApi, IViewsAsLinks} from "../../DynaShowcase";
import {faIcon} from "../../utils/faIcon";
import {IShowcase, IShowcaseView, IShowcaseViewProps} from "../../interfaces";

const styles = require('./Viewer.module.less');
const cx = classNames.bind(styles);

export interface ViewerProps {
	showcase: IShowcase;
	viewSlug: string;
	propsSlug: string;
	zoom: number;
	showFrame:boolean;
	allowKeyboardNavigation: boolean;
	appApi: IAppApi;
}

export interface ViewerState {
	customProps: any,
}

export interface IComponentSetup {
	center: boolean;
	component: JSX.Element;
	wrapperClassName?: string;
	wrapperStyle?: CSSProperties;
}

export class Viewer extends React.Component<ViewerProps, ViewerState> {
	constructor(props: ViewerProps) {
		super(props);
		this.state = {
			customProps: {},
		};
		this.handlerOnKeyDown = this.handlerOnKeyDown.bind(this);
	}

	public componentDidMount(): void {
		window.addEventListener('keydown', this.handlerOnKeyDown);
		(window as any).dynaShowcaseSetProps = (customProps: any) => this.setState({customProps});
	}

	public componentWillUnmount(): void {
		window.removeEventListener('keydown', this.handlerOnKeyDown);
		delete (window as any).dynaShowcaseSetProps;
	}

	private handlerOnKeyDown(event: KeyboardEvent): void {
		const {allowKeyboardNavigation} = this.props;
		if (!allowKeyboardNavigation) return;

		if (event.keyCode === 37) this.next(-1);
		if (event.keyCode === 38) this.next(-1);
		if (event.keyCode === 39) this.next(+1);
		if (event.keyCode === 40) this.next(+1);
	}

	private noComponent(): JSX.Element {
		return (
			<div className={styles.noComponent}>
				<div className={styles.icon}>{faIcon('exclamation-triangle')} 404</div>
				<div className={styles.line1}>this component doesn't exist <i>anymore</i></div>
				<div className={styles.line2}>{faIcon('arrow-left')}please select something else from the aside menu</div>
			</div>
		);
	}

	private setupComponent(): IComponentSetup {
		const {showcase, viewSlug, propsSlug} = this.props;
		let center: boolean = false;
		let wrapperClassName: string;
		let wrapperStyle: CSSProperties;

		let component: JSX.Element = null;
		let view: IShowcaseView = showcase.views
			.find((view: IShowcaseView) => view.slug === (viewSlug || showcase.defaultViewSlug));

		if (view && view.component) {
			component = view.component;
			center = !!view.center;
		}
		else {
			return {
				component: this.noComponent(),
				center: true,
			};
		}

		let props: any = {};

		if (view.props) {
			let viewProps: IShowcaseViewProps = view.props.find((viewProp: IShowcaseViewProps) => viewProp.slug == propsSlug);
			if (viewProps) {
				props = viewProps.props || {};
				if (viewProps.redraw) props.key = `_SHOWCASE_${guid(1)}`;
			}
		}
		props = {...props, ...(this.state.customProps || {})};
		component = React.cloneElement(component, props);

		wrapperClassName = view.wrapperClassName || '';
		wrapperStyle = view.wrapperStyle || {};

		return {
			component,
			center,
			wrapperClassName,
			wrapperStyle,
		}
	}

	private get linkIndex(): number {
		const {viewSlug, propsSlug, appApi: {listOfLinkPaths}} = this.props;
		return listOfLinkPaths.findIndex((linkPath: IViewsAsLinks) => {
			return linkPath.viewSlug == viewSlug && (!propsSlug || linkPath.propsSlug == propsSlug );
		});
	}

	private next(direction: number): void {
		const {viewSlug, propsSlug, appApi: {goTo, listOfLinkPaths}} = this.props;
		let index: number = this.linkIndex;
		if (index == -1) return; // bad url, cannot find this component
		index += direction;
		if (index < 0) index = 0;
		if (index > listOfLinkPaths.length - 1) index = listOfLinkPaths.length - 1;
		const newLinkPath: IViewsAsLinks = listOfLinkPaths[index];
		goTo(newLinkPath.viewSlug, newLinkPath.propsSlug, {menuScrollTo: 'yes'});
	}

	private getArrowClassName(direction: number): string {
		const {appApi: {listOfLinkPaths}} = this.props;
		const newIndex: number = this.linkIndex + direction;
		const disabled: boolean = !(newIndex >= 0 && newIndex < listOfLinkPaths.length);

		return cx({
			arrow: true,
			disabled,
		})
	}

	public render(): JSX.Element {
		const {showFrame, zoom} = this.props;
		const componentSetup: IComponentSetup = this.setupComponent();
		const wrapperClassName: string = cx({
			componentWrapper: true,
			showFrame,
			center: componentSetup.center
		});

		return (
			<div className={styles.container}>
				<div className={styles.arrowsContainer}>
					<div className={this.getArrowClassName(-1)} onClick={() => this.next(-1)}>{faIcon('angle-left')}</div>
					<div className={wrapperClassName} style={{zoom: (Number(zoom) || 100) / 100}}>
						<div className={componentSetup.wrapperClassName} style={componentSetup.wrapperStyle}>
							{componentSetup.component}
						</div>
					</div>
					<div className={this.getArrowClassName(+1)} onClick={() => this.next(+1)}>{faIcon('angle-right')}</div>
				</div>
			</div>
		);
	}
}
