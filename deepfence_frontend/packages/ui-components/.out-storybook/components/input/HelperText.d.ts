import { VariantProps } from 'cva';
import { FC } from 'react';
import { ObjectWithNonNullableValues } from '../../types/utils';
declare const helperTextClasses: (props?: ({
    color?: "default" | "success" | "error" | null | undefined;
} & import("cva/dist/types").ClassProp) | undefined) => string;
interface Props extends ObjectWithNonNullableValues<VariantProps<typeof helperTextClasses>> {
    text: string;
    className?: string;
}
export declare const HelperText: FC<Props>;
export default HelperText;
