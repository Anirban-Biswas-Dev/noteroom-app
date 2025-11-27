export type TSVGIconComponent = React.FC<React.SVGAttributes<SVGElement>>;

export type TFloatingDropDownItem = {
    label: string,
    icon: React.ReactElement<SVGElement>,
} | "divider"
