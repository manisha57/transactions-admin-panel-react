import { DatePicker } from "antd";

interface AppDateTimeProps {
    onChange?: any;
    value?: any;
    [otherProps: string]: any;
}

const { RangePicker } = DatePicker;

const AppDateTime: React.FC<AppDateTimeProps> = ({ onChange, value, ...otherProps }) => {

    return (
        <RangePicker onChange={onChange} value={value} format={'YYYY/MM/DD'} allowClear {...otherProps} />
    )
}

export default AppDateTime
