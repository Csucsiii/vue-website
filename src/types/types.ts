export interface NavItemProps {
	label: string,
	href?: string,
	onClick?: () => void
}

export interface TitleProps {
	label: string
}

export interface ScriptCardProps {
	description: string
}

export interface StreamerProfile {
	channel: string,
	name: string,
	icon: string,
	description: string
}

export interface Social {
	href: string,
	label: string,
	ariaLabel: string,
	icon: string
}