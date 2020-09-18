import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';


export const TableContentsList = React.memo(function TableContentsList({
    list,
    level
}) {

    const listElt = list.map((item) => {
        let nested = null;
        if (item.list) {
            nested = <TableContentsList list={item.list} level={level + 1} />;
        }

        return (
            <li key={item.id}>
                <Link smooth to={`#${item.id}`}>{item.title}</Link>
                {nested}
            </li>
        );
    });

    return (
        <ul className={`contents-list-lv${level}`}>
            {listElt}
        </ul>
    );
});

TableContentsList.propTypes = {
    list: PropTypes.array.isRequired,
    level: PropTypes.number
};

TableContentsList.defaultProps = {
    level: 1
};
