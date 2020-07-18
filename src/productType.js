import React from "react";
import "./index";
import propTypes from "prop-types";

export default function ProductType({ x }) {
    return (
        <div>
            {x.map((elm) => (
                <div key={Math.random()}>
                    <hr className="clhr" />
                    <div className="clpro">
                        <p className="clp">{elm.category}</p>
                        <p className="clp">{elm.price}</p>
                        <p className="clp">{elm.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

// proptypes of element 
ProductType.propTypes = {
    x: propTypes.arrayOf(
        propTypes.shape({
            name: propTypes.string,
            price: propTypes.number,
            category: propTypes.oneOf(["Electronics", "Clothes"]),
        })
    ),
};