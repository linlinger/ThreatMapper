/// <reference types="react" />
import * as SwitchPrimitive from '@radix-ui/react-switch';
type SizeType = 'sm' | 'md';
export type SwitchProps = SwitchPrimitive.SwitchProps & {
    label?: string;
    size?: SizeType;
};
declare const Switch: (props: SwitchProps) => JSX.Element;
export default Switch;
