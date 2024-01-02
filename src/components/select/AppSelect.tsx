import Select from "antd/es/select";
import { SelectWrapper } from "./SelectStyle";

interface AppSelectProps {
    options: any;
    value?: any;
    onChange?: any;
    label: string;

}

const AppSelect: React.FC<AppSelectProps> = ({ options, onChange, label }) => {

    return (
        <SelectWrapper>
            <label className="select-label">{label}</label>
            <Select
                defaultValue="all"
                bordered={false}
                options={options}
                onChange={onChange}
                key={options.value}
            />
        </SelectWrapper>
    );
}


export default AppSelect;