import * as React from 'react';
import * as classNames from 'classnames/bind';

import {Link} from "react-router-dom"
import {IShowcase, IShowcaseView, IShowcaseViewProps} from "../../interfaces";
import {IAppApi} from "../../DynaShowcase";

import {scrollToElement} from '../../utils/scrollTo'

import {faIcon} from "../../utils/faIcon";

export interface IMenuProps {
	showcase: IShowcase;
	viewSlug: string;
	propsSlug: string;
	appApi: IAppApi;
	style: any;
}

export interface IMenuState {
}

export interface IMenuSettings {
	menuCssModule: any
}

export class Menu extends React.Component<IMenuProps, IMenuState> {
	static defaultProps: IMenuProps = {
		showcase: null,
		viewSlug: null,
		propsSlug: null,
		appApi: null,
		style: {},
	};

	public componentDidMount(): void {
		this.scrollToFocused();
	}

	private get style(): any {
		return this.props.style;
	}

	private cx(...args: any[]): string {
		return classNames.bind(this.style)(...args);
	}

	private scrollToFocused(): void {
		window.requestAnimationFrame(() => {
			scrollToElement('.menu-container', '.nav-view-props-selected') ||
			scrollToElement('.menu-container', '.nav-view-selected');
		});
	}

	private renderLogo(): JSX.Element {
		const {
			showcase: showcase,
			appApi: {listOfLinkPaths}
		} = this.props;
		let linkPath: string = listOfLinkPaths[0].link.path;

		return (
			<Link to={linkPath} className={this.style.styleLink}>
				<div className={this.style.logo}>
					{showcase.logo}
				</div>
			</Link>
		);
	}

	private getViewClassName(view: IShowcaseView, selectedViewSlug: string): string {
		if (view.slug === selectedViewSlug)
			return `${this.style.navViewSelected} nav-view-selected`;
		else
			return this.style.navView;
	}

	private getViewPropClassName(view: IShowcaseView, selectedViewSlug: string, viewProp: IShowcaseViewProps, selectedViewProp: string): string {
		if (view.slug === selectedViewSlug && viewProp.slug === selectedViewProp)
			return `${this.style.navViewPropsSelected} nav-view-props-selected`;
		else
			return this.style.navViewProps;
	}

	private renderPropsViewPropsValues(view: IShowcaseView, viewProp: IShowcaseViewProps): JSX.Element {
		const urlQueryPropertyName: string = `spv-${view.slug}-${viewProp.slug}`;
		let showPropsValues: boolean = this.props.appApi.urlQuery[urlQueryPropertyName];

		if (showPropsValues)
			return (
				<div className={this.style.propsValuesExpanded}>
					<div
						className={this.style.hidePropsButton}
						onClick={(event: any) => {
							event.preventDefault();
							this.props.appApi.setUrlQuery({[urlQueryPropertyName]: undefined});
						}}
					>
						{faIcon('eye-slash')} Props
					</div>
					<div className={this.style.propsValues}>
						{JSON.stringify(viewProp.props, null, 2)
							.split('\n')
							.map((line: string, index: number) => <div key={index}><span>{line}</span></div>)
						}
					</div>
				</div>
			);
		else
			return (
				<div className={this.style.propsValuesCollapsed}>
					<div
						className={this.style.showPropsButton}
						onClick={(event: any) => {
							event.preventDefault();
							this.props.appApi.setUrlQuery({[urlQueryPropertyName]: 'yes'});
						}}
					>
						{faIcon('eye')} Props
					</div>
				</div>
			);

	}

	private renderPropsOption(index: number, view: IShowcaseView, viewProp: IShowcaseViewProps): JSX.Element {
		const {viewSlug, propsSlug} = this.props;
		if (viewProp.hide) return null;
		return (
			<Link
				className={this.getViewPropClassName(view, viewSlug, viewProp, propsSlug)}
				to={this.props.appApi.createLinkPath(view.slug, viewProp.slug, {menuScrollTo: undefined})} key={index}
			>
				<div className={this.style.navViewPropsTitle}>{faIcon('sliders', this.style.navIcon)}{viewProp.title}</div>
				<div className={this.style.navViewPropsDescription}>{viewProp.description}</div>
				{this.renderPropsViewPropsValues(view, viewProp)}
			</Link>
		);
	}

	private renderViewOption(index: number, view: IShowcaseView): JSX.Element {
		const {viewSlug} = this.props;
		if (view.hide) return null;
		return (
			<div key={index}>
				<Link
					className={this.getViewClassName(view, viewSlug)}
					to={this.props.appApi.createLinkPath(view.slug, null, {menuScrollTo: undefined})}
				>
					<div
						className={this.style.navViewTitle}>{faIcon(view.faIconName || 'cube', this.style.navIcon)}{view.title}</div>
					<div className={this.style.navViewDescription}>{view.description}</div>
				</Link>
				{(view.props || []).map((viewProp: IShowcaseViewProps, index: number) => this.renderPropsOption(index, view, viewProp))}
			</div>
		);
	}

	private renderBottomMenu(): JSX.Element {
		const {
			appApi: {
				setUrlQuery,
				urlQuery: {showFrame, hideMenu}
			}
		} = this.props;

		return (
			<div className={this.style.bottomContainer}>
				<div
					className={hideMenu ? this.style.bottomButtonSelected : this.style.bottomButtonUnSelected}
					onClick={() => setUrlQuery({hideMenu: hideMenu ? undefined : 'yes'})}
				>{faIcon('chevron-left')}</div>
				<div
					className={showFrame ? this.style.bottomButtonSelected : this.style.bottomButtonUnSelected}
					onClick={() => setUrlQuery({showFrame: showFrame ? undefined : 'yes'})}
				>{faIcon('crop')}</div>
			</div>
		);
	}

	private renderShowMenuButton(): JSX.Element {
		const {
			appApi: {urlQuery: {hideMenu}}
		} = this.props;
		const showButtonClassName: string = this.cx({
			showMenuButton: true,
			hideShowMenuButton: !hideMenu,
		});
		return (
			<div className={showButtonClassName} onClick={this.handlerShowAsideMenu.bind(this)}>
				{faIcon('chevron-right')}
			</div>
		);
	}

	private handlerShowAsideMenu(): void {
		this.props.appApi.setUrlQuery({hideMenu: undefined});
	}

	public render(): JSX.Element {
		const {
			showcase,
		} = this.props;

		if (this.props.appApi.urlQuery.menuScrollTo) this.scrollToFocused();

		return (
			<div className={this.style.menuContainer}>
				{this.renderLogo()}
				<nav className={`menu-container ${this.style.navContainer}`}>
					{showcase.views.map((view: IShowcaseView, index: number) => this.renderViewOption(index, view))}
				</nav>
				{this.renderBottomMenu()}
				{this.renderShowMenuButton()}
			</div>
		);
	}
}
