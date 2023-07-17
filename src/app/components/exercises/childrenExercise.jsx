import React from "react";
import PropTypes from "prop-types";

import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <ComponentList>
                <Component />
                <Component />
                <Component />
            </ComponentList>
        </CollapseWrapper>
    );
};

const ComponentList = ({ children }) => {
    return React.Children.map(children, (child) => {
        if (child.type === Component) {
            console.log(children.indexOf(child));
            const count = children.indexOf(child) + 1;
            return (
                <div className="d-flex">
                    {count}.{child}
                </div>
            );
        }
        return null;
    });
};

ComponentList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
