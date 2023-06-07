import { RadioGroupProps } from '@radix-ui/react-radio-group';
import { FC } from 'react';
type Direction = 'col' | 'row';
type Props = RadioGroupProps & {
    direction?: Direction;
    options: {
        value: string;
        label: string;
        disabled?: boolean;
        id?: string | number;
    }[];
};
declare const Radio: FC<Props>;
export default Radio;
